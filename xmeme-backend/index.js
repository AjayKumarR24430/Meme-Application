// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
var cors = require('cors');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/memes', { useNewUrlParser: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8081;

// Use Api routes in the App
app.use((req, res, next) => {
    const allowedOrigins = ['http://127.0.0.1:3000', 'http://localhost:3000', 'http://127.0.0.1:4200', 'http://localhost:4200', 'http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
  });
app.use('/', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running Rest on port " + port);
});