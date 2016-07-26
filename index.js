var express = require("express")
var app = express()
var mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost/routes")



//Read
app.get("/", function(req, res){
  res.send("<h1>hello world!</h1>")
})

//create
app.get("/", function(req, res){
  res.send("working create")
})

//update
app.get("/:name", function(req, res){
  res.send(req.params.name)
})

//delete
app.put("/:name", function(req, res){
  res.send("working")
})

app.listen(4000, function(){
  console.log("listening on http://localhost:4000/")
})
