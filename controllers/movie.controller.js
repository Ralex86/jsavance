const MOVIES = require('../model/movies.js');

class Movies {
  constructor() {
    this.movies = [];

    this.create = this.create.bind(this);
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    //this.update = this.update.bind(this)
    this.delete = this.delete.bind(this);
  }

  findAll(req, res) {
    this.movies = MOVIES.movies;
    console.log('--->Find All: \n' + JSON.stringify(this.movies, null, 4));
    res.end('All movies: \n' + JSON.stringify(this.movies, null, 4));
  }

  // curl -X POST -H "Content-Type: application/json" --data '{"id": 6, "title": "guillaume"}' http://localhost:8080/api/v1/movies
  create(req, res) {
    this.movies = MOVIES.movies;

    var newMovie = req.body;
    this.movies.push(newMovie);
    console.log(
      '--->After Post, movies:\n' + JSON.stringify(this.movies, null, 4),
    );
    res.end('Post Successfully: \n' + JSON.stringify(newMovie, null, 4));
  }

  // curl -X GET http://localhost:8080/api/v1/movies/6
  findOne(req, res) {
    const {id} = req.params;
    // fake database request
    const movie = MOVIES.movies.filter(movie => movie.id == id);
    console.log('--->Find movie: \n' + JSON.stringify(movie, null, 4));
    res.end('Find a Movie:\n' + JSON.stringify(movie, null, 4));
  }

  // curl -X DELETE http://localhost:8080/api/v1/movies/6
  delete(req, res) {
    const {id} = req.params;
    console.log('params', id);

    const deleteMovie = MOVIES.movies.filter(movie => {
      if (movie.id == id) {
        console.log('filter', movie);
        return movie.id;
      }
    });
    this.movies = MOVIES.movies.filter(movie => movie.id != id);
    console.log(
      '--->After deletion, movie list:\n' +
        JSON.stringify(this.movies, null, 4),
    );
    res.end('Deleted movie: \n' + JSON.stringify(deleteMovie, null, 4));
  }
}

module.exports = {Movies};
