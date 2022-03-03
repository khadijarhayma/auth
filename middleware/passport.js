const JwtStrategy = require('passport-jwt').Strategy;
     ExtractJwt = require('passport-jwt').ExtractJwt;
    const passport=require("passport");
const user = require('../models/user');

  

const opts = {
jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey : process.env.Secretorkey,
};
passport.use(
    new JwtStrategy(opts,async(jwt_payload,done)=>{
        try {
            const user=(await user.findOne({_id:jwt_payload._id})).Select("-password");
            user?done(null,user):done(null,false);
        } catch (error) {
            console.log(error);
            
        }
    })
);
module.exports = isAuth=()=>{
    passport.authenticate("jwt",{session:false});
};