
// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const movies = require('../models/movie.model');


router.get('/create', (req, res, next) => {
    res.render('movies/new-movies.hbs')
})


router.post('/create', (req, res, next) => {
    movies.create({
        title: req.body.title,
        genre: req.body.genre,
        plot:  req.body.plot,
        cast: req.body.cast,
    })
    .then((createmovies) => {
        console.log(createmovies)
        res.redirect('/movies')
    })
    .catch((err) => {
        console.log(err)
    })
})



router.get('/', (req, res, next) => {
    movies.find()
    .then((foundmovies) => {
        res.render("movies/movies.hbs", {
            foundmovies
        })
    })
})


module.exports = router;