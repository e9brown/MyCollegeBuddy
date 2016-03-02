var data = require('../public/data.json');

exports.viewLogin = function(req, res) {
   res.render("login", {'data':data}); 
};
