let posts = [];

function createPost() {
    const content = document.getElementById('post-content').value.trim();
    if (!content) {
        alert('Please enter some content for your post.');
        return;
    }
    
    const newPost = {
        content: content,
        likes: 0,
        liked: false
    };
    
    posts.push(newPost);
    document.getElementById('post-content').value = ''; // Clear textarea
    updateFeed();
}

function updateFeed() {
    const feed = document.getElementById('feed');
    feed.innerHTML = ''; // Clear previous feed

    posts.forEach((post, index) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        
        const content = document.createElement('p');
        content.textContent = post.content;
        
        const likeButton = document.createElement('button');
        likeButton.textContent = post.liked ? 'Unlike' : 'Like';
        likeButton.onclick = () => toggleLike(index);

        const likeCount = document.createElement('span');
        likeCount.textContent = ` (${post.likes})`;

        postDiv.appendChild(content);
        postDiv.appendChild(likeButton);
        postDiv.appendChild(likeCount);
        
        feed.appendChild(postDiv);
    });
}

function toggleLike(index) {
    const post = posts[index];
    if (post.liked) {
        post.likes--;
        post.liked = false;
    } else {
        post.likes++;
        post.liked = true;
    }
    updateFeed();
}
