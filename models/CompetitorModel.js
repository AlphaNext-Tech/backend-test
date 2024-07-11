const { Model, DataTypes } = require('sequelize');
const sequelize = require('../src/config/database');

class Competitor extends Model {}

Competitor.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  website_traffic: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  top_pages: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Competitor',
});

module.exports = Competitor;
