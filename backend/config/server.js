import express from "express";
import dotenv from "dotenv"
import Connection from "./db.js";
import cors from "cors"
import authRoutes from "../Routes/AuthRoutes.js";

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use("/auth/api", authRoutes)

app.get("/", (req, res) => {
    res.send("Hello")
})

Connection()

app.listen(process.env.PORT)