# ChatWeb

ChatWeb is a simple and interactive online chatting platform that allows users to connect and communicate in real-time. Built using HTML, CSS, JavaScript, and Socket.IO, ChatWeb provides a user-friendly interface for seamless messaging and user notifications.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [File Description](#file-description)


## Features

- Real-time messaging between users
- User notifications for new connections and disconnections
- User-friendly interface with a clean design
- Option to exit the chat and view an exit message

## Technologies Used

- **HTML**: For the structure of the web application.
- **CSS**: For styling and layout of the chat interface.
- **JavaScript**: For client-side scripting and interactivity.
- **Socket.IO**: For enabling real-time communication between clients and the server.

## Installation

To run ChatWeb locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Chandra-Sekhar-Dutta/OnlineChat

2. **Install dependencies (if using Node.js):**:
   ```bash
   npm install socket.io

3. **Start the server: Make sure to have Node.js installed. Run the following command in your terminal:**:
   ```bash
   node server.js

## Usage
- When you load the application, you will be prompted to enter your name.
- After entering your name, the chat interface will appear, allowing you to send and receive messages.
- Click the Send button or press Enter to send messages.
- Click the Exit button to leave the chat. An exit message will be displayed.

## File Structure
The project consists of the following files:

**ChatWeb**
- index.html         # Main HTML file
- style.css          # CSS file for styling the chat interface
- script.js          # JavaScript file for client-side logic
- server.js          # Node.js server for handling socket connections
- chat.png           # Logo for the chat application
- Background.jpg     # Background image for the chat interface

## File Descriptions
- index.html: Contains the HTML structure for the chat application, including the message container and input form.
- style.css: Styles the chat application, providing a visually appealing layout.
- script.js: Handles client-side logic, including socket connections, message sending, and user notifications.
- server.js: Sets up the Socket.IO server to manage user connections and facilitate real-time messaging.

