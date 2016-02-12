var data = require('../data.json');
/*
 * GET home page.
 */
exports.view = function(req, res){
   res.render('index', {
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
      }, data
    ]  
  });
};
