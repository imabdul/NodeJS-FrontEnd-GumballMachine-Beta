var express = require('express');
var http = require('http');
var router = express.Router();

// Homepage
router.get('/', function(req, res) {
	var output = http.request("http://abdul-nodejs-gumballmachine-v2.cfapps.io/api/gumball", function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title: chunck });
		});
	});
	output.end();
});
//test
//Turn the crank
router.get('/turn', function(req, res) {
	var optionsget = {
    	host : 'abdul-nodejs-gumballmachine-v2.cfapps.io',
    	port : '80',
    	path : '/api/gumball/turn',
    	method : 'PUT' 
	};
	var output = http.request(optionsget, function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title: chunck });
		});
	});
	output.end();
});

//Insert a quarter
router.get('/insrt', function(req, res) {
	var optionsget = {
    	host : 'abdul-nodejs-gumballmachine-v2.cfapps.io',
    	port : '80',
    	path : '/api/gumball/insrt',
    	method : 'PUT' 
	};
	var output = http.request(optionsget, function(response) {
		response.on('data', function (chunck) {
			console.log(chunck);
			res.render('index', { title: chunck });
		});
	});
	output.end();
});

module.exports = router;
