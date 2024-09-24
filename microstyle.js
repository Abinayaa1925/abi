let posts = [];

function createPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === "") return;

    const post = {
        id: posts.length,
        content: postContent,
        likes: 0,
        date: new Date().toLocaleString() // Get current date and time
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

        const dateDiv = document.createElement('p');
        dateDiv.className = 'post-date';
        dateDiv.textContent = `Posted on: ${post.date}`; // Display date

        const likeButton = document.createElement('button');
        likeButton.textContent = `Like (${post.likes})`;
        likeButton.onclick = () => {
            post.likes++;
            renderPosts();
        };

        const unlikeButton = document.createElement('button');
        unlikeButton.textContent = `Unlike`;
        unlikeButton.onclick = () => {
            if (post.likes > 0) {
                post.likes--;
            }
            renderPosts();
        };

        const deleteButton = document.createElement('button');
        deleteButton.textContent = `Delete`;
        deleteButton.onclick = () => {
            posts = posts.filter(p => p.id !== post.id); // Remove post by ID
            renderPosts();
        };

        postDiv.appendChild(contentDiv);
        postDiv.appendChild(dateDiv); // Append date
        postDiv.appendChild(likeButton); // Append like button
        postDiv.appendChild(unlikeButton); // Append unlike button
        postDiv.appendChild(deleteButton); // Append delete button
        feed.appendChild(postDiv);
    });
}

