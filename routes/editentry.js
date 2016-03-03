'use strict';

var data = require("../public/data.json");
/*
 * GET home page.
 */
exports.edit = function(req, res){
   //console.log(data.entries);	
  var entryid = req.params.id;
  console.log(entryid);
  console.log("edit an entry");
  res.redirect('/history'); 
};
