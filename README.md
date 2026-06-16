# Assignment from The Odin Project at https://www.theodinproject.com/lessons/node-path-nodejs-mini-message-board#project-solution

The assignmnent requires to build a simple messaging app.
No message is stored anywhere, they will be persistent as long as they are in RAM.

The app is made of 3 routes:
- GET / shows a list of messages, including user and date posted
- GET /new opens a form with which a new message can be created and send via the send button
- POST /new pushes the new message to the initial array of messages
