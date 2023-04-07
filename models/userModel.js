// const sequelize = require('./dbConfig')

const { Sequelize, DataTypes } = require("sequelize");
const dbconnect = require("./dbConfig");


const User = dbconnect.define("userDetails", {
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    }
});



dbconnect.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = User;