import Product from "../models/ProductModel.js";
import User from "../models/User.js";
import Hoadon from "../models/ReceiptModel.js";
import Cthoadon  from "../models/CTHDModel.js";
import db from '../config/Database.js'; 

export const addCtHoaDon = async (req, res) => {
    const transaction = await db.transaction();
  
    try {
      const { mahd } = req.params;
     const { masp, soluong, dongia, tongtien } = req.body;
    
    
      // Tạo hóa đơn chi tiết và lưu vào cơ sở dữ liệu trong transaction
      const addcthd = await Cthoadon.create(
        {
          mahd: mahd,
          masp: masp,
          soluong: soluong,
          dongia: dongia,
          tongtien: tongtien,
        },
        { transaction }
      );
  
      // Lưu các bảng khác cùng mahd trong transaction
  
      // Commit transaction sau khi đã lưu thành công
      await transaction.commit();
  
      res.status(201).json(addcthd);
    } catch (error) {
      // Rollback transaction nếu có lỗi xảy ra
      await transaction.rollback();
      console.log(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };