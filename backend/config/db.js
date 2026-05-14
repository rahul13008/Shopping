import mongoose from "mongoose"

const Connection = async () => {
    await mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Mongoose Connected");
        })
        .catch((error) => {
            console.log("Error:", error);
        })
}
export default Connection