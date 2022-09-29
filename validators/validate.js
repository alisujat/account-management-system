const { check, validationResult } = require('express-validator');

module.exports = validate = [
 
    [
        // check('Narration','narratin must be Email').isInt().isIn('20','40')
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

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        } else {
            next()
        }
    }
]



module.exports = DeleteValidation = [

    [
        check('referenceNo','referenceNo is required')
        .exists()
        .isString()
        .isLength({ min: 5 })
        
    ],

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        } else {
            next()
        }
    }
]







// module.exports = NarrationValidator = [
//     check('referenceNo',).custom((value ,{req ,res ,next} )=> {
//         console.log(req.check.referenceNo)
//         if(value !== req.check.referenceNo){
           
//             console.log("dddd")
//             return res.status(201).json({message: "Reference Number is not match please enter valid Reference Number"})
//         }else{
//             next();
//         }
//         // return User.findUserByEmail(value).then(user => {
//         //   if (user) {
//         //     return Promise.reject('E-mail already in use');
//         //   }
//         // });
//       }),
//     //   (req, res , next) => {
//     //     // Handle the request
//     //   },
// ]
