let posts = [];

function createPost() {
    const postContent = document.getElementById('post-content').value;
    if (postContent.trim() === "") return;

    const post = {
        id: posts.length,
        content: postContent,
        likes: 0,
        date: new Date().toLocaleString(), // Get current date and time
        comments: [] // Initialize comments as an empty array
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

        // Comment section
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Add a comment...';
        commentInput.className = 'comment-input';

        const commentButton = document.createElement('button');
        commentButton.textContent = 'Comment';
        commentButton.onclick = () => {
            if (commentInput.value.trim() !== "") {
                post.comments.push(commentInput.value.trim());
                commentInput.value = ''; // Clear input field
                renderPosts(); // Re-render to show comments
            }
        };

        const commentsDiv = document.createElement('div');
        post.comments.forEach(comment => {
            const commentDiv = document.createElement('p');
            commentDiv.textContent = comment;
            commentsDiv.appendChild(commentDiv);
        });

        // Append elements to postDiv
        postDiv.appendChild(contentDiv);
        postDiv.appendChild(dateDiv);
        postDiv.appendChild(likeButton);
        postDiv.appendChild(unlikeButton);
        postDiv.appendChild(deleteButton);
        postDiv.appendChild(commentInput); // Add comment input
        postDiv.appendChild(commentButton); // Add comment button
        postDiv.appendChild(commentsDiv); // Add comments display

        feed.appendChild(postDiv);
    });
}
