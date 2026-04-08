import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Full name is required"]
    },
    userEmail: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true
    },
    userPassword: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
})

const User = mongoose.model("User", userSchema);
export default User;