import express from "express"
import { createComment, deleteComment, getAllComment, getComment, updateComment } from "../Controllers/CommentController.js";


const router = express.Router();

router.post("/", createComment)
router.get("/allcomments", getAllComment)
router.get("/:id", getComment)
router.patch("/:id", updateComment)
router.delete("/:id", deleteComment)

export default router