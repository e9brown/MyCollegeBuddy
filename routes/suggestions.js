var data = require('../data.json');
/*
 * GET home page.
 */
exports.viewSuggestions = function(req, res){

   var weak = identifyLowest();

   res.render('suggestions', {'data':data, 'lowest':weak}); 
};

function identifyLowest() {
	var categcnt = data["categories"].length;
	var lowestval = 29000;
	var lowest = [];

	for (var i = 0; i < categcnt; i++) {
		var thisval = parseInt(data["categories"][i].score);
		if (thisval < lowestval) {
			//single array entry and update lowestval
			lowest = [(data["categories"][i].category)];
			lowestval = thisval;
		}
		else if (thisval == lowestval) {
			lowest.push(data["categories"][i].category)
		}
	}
	console.log(lowest.toString());

	return lowest;
}



