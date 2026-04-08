import User from "../models/user.model.js"
import mongoose from "mongoose"

const registerUser = async (req, res) => {

    const { fullName, userName, userEmail, userPassword } = req.body

    if (!fullName || !userName || !userEmail || !userPassword) {
        return res.status(400).json({
            message: "All Fields are Required"
        })
    }

    try {

        const existingUser = await User.findOne({ userEmail })

        if (existingUser) {
            return res.status(400).json({
                message: "User Already Exists"
            })
        }

        const newUser = await User.create({ fullName, userName, userEmail, userPassword })

        if (!newUser) {
            return res.status(400).json({
                message: "User Creation Failed"
            })
        }

        return res.status(201).json({
            message: "User Created Successfully",
            user: newUser
        })

    } catch (error) {
        return res.status(400).json({
            message: "User Creation Failed",
            error
        })
    }


}

export { registerUser }