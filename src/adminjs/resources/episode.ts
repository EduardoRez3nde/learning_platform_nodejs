import { ResourceOptions } from "adminjs";


export const EpisodeResource: ResourceOptions = {

    navigation: "Catálogo",
    editProperties: ["name", "synopsis", "courseId", "order", "uploadVideo", "secondsLong"],
    filterProperties: ["name", "synopsis", "courseId", "secondsLong", "createdAt", "updatedAt"],
    listProperties: ["id", "name", "courseId", "order", "secondsLong"],
    showProperties: ["id", "name", "courseId", "order", "videoUrl", "secondsLong", "createdAt", "updatedAt"]
};
