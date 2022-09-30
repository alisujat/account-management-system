const { check,validationResult } = require('express-validator');

module.exports= validator = [
 
    
        
        
        check('Date')
        .exists()
        .isISO8601('yyyy-mm-dd')
        .withMessage('start must be in correct format yyyy:mm:dd'),
        // .isISO8601('yyyy-mm-dd').withMessage("start must be in correct format yyyy-mm-dd"),

        check('Narration')
        .exists().withMessage("required")
        .isString().withMessage("please enter String"),

        check('referenceNo')
        .exists().withMessage("required")
        .isString().withMessage("please enter String"),

        check('withdrawlAmount')
        .exists().withMessage("required")
        .isInt().withMessage("please enter Numaric value  ")
        .isLength({min:"0"}),

        check('depositAmount')
        .exists().withMessage("required")
        .isInt().withMessage("please enter Numaric value  ")
        .isLength({min:"0"}),

        check('depositAmount')
        .exists().withMessage("required")
        .isInt().withMessage("please enter Numaric value  ")
        .isLength({min:"0"}),


        check('reason')
        .exists().withMessage("required")
        .isString().withMessage("please enter string  ")
        .trim()
        .isLength({min:"1"}),


    (req, res ,next) => {
        // console.log("ddd")
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }else{
            next();
        }
    }
]


