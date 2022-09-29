const { check,validationResult } = require('express-validator');

module.exports= validator = [
 
    [
        
        
        check('Date','start must be in correct format yyyy-mm-dd')
        .exists()
        .isISO8601('yyyy-mm-dd'),

        check('Narration','Narration cannot be empty')
        .exists()
        .isString(),

        check('referenceNo','reference number cannot be empty')
        .exists()
        .isString(),

        check('withdrawlAmount','minimum withdrawlAmount must be zero or greater than zero')
        .exists()
        .isInt()
        .isLength({min:"0"}),

        check('depositAmount','minimum withdrawlAmount must be zero or greater than zero')
        .exists()
        .isInt()
        .isLength({min:"0"}),

        check('depositAmount','depositAmount is required')
        .exists()
        .isInt()
        .isLength({min:"0"}),


        check('reason','this field is required')
        .exists()
        .isString()
        .trim()
        .isLength({min:"1"}),

     
    ],

    (req, res ,next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }else{
            next();
        }
    }
]


