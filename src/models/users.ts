import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../config/database'

export class Users extends Model{

    public id!: number;
    public lastName!: string;
    public firstName?: string;
    
}