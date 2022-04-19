const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vw_sensorsdata', {
    controllersensorid: {
      type: DataTypes.INTEGER,
      allowNull: true.valueOf
    },
    sensor: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    room: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    controller: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valuetype: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    data: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dimension: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    typevalueid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sensortype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'vw_sensorsdata',
    schema: 'public',
    timestamps: false
  });
};
