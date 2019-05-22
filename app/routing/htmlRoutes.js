// dependencies
var path = require("path");

// routing
module.exports = function (app) {

    // route that displays the home page
    app.get("/", function (res, req) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // route that displays the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // if no matching route default to home page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};



