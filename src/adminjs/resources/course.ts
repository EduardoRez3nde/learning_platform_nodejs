import { ResourceOptions } from "adminjs";


export const CourseResource: ResourceOptions = {

    navigation: "Catálogo",
    editProperties: ["name", "synopsis", "uploadThumbnail", "featured", "categoryId"],
    filterProperties: ["name", "categoryId", "featured", "createdAt", "updatedAt"],
    listProperties: ["id", "name", "featured", "categoryId"],
    showProperties: ["id", "name", "featured", "synopsis", "thumbnailUrl", "categoryId", "createdAt", "updatedAt"]
};