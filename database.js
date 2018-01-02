var mysql = require('mysql');
var con = mysql.createPool({
	host:'localhost',
	user:'root',
	password:'aloha',
	database:'demo'
});
module.exports = con;