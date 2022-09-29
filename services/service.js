const bankStatementModel = require("../models/bankStatement");

//create bank statement
exports.bankStatementModel = async (req, res) => {

    

    try {
         const {
            Date,
            Narration,
            referenceNo,
            valueDate,
            withdrawlAmount,
            depositAmount,
            closingAmount,
            reason,
            detail
          } = req?.body;

        const statementData = bankStatementModel({
            Date: Date,
            Narration,
            referenceNo,
            valueDate,
            withdrawlAmount,
            depositAmount,
            closingAmount,
            reason,
            detail
        })
        const saveData = await statementData.save();
        return saveData;

    } catch (error) {
        return error;
    }
}



// get all data
exports.getAllData = async (req, res) => {
    try {

        const result = await bankStatementModel.find();
        return result;

    } catch (e) {
        return e;
    }
}


// delete by reference number
exports.deleteData = async (req, res) => {
    try {
        console.log("ddd")
        const rNo = req?.body.referenceNo;
        console.log(rNo)
        const result = await bankStatementModel.findOneAndRemove(rNo);
        console.log(result)
        return result;

    } catch (e) {
        // console.log(e)
        return e;
    }
}


//update data reference number
exports.updateData = async (req, res) => {
    try {
        const result = await bankStatementModel.find({ referenceNo: req?.body.referenceNo });
        if (result.length == 0) {
            return false;
            
        } else {
                await bankStatementModel.updateMany({ referenceNo: req?.body.referenceNo }, {
                Narration: req?.body.Narration,
                valueDate: req?.body.valueDate,
                withdrawlAmount: req?.body.withdrawlAmount,
                depositAmount: req?.body.depositAmount,
                closingAmount: req?.body.closingAmount,
                reason: req?.body.reason,
                detail: req?.body.detail,
            });
            
            return true;
        }

    } catch (e) {
        return e ;
    }
}


// get element by reference number

exports.getDataByRefeNo = async (req, res) => {
    try {
       
            const result = await bankStatementModel.findOne({ referenceNo: req?.body.referenceNo });
            // console.log(typeof(result))
            if (result === null) {
                return false;
                
            } else {
                    return result;
                };
        
        
          }

     catch (e) {
        return e ;
    }
}