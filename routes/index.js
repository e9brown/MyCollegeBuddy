
/*
 * GET home page.
 */
exports.view = function(req, res){
   res.render('index', {
    'projects': [
      { 'name': 'Add Experience',
        //'image': 'lorempixel.people.1.jpeg',
        'id': 'project1'
      },
      { 'name': 'Lookup or Edit Experience',
        //'image': 'lorempixel.city.1.jpeg',
        'id': 'project2'
      },
    ]  
  });
};
