import Task from "../models/Task.model.js";


const createTask = async (req, res) => {
    // console.log(req);

    const { title, description } = req.body
    const userId = req.user.userId

    if (!title || !description) {
        return res.status(400).json({
            message: "Title and Description is Required"
        })
    }

    if (!userId) {
        return res.status(400).json({
            message: "User must be LoggedIn"
        })
    }

    try {

        const newTask = await Task.create({ title, description, user: userId })

        console.log(newTask);


        if (!newTask) {
            return res.status(500).json({
                message: "Task is Not Created"
            })
        }

        return res.status(200).json({
            message: "Task Created Successfully",
            newTask
        })

    } catch (error) {
        return res.status(500).json({
            message: "Something went Wrong",
            error
        })
    }
}


const updateTask = async (req, res) => {
    const { title, description, isCompleted } = req.body

    const id = req.params.taskId

    if (!id) {
        return res.status(400).json({
            message: "Task ID is Required"
        })
    }

    try {

        const updatedTask = await Task.findById({ _id: id })

        if (title) {
            updatedTask.title = title
        }

        if (description) {
            updatedTask.description = description
        }

        if (isCompleted !== undefined) {
            updatedTask.isCompleted = isCompleted
        }

        await updatedTask.save()

        return res.status(200).json({
            message: "Task Updated Successfully",
            updatedTask
        })



    } catch (error) {
        return res.status(500).json({
            message: "Something went Wrong",
            error
        })
    }

}
const deleteTask = async (req, res) => {
    const id = req.params.taskId

    if (!id) {
        return res.status(400).json({
            message: "Task ID is Required"
        })
    }

    try {
        const deletedTask = await Task.findByIdAndDelete(id)

        if (!deletedTask) {
            return res.status(404).json({
                message: "Task Not Found"
            })
        }

        return res.status(200).json({
            message: "Task Deleted Successfully",
            deletedTask
        })

    } catch (error) {
        return res.status(500).json({
            message: "Something went Wrong",
            error
        })
    }
}

export { createTask, updateTask, deleteTask }