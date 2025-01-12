import { sequelize } from "../../database/index.js";
import { CategoryModel } from "../category.js";
import { CourseModel } from "../course.js";
import { EpisodeModel } from "../episode.js";
import { UserModel } from "../user.js";

export const Category = CategoryModel(sequelize);
export const Course = CourseModel(sequelize);
export const Episode = EpisodeModel(sequelize);
export const User = UserModel(sequelize);