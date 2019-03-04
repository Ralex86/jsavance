module.exports = function(app) {
  const baseUrl = '/api/v1';
  const {MovieController} = require('../controllers/MovieController.js');
  var movie_controller = new MovieController();

  //curl -X GET http://localhost:3000/api/v1/movies/

  //curl -X GET http://localhost:3000/api/v1/movies/11

  //curl -X POST -H "Content-Type: application/json" --data '{"name": "guillaume", "birthdate": "2015-01-01", "nationality": "french", "title": "muscu", "year": "2019-01-01", "language": "french", "genre": "documentaire"}' http://localhost:3000/api/v1/movies

  //curl -X DELETE http://localhost:3000/api/v1/movies/11

  //curl -X PUT -H "Content-Type: application/json" --data '{"id": 10, "name": "cocohon", "birthdate": "2018-01-01", "nationality": "french", "title": "sex", "year": "2029-01-01", "language": "french", "genre": "documentaire"}' http://localhost:3000/api/v1/movies/

  app.post(`${baseUrl}/movies`, async (req, res) => {
    const movie = await movie_controller.create(req.body);
    await res.end(JSON.stringify(movie.ressource));
  });

  app.post('/poster', async (req, res) => {
    const {poster, ...rest} = JSON.parse(req.body.movie);
    const filename = req.file.filename;
    const params = {
      poster: filename,
      ...rest,
    };
    const movie = await movie_controller.update(params);
    await res.end(JSON.stringify(movie.ressource));
  });

  app.get(`${baseUrl}/movies`, async (req, res) => {
    console.log('hey');
    const movies = await movie_controller.index();
    await res.end(movies.ressource);
  });

  app.get(`${baseUrl}/movies/:id`, async (req, res) => {
    const {id} = req.params;
    const movie = await movie_controller.show(id);
    await res.end(movie.ressource);
  });

  app.put(`${baseUrl}/movies`, async (req, res) => {
    console.log('put', req.body);
    const movie = await movie_controller.update(req.body);
    await res.end(JSON.stringify(movie.ressource));
  });

  app.delete(`${baseUrl}/movies/:id`, async (req, res) => {
    const {id} = req.params;
    const movie = await movie_controller.delete(id);
    await res.end(movie.ressource);
  });
};
