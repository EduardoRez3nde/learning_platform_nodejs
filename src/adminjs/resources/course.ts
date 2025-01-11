import { ResourceOptions } from "adminjs";


export const CourseResource: ResourceOptions = {

    navigation: "Catálogo",
    editProperties: ["name", "synopsis", "uploadThumbnail", "featured", "categoryId"],
    filterProperties: ["name", "category_id", "featured", "createdAt", "updatedAt"],
    listProperties: ["id", "name", "featured", "categoryId"],
    showProperties: ["id", "name", "featured", "synopsis", "thumbnailUrl", "categoryId", "createdAt", "updatedAt"]
};