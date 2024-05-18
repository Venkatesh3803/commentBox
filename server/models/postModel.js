import mongoose from "mongoose";

const postModel = new mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String
    },
    likes:{
        type:Array
    }
}, { timestamps: true })

export default mongoose.model("posts", postModel)