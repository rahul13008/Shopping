import express from "express";
import Login from "../controllers/AuthLogin.js";
import Register from "../controllers/AuthRegister.js";

const router = express.Router()

router.post("/login", Login)
router.post("/register", Register)

export default router