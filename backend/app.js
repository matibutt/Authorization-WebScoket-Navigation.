var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var evetsRouter = require('./routes/events')




var app = express();

//initialize of websocket.
var socket = require('socket.io');
var server = app.listen(8080, function(){
  console.log('Web socket is running on port 8080.');
});
//socket setup.
var io = socket(server);
//listen for new connection and print a message in of typing.
io.on('connection', (socket) => {
  console.log(`New connection ${socket.id}`);
  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });
  socket.on('typing', function(data){
    io.sockets.emit('typing', data);
  });
});


//cors setup here.
cors = require('cors');
app.use(cors({
  origin: ['http://localhost:4200', 'http://127.0.0.1:4200'],
  credentials: true
}))

//mongoose setup
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://userMati:userMati@thd.rxjvy.mongodb.net/myDB?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/event', evetsRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
