var friendsData = require("../data/friendsData");

// routing
module.exports = function(app) {

    // api GET request
    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    // api POST request
    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
    });

};