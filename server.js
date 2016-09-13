// Create an Express app
// Example:
// console.log("Welcome to Intro to Node!");
// var fs = require("fs");
// fs.readFile('input.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("Program Ended");
//
// https://expressjs.com/en/starter/hello-world.html
var express = require('express');
var app = express();
// require body-parser
var bodyParser = require('body-parser');

// Set template engine to Jade
// http://jade-lang.com/
// https://expressjs.com/en/guide/using-template-engines.html
var jade = require('jade');
app.set('views', './views')
app.set('view engine', 'jade');

// Define controllers to handle routes
var homeCtrl = require('./controllers/homeCtrl.js');
var apiCtrl = require('./controllers/apiCtrl.js');
var dinosaurCtrl = require('./controllers/dinosaurCtrl.js');

// Define static routes to serve static assets like images, styles, etc.
// https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(express.static('node_modules'));
// use bodyParser with express
app.use(bodyParser.json());

// Define page routes to specify which URLs will be handled by which controllers
app.get('/', homeCtrl.home);
app.get('/about', homeCtrl.about);
app.get('/api/dinosaurs', apiCtrl.dinosaurs);
app.post('/api/dinosaurs', apiCtrl.addDinosaurs);

// Define API routes to serve up application data
app.get('/dinosaurs', dinosaurCtrl.all);

// Define a catch-all 404 route
// https://expressjs.com/en/guide/routing.html
app.get('/*', homeCtrl.noRoute);

// Start your Express app up on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
