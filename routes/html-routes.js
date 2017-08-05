var path = require('path');
var model = require('../model/burger.js');

module.exports = function(app) {

    app.get('/', function(request, response) {

        model.findAll({})
            .then(function(allBurgersData) {
                response.render('index', { allBurgersData });
            })
    });
}