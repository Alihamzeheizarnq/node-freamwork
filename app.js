const express = require('express');
const path = require('path');
const Env = require('dotenv');
const morgan = require('morgan');
const expressLayouts = require('express-ejs-layouts');
const database = require('./config/database');


global.config = require('./config/path');

// database.connect();

const app = express();


app.use(express.urlencoded({ extended: false }));

Env.config({ path: './.env' });

if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

app.use(express.static(path.resolve('public')));
app.use(express.static(path.resolve('node_modules', 'socket.io', 'client-dist')));




app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'admin/layouts/min');
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)


app.use(require('./routes/web'));
app.use(require('./routes/admin'));








const server = app.listen(process.env.PORT, () => {
    console.log(`server start in localhost:${process.env.PORT} mode=${process.env.NODE_ENV}`);
});
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    socket.on('disconnect', () => {
    });
    socket.on('action', (data) => {
        io.emit('call', { data })
    })
});