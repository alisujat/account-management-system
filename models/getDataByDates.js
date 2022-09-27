const mongoose = require("mongoose");
const bankStatementByDates_schema = mongoose.Schema({

    // get data bw two dates

    fromDate :{
        type: String,
        require: true
    },
    toDate :{
        type: String,
        require: true
    }


})

const statementsByDateModel = new mongoose.model("Statement" , bankStatementByDates_schema)

module.exports = statementsByDateModel;