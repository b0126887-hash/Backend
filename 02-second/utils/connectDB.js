import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect("mongodb://admin:password@localhost:27017")
        .then(() => {
            console.log("📊 MongoDB is Connected");
        }).catch((error) => {
            console.log(`Data base connection ERROR ${error}`);
        })
}

export default connectDB