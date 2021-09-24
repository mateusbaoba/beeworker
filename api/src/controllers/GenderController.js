const Gender = require("../models/Gender");

module.exports={
    async index(req, res){
        try{
            const gender = await Gender.findAll();
            if(gender){
                return res.json(gender);
            }else{
                return res.status(400).json({"error":"genders not found"});
            }

        }catch(err){
            return res.status(400).json({"error": "there is some error in list genders"})
        }
    },
    async getGenderById(req, res){
        try{
            const {id} = req.params;
            const gender = await Gender.findAll({
                where:{id}
            });
            if(gender){
                return res.json(gender);
            }else{
                return res.json({"400":"genders not found"});
            }

        }catch(err){
            return res.status(400).json({"error": "there is some error in list genders"})
        }
    }

}