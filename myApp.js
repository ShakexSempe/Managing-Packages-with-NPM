var express = require('express');
var app = express();
require('dotenv').config();



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
app.get('/json' , function(req, res){
    if (process.env.MESSAGE_STYLE === 'uppercase'){
        res.json(
            {"message" : "HELLO JSON"}
        )
    } else {
        res.json(
            {"message": "hello json"}
        )
    }
});
/*end of Use the .env File*/


























module.exports = app;