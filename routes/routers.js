var dashboard = require("./dashboard"),
	custom    = require("./custom");
	index     = require("./index");

module.exports = function(app){
	index(app);
	// dashboard(app);
	// custom(app);
}