const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    prot: conf.port,
    database: conf.database
});

connection.connect();

app.get('/api/customers', (req,res)=>{
    connection.query("select * from customer", (err, rows, fields)=>{
        res.send(rows);
    })
});

app.listen(PORT,()=>console.log(`✅Listening on port ${PORT}`));