
/*
 * GET home page.
 */
exports.view = function(req, res){
   res.render('index', {
    'projects': [
      { 'name': 'Add Experience',
        //'image': 'lorempixel.people.1.jpeg',
        'id': 'option1'
      },
      { 'name': 'Experience History',
        //'image': 'lorempixel.city.1.jpeg',
        'id': 'option2'
      },
    ]  
  });
};
