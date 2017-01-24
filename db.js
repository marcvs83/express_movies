var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var Movie = new Schema({
	title : String,
	description : String, 
	updated_at : Date
});

mongoose.model ('Movie', Movie);
mongoose.connect('mongodb:/localhost/express_movies');
