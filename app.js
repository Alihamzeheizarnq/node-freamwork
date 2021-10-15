const express = require('express');
const path = require('path');
const Env = require('dotenv');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session')
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const MemoryStore = require('memorystore')(session)


const methodOverride = require('method-override')

const database = require('./config/database');

global.config = require('./config/path');
global.app = require('./config/helpers');
const { setUsermiddleware } = require('./app/http/middleware/setUserMiddleware');

database.connect();

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));


Env.config({ path: './.env' });

app.use(cookieParser(process.env.SECRET))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: new Date(Date.now() + 86400000) },
    store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
    }),
}));
app.use(flash());



if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}



app.use(express.static(path.resolve('public')));
app.use(express.static(path.resolve('node_modules', 'socket.io', 'client-dist')));
app.use(express.static(path.resolve('node_modules', 'font-awesome')));





app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'admin/layouts/min');
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)



app.use((req, res, next) => {
    res.locals.message = req.flash();
    res.locals.old = res.locals.message.old;
    next();
})
app.use(setUsermiddleware);
app.use(require('./routes/web'));
app.use(require('./routes/admin'));



app.get('*', (req, res, next) => {
    res.status(404);
    res.render('errors/404', { layout: 'errors/main', title: 'not found' });
})





const server = app.listen(process.env.PORT, () => {
    console.log(`server start in localhost:${process.env.PORT} mode=${process.env.NODE_ENV}`);
});
const io = require('socket.io')(server);


io.on('connection', (socket) => {
    socket.on('disconnect', () => {
    });
    socket.on('action', (data) => {
        io.emit('call', { data })
    });
});