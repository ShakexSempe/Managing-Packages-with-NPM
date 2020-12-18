var express = require('express');
var app = express();
require('dotenv').config();


/*Implement a Root-Level Request Logger Middleware*/
    app.use(function(req, res, next){
        console.log(req.method + " " + req.path + " - " +req.ip)
        next();
    });
/*end of Implement a Root-Level Request Logger Middleware*/

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

/*Serve JSON on a Specific Route*/
// app.get('/json', function(req,res){
//     res.json({
//         "message": "Hello json"
//     });
// });
/*end of Serve JSON on a Specific Route*/

/*Use the .env File*/
app.get("/json" , function(req, res){
    var jsonResponse = { "message": "Hello json" };

    if (process.env.MESSAGE_STYLE === "uppercase"){
        jsonResponse.message = jsonResponse.message.toUpperCase()
    }

    res.json(jsonResponse)
});
/*end of Use the .env File*/

/*Chain Middleware to Create a Time Server*/
function currentTimeString (){
    return new Date().toString();
}
app.get('/now', (req, res, next) => {
    req.time = currentTimeString();
    next();
}, (req, res) => {
    res.json({ time: req.time });
})
/*end of Chain Middleware to Create a Time Server*/

/*Get Route Parameter Input from the Client*/
    app.get('/:word/echo', function(req, res){
        res.json({echo: req.params.word});
    });
/*end of Get Route Parameter Input from the Client*/ 






















module.exports = app;