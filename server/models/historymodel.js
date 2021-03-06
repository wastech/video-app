var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HistorySchema = new Schema({
	title: String,
	description: String,
	image: String,
	category: String,
	author: String
});

var History = mongoose.model("History", HistorySchema);
module.exports = History;
