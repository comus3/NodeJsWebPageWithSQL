import bluebird from 'bluebird';
import fs from 'fs';
import mysql from "mysql2";

// Read the content of pwd.txt synchronously
    const passwordContent = fs.readFileSync('pwd.txt', 'utf8');
    //connection base de donnees
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : passwordContent,
        database : 'YOUR DATA BASE EHRE',
        Promise: bluebird
    });
    export default connection

    try {
    connection.connect(function(error){if (error) console.log(error);});
} catch (err) {
  console.error('Error reading pwd.txt:', err);
}
