import User from "../models/user.js"
import bcrypt from "bcrypt"

const Login = async (req, res) => {

    try {
        const { Email, Password } = req.body

        const UserFind = await User.findOne({ Email })

        if (!UserFind) {
            return res.json({
                success: false,
                message: "User not found"
            })
        }

        const ismatch = await bcrypt.compare(Password, UserFind.Password)

        if (ismatch) {
            return res.json({
                success: true,
                message: "Login Successful",
            })
        } else {
            return res.json({
                success: false,
                message: "Wrong Password"
            })
        }

    }
    catch (error) {
        res.json({
            success: false,
            message: "Server Error"
        })
    }
}
export default Login
