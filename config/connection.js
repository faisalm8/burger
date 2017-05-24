// MySQL setup connection
var mysql = require('mysql');

var connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'twoboys136',
	database: 'burgers_db'
});

// Making a connection
connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id: ' + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;