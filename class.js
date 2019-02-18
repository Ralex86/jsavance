import movies from '../data/movies';

class MovieModel extends BaseModel {

  static afterSave = (movie) => {
    MovieMailer.new(movie).notifyCreate();
  };

  static findOne(id) {
    const movie = movies.filter(movie => movie.id === id);

    return new MovieModel(movie)
  }

  static findAll() {

  }

  
}



class BaseModel {
  constructor(resource) {
    this.resource = resource;
  }

  save(attributes) {


    this.constructor.afterSave(resource);

    return this;
  }
}


export MovieModel;



class MovieController {
  index() {
    const movies = MovieModel.findAll();
    return MovieMapper.map(movies); 
  }

  show(id) {
    const movie = MovieModel.findOne(id)
    return MovieMapper.map(movie);
  }

  create(params) {
    const movie = new MovieModel({ name: 'Titanic' }).save();
    return MovieMapper.map(movie);
  }
}

class MovieForm {
  constructor(params) {
    this.params = params;
  }

  format() {
    return 
  }
}


class MovieMapper extends BaseMapper {
  map() {
    return {
      name: this.resource.name
    }
  }
}

class BaseMapper {
  constructor(resource) {
    this.resource = resource;
  }

  static map(resource) {
    if (isArray(resource))
      return resource.map(oneElement => new(resource).map());
    else
      return new(resource).map();
  }

}
