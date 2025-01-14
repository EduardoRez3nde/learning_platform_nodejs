import { Request, Response, Router } from "express";
import { CategoryController } from "../controllers/categoryController.js";
import { CourseController } from "../controllers/courseController.js";


export const router = Router();

const categoryController = new CategoryController();
const courseController = new CourseController();

router.get("/categories/:id", (req: Request, res: Response) => {
    categoryController.findById(req, res);
});
router.get("/categories", (req: Request, res: Response) => {
    categoryController.findAllPaginated(req, res);
});

router.get("/courses", (req: Request, res: Response) => {
    courseController.findAllPaginated(req, res);
});
router.get("/courses/:id", (req: Request, res: Response) => {
    courseController.findById(req, res);
});
