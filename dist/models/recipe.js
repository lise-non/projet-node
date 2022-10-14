"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipe = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../config/database");
const courses_1 = require("./courses");
class Recipe extends sequelize_1.Model {
}
exports.Recipe = Recipe;
Recipe.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        validate: {
            isAlpha: true,
        },
        allowNull: false
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    guests: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    idCourses: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: courses_1.Course,
            key: 'id',
        }
    }
}, {
    sequelize: database_1.sequelize,
    tableName: "recipes",
    createdAt: "created_at",
    updatedAt: "updated_at",
});
