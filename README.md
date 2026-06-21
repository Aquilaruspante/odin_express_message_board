# Mini Message Board

A simple in-memory message board built with Node.js and Express, as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board) curriculum.

## Features

- View all messages with author and timestamp
- Post new messages via a form
- Messages persist in RAM (no database)

## Routes

| Method | Path   | Description                  |
|--------|--------|------------------------------|
| GET    | `/`    | Lists all messages           |
| GET    | `/new` | Shows the new message form   |
| POST   | `/new` | Submits a new message        |

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [EJS](https://ejs.co/) (templating)

## Getting Started

1. Clone the repo and install dependencies:
```bash
   git clone <repo-url>
   cd mini-message-board
   npm install
```

2. Start the server:
```bash
   node app.js
```

3. Open your browser at [http://localhost:3000](http://localhost:3000)

## Notes

Messages are stored in memory — they reset every time the server restarts.
