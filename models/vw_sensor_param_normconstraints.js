const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vw_sensor_param_normconstraints', {
    controllersensorid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    typevalueid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    valuetype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    max_normvalue: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    min_normvalue: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dimension: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vw_sensor_param_normconstraints',
    schema: 'public',
    timestamps: false
  });
};
