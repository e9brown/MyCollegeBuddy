var data = require('../data.json');

exports.viewAdd = function(req, res) {
   var newEntry = {
		'title' :req.query.title,
	   	'date' :req.query.date,
	   	'edit' :req.query.date,
	   	'category' :req.query.category,
	   }	
   console.log(newEntry);
   data["entries"].push(newEntry);
   res.render("add", {'data':data});
};
