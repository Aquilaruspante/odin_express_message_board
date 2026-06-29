const { Client } = require('pg');

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
        connectionString: process.env.DATABASE_URL
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log('done!');
};

main();