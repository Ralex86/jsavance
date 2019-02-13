const MOVIES = require('../model/movies.js');

class Movies {
  constructor() {
    this.movies = MOVIES;

    //this.create = this.create.bind(this)
    this.findAll = this.findAll.bind(this);
    //this.findOne = this.findOne.bind(this)
    //this.update = this.update.bind(this)
    //this.delete = this.delete.bind(this)
  }

  findAll(req, res) {
    console.log('--->Find All: \n' + JSON.stringify(this.movies, null, 4));
    res.end('All movies: \n' + JSON.stringify(this.movies, null, 4));
  }
}

module.exports = {Movies};
