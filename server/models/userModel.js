import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    profilePic: {
        type: String
    },
}, { timestamps: true })

export default mongoose.model("user", userModel)