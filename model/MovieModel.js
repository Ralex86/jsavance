var mysql = require('mysql');

const config = {
  host: '172.17.0.2',
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

class MovieModel {
  constructor(ressource) {
    this.ressource = ressource;
  }

  static findOne(id) {
    const database = new Database(config);
    const sql = `SELECT m.id, m.title, m.language, m.year, m.genre, d.name, d.birthdate,d.nationality, m.poster FROM Movie m INNER JOIN Director d ON m.directorId = d.id WHERE m.id = ${id}`;
    return database.query(sql).then(rows => {
      return new MovieModel(JSON.stringify(rows));
    });
  }

  static findAll() {
    const database = new Database(config);
    const sql = `SELECT m.id, m.title, m.language, m.year, m.genre, d.name, d.birthdate,d.nationality, m.poster FROM Movie m INNER JOIN Director d ON m.directorId = d.id`;
    return database.query(sql).then(rows => {
      console.log(rows);
      return new MovieModel(JSON.stringify(rows));
    });
  }

  static deleteOne(id) {
    const database = new Database(config);
    const sql = `DELETE FROM Movie WHERE id = ${id}`;
    return database.query(sql).then(rows => {
      console.log('findone', rows);
      return new MovieModel(JSON.stringify(rows));
    });
  }

  static save(params) {
    const {name, birthdate, nationality, title, year, language, genre} = params;
    const database = new Database(config);
    const sql = `insert into Director(name, birthdate, nationality)
values ("${name}","${birthdate}","${nationality}");
		insert into Movie(title, year, language, genre, directorid)
		values ("${title}", "${year}", "${language}","${genre}", last_insert_id())`;

    return database.query(sql).then(rows => {
      console.log('database', rows);
      return new MovieModel({
        name: name,
        birthdate: birthdate,
        title: title,
        year: year,
        language: language,
        genre: genre,
      });
    });
  }

  static modifyOne(params) {
    console.log('modifyOne', params);
    const database = new Database(config);
    const {
      id,
      name,
      birthdate,
      nationality,
      title,
      year,
      language,
      genre,
      poster,
    } = params;
    const sql = `UPDATE Movie 
		SET title="${title}",year="${year}",language="${language}",genre="${genre}", poster="${poster}"
		WHERE Movie.id = ${id};
		`;

    return database.query(sql).then(rows => {
      console.log('database', rows);
      return new MovieModel({
        name: name,
        birthdate: birthdate,
        title: title,
        year: year,
        language: language,
        genre: genre,
        poster: poster,
      });
    });
  }
}

module.exports = {MovieModel};
