import bcrypt from "bcrypt"
import userModel from "../models/userModel.js";


export const registerUser = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashPass;
    const newUser = await userModel(req.body)
    try {
        const existUser = await userModel.findOne({ email: newUser.email })
        if (existUser) return res.status(404).json("This email Already taken")

        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const loginUser = async (req, res) => {

    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) return res.status(404).json("This user doesnot exist")

        const passwordVerify = await bcrypt.compare(req.body.password, user.password)
        if (!passwordVerify) return res.status(404).json("Invalid Credentials")

        const { password, balance, ...others } = user._doc;

        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


export const getsingleUser = async (req, res) => {

    try {
        const user = await userModel.findById(req.params.id)
        if (!user) return res.status(404).json("This user doesnot exist")

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}