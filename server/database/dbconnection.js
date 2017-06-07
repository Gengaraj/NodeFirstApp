import mysql from 'mysql';

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "petclinic"
});

export default con;
