"use strict";

var serviceModel = require('./../models/services.model');

exports.services_find_all = async function (_, response, next) {
    try {
        let data = await serviceModel.findAll({
            attributes: ['id', 'name', 'description', 'image', 'cost', 'happyEnd']
        })
        response.json(data)
    } catch (error) {
        next(error)
    }
}

exports.services_find_detail = async function (request, response, next) {
    try {
        let data = await serviceModel.findByPk(request.params.id, {
            attributes: ['id', 'name', 'description', 'image', 'cost', 'happyEnd']
        })
        response.json(data)
    } catch (error) {
        next(error)
    }
}