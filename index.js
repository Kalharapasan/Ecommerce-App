const express = require('express');
const app =express();
const dotenv =require("dotenv").config();
const PORT =process.env.PORT || 4000;


app.use("/",(req,res)=>{
  res.send("Welcome to the Ecommerce App");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
