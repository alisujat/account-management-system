const express = require("express");
const app = express();
require("./conn/conn");
const port = process.env.PORT || 8000;

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// const validator = require("./validators/validate");
// app.use("/bankStatementSubmission",validator);

const bankStatementRouter = require("./routes/route");
app.use('/bankStatement' , bankStatementRouter);


app.listen(port , ()=>{
    console.log("server is running");
})
