import User from "../models/User.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const registerUser = async (req, res) => {
    const { fullName, userEmail, userPassword, confirmPassword } = req.body

    if (!fullName || !userEmail || !userPassword || !confirmPassword) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    if (userPassword !== confirmPassword) {
        return res.status(400).json({
            message: "password must be Same"
        })
    }

    try {

        const existingUser = await User.findOne({ userEmail })

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }

        const hashPassword = bcrypt.hashSync(userPassword, 10)

        const newUser = await User.create({
            fullName, userEmail, userPassword: hashPassword
        })

        console.log(newUser);


        if (!newUser) {
            return res.status(400).json({
                message: "User creation Failed"
            })
        }

        const userRes = {
            fullName: newUser.fullName,
            userEmail: newUser.userEmail,
            role: newUser.role
        }

        return res.status(201).json({
            message: "User created Successfully",
            newUser: userRes
        })

    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error
        })
    }

}

const loginUser = async (req, res) => {
    const { userEmail, userPassword } = req.body

    if (!userEmail || !userPassword) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    try {

        const existingUser = await User.findOne({ userEmail })

        if (!existingUser) {
            return res.status(404).json({
                message: "User not found"
            })
        }

        const isMatch = bcrypt.compareSync(userPassword, existingUser.userPassword)

        console.log(isMatch);


        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            {
                userId: existingUser._id, role: existingUser.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )

        // userToken
        // adminToken

        res.cookie(`${existingUser.role}Token`, token, {
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            message: "Login successful",
            token
        })


    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong",
            error
        })
    }
}
export { registerUser, loginUser }