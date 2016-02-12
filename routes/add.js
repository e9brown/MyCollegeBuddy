var data = require('../data.json');

exports.viewAdd = function(req, res) {
   var newEntry = {
		'title' :req.query.name,
	   	'date' :req.query.date,
	   	'edit' :req.query.date,
	   	'category' :req.query.category,
	   }	
   res.render("add", {'data':data});
};
