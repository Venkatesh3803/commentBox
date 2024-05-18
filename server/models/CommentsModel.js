import mongoose from "mongoose";

const commentModel = new mongoose.Schema({
    postId: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    comment: {
        type: String
    },
    likes: {
        type: Array
    }
}, { timestamps: true })

export default mongoose.model("comments", commentModel)