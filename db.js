function dbConnect() {
    // Db connection
const mongoose = require('mongoose');
const url = 'mongodb://localhost/comments'; 

mongoose.connect(url);

const connection = mongoose.connection;
connection.on('error',console.error.bind(console,'error connecting to db'));
connection.once('open', function() {
    console.log('Database connected...')
});

}

module.exports = dbConnect;