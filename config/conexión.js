const mysql = require ('mysql')

const conection = mysql.createConnection({
    port: 3306,
    host: "localhost ",
    user: "root",
    password: "1234", 
    database: "test",
    connectionList: 10
})

conection.connect()

conection.query('SELECT 1 + 1 AS solution', function(err, results,fields){
    if(err) throw error;
    console.log("the solution is: ",results[0].solution)
})

conection.end()

module.exports = conection;