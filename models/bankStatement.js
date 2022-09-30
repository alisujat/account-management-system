const mongoose = require("mongoose");
const bankStatement_schema = mongoose.Schema({
    Date:{
        type:Date, 
        required:true,
    },
    Narration:{
        type:String, 
        required:true,
        trim:true
    },
    referenceNo:{
        type:String,
        required: true,
        unique:[true, "reference number should be unique"]
    },
    valueDate: {
        type:String,
        required: true
    },
    withdrawlAmount:{
        type:Number,
        default:"None"
    },
    depositAmount: {
        type:Number,
        required:true,
        default : 'None'
    },
    closingAmount:{
        type:Number,
        required:true,
        required: true
    },
    reason: {
        type:String,
        required: true,
        trim: true
    },
    detail:{
        type:String,
        required: true,
        trim:true
    },
    createAt: {
        type: Date,
        default: Date.now
    },

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

const statementsModel = new mongoose.model("Statement" , bankStatement_schema)

module.exports = statementsModel;