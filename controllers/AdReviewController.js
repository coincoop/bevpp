import AdReview from "../models/AdReviewModel.js";

export const getReview = async(req, res) => {
    try {
        const response = await AdReview.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getReviewById = async(req, res) => {
    try {
        const response = await AdReview.findOne({
            where: {
                makh: req.params.makh
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createReview = async(req, res) => {
    try {
        await AdReview.create(req.body)
        res.status(200).json({msg: "Created"});
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateReview = async(req, res) => {
    try {
        await AdReview.update(req.body, {
            where: {
                makh: req.params.makh 
            }
        });
        res.status(200).json({msg: "Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteReview = async(req, res) => {
    try {
        await AdReview.destroy({
            where: {
                makh: req.params.makh,
                masp: req.params.masp
            }
        });
        res.status(200).json({msg: "Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}