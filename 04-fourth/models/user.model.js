import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full Name is Required"]
    },
    userName: {
        type: String,
        required: [true, "User Name is Required"],
        unique: [true, "User Name must be Unique"]
    },
    userEmail: {
        type: String,
        required: [true, "Email is Required"],
        unique: [true, "Email must be Unique"]
    },
    userPassword: {
        type: String,
        required: [true, "Password is Required"]
    },
})

const User = mongoose.model("User", userSchema)

export default User