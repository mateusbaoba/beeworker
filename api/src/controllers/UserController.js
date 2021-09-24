
//importa a tabela
const User = require('../models/User');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');

module.exports = {   
    async index(req, res) {
        try{
            const user = await User.findAll({
                include:{association:'gender'},
            });
            return res.json(user);
        }catch(err){
            return res.status(400).json('reuqest fail: '+err)
        }
    },

    async login(req,res){
        try{            
            const {usr_mail} = req.body;
            console.log("user mail: "+usr_mail);
            
            const user = await User.findOne({                
                where:{usr_mail: usr_mail}
            });

            if(!user){
                return res.json({message: "User not found"});
            }
            
            const jwt_token = jwt.sign({id: user.id, usr_mail: user.usr_mail}, process.env.JWT_SECRET);
            return res.json({message:"loging succeful! :D", token: jwt_token});
            
        }catch(err){
            return res.status(400).json('no access: '+err);
        }
    },

    async getUserById(req, res){
        try{
            const {id} = req.params;
            const user = await User.findOne(
                {
                    include:{association:'gender'},
                    where:{id}
                }
            )
            return res.json(user);
        }catch(err){
            return res.status(400).json('request fail: '+err);
        }
    },

    async create(req, res){      
        try{    
            const {usr_name, usr_mail, gnr_id, usr_phone, usr_born} = req.body;
            const user = await User.findOne({where:{usr_mail:usr_mail}});
            if(user)
                return res.json({message: "User alread inserted", user});

            const newuser = await User.create({usr_name, usr_mail, gnr_id, usr_phone, usr_born});
            return res.json(newuser);
        }catch(err){
            return res.status(400).json({'onCreateError': err});
        }
    },

    async update(req, res){
        try{  
            const name = req.user.usr_name;
            const {usr_name, usr_mail, gnr_id, usr_phone, usr_born} = req.body;            
            const {id} = req.params;
            const user = await User.update(
                {usr_mail:usr_mail, usr_name:usr_name, gnr_id:gnr_id, usr_phone:usr_phone, usr_born:usr_born}, 
                {where:{id: id}}
            );
            
            const updated = await User.findOne( {
                include:{association:'gender'},
                where:{id}
            });
            return res.json(updated);
        }catch(err){
            return res.status(400).json({'onUpdateError':err})
        }
    },

    async destroy(req, res){
        try{
            const user = await User.destroy({
                where:{
                    id:req.params.id
                }
            });
            return res.json(user);
        }catch(err){
            return res.status(400).json({'onDestroyError':err})
        }
    }


};