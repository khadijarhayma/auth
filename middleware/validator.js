

const {check,validationResult} =require("express-validator");


exports.registerRules=()=>
    [
        check("name","name is required").notEmpty(),
        check("lastname","lastname is required").notEmpty(),
        check("email","email is required").notEmpty(),
        check("email","check your email again").isEmail(),
        check("password","password is required").isLength({min:7,max:15}),
    ];

exports.loginRules=()=>
    [

        check("email","email is required").notEmpty(),
        check("email","check your email again").isEmail(),
        check("password","password must be between 7 characters and 15 caracters ").isLength({min:7,max:30}),
    ];

exports.validation =(req,res,next)=>{ 
const errors=validationResult(req);
if (!errors.isEmpty()){
    return res.status(400).send({errors:errors.array().map((el)=>({msg:el.msg})),});
}
next();
};