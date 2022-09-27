const { check, validationResult } = require('express-validator');

module.exports = validate = [

    [
        // check('Narration','narratin must be Email').isInt().isIn('20','40')
        check('Narration','narratin must be number').toBoolean().isLength({min:10 ,max:12}),
    ],

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() });
        } else {
            next();
        }
    }
]



// module.exports = validate = [

//     [
//         body('Narration').isEmpty({ min: 2 }).withMessage('Narration length must be 2 char'),
        
//     ],

//     (req, res, next) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             res.status(400).json({ errors: errors.array() });
//         } else {
//             next()
//         }
//     }
// ]







// module.exports = NarrationValidator = [
//     body('referenceNo',).custom((value ,{req ,res ,next} )=> {
//         console.log(req.body.referenceNo)
//         if(value !== req.body.referenceNo){
           
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
