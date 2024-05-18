import CommentsModel from "../models/CommentsModel.js";


export const createComment = async (req, res) => {
    try {
        const newComment = await CommentsModel(req.body);
        const comment = await newComment.save();

        res.status(201).json(comment)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getComment = async (req, res) => {
    try {
        const comment = await CommentsModel.findById(req.params.id);
        if (!comment) return res.status(401).json("post not avaliable")

        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export const getAllComment = async (req, res) => {
    const q = req.query;

    const filters = {
        ...(q.postid && { postId: q.postid }),
    };

    try {
        const comment = await CommentsModel.find(filters).sort({ createdAt: -1 })
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const updateComment = async (req, res) => {
    try {
        const comment = await CommentsModel.findById(req.params.id);
        if (!comment) return res.status(401).json("Comment not avaliable")
        const updated = await CommentsModel.findByIdAndUpdate(comment._id, req.body, { new: true })
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const deleteComment = async (req, res) => {
    try {
        const comment = await CommentsModel.findById(req.params.id);
        if (!comment) return res.status(401).json("post not avaliable")

        await CommentsModel.findByIdAndDelete(comment._id)
        res.status(200).json("Deleted Sucessfully")
    } catch (error) {
        res.status(500).json(error.message)
    }
}
