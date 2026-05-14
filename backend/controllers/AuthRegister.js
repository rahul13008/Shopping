import User from "../models/user.js";
import bcrypt from "bcrypt";

const Register = async (req, res) => {

    try {
        const { FullName, Email, Password } = req.body

        const UserFind = await User.findOne({ Email })

        if (UserFind) {
            return res.json({
                success: false,
                message: "User already exist"
            })
        }

        const hashpass = await bcrypt.hash(Password, 10)

        const NewUser = await User.create({
            FullName,
            Email,
            Password: hashpass
        })

        res.json({
            success: true,
            message: "User Created Successful"
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Server error"
        })
    }
}

export default Register