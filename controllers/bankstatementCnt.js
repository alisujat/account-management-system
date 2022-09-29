const bankStatementS = require("../services/service");


//create bank statement
exports.SaveBankStatement = async (data, res) => {
    try {
        const getSavedData = await bankStatementS.bankStatementModel(data);
        // console.log(getSavedData)
        res.status(200).send(getSavedData)


    } catch (err) {
        res.status(400).send(err);
    }
}



// get all data
exports.getBankStatement = async (data, res) => {
    try {
        const getData = await bankStatementS.getAllData(data);
        if (getData.length == 0) {
            res.status(404).send({ message: "Data is not available" })
        } else {
            res.status(200).send(getData)
        }

    } catch (err) {
        res.status(400).send(err);
    }
}



// delete data by reference number
exports.deleteBankStatement = async (data, res) => {
    try {
        const deletedData = await bankStatementS.deleteData(data);
        console.log(deletedData)
        res.status(200).send({"deleted data is ": deletedData})

    } catch (err) {
        res.status(400).send(err);
    }
}



//update data by reference number
exports.updateBankStatement = async (data, res) => {
    try {
        const updatedData = await bankStatementS.updateData(data);
        console.log(updatedData)
        if(updatedData == false){
         res.status(404).send({ message: "data is not found" });
        }else{
            res.status(200).send({message: " data is updated "})
        }
       
    } catch (err) {
        res.status(400).send(err);
    }
}




// find data by dates
// exports.findByDate = async (req, res) => {
//     try {
//         const fromdate = req.body.fromDate
//         const todate = req.body.toDate
//         const dataBydate = await bankStatementModel
//             .find({
//                 $and: [

//                     { Date: { $gte: (fromdate) } },
//                     { Date: { $lte: (todate) } },
//                 ]

//             });
//         if (Object.keys(dataBydate).length === 0) {
//             res.status(404).send({ message: "data is not available between these two dates" });
//         }
//         else {
//             // console.log(dataBydate)
//             res.status(201).send(dataBydate);
//         }



//     } catch (e) {
//         console.log(e);
//     }
// }



// to calculate total withdrawl amount
// exports.findTotalWithdrawAmount = async (req, res) => {
//     try {
//         const dataBydate = await bankStatementModel
//             .find({
//                 $and: [
//                     { Date: { $gte: ("2022-09-20") } },
//                     { Date: { $lte: ("2022-09-22") } },
//                 ]
//             });

//         // console.log(dataBydate)
//         // res.send(dataBydate);
//         let totalWith = 0;
//         for (let i = 0; i <= dataBydate.length; i++) {

//             let withd = (dataBydate[i].withdrawlAmount);
//             // console.log(withd)
//             totalWith = totalWith + withd;
//             console.log(totalWith)

//         }
//         res.status(201).send(totalWith);

//     } catch (e) {
//         console.log(e);
//     }
// }