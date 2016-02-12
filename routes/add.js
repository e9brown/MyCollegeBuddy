'use strict';


var data = require('../data.json');

exports.viewAdd = function(req, res) {
   //console.log(req.query);
    var newEntry = {
		'title' :req.query.title,
	   	'date' :req.query.date,
	   	'edit' :req.query.date,
	   	'category' :req.query.category,
		'description' :req.query.description
	   }	
    //console.log(newEntry);
    console.log(validateForm(newEntry));
    if( validateForm(newEntry) ){
   		data["entries"].push(newEntry);
   	}
   	res.render("add", {'data':data});
};

function validateForm(entry) {
    if (entry.title == "" || entry.title == null
    	|| entry.category == "" || entry.category == null){
    	console.log("Title and Category are required fields.")
    	//$(".alert").html('<p>The field above is required to submit. </p>');
    	//validateMessage();
    	return false;
    }
    else return true;
};

/* $(document).read(function(){
	intializePage();
})
function initialzePage(){
	$('.submit').click(validateMessage);
} */

/*function validateMessage(){
	$(".alert").html('<p>The field above is required to submit. </p>');
}*/
