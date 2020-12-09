var express = require('express');
var app = express();



console.log("Hello World")

/*serve an html file*/ 
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
/*end of serve an html file*/

/*serve static assets*/
app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));
/*end of serve static assets*/






























module.exports = app;