const socket = io('http://localhost:3000');
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const exitButton = document.getElementById('exit-button');
const exitMessageContainer = document.getElementById('exit-message-container'); // New exit message container

// Prompt the user for their name when the page loads
const name = prompt('What is your name?');

if (name) {
    // If the user provides a name, display the message container
    messageContainer.style.display = 'block'; // Show the message container
    appendMessage('You joined');
    socket.emit('new-user', name);
}

socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`);
});

socket.on('user-connected', name => {
    appendMessage(`${name} connected`);
});

socket.on('user-disconnected', name => {
    appendMessage(`${name} disconnected`);
});

// Handle form submission to send messages
messageForm.addEventListener('submit', e => {
    e.preventDefault(); // Prevent page reload on form submission

    const message = messageInput.value.trim(); // Get the message and trim any extra spaces

    // Prevent sending empty messages
    if (message === '') {
        return;
    }

    appendMessage(`You: ${message}`); // Display the message on the sender's side
    socket.emit('send-chat-message', message); // Emit the message to the server
    messageInput.value = ''; // Clear the input field after sending
});

// Handle Exit button click
exitButton.addEventListener('click', () => {
    socket.emit('disconnect'); // Inform the server that the user is disconnecting
    showExitMessage('You left the chat'); // Display the exit message
    messageContainer.style.display = 'none'; // Hide the message container
    socket.disconnect(); // Disconnect the socket connection
});

// Function to show exit message in the exit message container
function showExitMessage(message) {
    exitMessageContainer.innerText = message; // Set the exit message
    exitMessageContainer.style.display = 'block'; // Show the exit message container
}

// Function to append a message to the message container
function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
}