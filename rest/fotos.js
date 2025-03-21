var express = require('express');
var router = express.Router();

const { Sequelize, Op } = require('sequelize');
const Foto = require('../models').foto;
const Etiqueta = require('../models').etiqueta;

router.get('/fotos/findAll/json',
function(req, res, next) {
    Foto.findAll({
        attributes: { exclude:
        ["updatedAt", "createdAt"] } ,
        include: [{
            model: Etiqueta,
            attributes: ['texto'],
            through: {attributes: []}
        }],
    })
    .then(fotos => {
        res.json(fotos);
    })
    .catch(error =>
        res.status(400).send(error))
});

router.get('/fotos/findById/:id/json', function(req, res,
    next) {
        let id = parseInt(req.params.id);
        Foto.findAll({
            attributes: { exclude: ["updatedAt",
            "createdAt"] } ,
            include: [{
                model: Etiqueta,
                attributes: ['texto'],
                through: {attributes: []}
            }],
            where: {
                [Op.and]: [
                    {id: id}
                ]
            }
        })
        .then(fotos => {
            res.json(fotos);
        })
            .catch(error => res.status(400).send(error))
    });

router.post('/fotos/save', function(req, res, next) {
    let {titulo, descripcion,
    calificacion,ruta} = req.body;
    Foto.create({
        titulo: titulo,
        descripcion: descripcion,
        calificacion: parseFloat(calificacion),
        ruta: ruta,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(foto => {
        res.json(foto);
    })
    .catch(error =>
        res.status(400).send(error))
});
module.exports = router;
