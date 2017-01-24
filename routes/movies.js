var express = require('express');
var mongoose = require('mongoose');
var Movie = mongoose.model('Movie');
var router = express.Router();

/* GET movie listings. */
router.get('/', function(req, res) {
  Movie.find(function (err, movies) {
    res.render('movies', { movies: movies});
  });
});

/* GET a specific movie*/
router.get('/:id', function(req,res){
	Movie.findBYID(req.params.id, function(err, movie){
		res.render('movie', { movie:movie});
	});
})

/* Edit a Movie */
router.post('/edit/:id', function(req, res){
	Movie.findByID(req.params.id, function(err, movie) {
		movie.title = req.body.title;
		movie.description = req.body.description;
		movie.updated_at = Date.now();
		movie.save(function(err,movie){
			res.redirect('/movies');
		});
	});
});

/* POST add movie. */
router.post('/' function(req, res) {
  new Movie({
  	title: req.body.title
  	description: req.body.description,
  	updated_at: Date.now()
  }).save(function (err, movie) {
  	res.redirect('/movies');
  });
});


/* Delete a movie*/
router.post('/id', function(req,res){
	Movie.findByID(req.params.id, function(err,movie){
		movie.remove(function(err,movie){
			res.redirect('/movie');
		});
	});
});





