const  {default:mongoose} = require ("mongoose");


const dbConnect = () =>{
    try {
        const conn =mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    }catch(error){
        console.log("Database connection failed:", error);
    }
}

module.exports = dbConnect;

