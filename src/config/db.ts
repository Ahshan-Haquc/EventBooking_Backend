import mongoose from "mongoose";
const databaseConnect=async ()=>{
    await mongoose
    .connect('mongodb://localhost:27017/EventBooking')
    .then(()=>(console.log("Database succesfully connected with MongoDB")))
    .catch((error : Error)=>(console.log("Not connected with database:", error.message)));
}

export default databaseConnect;