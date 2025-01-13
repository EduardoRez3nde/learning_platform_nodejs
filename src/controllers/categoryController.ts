import { Request, Response } from "express";
import { CategoryService } from "../services/categoryService.js";
import { getPaginationParam } from "../utils/getPaginationParam.js";


export class CategoryController {

    private categoryService = new CategoryService();

    constructor() {}

    async findById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const category = await this.categoryService.findById(id);
            return res.status(201).json(category);
        }
        catch(err) {
            if (err && err instanceof Error) {
                return res.status(400).json({message: err.message});
            } 
        }
    }

    async findAllPaginated(req: Request, res: Response) {
        const [ page, perPage ] = getPaginationParam(req.query);
        try {
            const categories = await this.categoryService.findAllPaginated(page, perPage);
            return res.json(categories);
        }
        catch(err) {
            if(err && err instanceof Error) {
                return res.status(400).json({ message: err.message});
            }
        }
    }
}