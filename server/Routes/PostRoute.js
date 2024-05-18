import express from "express"
import { createPost, deletePost, getAllPost, getPost, updatePost } from "../Controllers/PostController.js";


const router = express.Router();

router.post("/", createPost)
router.get("/allpost", getAllPost)
router.get("/:id", getPost)
router.patch("/:id", updatePost)
router.delete("/:id", deletePost)

export default router