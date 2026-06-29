const { validationResult, matchedData } = require('express-validator');
const { getMessages, createMessage } = require('../db/queries');

async function messagesGetAll (req, res) {
    const messages = await getMessages();
    res.render('index', { messages });
};

function messageCreateGet (req, res) {
    res.render('form');
};

async function messageCreatePost (req, res) {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { message, user } = matchedData(req);
        await createMessage(message, user);
        return res.redirect('/');
    }

    res.render('form', { errors: errors.array() });
};

module.exports = { messagesGetAll, messageCreateGet, messageCreatePost};