var db = require("../models");

// get route -> index
module.exports = function(app){
  app.get("/", function (req, res){
    res.redirect("/burgers");
  });


app.get("/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  db.burger.findAll({}).then(function(burgerData) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    var hbsObjest = {
      burgers: burgerData
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// post route -> back to index
app.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  db.burger.create ({
    burger_name: req.body.burger_name
    
     }).then(function() {
      res.redirect("/burgers")
     });
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
   
});

// put route -> back to index
app.put("/burgers/update/:id", function(req, res){
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  db.burgers.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: condition
    }
  }).then(function(){
      res.redirect("/burgers");

  });
});
};







