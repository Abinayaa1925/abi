function createPost() {
    const content = document.getElementById('post-content').value;

    // Check if the input is empty
    if (content.trim() === '') {
        alert('Please write something before posting.');
        return;
    }

    // Create a new div for the post
    const feed = document.getElementById('feed');
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.textContent = content;

    // Add the new post at the top of the feed
    feed.prepend(postDiv);

    // Clear the textarea
    document.getElementById('post-content').value = '';
}
