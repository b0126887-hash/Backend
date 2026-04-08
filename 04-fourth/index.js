import express from "express"
import dotenv from "dotenv"
import connectDB from "./utils/connectDB.js"
import userRouter from "./routes/user.route.js"


const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000

connectDB()

app.use(express.json())


app.use("/api/v1/users", userRouter)

app.listen(PORT, () => {
    console.log("✌️ Server Started");
})