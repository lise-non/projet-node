import { Model } from 'sequelize';
export declare class Recipe extends Model {
    id: number;
    name: string;
    slug: string;
    description?: string;
    guests: number;
    idCourses: number;
    createdAt: Date;
    updatedAt: Date;
}
