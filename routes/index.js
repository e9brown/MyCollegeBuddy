var data = require('../data.json');
/*
 * GET home page.
 */
exports.view = function(req, res){
   res.render('index', {'data':data});
};

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '759982734106669',
      xfbml      : true,
      version    : 'v2.5'
    });
	var data = require('../data.json');
	FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
	var uid = response.authResponse.userID;
	console.log("JS FB UID: " + uid);
	var newuid = {'uid' : uid}
	data["fbuid"].push(newuid);
	var accessToken = response.authResponse.accessToken;
  }
 });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));