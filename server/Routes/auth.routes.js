import express from "express"
import {login, signup} from "../controllers/auth.controller.js"

const router = express.Router();

router.get("/login", login)
router.post("/signUp", signup)

export default router;