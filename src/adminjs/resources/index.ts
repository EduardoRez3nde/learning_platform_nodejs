import { ResourceWithOptions } from "adminjs";
import { Category, Course, Episode } from "../../models/initializerModels/initializerModels.js";
import { CategoryResource } from "./category.js";
import { CourseFeature, CourseResource } from "./course.js";
import { EpisodeFeature, EpisodeResource } from "./episode.js";


export const AdminJsResources: ResourceWithOptions[] = [

    {
        resource: Category,
        options: CategoryResource
    },
    {
        resource: Course,
        options: CourseResource,
        features: CourseFeature
    },
    {
        resource: Episode,
        options: EpisodeResource,
        features: EpisodeFeature
    }
];