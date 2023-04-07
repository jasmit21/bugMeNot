const { Model, DataTypes } = require('sequelize');

class User extends Model {}
User.init({
  // attributes
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobile:{
    type:DataTypes.NUMBER,
    allowNull:false,    
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // options
  sequelize,
  modelName: 'user'
});

sequelize.sync();

const newUser = await User.create({
    firstName: 'John',
    lastName: 'Doe',
    mobile:9076323541,
    email: 'johndoe@example.com',
    password: 'secret'
  });
  