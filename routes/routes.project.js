const { Router } = require('express')
const router = Router()
const sequelize = require('../config/db.config');
var initModels = require("../models/init-models");
const moment = require('moment');
const Op = require('sequelize').Op;

var models = initModels(sequelize);

//комнаты
router.get('/rooms', async (req, res) => {
    models.controller_sensor.findAll({
        attributes: ['room'],
        group: ['room']
    }).then((result) => res.json(result))
})

//сенсор по id
router.get("/sensors/:id", (req, res) =>
    models.sensor.findByPk(req.params.id)
        .then((result) => res.json(result))
);

//какие контроллеры есть
router.get('/controllers', async (req, res) => {
    models.controller.findAll({
        attributes: ['id','controllername','description'],
    }).then((result) => res.json(result))
})

//отображение данных датчиков комнаты 44
router.get("/rooms/44/dataToday", (req, res) =>
    models.controller_sensor.findAll({
        attributes: ['id','id_controller','id_sensor','room'],
        where: { room: '44' },              
        include: {
            model: models.datasensor,
            attributes: ['id', 'date_time', 'data'],           
            where: {
                date_time: { [Op.gt]: moment().format('YYYY-MM-DD 00:00') },
                date_time: { [Op.lte]: moment().format('YYYY-MM-DD 23:59') }
            },           
        },
        order: [['id', 'asc'],[models.datasensor, 'id', 'desc']],
    }).then((result) => res.json(result))
);

//список датчиков конкретного контроллера по его id
router.get("/controllers/:id/controller_sensors", (req, res) =>
    models.controller.findByPk(req.params.id, {
        attributes: ['id','controllername','description'],
        include: {
            model: models.controller_sensor,
            attributes: ['id_sensor'],
            include: {
                model: models.sensor,
                attributes: ['sensorname','mac','description'],
            }
        }
        
    }).then((result) => res.json(result))
);

//список контроллеров вместе с их датчиками
router.get("/controllers_sensors", (req, res) =>
    models.controller.findAll({
        attributes: ['id','controllername','description'],
        include: {
            model: models.controller_sensor,
            attributes: ['id_sensor'],
            include: {
                model: models.sensor,
                attributes: ['sensorname','mac','description'],
            }
        }
        
    }).then((result) => res.json(result))
);



module.exports = router