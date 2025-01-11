'use strict';
import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from 'sequelize';


export const EpisodeModel = (sequelize: Sequelize) => {
  class Episode extends Model<InferAttributes<Episode>, InferCreationAttributes<Episode>> {
    
    declare id: CreationOptional<number>;
    declare name: string;
    declare synopsis: string;
    declare order: number;
    declare videoUrl: string;
    declare secondsLong: number;
    declare courseId: number;

    static associate(models: any) {
      Episode.belongsTo(models.Course);
    }
  }
  Episode.init({
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
    order: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    videoUrl: {
      type: DataTypes.STRING
    },
    secondsLong: {
      type: DataTypes.INTEGER
    },
    courseId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "courses", key: "id" },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT"
    },
  },
  {
    sequelize,
    modelName: 'Episode',
    tableName: "episodes",
    timestamps: true,
    underscored: true
  });
  return Episode;
};