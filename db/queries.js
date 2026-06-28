const pool = require('./pool');

function randomColor() {
    const index = Math.floor(Math.random() * colors.length - 1);
    return colors[index];
};

async function getMessages() {
    const { rows } = await pool.query('SELECT * FROM messages;');
    return rows;
};

async function createMessage(message, user) {
    const color = randomColor();
    await pool.query(`
            INSERT INTO messages (text, username, added, color)
            VALUES ('${message}', '${user}', '${new Date()}', '${color}');
        `
    );
};


module.exports = { getMessages, createMessage };