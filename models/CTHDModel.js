import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Cthoadon = db.define('cthoadon', {
    mahd: {
        type: DataTypes.INTEGER,
        primaryKey: true,

    },
    masp: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    soluong: DataTypes.INTEGER,
    dongia: DataTypes.INTEGER,
    tongtien: DataTypes.INTEGER
}, {
    freezeTableName: true
});

export default Cthoadon;

(async () => {
    await db.sync();
})();
