import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})

export default mongoose.model("User", UserSchema)

