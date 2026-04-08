import express from "express"
import connectDB from "./utils/connectDB.js"

const app = express()
const PORT = 3000

connectDB()

app.listen(PORT, () => {
    console.log("🌍 Server is Running");
})