module.exports = function(app) {
  const baseUrl = '/api/v1/movies';
  const {Movies} = require('../controllers/movie.controller.js');
  var movies = new Movies();

  //	Create a new Movie
  //	curl -X POST -H "Content-Type: application/json" --data "{"id": 1, "title": "mymovie"}" http://localhost:8080/

  app.post(`${baseUrl}`, movies.create);

  // Retrieve all Movie
  app.get(`${baseUrl}`, movies.findAll);

  // Retrieve a single Movie by Id
  app.get(`${baseUrl}/:id`, movies.findOne);

  // Update a Movie with Id
  //app.put(`${baseUrl}/:id`, movies.update);

  //// Delete a Movie with Id
  app.delete(`${baseUrl}/:id`, movies.delete);
};
