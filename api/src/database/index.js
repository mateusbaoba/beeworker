
const Sequelize = require('sequelize');
const dbdata =    require('../config/database.js');

const Gender = require('../models/Gender');
const User = require('../models/User');

const connection = new Sequelize(dbdata);

Gender.init(connection);
User.init(connection);

Gender.associate(connection.models);
User.associate(connection.models);

module.exports = connection;