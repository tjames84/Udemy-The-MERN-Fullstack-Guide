// Third party exports
const express = require('express');
const bodyParser = require('body-parser');

// imports that you create
const placesRoutes = require('./routes/places-routes');

const app = express();

app.use(placesRoutes);


app.listen(5000);