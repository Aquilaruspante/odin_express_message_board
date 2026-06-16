const express = require('express');
const path = require('node:path');

const messages = [
    {
        text: 'Hello there',
        user: 'Armando',
        added: new Date()
    },
    {
        text: 'Hi Armando',
        user: 'Catarina',
        added: new Date()
    }
];

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { messages });
});

app.get('/new', (req, res) => {
    res.render('form');
});

app.post('/new', (req, res) => {
    const { user, message } = req.body;
    messages.push({ text: message, user, added: new Date() });
    res.redirect('/');
});

app.all('/{*splat}', (req, res) => {
    res.status(404).send('Page not found!');
});

app.listen(3000, (error) => {
    if (error) return console.log('Failed to start server', error.message);
    console.log('Server started at http://127.0.0.1:3000');
});
