let postCount = 0;

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
        <button onclick="deletePost('${postId}')">Delete</button>
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

// Delete functionality
function deletePost(postId) {
    const postDiv = document.getElementById(postId);
    if (postDiv) {
        postDiv.remove(); // Remove the post from the feed
    }
}
