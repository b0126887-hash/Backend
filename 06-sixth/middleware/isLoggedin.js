import jwt from "jsonwebtoken"

const isLoggedin = (req, res, next) => {

    const token = req.cookies.userToken || req.cookies.adminToken

    if (!token) {
        return res.status(400).json({
            message: "Unauthorized User"
        })
    }

    try {

        const decode = jwt.verify(token, process.env.JWT_SECRET)

        console.log(decode);

        req.user = decode

        next()

    } catch (error) {
        return res.status(400).json({
            message: "Unauthorized User",
            error
        })
    }

    // console.log(req);

    // console.log(token);






}

export default isLoggedin