import { Request, Response } from "express";
import { getPaginationParam } from "../utils/getPaginationParam.js";
import { CourseService } from "../services/courseService.js";


export class CourseController {

    private courseService = new CourseService();

    constructor() {}

    async findAllPaginated(req: Request, res: Response) {

        const [page, perPage] = getPaginationParam(req.query);

        try {
            const courses = await this.courseService.findAllPaginated(page, perPage);
            return res.status(201).json(courses);
        }
        catch(err) {
            if (err && err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }

    async findById(req: Request, res: Response) {

        const { id } = req.params;

        try {
            const course = await this.courseService.findById(id);
            return res.status(200).json(course);
        }
        catch(err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }
}