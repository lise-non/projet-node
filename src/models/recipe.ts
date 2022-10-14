import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'
import { Course } from './courses';
 
export class Recipe extends Model
{
 public id!: number;
 public name!: string;
 public slug!: string;
 public description?: string;
 public guests! : number;
 public idCourses! : number;
 public createdAt! : Date;
 public updatedAt! : Date;
}
 
Recipe.init({
 id: {
 type: DataTypes.INTEGER,
 autoIncrement: true,
 primaryKey: true
 },
 name: {
 type: DataTypes.STRING,
 validate: {
 isAlpha: true,
 },
 allowNull: false
 },
 slug: {
 type:DataTypes.STRING,
 allowNull: false,
 unique: true,
 },
 description: {
 type: DataTypes.STRING,
 allowNull: true,
 },
 guests: {
 type: DataTypes.INTEGER,
 },
 idCourses: {
 type: DataTypes.INTEGER,
 allowNull: false,
 references: {
 model: Course,
 key: 'id',
 }
 }
},
{
 sequelize,
 tableName: "recipes",
 createdAt: "created_at",
 updatedAt: "updated_at",
}
);