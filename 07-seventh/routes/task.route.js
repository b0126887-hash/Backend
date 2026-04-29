import { Router } from "express"

import { createTask, updateTask, deleteTask } from "../controllers/task.controller.js"
import isLoggedin from "../middlewares/isLoggedin.js"
import { getTasks } from "../controllers/user.controller.js"

const taskRouter = Router()

taskRouter.post("/create-task", isLoggedin, createTask)
taskRouter.put("/update-task/:taskId", isLoggedin, updateTask)
taskRouter.delete("/delete-task/:taskId", isLoggedin, deleteTask)
taskRouter.get("/get-all-tasks", isLoggedin, getTasks)

export default taskRouter