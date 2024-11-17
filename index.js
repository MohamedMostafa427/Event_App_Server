// const express = requier("express");
// const app = express();


const express = require("express");
const app = express();
const dotenv = require("dotenv");

app.listen( process.env.PORT , ()=>{
    console.log(" listing On Port : ", 3001)
} )
