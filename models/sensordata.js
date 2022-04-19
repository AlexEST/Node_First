const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sensordata', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    controllersensorid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sensor: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    room: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    controller: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    valuetype: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    data: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    dimension: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    typevalueid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    sensortype: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sensordata',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "sensordata_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
