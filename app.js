const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
dotenv.config({path: './config.env'});
const toDoRouter = require(`${__dirname}/routes/toDoRoutes`);

const app = express();
//// #1 Middleware
if (process.env.NODE_ENV === 'development') { // only logging when in development environment
    app.use(morgan('dev')); // 3rd party middleware that returns a log.
}
app.use(express.json());
app.use((req, res, next) => { // our own middleware function (takes req, res, next as parameters and changes them)
    req.requestTime = new Date().toISOString();
    next(); // for moving to next middleware function in the stack
});

//// #2 Routes
app.use('/api/v1/todos', toDoRouter);

//// #3 Connecting to database
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('DB connection is successful!');
})

//// #4 Start server
const port = 3000;
app.listen(port, () => {
    console.log(`App is running on port ${port}......`);
})

