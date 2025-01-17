'use strict';
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize';


export const CategoryModel = (sequelize: Sequelize) => {
  class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>> {
    
    declare id: CreationOptional<number>;
    declare name: string;
    declare position: number;

  }
  Category.init(
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
      position: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
      timestamps: true,
      underscored: true
    });
  return Category;
};