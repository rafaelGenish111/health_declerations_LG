const mysql = require('mysql2');
require('dotenv').config();

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE

const handleDisconnect = () => {
    const db = mysql.createConnection({
        host,
        port,
        user,
        password,
        database
    });

    db.connect(err => {
        if (err) {
            console.error('Error reconnecting to MySQL: ', err)
            setTimeout(handleDisconnect, 2000)
        } else {
            console.log('Reconnected to MySQL!');
        }
    });

    db.on('error', err => {
        console.error('MySQL error: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect()
        } else {
            throw err;
        }
    });
    return db
};

const db = handleDisconnect()

const Query = (q, params) => {
    return new Promise((resolve, reject) => {
        db.query(q, params, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        });
    });
};

module.exports = Query;