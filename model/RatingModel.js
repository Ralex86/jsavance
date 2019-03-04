var mysql = require('mysql');

const config = {
  host: 'localhost',
  database: 'moviedb',
  user: 'root',
  password: 'PASSWORD',
  multipleStatements: true,
};

class Database {
  constructor(config) {
    this.connection = mysql.createConnection(config);
  }

  query(sql, args) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        return resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

class RatingModel {
  constructor(ressource) {
    this.ressource = ressource;
  }

  static save(params) {
    const {rate, movieId} = params;
    const database = new Database(config);
    const sql = `
			insert into Rating(rate, movieId)
			values (${rate},${movieId});`;

    return database.query(sql).then(rows => {
      console.log('database', rows);
      return new RatingModel({
        movieId: movieId,
        rate: rate,
      });
    });
  }
}

module.exports = {RatingModel};
