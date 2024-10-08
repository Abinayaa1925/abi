let postCount = 0;
let commandCount = 0;

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic login validation (you can replace this with real authentication)
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
    
    const feed = document.getElementById('feed');
    const postDiv = document.createElement('div');
    postDiv.id = postId;
    postDiv.innerHTML = `
        <p>${content}</p>
        <button onclick="likePost('${postId}')">Like</button>
        <button onclick="unlikePost('${postId}')">Unlike</button>
        <button class="delete-button" onclick="deletePost('${postId}')">Delete</button>
        <span id="like-count-${postId}">Likes: 0</span>
        <hr>
    `;

    feed.appendChild(postDiv);
    document.getElementById('post-content').value = ''; // Clear textarea
}

// Function to send a command
function sendCommand() {
    const commandContent = document.getElementById('command-content').value;
    if (!commandContent) return; // Prevent empty commands

    commandCount++;
    const commandId = `command-${commandCount}`;
    
    const commandFeed = document.getElementById('command-feed');
    const commandDiv = document.createElement('div');
    commandDiv.id = commandId;
    commandDiv.innerHTML = `
        <p>${commandContent}</p>
        <button onclick="likeCommand('${commandId}')">Like</button>
        <button onclick="unlikeCommand('${commandId}')">Unlike</button>
        <button class="delete-button" onclick="deleteCommand('${commandId}')">Delete</button>
        <span id="command-like-count-${commandId}">Likes: 0</span>
        <hr>
    `;

    commandFeed.appendChild(commandDiv);
    document.getElementById('command-content').value = ''; // Clear textarea
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
}
