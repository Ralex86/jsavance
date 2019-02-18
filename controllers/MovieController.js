const {MovieModel} = require('../model/MovieModel.js');

class MovieController {
  constructor() {
    //this.create = this.create.bind(this);
    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
    //this.update = this.update.bind(this)
    //this.delete = this.delete.bind(this);
  }

  async index() {
    return await MovieModel.findAll();
  }

  // curl -X GET http://localhost:8080/api/v1/movies/6
  async show(id) {
    return await MovieModel.findOne(parseInt(id, 10));
  }

  async create(params) {
    return await MovieModel.save(params);
  }

  // curl -X POST -H "Content-Type: application/json" --data '{"id": 6, "title": "guillaume"}' http://localhost:8080/api/v1/movies
  //create(req, res) {
  //this.movies = MOVIES.movies;

  //var newMovie = req.body;
  //this.movies.push(newMovie);
  //console.log(
  //'--->After Post, movies:\n' + JSON.stringify(this.movies, null, 4),
  //);
  //res.end('Post Successfully: \n' + JSON.stringify(newMovie, null, 4));
  //}

  // curl -X DELETE http://localhost:8080/api/v1/movies/6
  //delete(req, res) {
  //const {id} = req.params;
  //console.log('params', id);

  //const deleteMovie = MOVIES.movies.filter(movie => {
  //if (movie.id == id) {
  //console.log('filter', movie);
  //return movie.id;
  //}
  //});
  //this.movies = MOVIES.movies.filter(movie => movie.id != id);
  //console.log(
  //'--->After deletion, movie list:\n' +
  //JSON.stringify(this.movies, null, 4),
  //);
  //res.end('Deleted movie: \n' + JSON.stringify(deleteMovie, null, 4));
  //}
}

module.exports = {MovieController};
