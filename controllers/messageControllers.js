const { getMessages, createMessage } = require('../db/queries');

async function messagesGetAll (req, res) {
    const messages = await getMessages()
    res.render('index', { messages });
};

function messageCreateget (req, res) {
    res.render('form');
};

async function messageCreatePost (req, res) {
    const { user, message } = req.body;
    await createMessage(message, user);
    res.redirect('/');
};

module.exports = { messagesGetAll, messageCreateget, messageCreatePost};