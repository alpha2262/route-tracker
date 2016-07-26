var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/routes")

var db = mongoose.connection
var Schema = mongoose.Schema

var StartPlaceSchema = new Schema ({
  name: String,
  street: String,
  zipcode: Number
})

// var EndPlaceSchema = new Schema ({
//   customer: String,
//   paymentId: Number
// })

var Start = mongoose.model("Start", StartPlaceSchema)
// var End = mongoose.model("End", EndPlaceSchema)

var boundary = {name: "Boundary Stone", street: "Florida", zipcode: 20036}

Start.create({name: "axos", street: "3rd", zipcode: 20001}, function (err, start) {
  if(err){
    console.log(err)
  }
  else{
    console.log(start)
  }
})




//checks db actually works
db.on("error", function(err){
  console.log(err)
})

db.once("open", function(){
  console.log("database open")
})
