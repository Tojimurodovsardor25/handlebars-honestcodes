const createError = require('http-errors');
const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session)


const indexRouter = require('./routes/index');

const usersRouter = require('./routes/users');
const userRouter = require('./routes/user');
const userSetRouter = require('./routes/setting');
const adminRouter = require('./routes/admin')
const authRouter = require('./routes/auth');


const variables = require('./middleware/virables');
const userVirables = require('./middleware/userVirables')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine('hbs', engine({
  layoutsDir: path.join(__dirname, 'views/layouts'),
  defaultLayout: 'layout',
  extname: 'hbs',
  partialsDir: [path.join(__dirname, 'views/partials')],

  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true,
  }
}))


const store = new MongoStore({
  uri: 'mongodb+srv://tojimuradov:aHUfjDfe7UQGaKLn@hbsmongodbmongoose.7vugm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  collection: 'session'
})

require('./helper/db')()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  resave: false,
  secret: 'some_secret_key',
  saveUninitialized: true,
  store,
  resave: false
}))

app.use('/admin', express.static(path.join(__dirname, 'public')))
app.use('/admin:any', express.static(path.join(__dirname, 'public')))
// app.use('/users', express.static(path.join(__dirname, 'public')))
// app.use('/users:any', express.static(path.join(__dirname, 'public')))

app.use(variables)
app.use(userVirables)

app.use('/users', usersRouter)
app.use('/user', userRouter)
app.use('/userSettings', userSetRouter)
app.use('/', indexRouter);
app.use('/admin', adminRouter)
app.use('/auth', authRouter)

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
