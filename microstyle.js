let postCount = 0;
let commandCount = 0;

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
        <span id="like-count-${postId}">Likes: 0</span>
        <hr>
    `;

    feed.appendChild(postDiv);
    document.getElementById('post-content').value = ''; // Clear textarea
}

// Like functionality
function likePost(postId) {
    const likeCountElement = document.getElementById(`like-count-${postId}`);
    let currentLikes = parseInt(likeCountElement.innerText.split(': ')[1]);
    likeCountElement.innerText = `Likes: ${currentLikes + 1}`;
}

// Unlike functionality
function unlikePost(postId) {
    const likeCountElement = document.getElementById(`like-count-${postId}`);
    let currentLikes = parseInt(likeCountElement.innerText.split(': ')[1]);
    if (currentLikes > 0) {
        likeCountElement.innerText = `Likes: ${currentLikes - 1}`;
    }
}

// Command functionality (example)
function sendCommand() {
    const command = document.getElementById('command-content').value;
    if (!command) return; // Prevent empty commands

    commandCount++;
    document.getElementById('command-count').innerText = `Commands Sent: ${commandCount}`;
    document.getElementById('command-content').value = ''; // Clear textarea
}
