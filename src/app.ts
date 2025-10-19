import authRouter from "./routes/authRoutes"
import errorHandler from "./middlewares/errorHandler";
import express from 'express';

const app = express();

app.use(express.json())

//routes
app.use("/api/auth",authRouter);

app.use(errorHandler);

export default app;