const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('controller', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    controllername: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'controller',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idcontroller",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_controller_name",
        fields: [
          { name: "controllername" },
        ]
      },
    ]
  });
};
