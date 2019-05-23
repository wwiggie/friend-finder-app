// dependencies
var express = require("express");
// TODO: does path need to be in this file? or just htmlRoutes.js?
var path = require("path");

// set up the express app
var app = express();
var PORT = process.env.PORT || 8080;

// set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router to other routes.js files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});