"use strict";

var bookModel = require('../models/book.model');

exports.book_create = async function (request, response, next) {
    let book = request.body;
    try {
        let data = await bookModel.create({
            name: book.name,
            mail: book.mail,
            date: book.date,
            time: book.time,
            idservice: book.serviceSelected
        })
        response.json(data)
    } catch (error) {
        next(error)
    }
}