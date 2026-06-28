const { Client } = require('pg');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.PORT;
const database = process.env.DATABASE;

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        text VARCHAR (255) NOT NULL,
        username VARCHAR (255) NOT NULL,
        added VARCHAR (255) NOT NULL,
        color VARCHAR (255) NOT NULL
    );

    INSERT INTO messages (text, username, added, color)
        VALUES 
            ('Hello there', 'Armando', '${new Date()}', 'blue'),
            ('Hello Armando', 'Catherine', '${new Date()}', 'red');
`;

async function main() {
    console.log('seeding...');
    const client = new Client({
        connectionString: `postgresql://${username}:${password}@${host}:${port}/${database}`
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done!');
};

main();