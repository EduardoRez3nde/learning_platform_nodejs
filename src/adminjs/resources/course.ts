import { FeatureType, ResourceOptions } from "adminjs";
import { FeatureConfig } from "../features/featuresConfig.js";


export const CourseResource: ResourceOptions = {

    navigation: "Catálogo",
    editProperties: ["name", "synopsis", "uploadThumbnail", "featured", "categoryId"],
    filterProperties: ["name", "categoryId", "featured", "createdAt", "updatedAt"],
    listProperties: ["id", "name", "featured", "categoryId"],
    showProperties: ["id", "name", "featured", "synopsis", "thumbnailUrl", "categoryId", "createdAt", "updatedAt"]
};

const config = {
    key: "thumbnailUrl",
    file: "uploadThumbnail",
    path: "thumbnails/course",
    recordId: "id"  // id do course
};

const courseFeature = new FeatureConfig("../../../public", "/public");
export const CourseFeature: FeatureType[] = courseFeature.getFeatures(config);