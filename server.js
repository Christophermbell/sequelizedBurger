var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');


var app = express();

var PORT = process.env.PORT || 3000;
app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//access to public files
app.use(express.static(__dirname + '/public'));
//using method-override
app.use(methodOverride('_method'));
//setting up handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');



require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});