const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.sequelize = sequelize; 
db.Sequelize = Sequelize;

db.Mala = require('./mala')(sequelize, Sequelize)
db.Rice = require('./rice')(sequelize, Sequelize)
db.Level = require('./level')(sequelize, Sequelize)



/** 1: N 관계 User와 Post */


/** N: M    User : Post => Like */




module.exports = db;
