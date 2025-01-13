import { Request, Response, Router } from "express";
import { CategoryController } from "../controllers/categoryController.js";


export const router = Router();

const categoryController = new CategoryController();

router.get("/categories/:id", (req: Request, res: Response) => {
    categoryController.findById(req, res);
});

router.get("/categories", (req: Request, res: Response) => {
    categoryController.findAllPaginated(req, res);
});