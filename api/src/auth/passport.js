//https://www.youtube.com/watch?v=VWEJ-GhjU4U
const passport = require('passport');
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const User = require('../models/User');

passport.use(new StrategyJwt(
    {
        jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken(), 
        secretOrKey: process.env.JWT_SECRET
    },
    async function (jwtPayload, done) {
        const id = jwtPayload.id              
        return await User.findOne({ where: {id: id}})
        .then((user)=>{
            return done(null, user);
        })
        .catch((err)=>{
            return done('deu erro');
         })
    })
)
