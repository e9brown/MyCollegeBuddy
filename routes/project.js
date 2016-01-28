exports.viewProject = function(req, res) {
   res.render('project'); 
   // controller code goes here?
  var name = req.params.name;
  console.log("The project name is: " + name);
};
