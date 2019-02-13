module.exports = function(app) {
  const baseUrl = '/api/v1/movies';
  const {Movies} = require('../controllers/movie.controller.js');
  var movies = new Movies();

  // Create a new Customer
  //app.post(`${baseUrl}`, movies.create);

  // Retrieve all Customer
  app.get(`${baseUrl}`, movies.findAll);

  // Retrieve a single Customer by Id
  //app.get(`${baseUrl}/:id`, movies.findOne);

  //// Update a Customer with Id
  //app.put(`${baseUrl}/:id`, movies.update);

  //// Delete a Customer with Id
  //app.delete(`${baseUrl}/:id`, movies.delete);
};
