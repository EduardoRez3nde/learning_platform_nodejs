import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models/initializerModels/initializerModels.js";
import { CategoryResource } from "./category.js";
import { CourseResource } from "./course.js";
import { EpisodeResource } from "./episode.js";


export const AdminJsResources: ResourceWithOptions[] = [

    {
        resource: Category,
        options: CategoryResource
    },
    {
        resource: Course,
        options: CourseResource
    },
    {
        resource: Episode,
        options: EpisodeResource
    }
];