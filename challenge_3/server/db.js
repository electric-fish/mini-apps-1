var mysql = require('mysql');
const options = {
  user: 'student',
  password: 'student',
  database: 'checkedoutuser'
};

const connection = mysql.createConnection(options);
connection.connect();

module.exports = connection;