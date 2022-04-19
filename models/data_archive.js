const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('data_archive', {
    controllersensorid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
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
    hour_avg: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    dimension: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'data_archive',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "data_archive_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "inx_datetime",
        fields: [
          { name: "date_time" },
        ]
      },
    ]
  });
};
