const mongoose = require('mongoose');

// Specify the URI for your local MongoDB instance
const localMongoURI = 'mongodb://localhost:27017/ecommerceDB'; // Replace with your database name

// Connect to the local MongoDB instance
mongoose.connect(localMongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Add this option for the latest version of Mongoose
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));

db.once('open', function () {
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;
