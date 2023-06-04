import {Sequelize} from 'sequelize';
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const AdReview= db.define('review',{
    makh: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    masp: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    danhgia: DataTypes.INTEGER,
    noidung: DataTypes.STRING,
},{
    freezeTableName:true
});

export default AdReview;

(async()=>{
    await db.sync();
})();