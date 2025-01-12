import uploadFileFeature from "@adminjs/upload";
import { ComponentLoader, FeatureType } from "adminjs";
import path from "path";
import { fileURLToPath } from "url";


export type configFeature = {
    key: string,
    file: string,
    path: string,
    recordId: string
}

export class FeatureConfig {

    private uploadDir: string;
    private baseUrl: string;
    private __filename: string;
    private __dirname: string;
    private componentLoader = new ComponentLoader();


    constructor(uploadDir: string, baseUrl: string) {
        this.__filename = fileURLToPath(import.meta.url);
        this.__dirname = path.dirname(this.__filename);
        this.uploadDir = path.join(this.__dirname, uploadDir);
        this.baseUrl = baseUrl;
    }

    getFeatures(config: configFeature): FeatureType[] {
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
                  key: config.key,
                  file: config.file,
                },
                uploadPath: (record, filename) =>
                  `${config.path}-${record.get(config.recordId)}/${filename}`,
                componentLoader: this.componentLoader
              }),
        ];
    }
}