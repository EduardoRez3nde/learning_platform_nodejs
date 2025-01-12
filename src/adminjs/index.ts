import AdminJs, { AdminJS } from "adminjs";
import AdminJSSequelize from "@adminjs/sequelize";
import { sequelize } from "../database/index.js";
import brandingOptions from "./features/branding.js";
import AdminJSExpress from "@adminjs/express";
import { AdminJsResources } from "./resources/index.js";
import { authenticateOptions } from "./features/authentication.js";
import { locale } from "./locale.js";
import { Components, componentLoader } from "./componentLoader.js";
import { dashboardHandler } from "./handlers/dashboard.js";


AdminJs.registerAdapter(AdminJSSequelize);

export const Adminjs = new AdminJS({
    databases: [sequelize],
    rootPath: "/admin",
    resources: AdminJsResources,
    branding: brandingOptions,
    locale: locale,
    dashboard: {
        component: Components.Dashboard,
        handler: dashboardHandler
    },
    componentLoader
});

export const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    Adminjs, 
    authenticateOptions,
    null,
    {
        secret: "test",
        resave: false,
        saveUninitialized: true
    }
);
