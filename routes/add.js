var data = require('../data.json');

exports.viewAdd = function(req, res) {
   var newEntry = {
		'title' :req.query.name,
	   	'date' :req.query.date,
	   	'edit' :req.query.date,
	   	'category' :req.query.category,
	   }	
   res.render("add", {
    	   data,
    'buttons': [
      { 'name': 'Add Entry',
        'id': 'option1',
	'link': '/add'
      },
      { 'name': 'Previous Entries',
        'id': 'option2',
	'link': '/history'
      },
      { 'name': 'Suggestions',
        'id': 'option2',
	'link':'/suggestions'
      },
      { 'name': 'Login/Logout',
        'id': 'option2',
	'link': '/login'
      },
    ]  
  });
};
