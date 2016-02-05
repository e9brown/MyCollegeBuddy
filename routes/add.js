

exports.viewAdd = function(req, res) {
   res.render("add", {
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
