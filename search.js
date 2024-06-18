async function searchPosts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const response = await fetch('posts.json');
    const posts = await response.json();
    const results = posts.filter(post => post.title.toLowerCase().includes(query) || post.content.toLowerCase().includes(query));
    
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length > 0) {
        results.forEach(post => {
            const postElement = document.createElement('div');
            postElement.innerHTML = `<h2><a href="${post.url}">${post.title}</a></h2><p>${post.content}</p>`;
            resultsContainer.appendChild(postElement);
        });
    } else {
        resultsContainer.innerHTML = '<p>No posts found.</p>';
    }
}
