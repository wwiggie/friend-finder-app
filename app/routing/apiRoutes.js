var friendsData = require("../data/friends");

// routing
module.exports = function(app) {

    // api GET request - displays all friends in JSON format
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // api POST request - used to handle incoming survey results. Also handles compatibility logic
    app.post("/api/friends", function(req, res) {
        console.log(req.body);
    });

};