var redis = require('../models/redis');
var rts   = require('rts')({
	redis  : redis,
	gran   : '5m, 1h, 2h',
	points : 500,
	prefix : 'test'
});

module.exports = function(app){
	app.get("/", function(req, res){
		res.render("index",{title:"aa"})
	});

	// 插入数据

	app.get("/setDate", function(req, res){
		for(var i = 0; i < 100; i++){
			var amount = Math.ceil(Math.random() * 100);
			rts.record("emoji", amount, ["sum", "max", "min", "avg"]);
		}
		var date = new Date();
		res.send(date.getHours() + ":" + date.getMinutes());
	});


	var date = Date.now();
	var _fromdate = date - 1000*60*60;
	var _todate = date + 1000*60*60;

	// 按条件获取数据
	app.post("/getDate", function(req, res){
		var body = req.body,
			sta  = body.sta || "sum",
			gran = body.gran || "5m",
			todate = parseInt(body.endDate || _todate),
			fromdate = parseInt(body.fromDate || _fromdate);

		switch(sta){
			case "sum":
				rts.sum("emoji", gran, fromdate, todate, function(err, data){
					res.send(data);
				});
				break;
			case "max":
				rts.max("emoji", gran, fromdate, todate, function(err, data){
					res.send(data);
				});
				break;
			case "min":
				rts.min("emoji", gran, fromdate, todate, function(err, data){
					res.send(data);
				});
				break;
			case "avg":
				rts.avg("emoji", gran, fromdate, todate, function(err, data){
					res.send(data);
				});
				break;
			default:
				break;
		}
	});
}
