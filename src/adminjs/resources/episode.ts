import { FeatureType, ResourceOptions } from "adminjs";
import { FeatureConfig } from "../features/featuresConfig.js";


export const EpisodeResource: ResourceOptions = {

    navigation: "Catálogo",
    editProperties: ["name", "synopsis", "courseId", "order", "uploadVideo", "secondsLong"],
    filterProperties: ["name", "synopsis", "courseId", "secondsLong", "createdAt", "updatedAt"],
    listProperties: ["id", "name", "courseId", "order", "secondsLong"],
    showProperties: ["id", "name", "courseId", "order", "videoUrl", "secondsLong", "createdAt", "updatedAt"]
};


const config = {
    key: "videoUrl",
    file: "uploadVideo",
    path: "../../../uploads",
    recordId: "courseId"
};

const episodeFeature = new FeatureConfig("../../../uploads", "/uploads");
export const EpisodeFeature: FeatureType[] = episodeFeature.getFeatures(config);
