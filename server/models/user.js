const { DataTypes } = require('sequelize');
const sequelize = require('../config/db')

const User = sequelize.define('user', {
  // Model attributes are defined here
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  // Other model options go here
});

module.exports = User;
