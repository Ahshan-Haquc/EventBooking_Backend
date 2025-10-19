import express from "express";
import { userSignup, adminSignup } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/userSignup", userSignup);
authRouter.post("/adminSignup", adminSignup);

export default authRouter;
