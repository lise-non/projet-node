"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const process_1 = require("process");
const sequelize_1 = __importDefault(require("sequelize"));
exports.sequelize = new sequelize_1.default(process_1.env.database, process_1.env.user, process_1.env.password, {
    host: 'localhost',
    dialect: 'mysql'
});
