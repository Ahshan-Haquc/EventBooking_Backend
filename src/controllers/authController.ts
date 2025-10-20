import { Request, Response } from "express";
import { userInfoInSignup } from "../types/type";
import UserModel from '../models/userSchema'
import bcrypt from 'bcrypt';


export const userSignup = async (req: Request, res: Response) => {
  try {
    const { name, email, password }: userInfoInSignup = req.body;

    if (!name || !email || !password) {
      res.status(400).json({ success: false, message: "All input fields required." })
    }

    if (password.length < 6) {
      res.status(400).json({ success: false, message: "Password lenght must be more then 6" })
    }

    const isExistUser = await UserModel.findOne({email});
    if(isExistUser){
      res.status(400).json({ success: false, message: "Try with another email or password" })
    }

    const hashedPassword : string = await bcrypt.hash(password, 10);

    const user = new UserModel({
      userName: name, email, password: hashedPassword
    })
    await user.save();

    res.status(200).json({
      success: true,
      message: "Signup successful."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const adminSignup = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "Welcome to admin signup.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


// now i will implement search feature using regex