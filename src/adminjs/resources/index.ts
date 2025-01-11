import { ResourceWithOptions } from "adminjs";
import { Category, Course } from "../../models/initializerModels/initializerModels.js";
import { CategoryResource } from "./category.js";
import { CourseResource } from "./course.js";


export const AdminJsResources: ResourceWithOptions[] = [

    {
        resource: Category,
        options: CategoryResource
    },
    {
        resource: Course,
        options: CourseResource
    }
];