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

function toggleLike(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.liked = !post.liked;
        post.likeCount += post.liked ? 1 : -1; // Increment or decrement like count
        renderPosts();
    }
}

function renderPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = ''; // Clear existing posts

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = `
            <p>${post.content}</p>
            <button onclick="toggleLike(${post.id})">
                ${post.liked ? 'Unlike' : 'Like'} (${post.likeCount})
            </button>
        `;
        feed.appendChild(postDiv);
    });
}
