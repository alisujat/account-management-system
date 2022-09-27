const bankStatementModel = require("../models/bankStatement");


// const bankStatementByDates = require("../models/getDataByDates");



//create bank statement
exports.bankStatement = async (req, res) => {
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
            const data = await statementData.save();
            console.log(data)
            res.status(201).send(data);

        } catch (err) {
            res.status(400).send(err);
        }
    }




// get all data
exports.getAllData = async (req, res) => {
    try {

        const result = await bankStatementModel.find();
        // console.log(result)
        if(result.length == 0){
            res.status(404).send({message: "Currently data is not available"})
        }else{
            res.status(200).send(result)
        }

    } catch (e) {
        res.status(200).send(e);
    }
}


// delete data 
exports.deleteData = async (req, res) => {
    try {
        const rNo = req.body.referenceNo;
        const result = await bankStatementModel.findOneAndRemove(rNo);
        res.status(200).send("removed data ",result);

    } catch (e) {
        console.log(e)
        res.status(200).send(result);
    }
}

//update data
exports.updateData = async (req, res) => {
    try {
        //    const rNo = req.body.referenceNo;
        //    console.log(rNo);
        const result = await bankStatementModel.find({ referenceNo: req.body.referenceNo });
        // console.log(result[0].referenceNo)
        // console.log(result)
        if (result.referenceNo == {} || result.referenceNo == null) {
            res.status(404).send({ message: "your data is not found" });
        } else {
            await bankStatementModel.updateOne({ rNo }, {
                Narration: req.body.Narration
            });
        }
        res.status(200).send({ message: "your data is updated" });

    } catch (e) {
        console.log(e)
        res.status(400).send(e);
    }
}



// find data by dates
exports.findByDate = async (req, res) => {
    try {
        const fromdate = req.body.fromDate
        const todate = req.body.toDate
        const dataBydate = await bankStatementModel
            .find({
                $and: [

                    { Date: { $gte: (fromdate) } },
                    { Date: { $lte: (todate) } },
                ]

            });
        if (Object.keys(dataBydate).length === 0) {
            res.status(404).send({ message: "data is not available between these two dates" });
        }
        else {
            // console.log(dataBydate)
            res.status(201).send(dataBydate);
        }



    } catch (e) {
        console.log(e);
    }
}



// to calculate total withdrawl amount
exports.findTotalWithdrawAmount = async (req, res) => {
    try {
        const dataBydate = await bankStatementModel
            .find({
                $and: [
                    { Date: { $gte: ("2022-09-20") } },
                    { Date: { $lte: ("2022-09-22") } },
                ]
            });

        // console.log(dataBydate)
        // res.send(dataBydate);
        let totalWith = 0;
        for (let i = 0; i <= dataBydate.length; i++) {

            let withd = (dataBydate[i].withdrawlAmount);
            // console.log(withd)
            totalWith = totalWith + withd;
            console.log(totalWith)

        }
        res.status(201).send(totalWith);

    } catch (e) {
        console.log(e);
    }
}