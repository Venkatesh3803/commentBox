import postModel from "../models/postModel.js";

export const createPost = async (req, res) => {
    try {
        const newPost = await postModel(req.body);
        const post = await newPost.save();

        res.status(201).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}



export const getPost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        if (!post) return res.status(401).json("post not avaliable")

        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getAllPost = async (req, res) => {
    try {
        const post = await postModel.find().sort({ createdAt: -1 });
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const updatePost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        if (!post) return res.status(401).json("post not avaliable")
        const updated = await postModel.findByIdAndUpdate(post._id, req.body, { new: true })
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const deletePost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id);
        if (!post) return res.status(401).json("post not avaliable")

        await postModel.findByIdAndDelete(post._id)
        res.status(200).json("Deleted Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

