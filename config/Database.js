import {Sequelize} from "sequelize";

const db = new Sequelize('menureact','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;