
import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("📊 Database Connected");
    }).catch((err) => {
        console.log("💀 Database Connection Error");

    })
}

export default connectDB
