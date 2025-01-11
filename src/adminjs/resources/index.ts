import { ResourceWithOptions } from "adminjs";
import { category } from "../../models/initializerModels/initializerModels.js";
import { CategoryResource } from "./category.js";


export const AdminJsResources: ResourceWithOptions[] = [

    {
        resource: category,
        options: CategoryResource
    },
];