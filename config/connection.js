var Sequelize = require('sequelize');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

var source = {
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'burgers_db'
    },
    jawsDB: {
        port: 3306,
        host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'tdhmrn6me2l5230w',
        password: 'wryeypxggzz336q5',
        database: 'aemqtep6vfn04h7l'
    }
}

var selectedSource = source.jawsDB;


var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
    host: selectedSource.host,
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

module.exports = sequelize;