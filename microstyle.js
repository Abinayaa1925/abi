let posts = []; // Array to hold posts

function createPost() {
    const postContent = document.getElementById("post-content").value;

    if (postContent.trim() === "") {
        alert("Please write something before posting.");
        return;
    }

    // Create a new post object
    const newPost = {
        content: postContent,
        timestamp: new Date().toLocaleString(),
        likes: 0 // Initialize likes
    };

    // Add the new post to the array
    posts.push(newPost);

    // Clear the textarea
    document.getElementById("post-content").value = "";

    // Update the feed
    updateFeed();
}

function updateFeed() {
    const feed = document.getElementById("feed");
    feed.innerHTML = ""; // Clear the feed

    // Loop through posts and display them
    posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = `
            <p>${post.content}</p>
            <small>${post.timestamp}</small>
            <br>
            <button onclick="likePost(${index})">Like (${post.likes})</button>
            <button onclick="unlikePost(${index})" ${post.likes === 0 ? 'disabled' : ''}>Unlike</button>
        `;
        feed.appendChild(postElement);
    });
}

function likePost(index) {
    posts[index].likes += 1; // Increase the like count
    updateFeed(); // Refresh the feed
}

function unlikePost(index) {
    if (posts[index].likes > 0) {
        posts[index].likes -= 1; // Decrease the like count
    }
    updateFeed(); // Refresh the feed
}

