var express = require('express');
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


const htmlRoutes = require('./controllers/htmlroutes');
app.use(htmlRoutes);

const apiRoutes = require('./controllers/api');
app.use(apiRoutes);

app.listen(PORT, function () {
    console.log('App listening on PORT ' + PORT);
});
