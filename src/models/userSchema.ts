import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    role:{
        type: String,
        enum:["user","admin"],
        default: "user"
    },
    isVerified:{
        type: Boolean,
        default: false
    }
},{timestamps: true});

const UserModel = mongoose.model("User",UserSchema);
module.exports = UserModel;