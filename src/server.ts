import databaseConnection from "./config/db";
import app from "./app";
import dotenv from 'dotenv';

dotenv.config();

databaseConnection();

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Listening on port 3000"); 
})
