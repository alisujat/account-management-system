const express = require("express")
const router = express.Router();
const validate = require('../validators/validate')
const bankStatementController = require('../controllers/bankstatementCnt');

router.post("/bankStatementSubmission" , validate , bankStatementController.SaveBankStatement );
router.get("/getAllData" , bankStatementController.getBankStatement);
router.delete("/deleteData" , bankStatementController.deleteBankStatement);
router.put("/updateData", bankStatementController.updateBankStatement);
// router.get("/findBankStatementByDate" , bankStatementController.findByDate);
// router.get("/findTotalWithdrawAmount" , bankStatementController.findTotalWithdrawAmount);



module.exports = router;