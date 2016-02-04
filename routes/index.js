
/*
 * GET home page.
 */
exports.view = function(req, res){
   res.render('index', {
    'buttons': [
      { 'name': 'Add Experience',
        'id': 'option1'
      },
      { 'name': 'Experience History',
        'id': 'option2'
      },
    ]  
  });
};
