import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { sequelize } from "./database/index.js";
import { Adminjs, adminRouter } from "./adminjs/index.js";
import { router } from "./routes/index.js";
const server = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
server.use(express.static(path.join(__dirname, "../public")));
server.use(Adminjs.options.rootPath, adminRouter);
server.use(router);
server.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log("Database connection successfull");
    });
    console.log(`Server started successfuly at port ${PORT}`);
});
