const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controller_sensor', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_controller: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_sensor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    room: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dateInstall: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_DATE')
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'controller_sensor',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idcs",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_room",
        fields: [
          { name: "room" },
        ]
      },
    ]
  });
};
