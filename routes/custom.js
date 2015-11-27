module.exports = function(app){
	app.get("/custom", function(req, res){
		res.render("custom", {});
	});
}