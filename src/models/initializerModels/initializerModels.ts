import { sequelize } from "../../database/index.js";
import { CategoryModel } from "../category.js";
import { CourseModel } from "../course.js";
import { EpisodeModel } from "../episode.js";
import { UserModel } from "../user.js";


const Category = CategoryModel(sequelize);
const Course = CourseModel(sequelize);
const Episode = EpisodeModel(sequelize);
const User = UserModel(sequelize);

Category.hasMany(Course, { as: "courses" });

Course.belongsTo(Category);

export { Category, Course, Episode, User };