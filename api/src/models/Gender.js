const {Sequelize, Model, DataTypes} = require('sequelize');

class Gender extends Model{
    static init(sequelize){
        super.init({
            gnr_name: {type: DataTypes.STRING, allowNull: false},
            gnr_alias: {type: DataTypes.STRING, allowNull: false},
            createdAt:{field: 'created_at', type: DataTypes.DATE, allowNul:false, defaultValue: sequelize.NOW},
            updatedAt:{field: 'updated_at', type: DataTypes.DATE, allowNul:false, defaultValue: sequelize.NOW}
        },{sequelize, tableName:'genders'})
    }

    static associate(models){
        this.hasOne(models.Gender, {foreignKey: 'id', as :'gender'})
    }
}

module.exports = Gender;