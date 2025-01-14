import { Course } from "../models/initializerModels/initializerModels.js";


export class CourseService {

    constructor() {}

    async findAllPaginated(page: number, perPage: number) {

        const offset = (page - 1) * perPage;

        const { count, rows } = await Course.findAndCountAll({
            attributes: [
                "id", "name", "synopsis", "featured",
                ["thumbnail_url", "thumbnailUrl"]
            ],
            include: {
                association: "category",
                attributes: ["id", "name"]
            },
            limit: perPage,
            offset  
        });
        return {
            courses: rows,
            page,
            perPage,
            total: count
        };
    }
    
    async findById(id: string) {

        const course = await Course.findByPk(id, {
            attributes: [
                "id", "name", "synopsis", "featured",
                ["thumbnail_url", "thumbnailUrl"]
            ],
            include: {
                association: "episodes",
                attributes: [
                    "id", "name", "synopsis",
                    ["video_url", "videoUrl"],
                    ["seconds_long", "secondsLong"],
                ],
                order: [["order", "ASC"]],
                separate: true
            }
        });
        return course;
    }
}