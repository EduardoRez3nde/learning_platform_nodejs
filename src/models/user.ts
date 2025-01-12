'use strict';
import { InferAttributes, InferCreationAttributes, Model, Sequelize, DataTypes, CreationOptional } from 'sequelize';
import bcrypt from "bcrypt";

export const UserModel = (sequelize: Sequelize) => {
  class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    
    declare id: CreationOptional<number>;
    declare lastName: string;
    declare firstName: string;
    declare phone: string;
    declare birth: Date;
    declare email: string;
    declare password: string;
    declare role: "admin" | "user";

    static associate(models: any) {
      // define association here
    }
  }
  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING
    },
    birth: {
      allowNull: false,
      type: DataTypes.DATE
    },
    email: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        isIn: [["admin", "user"]]
      }
    },
  },
  {
    hooks: {
      beforeSave: async (user) => {
        if (user.isNewRecord || user.changed("password")) {
          user.password = await bcrypt.hash(user.password.toString(), 10);
        }
      }
    },
    sequelize,
    modelName: 'User',
    tableName: "users",
    underscored: true,
    timestamps: true
  });
  return User;
};