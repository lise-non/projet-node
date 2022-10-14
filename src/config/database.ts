import { env } from 'process';
import Sequelize from 'sequelize';

export const sequelize = new Sequelize(env.database, env.user, env.password, {
    host: 'localhost',
    dialect : 'mysql'
})