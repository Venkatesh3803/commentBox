import express from "express"
import { getsingleUser, loginUser, registerUser } from "../controllers/AuthController.js";

const router = express.Router();

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/getuser/:id", getsingleUser)

export default router