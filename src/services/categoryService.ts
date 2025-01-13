import { Category } from "../models/initializerModels/initializerModels.js";

export class CategoryService {

    constructor() {}

    async findAllPaginated(page: number, perPage: number) {
        const offset = (page - 1) * perPage;
        const { count, rows } = await Category.findAndCountAll({
            attributes: ["id", "name", "position"],
            order: [["position", "ASC"]],
            limit: perPage,
            offset,
        });
        return {
            categories: rows, 
            page,
            perPage,
            total: count
        };
    };

    async findById(id: string) {
        const category = await Category.findByPk(id, {
            attributes: ["id", "name"],
            include: {
                association: "courses",
                attributes: [
                    "id",
                    "name",
                    "synopsis",
                    ["thumbnail_url", "thumbnailUrl"]
                ]                
            }
        });
        return category;
    }
}
