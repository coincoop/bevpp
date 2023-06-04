import AdBlog from "../models/AdBlogModel.js";

export const getBlog = async(req, res) => {
    try {
        const response = await AdBlog.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getBlogById = async(req, res) => {
    try {
        const response = await AdBlog.findOne({
            where: {
                idblog: req.params.idblog
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createBlog = async(req, res) => {
    try {
        await AdBlog.create(req.body)
        res.status(200).json({msg: "Blog Created"});
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateBlog = async(req, res) => {
    try {
        await AdBlog.update(req.body, {
            where: {
                idblog: req.params.idblog   
            }
        });
        res.status(200).json({msg: "Blog Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteBlog = async(req, res) => {
    try {
        await AdBlog.destroy({
            where: {
                idblog: req.params.idblog
            }
        });
        res.status(200).json({msg: "Blog Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}