
import Product from "../models/ProductModel.js";
import User from "../models/User.js";
import Hoadon from "../models/ReceiptModel.js";

export const addHoadon = async (req, res) => {
    try {
        const { makh } = req.params
        const email = req.body.email
        const sodienthoai = req.body.sodienthoai
        const diachi = req.body.diachi
        const tongtien = req.body.tongtien
        const createHoadon = await Hoadon.create({
            makh,
            email,
            sodienthoai,
            diachi,
            tongtien,
            tinhtrang: 0
        })
       res.status(201).json(createHoadon); 
    } catch (error) {
        console.log(error);
    }
}

export const deleteHoadon = async (req, res) => {
    try {
        const { mahd } = req.params
        const hoadon = await Hoadon.findOne({ where: { mahd } })
        if (!hoadon) {
            res.status(404).json({ msg: "Review không tông tại" });
        } else {
            await Hoadon.destroy({
                where: { mahd }
            })
        }

        res.status(200).json({ msg: "Hoadon Deleted" });
    } catch (error) {
        console.log(error);
    }
}

export const getAllHoadon = async (req, res) => {
    try {
        const hoadon = await Hoadon.findAll()
        res.status(201).json(hoadon); 
    } catch (error) {
        console.log(error);
    }
}