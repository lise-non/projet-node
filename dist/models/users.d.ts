import { Model } from 'sequelize';
export declare class Users extends Model {
    id: number;
    lastName: string;
    firstName?: string;
}
