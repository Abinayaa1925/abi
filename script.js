// Helper function to check authentication and redirect to login if not logged in
function checkAuth() {
    const token = localStorage.getItem('authToken');
    if (!token) {
        window.location.href = 'login.html';
    }
}

// Helper function to decode the JWT token stored in localStorage
function getUserFromToken() {
    const token = localStorage.getItem('authToken');
    if (token) {
        return JSON.parse(atob(token));
    }
    return null;
}
