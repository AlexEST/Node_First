const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sensor', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    sensorname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mac: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sensortype: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sensorpicture: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sensor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idsensor",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_sensorname",
        fields: [
          { name: "sensorname" },
        ]
      },
      {
        name: "idx_sensortype",
        fields: [
          { name: "sensortype" },
        ]
      },
    ]
  });
};
