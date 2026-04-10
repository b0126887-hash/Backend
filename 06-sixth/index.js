import express from 'express';
import dotenv from "dotenv"
import connectDB from './utils/connectDB.js';
import userRouter from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import taskRouter from './routes/task.route.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

connectDB()

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/users", userRouter)
app.use("/api/v1/task", taskRouter)

app.listen(PORT, () => {
    console.log(`🚀Server is running on port ${PORT}`);
})