var data = require("../data.json");
/*
 * GET home page.
 */
exports.viewHistory = function(req, res){
   res.render('history',{'data':data});
  
};
