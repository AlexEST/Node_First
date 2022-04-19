const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sensor_param_constraint', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    controllersensor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    typevalue: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    max_value: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    min_value: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    max_normvalue: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    min_normvalue: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sensor_param_constraint',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "sensor_param_constraint_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
