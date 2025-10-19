import { Request, Response } from "express";

export const userSignup = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "Welcome to user signup.",
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
