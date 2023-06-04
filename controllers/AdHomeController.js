import AdHome from "../models/AdHomeModel.js";
import { validationResult } from "express-validator";
import fs from "fs";
import path from "path";
export const getHome = async (req, res) => {
  try {
    const response = await AdHome.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getHomeById = async (req, res) => {
  try {
    const response = await AdHome.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createHome = async (req, res) => {
  try {
    const { sdt, diachi, gmail, mota, ten, motaFooter } = req.body;
    const { imghead, imgfoot, img1, img2, img3 } = req.files;
    const imgPath = `../Front-end/public/img/home/${imghead.name}`;
    const imgPath1 = `../admin/public/img/home/${imghead.name}`;
    const imgPath2 = `../Front-end/public/img/home/${imgfoot.name}`;
    const imgPath3 = `../admin/public/img/home/${imgfoot.name}`;
    const imgPath4 = `../Front-end/public/img/home/${img1.name}`;
    const imgPath5 = `../admin/public/img/home/${img1.name}`;
    const imgPath6 = `../Front-end/public/img/home/${img2.name}`;
    const imgPath7 = `../admin/public/img/home/${img2.name}`;
    const imgPath8 = `../Front-end/public/img/home/${img3.name}`;
    const imgPath9 = `../admin/public/img/home/${img3.name}`;
    await imghead.mv(imgPath);
    await imghead.mv(imgPath1);
    await imgfoot.mv(imgPath2);
    await imgfoot.mv(imgPath3);
    await img1.mv(imgPath4);
    await img1.mv(imgPath5);
    await img2.mv(imgPath6);
    await img2.mv(imgPath7);
    await img3.mv(imgPath8);
    await img3.mv(imgPath9);
    const response = await AdHome.create({
      imghead: imghead.name,
      imgfoot: imgfoot.name,
      img1: img1.name,
      img2: img2.name,
      img3: img3.name,
      diachi,
      gmail,
      sdt,
      mota,
      motaFooter,
      ten,
    });

    res.status(201).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const updateHome = async (req, res) => {
  try {
    const { sdt, diachi, gmail, mota, ten, motaFooter } = req.body;
    const imghead = req.files?.imghead;
    const imgfoot = req.files?.imgfoot;
    const img1 = req.files?.img1;
    const img2 = req.files?.img2;
    const img3 = req.files?.img3;
    let imgheadname = imghead ? imghead.name : undefined;
    let imgfootname = imgfoot ? imgfoot.name : undefined;
    let img1name = img1 ? img1.name : undefined;
    let img2name = img2 ? img2.name : undefined;
    let img3name = img3 ? img3.name : undefined;
    if (imgheadname) {
      const imgheadPath = `../Front-end/public/img/home/${imghead.name}`;
      const imgheadPath1 = `../admin/public/img/home/${imghead.name}`;
      await imghead.mv(imgheadPath);
      await imghead.mv(imgheadPath1);
    }

    if (imgfootname) {
      const imgfootPath = `../Front-end/public/img/home/${imgfoot.name}`;
      const imgfootPath1 = `../admin/public/img/home/${imgfoot.name}`;
      await imgfoot.mv(imgfootPath);
      await imgfoot.mv(imgfootPath1);
    }
    if (img1name) {
      const img1Path = `../Front-end/public/img/home/${img1.name}`;
      const img1Path1 = `../admin/public/img/home/${img1.name}`;
      await img1.mv(img1Path);
      await img1.mv(img1Path1);
    }
    if (img2name) {
      const img2Path = `../Front-end/public/img/home/${img2.name}`;
      const img2Path1 = `../admin/public/img/home/${img2.name}`;
      await img2.mv(img2Path);
      await img2.mv(img2Path1);
    }
    if (img3name) {
      const img3Path = `../Front-end/public/img/home/${img3.name}`;
      const img3Path1 = `../admin/public/img/home/${img3.name}`;
      await img3.mv(img3Path);
      await img3.mv(img3Path1);
    }
    const home = await AdHome.findOne({ where: { id: req.params.id } });

    if (!home) {
      return res.status(404).json({ msg: "Home not found" });
    }

    const updatedhome = await home.update({
      imghead: imgheadname || home.imghead,
      imgfoot: imgfootname || home.imgfoot,
      img1: img1name || home.img1,
      img2: img2name || home.img2,
      img3: img3name || home.img3,
      sdt: sdt || home.sdt,
      diachi: diachi || home.diachi,
      gmail: gmail || home.gmail,
      mota: mota || home.mota,
      motaFooter: motaFooter || home.motaFooter,
      ten: ten || home.ten,
    });

    res.status(200).json(updatedhome);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const deleteHome = async (req, res) => {
  try {
    await AdHome.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Home Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateStatusHome = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    await AdHome.update({ status }, { where: { id } });

    res.sendStatus(200);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
