'use strict';

var data = require("../public/data.json");
/*
 * GET home page.
 */
exports.remove = function(req, res){
   //console.log(data.entries);	
  var entryid = req.query.entrytitle;
  deleteEntry(entryid);
  console.log(entryid);
  console.log("removed entry");
  res.redirect('/history');
};



function deleteEntry(title) {
	var totalentries = data["entries"].length;
	for (var i = 0; i < totalentries; i++){
		if (data["entries"][i].title == title) {
			decrementScore(data["entries"][i].category);
			data["entries"].splice(i,1);
			console.log('DELETE');
			return;
		}
	}
}

function decrementScore(categorytoupdate) {
	var totalcategories = data["categories"].length;
	for (var i = 0; i < totalcategories; i++) {
		if (data["categories"][i].category == categorytoupdate) {
			console.log("", data["categories"][i].score)
			data["categories"][i].score--;
			console.log("", data["categories"][i].score)
			return;

		}
	}

}
