const dbConfig = require("../configuration/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.database, dbConfig.user,
dbConfig.password, {
	host: dbConfig.host,
	dialect: dbConfig.dialect,
	operationsAliases: false,
	pool: {
	max: dbConfig.pool.max,
	min: dbConfig.pool.min,
	acquire: dbConfig.pool.acquire,
	idle: dbConfig.pool.idle
	}
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorial = require("./tutorial.model")(sequelize, Sequelize);

module.exports = db;


