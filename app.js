const express = require('express');
const path = require('node:path');
const { body } = require('express-validator');

const { messagesGetAll, messageCreateGet, messageCreatePost } = require('./controllers/messageControllers');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const messageValidator = [
    body('user').trim()
        .notEmpty().withMessage('Username field is required')
        .isLength({ min:3, max: 15 }).withMessage('User must be between 3 and 15 characters'),
    body('message').trim()
        .notEmpty().withMessage('Message field must be filled')
];

app.get('/', messagesGetAll);

app.get('/new', messageCreateGet);

app.post('/new', messageValidator, messageCreatePost);

app.all('/{*splat}', (req, res) => {
    res.status(404).send('Page not found!');
});

app.listen(3000, (error) => {
    if (error) return console.log('Failed to start server', error.message);
    console.log('Server started at 3000');
});
