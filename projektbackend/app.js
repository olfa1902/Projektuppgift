// Express, Mongoose and cors is included
let express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose')

// mongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://JSbaseradprojekt:Databas1234@cluster0-nrk6x.mongodb.net/test?retryWrites=true&w=majority';

// Connecttion to mongoDB Atlas
mongoose.connect( MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to: " + error)
  }
)

// Express parsing post-request
const studentAPI = require('../projektbackend/routes/student.route')
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors());

// API
app.use('/api', studentAPI)

// Code for Production of the application
if(process.env.NODE_ENV === 'production'){
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle the application
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404
app.use((req, res, next) => {
  next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});