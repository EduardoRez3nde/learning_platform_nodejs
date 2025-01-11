import AdminJs, { AdminJS } from "adminjs";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database/index.js";
import brandingOptions from "./features/branding.js";
import AdminJSExpress from "@adminjs/express";
import { AdminJsResources } from "./resources/index.js";


AdminJs.registerAdapter(AdminJSSequelize);

export const Adminjs = new AdminJS({
    databases: [sequelize],
    rootPath: "/admin",
    resources: AdminJsResources,
    branding: brandingOptions
});

export const adminRouter = AdminJSExpress.buildRouter(Adminjs);
