import { NextFunction, Request, Response } from "express";

interface CustomError extends Error {
    statusCode?: number;
}

const errorHandler = (err: CustomError, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.statusCode || 500;
    res.status(status).json({
        message: err.message || "Something went wrong.",
        success: false
    });
};

export default errorHandler;