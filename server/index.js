import express from "express";
import mongoose from "mongoose";
import AuthRoute from './Routes/AuthRout.js'
import PostRoute from './Routes/PostRoute.js'
import CommentRoute from './Routes/CommentRoutes.js'
import cors from "cors"

const app = express()
const port = 5000;
app.use(express.json())
app.use(cors())


const connect = () => {
    mongoose.connect("mongodb+srv://comments:venky@cluster0.ccyq9.mongodb.net/comments").then(() => {
        console.log("connected to db")
    }).catch((err) => {
        console.log(err)
    })
}


app.listen(port, () => {
    connect()
    console.log(`app is listening at ${port}`)
})


// routes
app.use("/api/auth", AuthRoute)
app.use("/api/post", PostRoute)
app.use("/api/comment", CommentRoute)
