window.onload = () => {
    // Check if the user is authenticated
    const token = localStorage.getItem('authToken');
    if (!token) {
        alert("You need to log in first!");
        window.location.href = 'login.html';
        return;
    }

    // Decode the token and extract user information
    const user = JSON.parse(atob(token));
    if (!user) {
        alert("Invalid user data!");
        window.location.href = 'login.html';
        return;
    }

    // Simulated leave balance data
    const leaveBalances = [
        { leaveName: 'Casual Leave', balance: 10 },
        { leaveName: 'Sick Leave', balance: 5 },
        { leaveName: 'Earned Leave', balance: 8 }
    ];

    // Display user email and role
    document.getElementById('userInfo').innerHTML = `Welcome, ${user.email} (${user.role})`;

    // Display leave balances
    const leaveBalancesContainer = document.getElementById('leaveBalances');
    leaveBalances.forEach(leave => {
        leaveBalancesContainer.innerHTML += `<p>${leave.leaveName}: ${leave.balance} days</p>`;
    });
};

function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'login.html';
}
