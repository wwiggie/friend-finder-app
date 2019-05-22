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
require("../routing/apiRoutes")(app);
require("../routing/htmlRoutes")(app);

// starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});




//---------DATA portion to be saved in friends.js---------
var friends = [
    {
        "name": "Agi",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1 
        ]
    }
];
//--------------------------------------------------------

//---------Routes to move to htmlRoutes.js----------------
// route that displays the home page
app.get("/", function(res, req) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// route that displays the survey page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});
//--------------------------------------------------------

//---------Routes to move to apiRoutes.js-----------------
// route that displays all friends in JSON format
app.get("/api/friends", function(req, res) {
    return res.json(friends);
});

// route used to handle incoming survey results. Also handles compatibility logic.
app.post("/api/friends", function(req, res) {
    var newfriend = req.body;
    console.log(newfriend);
});
//--------------------------------------------------------

