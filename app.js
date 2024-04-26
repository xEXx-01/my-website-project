const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');

const app = express();
const jsonParser = bodyParser.json();
const saltRounds = 10;

var jwt = require('jsonwebtoken');
const secret = 'PETHUBV2.8'

app.use(cors());

// Create the connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mydb'
});

app.post('/register', jsonParser, function (req, res, next) {
    // Hash the password
    bcrypt.hash(req.body.Passwd, saltRounds, function(err, hash) {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Failed to hash password' });
        }
        
        // Store hash in your password DB.
        const { UserID, Username, Email } = req.body;
        const hashedPasswd = hash;

        if (!UserID || !Username || !Email || !hashedPasswd) {
            return res.status(400).json({ status: 'error', message: 'Missing required fields' });
        }

        connection.execute(
            'INSERT INTO USER (UserID, Username, Email, Passwd) VALUES (?,?,?,?)',
            [UserID, Username, Email, hashedPasswd],
            function(err, results, fields) {
                if (err) {
                    return res.status(500).json({ status: 'error', message: err });
                }
                res.json({ status: 'ok' });
            }
        );
    });
});
app.post('/login', jsonParser, function (req, res, next) {
    connection.execute(
        'SELECT * FROM USER WHERE Email=?',
        [req.body.Email],
        function(err, USER, fields) {
            if (err) { 
                res.json({ status: 'error', message: err }); 
                return;
            }
            if (USER.length === 0) {
                res.json({ status: 'error', message: 'No user found' });
                return;
            }
            // Load hash from your password DB.
            bcrypt.compare(req.body.Passwd, USER[0].Passwd, function(err, isLogin) {
                if (isLogin) {
                    var token = jwt.sign({ Email: req.body.Email }, secret);
                    res.json({ status: 'ok', message: 'Login success', token });
                } else {
                    res.json({ status: 'error', message: 'Login failed' });
                }
            });
        }
    );
});
app.post('/authen', jsonParser, function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token, secret);
        res.json({status:'ok',decoded})
    } catch(err) {
        res.json({status:'error', message: err.message})
    }
    
});


app.listen(3333, function () {
    console.log('CORS-enabled web server listening on port 3333');
});
