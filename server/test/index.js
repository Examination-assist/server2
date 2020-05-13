var mysql = require('mysql')
var connection = mysql.createConnection({
	host: '0.tcp.ngrok.io',
	port: '11641',
	user: 'root',
	password: 'password',
	database: 'formbuilder',
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	if (error) throw error
	console.log('The solution is: ', results[0].solution)
})

connection.end()
