
/*
 * GET home page.
 */
exports.viewHistory = function(req, res){
   res.render('history', {
    'buttons': [
      { 'name': 'nothing yet',
        'id': 'option1'
      },
    ]  
  });
};
