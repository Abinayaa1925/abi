let posts = [];

function createPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === "") return;

    const post = {
        id: posts.length,
        content: postContent,
        likes: 0,
        dislikes: 0
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
        likeButton.textContent = `Like (${post.likes})`;
        likeButton.onclick = () => {
            post.likes++;
            renderPosts();
        };

        const dislikeButton = document.createElement('button');
        dislikeButton.textContent = `Dislike (${post.dislikes})`;
        dislikeButton.onclick = () => {
            post.dislikes++;
            renderPosts();
        };

        postDiv.appendChild(contentDiv);
        postDiv.appendChild(likeButton);
        postDiv.appendChild(dislikeButton);
        feed.appendChild(postDiv);
    });
}
