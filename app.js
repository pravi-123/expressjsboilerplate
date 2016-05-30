var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var read = require('./routes/read');
var update = require('./routes/update');
var create = require('./routes/create');
var del = require('./routes/delete');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/getJson', read);
app.use('/addMovie', create);
app.use('/updateMovie', update);
app.use('/deleteMovie', del);

/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

module.exports = app;