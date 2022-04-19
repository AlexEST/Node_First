const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('typevalue', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    valuetype: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dimension: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'typevalue',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "typevalue_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
