const bankStatementModel = require("../models/bankStatement");

//create bank statement
exports.bankStatementModel = async (req, res) => {

    try {
        const statementData = bankStatementModel({
            Date: req.body.Date,
            Narration: req.body.Narration,
            referenceNo: req.body.referenceNo,
            valueDate: req.body.valueDate,
            withdrawlAmount: req.body.withdrawlAmount,
            depositAmount: req.body.depositAmount,
            closingAmount: req.body.closingAmount,
            reason: req.body.reason,
            detail: req.body.detail,
        })
        const saveData = await statementData.save();
        return saveData;

    } catch (error) {
        res.status(400).send(error)
    }
}



// get all data
exports.getAllData = async (req, res) => {
    try {

        const result = await bankStatementModel.find();
        return result;

    } catch (e) {
        res.status(200).send(e);
    }
}


// delete by reference number
exports.deleteData = async (req, res) => {
    try {
        const rNo = req.body.referenceNo;
        const result = await bankStatementModel.findOneAndRemove(rNo);
        return result;

    } catch (e) {
        // console.log(e)
        return e;
    }
}


//update data reference number
exports.updateData = async (req, res) => {
    try {
        const result = await bankStatementModel.find({ referenceNo: req.body.referenceNo });
        // console.log(result[Narration]);
        if (result.length == 0) {
            return false;
            
        } else {
                await bankStatementModel.updateMany({ referenceNo: req.body.referenceNo }, {
                Narration: req.body.Narration,
                valueDate: req.body.valueDate,
                withdrawlAmount: req.body.withdrawlAmount,
                depositAmount: req.body.depositAmount,
                closingAmount: req.body.closingAmount,
                reason: req.body.reason,
                detail: req.body.detail,
            });
            
            return true;
        }

    } catch (e) {
        return e ;
        // res.status(400).send(e);
    }
}