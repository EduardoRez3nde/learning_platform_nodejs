import uploadFileFeature from "@adminjs/upload";
import { ComponentLoader, FeatureType, ResourceOptions } from "adminjs";
import path from "path";
import { fileURLToPath } from "url";


export const EpisodeResource: ResourceOptions = {

    navigation: "Catálogo",
    editProperties: ["name", "synopsis", "courseId", "order", "uploadVideo", "secondsLong"],
    filterProperties: ["name", "synopsis", "courseId", "secondsLong", "createdAt", "updatedAt"],
    listProperties: ["id", "name", "courseId", "order", "secondsLong"],
    showProperties: ["id", "name", "courseId", "order", "videoUrl", "secondsLong", "createdAt", "updatedAt"]
};


class EpisodeFeatureConfig {

    private uploadDir: string;
    private baseUrl: string;
    private __filename: string;
    private __dirname: string;
    private componentLoader = new ComponentLoader();


    constructor() {
        this.__filename = fileURLToPath(import.meta.url);
        this.__dirname = path.dirname(this.__filename);
        this.uploadDir = path.join(this.__dirname, "../../../uploads");
        this.baseUrl = "/uploads";
    }

    getFeatures(): FeatureType[] {
        return [
            uploadFileFeature({
                provider: {
                  local: {
                    bucket: this.uploadDir,
                    opts: {
                      baseUrl: this.baseUrl,
                      
                    },
                  },
                },
                properties: {
                  key: "videoUrl",
                  file: "uploadVideo",
                },
                uploadPath: (record, filename) =>
                  `videos/courses-${record.get("courseId")}/${filename}`,
                componentLoader: this.componentLoader
              }),
        ];
    }
}

const episodeFeature = new EpisodeFeatureConfig();
export const EpisodeFeature: FeatureType[] = episodeFeature.getFeatures();
