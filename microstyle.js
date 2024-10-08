let postCount = 0;
let commandCount = 0;

// Load posts from localStorage on page load
window.onload = function() {
    loadPosts();
    loadCommands();
}

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('app-section').style.display = 'block';
    } else {
        alert("Please enter both username and password.");
    }
}

// Function to create a post
function createPost() {
    const content = document.getElementById('post-content').value;
    if (!content) return; // Prevent empty posts

    postCount++;
    const postId = `post-${postCount}`;
    const date = new Date().toLocaleString(); // Get the current date and time

    const feed = document.getElementById('feed');
    const postDiv = document.createElement('div');
    postDiv.id = postId;
    postDiv.innerHTML = `
        <p>${content}</p>
        <span style="font-size: 12px; color: gray;">Posted on: ${date}</span><br>
        <button onclick="likePost('${postId}')">Like</button>
        <button onclick="unlikePost('${postId}')">Unlike</button>
        <button class="delete-button" onclick="deletePost('${postId}')">Delete</button>
        <span id="like-count-${postId}">Likes: 0</span>
        <hr>
    `;

    feed.appendChild(postDiv);
    document.getElementById('post-content').value = ''; // Clear textarea

    savePostToLocalStorage(postId, content, date);
}

// Function to send a command
function sendCommand() {
    const commandContent = document.getElementById('command-content').value;
    if (!commandContent) return; // Prevent empty commands

    commandCount++;
    const commandId = `command-${commandCount}`;
    const date = new Date().toLocaleString(); // Get the current date and time

    const commandFeed = document.getElementById('command-feed');
    const commandDiv = document.createElement('div');
    commandDiv.id = commandId;
    commandDiv.innerHTML = `
        <p>${commandContent}</p>
        <span style="font-size: 12px; color: gray;">Command sent on: ${date}</span><br>
        <button onclick="likeCommand('${commandId}')">Like</button>
        <button onclick="unlikeCommand('${commandId}')">Unlike</button>
        <button class="delete-button" onclick="deleteCommand('${commandId}')">Delete</button>
        <span id="command-like-count-${commandId}">Likes: 0</span>
        <hr>
    `;

    commandFeed.appendChild(commandDiv);
    document.getElementById('command-content').value = ''; // Clear textarea

    saveCommandToLocalStorage(commandId, commandContent, date);
}

// Function to save post to localStorage
function savePostToLocalStorage(postId, content, date) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ id: postId, content, date });
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Function to load posts from localStorage
function loadPosts() {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.forEach(post => {
        const feed = document.getElementById('feed');
        const postDiv = document.createElement('div');
        postDiv.id = post.id;
        postDiv.innerHTML = `
            <p>${post.content}</p>
            <span style="font-size: 12px; color: gray;">Posted on: ${post.date}</span><br>
            <button onclick="likePost('${post.id}')">Like</button>
            <button onclick="unlikePost('${post.id}')">Unlike</button>
            <button class="delete-button" onclick="deletePost('${post.id}')">Delete</button>
            <span id="like-count-${post.id}">Likes: 0</span>
            <hr>
        `;
        feed.appendChild(postDiv);
    });
}

// Function to save command to localStorage
function saveCommandToLocalStorage(commandId, content, date) {
    let commands = JSON.parse(localStorage.getItem('commands')) || [];
    commands.push({ id: commandId, content, date });
    localStorage.setItem('commands', JSON.stringify(commands));
}

// Function to load commands from localStorage
function loadCommands() {
    let commands = JSON.parse(localStorage.getItem('commands')) || [];
    commands.forEach(command => {
        const commandFeed = document.getElementById('command-feed');
        const commandDiv = document.createElement('div');
        commandDiv.id = command.id;
        commandDiv.innerHTML = `
            <p>${command.content}</p>
            <span style="font-size: 12px; color: gray;">Command sent on: ${command.date}</span><br>
            <button onclick="likeCommand('${command.id}')">Like</button>
            <button onclick="unlikeCommand('${command.id}')">Unlike</button>
            <button class="delete-button" onclick="deleteCommand('${command.id}')">Delete</button>
            <span id="command-like-count-${command.id}">Likes: 0</span>
            <hr>
        `;
        commandFeed.appendChild(commandDiv);
    });
}

// Like functionality for posts
function likePost(postId) {
    const likeCountElement = document.getElementById(`like-count-${postId}`);
    let currentLikes = parseInt(likeCountElement.innerText.split(': ')[1]);
    likeCountElement.innerText = `Likes: ${currentLikes + 1}`;
}

// Unlike functionality for posts
function unlikePost(postId) {
    const likeCountElement = document.getElementById(`like-count-${postId}`);
    let currentLikes = parseInt(likeCountElement.innerText.split(': ')[1]);
    if (currentLikes > 0) {
        likeCountElement.innerText = `Likes: ${currentLikes - 1}`;
    }
}

// Delete functionality for posts
function deletePost(postId) {
    const postDiv = document.getElementById(postId);
    if (postDiv) {
        postDiv.remove(); // Remove the post from the feed
    }
    removePostFromLocalStorage(postId);
}

// Remove post from localStorage
function removePostFromLocalStorage(postId) {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts = posts.filter(post => post.id !== postId);
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Like functionality for commands
function likeCommand(commandId) {
    const likeCountElement = document.getElementById(`command-like-count-${commandId}`);
    let currentLikes = parseInt(likeCountElement.innerText.split(': ')[1]);
    likeCountElement.innerText = `Likes: ${currentLikes + 1}`;
}

// Unlike functionality for commands
function unlikeCommand(commandId) {
    const likeCountElement = document.getElementById(`command-like-count-${commandId}`);
    let currentLikes = parseInt(likeCountElement.innerText.split(': ')[1]);
    if (currentLikes > 0) {
        likeCountElement.innerText = `Likes: ${currentLikes - 1}`;
    }
}

// Delete functionality for commands
function deleteCommand(commandId) {
    const commandDiv = document.getElementById(commandId);
    if (commandDiv) {
        commandDiv.remove(); // Remove the command from the feed
    }
    removeCommandFromLocalStorage(commandId);
}

// Remove command from localStorage
function removeCommandFromLocalStorage(commandId) {
    let commands = JSON.parse(localStorage.getItem('commands')) || [];
    commands = commands.filter(command => command.id !== commandId);
    localStorage.setItem('commands', JSON.stringify(commands));
}
