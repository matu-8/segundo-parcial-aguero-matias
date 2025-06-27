import { Sequelize } from "sequelize";
import { DataTypes } from "sequelize";
const sequelize = new sequelize(books, {
    title: DataTypes.STRING, allowNull:false,
    author: DataTypes.STRING, allowNull:false,
    pages: DataTypes.NUMBER,allowNull:false,
    genre: DataTypes.STRING,allowNull:false,
    description: DataTypes.STRING,
});
export default sequelize;