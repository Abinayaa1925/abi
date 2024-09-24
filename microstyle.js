let posts = [];

function createPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === "") return;

    const post = {
        id: posts.length,
        content: postContent,
        liked: false,
        likes: 0
    };

    posts.push(post);
    document.getElementById('post-content').value = '';
    renderPosts();
}

function renderPosts() {
    const feed = document.getElementById('feed');
    feed.innerHTML = ''; // Clear existing posts

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';

        const contentDiv = document.createElement('p');
        contentDiv.textContent = post.content;

        const likeButton = document.createElement('button');
        likeButton.textContent = post.liked ? `Unlike (${post.likes})` : `Like (${post.likes})`;
        
        likeButton.onclick = () => {
            if (post.liked) {
                post.likes--;
                post.liked = false;
            } else {
                post.likes++;
                post.liked = true;
            }
            renderPosts();
        };

        postDiv.appendChild(contentDiv);
        postDiv.appendChild(likeButton);
        feed.appendChild(postDiv);
    });
}
