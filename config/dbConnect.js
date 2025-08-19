const  {default:mongoose} = require ("mongoose");


const dbConnect = () =>{
    try {
        const conn =mongoose.connect("mongodb://localhost:27017/ecommerce");
        console.log("Database connected successfully");
    }catch(error){
        console.log("Database connection failed:", error);
    }
}

module.exports = dbConnect;

