var express = require('express');
var router = express.Router();

var redis = require('../models/redis');
var rts = require('rts')({
	redis: redis,
	gran:'5m',
	points:500,
	prefix:'test'
});

module.exports = function(app){
	app.get("/getStudentMark", function(req, res){
		res.send(222);
	});
}

/* GET users listing. */
// router.get('/', function(req, res, next) {
// 	for(var i = 0; i < 100; i++){
// 		var mark = Math.ceil(Math.random()*100);
// 		rts.record("student", mark, ["avg","max","min"]);
// 	}
// 	res.send("成功");
// });

// router.get('/', function(req, res, next) {
// 	for(var i = 0; i < 100; i++){
// 		var mark = Math.ceil(Math.random()*100);
// 		rts.record("student", mark, ["avg","max","min"]);
// 	}
// 	res.send("成功");
// });

module.exports = router;
