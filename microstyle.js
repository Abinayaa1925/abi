let posts = [];

function createPost() {
    const content = document.getElementById('post-content').value;
    if (content.trim() === '') return;

    const post = {
        id: Date.now(),
        content: content,
        likeCount: 0,
        liked: false,
    };

    posts.push(post);
    document.getElementById('post-content').value = ''; // Clear textarea
    renderPosts();
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post && !post.liked) {
        post.liked = true;
        post.likeCount++;
        renderPosts();
    }
}

function unlikePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post && post.liked) {
        post.liked = false;
        post.likeCount--;
        renderPosts();
    }
}

function sendCommand() {
    // Placeholder for command functionality
    alert("Command sent!");
}

function renderPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = ''; // Clear existing posts

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <p>${post.content}</p>
            <button onclick="likePost(${post.id})" ${post.liked ? 'disabled' : ''}>
                Like (${post.likeCount})
            </button>
            <button onclick="unlikePost(${post.id})" ${!post.liked ? 'disabled' : ''}>
                Unlike
            </button>
        `;
        feed.appendChild(postDiv);
    });
}
