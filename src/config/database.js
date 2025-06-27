// Importaciones
import sequelize from '../models/book.model';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new sequelize (
    process.env.NAME,
    process.env.USER,
    process.env.PASSWORD,

    {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    }
);

export default sequelize;