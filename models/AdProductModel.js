import {Sequelize} from 'sequelize';
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const AdProduct = db.define('sanphams',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tensp: DataTypes.STRING, 
    mota: DataTypes.STRING,    
    mota_chinh: DataTypes.STRING,    
    dongia: DataTypes.DECIMAL(10, 0),
    giacu: DataTypes.DECIMAL(10, 0),
    img: DataTypes.STRING,
    img_con: DataTypes.STRING,
    id_loailon: DataTypes.INTEGER,
    id_loai: DataTypes.INTEGER,
    color: DataTypes.STRING,
    donvitinh: DataTypes.STRING,
    dinhluong: DataTypes.STRING,
    chatlieu: DataTypes.STRING,
    donggoi: DataTypes.STRING,
    khogiay: DataTypes.STRING,
    xuatxu: DataTypes.STRING,
    kichthuoc: DataTypes.STRING,
    thuonghieu: DataTypes.STRING,
    thetich: DataTypes.STRING,
    url: DataTypes.STRING,
},{
    freezeTableName:true
});

export default AdProduct;
(async()=>{
    await db.sync();
})();