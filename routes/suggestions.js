var data = require('../data.json');
/*
 * GET home page.
 */
exports.viewSuggestions = function(req, res){
   res.render('suggestions', {'data':data});
};
