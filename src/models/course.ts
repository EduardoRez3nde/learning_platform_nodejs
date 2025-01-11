'use strict';
import { DataTypes, Model, Sequelize, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';


export const CourseModel = (sequelize: Sequelize) => {
  class Course extends Model<InferAttributes<Course>, InferCreationAttributes<Course>> {

    declare id: CreationOptional<number>;
    declare name: string;
    declare synopsis: string;
    declare thumbnailUrl: string;
    declare featured: boolean;
    declare categoryId: number;

    static associate(models: any) {
      Course.belongsTo(models.Category, {
        foreignKey: "category_id"
      });
      Course.hasMany(models.Episode);
    }
  }
  Course.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    synopsis: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    thumbnailUrl: {
      type: DataTypes.STRING
    },
    featured: {
      defaultValue: false,
      type: DataTypes.BOOLEAN
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "categories", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT"
    },
  },
  {
    sequelize,
    modelName: "Course",
    tableName: "courses",
    timestamps: true,
    underscored: true
  });
  return Course;
};