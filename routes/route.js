const express = require("express")
const router = express.Router();
const validate = require('../validators/validate')
const { body, validationResult } = require('express-validator');
const bankStatementController = require('../controllers/bankstatementCnt');

router.post("/bankStatementSubmission" , [validate] , bankStatementController.bankStatement );
router.get("/getAllData" , bankStatementController.getAllData);
router.delete("/deleteData" , bankStatementController.deleteData);
router.put("/updateData", bankStatementController.updateData);
router.get("/findBankStatementByDate" , bankStatementController.findByDate);
router.get("/findTotalWithdrawAmount" , bankStatementController.findTotalWithdrawAmount);



module.exports = router;