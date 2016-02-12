var data = require("../data.json");
/*
 * GET home page.
 */
exports.viewHistory = function(req, res){
   console.log(data.entries);	
   res.render('history',{'data':data});
  
};
