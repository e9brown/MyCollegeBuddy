
/*
 * GET home page.
 */
exports.viewSuggestions = function(req, res){
   res.render('suggestions', {
    'buttons': [
      { 'name': 'nothing yet',
        'id': 'option1'
      },
    ]  
  });
};
