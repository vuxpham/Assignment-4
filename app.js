const express = require('express');
const bodyParser = require('body-parser');

const names = [];

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res, next) => {
	res.render('main', {pageTitle: 'Main'});
});

app.get('/users', (req, res, next) => {
	res.render('users', {pageTitle: 'Users', names: names});
});

app.post('/a', (req, res, next) => {
	names.push({name: req.body.username});
	res.redirect('/users');
});

app.listen(3000);