import AdMenu from "../models/AdMenuModel.js";


export const getMenus = async (req, res) => {
  try {
    const response = await AdMenu.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getMenuById = async (req, res) => {
  try {
    const response = await AdMenu.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createMenu = async (req, res) => {
  try {
    const { name, parent_id, url } = req.body;
    let imgName = null;
    
    if (req.files && req.files.img) {
      const { img } = req.files;
      const imgPath = `${process.env.URL_REACT}img/menu/${img.name}`;

      await img.mv(imgPath);

      imgName = img.name;
    }

    const response = await AdMenu.create({
      name,
      parent_id,
      img: imgName,
      url,
    });

    res.status(201).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};


export const updateMenu = async (req, res) => {
  try {
    const { name, parent_id, url } = req.body;
    const img = req.files?.img;

    let imgName = img ? img.name : undefined;

    if (img) {
      const imgPath = `${process.env.URL_REACT}img/menu/${img.name}`;
    
      await img.mv(imgPath);

    }

    const menu = await AdMenu.findOne({ where: { id: req.params.id } });

    if (!menu) {
      return res.status(404).json({ msg: "menu not found" });
    }

    const updatedMenu = await menu.update({
      name: name || menu.name,
      parent_id: parent_id || menu.parent_id,
      img: imgName || menu.img,
      url: url || menu.url,
    });

    res.status(200).json(updatedMenu);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const deleteMenu = async (req, res) => {
  try {
    await AdMenu.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Menu Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
