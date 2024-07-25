# Chat App with Socket.IO

## Description

This is a real-time chat application where users in the same room can chat in real-time. Users can only see messages from those in the same room. The application also manages user sessions, handles room joins and leaves, and announces user actions to the room.

## Features

- Real-time chat
- Join and leave rooms
- Welcome and leave announcements in rooms
- Display users currently in the room
- Prevent joining a room with the same username

## Technology

- Node.js
- Express.js
- Socket.IO
- HTML, CSS, JavaScript

## Dependencies

- **express**: 4.19.2
- **socket.io**: 4.7.5

## Additional Libraries

- `mustache`
- `moment`
- `qs`
- `bad-words`

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/maulik-koli/chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   npm run start
   ```

4. **Open your browser and navigate to:**
    ```sh
    http://localhost:3000
    ```

## Project Structure

```
chat-app/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── img/
│   ├── js/
│   │   └── chat.js
│   ├── index.html
│   └── chat.html
├── src/
│   ├── utils/
│   │   ├── messages.js
│   │   └── users.js
│   └── index.js
├── package.json
└── package-lock.json
```

- **public/**: Contains static files served by the application.
  - **css/**: Contains stylesheets.
  - **js/**: Contains client-side JavaScript.
  - **index.html**: Login page for entering name and room.
  - **chat.html**: Chat interface with a sidebar displaying users in the room.

- **src/**: Contains server-side code.
  - **utils/**: Contains utility functions.
    - **messages.js**: Manages message timestamps.
    - **users.js**: Manages user data (add, remove, and fetch users).
  - **index.js**: Server-side logic for receiving and sending messages.

## Working

- **index.js**: Contains all the logic for server-side operations, including receiving and sending messages between clients.
- **chat.js**: Contains all the logic for client-side operations, including receiving messages from the server, sending messages, and rendering templates using the Mustache library.
- **users.js**: Maintains user data with functions to add, remove, fetch users by ID, and get users in the same room for the sidebar display.
- **messages.js**: Handles message timestamps using JavaScript's `Date` object.
- **index.html**: The login page where users enter their name and room name.
- **chat.html**: Displays all chat messages and includes a sidebar showing the names of users currently in the room.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Open a pull request with a description of your changes.

## Acknowledgements

- [Socket.IO](https://socket.io/): Provides real-time communication between clients and the server.
- [Express.js](https://expressjs.com/): A fast, minimalist web framework for Node.js.
- [Mustache](https://mustache.github.io/): A logic-less template engine.
- [Moment.js](https://momentjs.com/): A library for parsing, validating, manipulating, and formatting dates.
- [QS](https://www.npmjs.com/package/qs): A querystring parser.
- [Bad Words](https://www.npmjs.com/package/bad-words): A filter for bad language.

---
