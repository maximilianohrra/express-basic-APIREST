const express = require('express');
const morgan = require('morgan');
const app = express();

// settings - default port
app.set('port', process.env.PORT || 4000);
app.set('json spaces',2);

// middlewares 
app.use(morgan('dev'));//or normally 'combined'
app.use(express.urlencoded({extended: false})); //forms 
app.use(express.json());

// routes
app.use(require('./routes'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
