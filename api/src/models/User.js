const sequelize = require('sequelize');
const {Model,DataTypes, Sequelize} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            usr_name: {type: DataTypes.STRING, allowNul:false},
            usr_mail: {type: DataTypes.STRING, allowNul:false},
            usr_phone: {type: DataTypes.STRING, allowNul:false},
            usr_born: {type: DataTypes.DATE, allowNul:false},
            createdAt:{field: 'created_at', type: DataTypes.DATE, allowNul:false, defaultValue: sequelize.NOW},
            updatedAt:{field: 'updated_at', type: DataTypes.DATE, allowNul:false, defaultValue: sequelize.NOW}
        },{
            sequelize,
            tableName: 'users'
        });
        console.log("user initialized");        
    };

    static associate(models){
        this.belongsTo(models.Gender, {foreignKey:'gnr_id', as:'gender'});
    }

}

module.exports = User;
