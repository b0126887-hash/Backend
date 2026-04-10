import Task from "../models/Task.model.js";


const createTask = async (req, res) => {
    // console.log(req);

    const { title, description, isCompleted } = req.body
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



export { createTask }