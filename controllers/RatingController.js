const {RatingModel} = require('../model/RatingModel.js');

class RatingController {
  constructor() {
    this.create = this.create.bind(this);
  }

  async create(params) {
    return await RatingModel.save(params);
  }
}

module.exports = {RatingController};
