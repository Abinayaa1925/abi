document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (!email || !password) {
        document.getElementById('errorMessage').innerText = 'Please enter both email and password';
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    // Simulate a backend API request for login (replace with actual API)
    // Here, I'm using dummy login logic for simulation
    const usersDB = [
        { email: 'employee@example.com', password: 'password123', role: 'employee' },
        { email: 'manager@example.com', password: 'password123', role: 'manager' },
    ];

    const user = usersDB.find(u => u.email === email && u.password === password);

    if (user) {
        // Store the user's role and email in localStorage to simulate authentication
        const token = btoa(JSON.stringify({ email: user.email, role: user.role }));
        localStorage.setItem('authToken', token);

        // Redirect to the dashboard after successful login
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('errorMessage').innerText = 'Invalid credentials';
        document.getElementById('errorMessage').style.display = 'block';
    }
});
