const {MovieModel} = require('../model/MovieModel.js');

class MovieController {
  constructor() {
    this.create = this.create.bind(this);
    this.index = this.index.bind(this);
    this.show = this.show.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async index() {
    return await MovieModel.findAll();
  }

  async show(id) {
    return await MovieModel.findOne(parseInt(id, 10));
  }

  async create(params) {
    return await MovieModel.save(params);
  }

  async delete(id) {
    return await MovieModel.deleteOne(id);
  }

  async update(params) {
    return await MovieModel.modifyOne(params);
  }
}

module.exports = {MovieController};
