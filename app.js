const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const date = require(__dirname + "/date.js");

var alleeingaben = ["Kaffe", "Bier"];
var workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extende:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  
    res.render("list", {listtitle: date,
                        eingaben:  alleeingaben});
});

app.get("/work",function(req, res){
    res.render("list", {listtitle: "work",
                        eingaben: workItems})
});

app.get("/about", function(req, res){
    res.render("about");
});

/*pp.post("/work", function(req, res){
    workItems.push( req.body.eingabe);
    res.redirect("/work");
});*/

app.post("/", function(req, res){
    console.log(req.body.list);
    console.log ("kKK");
    if (req.body.list === "work"){
        workItems.push(req.body.eingabe);
        res.redirect("/work");
    } else{
        alleeingaben.push( req.body.eingabe);
        res.redirect("/");
    }
    
})



app.listen(3000, function(){
    console.log("Server Manuela läuft..");
});