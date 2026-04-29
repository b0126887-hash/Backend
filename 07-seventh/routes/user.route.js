import { Router } from "express"
import { registerUser } from "../controllers/user.controller.js"
import { loginUser } from "../controllers/user.controller.js"

const userRouter = Router()

userRouter.post("/register-user", registerUser)
userRouter.post("/login-user", loginUser)
export default userRouter