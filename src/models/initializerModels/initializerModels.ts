import { sequelize } from "../../database/index.js";
import { CategoryModel } from "../category.js";

export const category = CategoryModel(sequelize);