function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'login.html'; // Redirect to login page after logout
}
