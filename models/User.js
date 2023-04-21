 const { Model, DataTypes } = require('sequelize');
 const sequelize = require('../database/config');

 class User extends Model {}

 User.init({
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   };
   firstName: {
    type: DataTypes.STRING,
    allowNull: false
   },
   lastName: {
    type: DataTypes.STRING,
    allowNull: false
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
  sequelize,
  modelName: 'User'
});

module.exports = User;
 
