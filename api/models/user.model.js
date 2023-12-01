import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avtar:{
       type: String,
       default: "C:\Users\SHUBHAM JOSHI\OneDrive\Desktop\profileimage.png"

    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)

export default User