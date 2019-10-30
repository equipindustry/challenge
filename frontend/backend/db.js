const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("db.db");

const get = (query, ...params) =>
  new Promise((resolve, reject) => {
    db.get(query, ...params, (err, row) => {
      if (err) {
        return reject(err);
      }
      resolve(row);
    });
  });

const all = (query, ...params) =>
  new Promise((resolve, reject) => {
    db.all(query, ...params, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });

const run = (query, ...params) =>
  new Promise((resolve, reject) => {
    db.run(query, ...params, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });

run(
  "CREATE TABLE IF NOT EXISTS companies ( \n" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT, \n" +
    "name TEXT NOT NULL, \n" +
    "ruc TEXT NOT NULL, \n" +
    "website TEXT \n " +
    ")"
);

run(
  "CREATE TABLE IF NOT EXISTS users ( \n" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT, \n" +
    "company_id INTEGER, \n" +
    "name TEXT NOT NULL, \n" +
    "email TEXT NOT NULL, \n" +
    "password TEXT NOT NULL \n" +
    ")"
);

run(
  "CREATE TABLE IF NOT EXISTS products ( \n" +
    "id INTEGER PRIMARY KEY AUTOINCREMENT, \n" +
    "company_id INTEGER NOT NULL, \n" +
    "name TEXT NOT NULL, \n" +
    "sku TEXT NOT NULL, \n" +
    "price REAL NOT NULL, \n" +
    "discount REAL NOT NULL \n" +
    ")"
);

run(
  "CREATE TABLE IF NOT EXISTS sessions ( \n" +
    "session_id TEXT PRIMARY KEY NOT NULL, \n" +
    "user_id INTEGER NOT NULL \n" +
    ")"
);

module.exports = { run, get, all };
