'use strict';

let router = require('express').Router();
let db = require('../database');

let selectAllData = (tableName, callback) => {
  db.query('SELECT * FROM ' + tableName, (error, result) => {
    if (error) {
      console.error(error);
      return callback(new Error(error), 400);
    }

    return callback(result.rows, 200);
  });
};

let selectData = (tableName, id, callback) => {
  db.query('SELECT * FROM ' + tableName + ' WHERE id = ' + id, (error, result) => {
    if (error) {
      console.error(error);
      return callback(new Error(error), 400);
    }

    return callback(result.rows[0], 200);
  });
};

let addData = (tableName, data, callback) => {
  let columns = '';
  let values = '';

  for (let key in data) {
    columns += ', ' + key;
    values += '\', \'' + data[key];
  };

  columns = columns.replace(/^,/, '');
  values = values.replace(/^',\W/, '');

  columns = '(' + columns + ')';
  values = '(' + values + '\')';

  let query = 'INSERT INTO ' + tableName + columns + ' VALUES' + values;

  db.query(query, (error, result) => {
    if (error) {
      console.error(error);
      return callback(new Error(error), 400);
    }

    return callback(result, 200);
  });
};

let updateData = (tableName, id, data, callback) => {
  let updateString = '';

  for (let key in data) {
    updateString += ', ' + key + ' = \'' + data[key] + '\'';
  };

  updateString = updateString.replace(/^,\W/, '');

  let query = 'UPDATE ' + tableName + ' SET ' + updateString + ' WHERE id = ' + id;
console.log(query)
  db.query(query, (error, result) => {
    if (error) {
      console.error(error);
      return callback(new Error(error), 400);
    }

    return callback(result, 200);
  });
}


let deleteData = (tableName, id, callback) => {
  let query = 'DELETE FROM ' + tableName + ' WHERE id = ' + id;

  db.query(query, (error, result) => {
    if (error) {
      console.error(error);
      return callback(new Error(error), 400);
    }

    return callback(result, 200);
  });
};

// Lib methods
module.exports.selectAllData = selectAllData;
module.exports.selectData = selectData;
module.exports.addData = addData;
module.exports.deleteData = deleteData;
module.exports.updateData = updateData;
