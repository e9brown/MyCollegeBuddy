var data = require("../data.json");
/*
 * GET home page.
 */
exports.editentry = function(req, res){
   //console.log(data.entries);	
  var entryid = req.params.id;
  
  res.json(data)
};
