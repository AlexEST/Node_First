var DataTypes = require("sequelize").DataTypes;
var _controller = require("./controller");
var _controller_sensor = require("./controller_sensor");
var _data_archive = require("./data_archive");
var _datasensor = require("./datasensor");
var _sensor = require("./sensor");
var _sensor_param_constraint = require("./sensor_param_constraint");
var _sensordata = require("./sensordata");
var _tutorials = require("./tutorials");
var _typevalue = require("./typevalue");
var _users = require("./users");
var _usersaction = require("./usersaction");
var _vw_sensor_param_normconstraints = require("./vw_sensor_param_normconstraints");
var _vw_sensorsdata = require("./vw_sensorsdata");

function initModels(sequelize) {
  var controller = _controller(sequelize, DataTypes);
  var controller_sensor = _controller_sensor(sequelize, DataTypes);
  var data_archive = _data_archive(sequelize, DataTypes);
  var datasensor = _datasensor(sequelize, DataTypes);
  var sensor = _sensor(sequelize, DataTypes);
  var sensor_param_constraint = _sensor_param_constraint(sequelize, DataTypes);
  var sensordata = _sensordata(sequelize, DataTypes);
  var tutorials = _tutorials(sequelize, DataTypes);
  var typevalue = _typevalue(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var usersaction = _usersaction(sequelize, DataTypes);
  var vw_sensor_param_normconstraints = _vw_sensor_param_normconstraints(sequelize, DataTypes);
  var vw_sensorsdata = _vw_sensorsdata(sequelize, DataTypes);

  controller_sensor.hasMany(datasensor, {foreignKey: "id_controllersensor"})
  controller_sensor.belongsTo(controller, {foreignKey: "id"})
  controller_sensor.belongsTo(sensor, {foreignKey: "id"})

  datasensor.belongsTo(controller_sensor, {foreignKey: "id"})
  datasensor.belongsTo(typevalue, {foreignKey: "id"})

  typevalue.hasMany(datasensor, {foreignKey: "id_typevalue"})
  controller.hasMany(controller_sensor, {foreignKey: "id_controller"})
  sensor.hasMany(controller_sensor, {foreignKey: "id_sensor"})


  return {
    controller,
    controller_sensor,
    data_archive,
    datasensor,
    sensor,
    sensor_param_constraint,
    sensordata,
    tutorials,
    typevalue,
    users,
    usersaction,
    vw_sensor_param_normconstraints,
    vw_sensorsdata,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
