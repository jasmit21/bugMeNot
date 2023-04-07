const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bugMeNot', 'bugmenot', 'bugmenot', {
  host: '128.199.23.207',
  dialect:'mysql',
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//pool.qry 
const mysql = require('mysql2');
// const homeController = require('../controllers/homeController');
const pool = mysql.createPool({

    host: "128.199.23.207",
    user: "bugmenot",
    password: "bugmenot",
    database: 'bugMeNot',
    multipleStatements: false,
    connectionLimit : 100,
});
pool.getConnection((err)=>{
    if (err) throw err;    
    console.log("DATABASE CONNECTED!!!");
});

module.exports = sequelize;
// module.exports = ;