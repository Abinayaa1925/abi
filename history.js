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

    // Get leave requests from localStorage (replace with API request in production)
    const leaveRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];

    const leaveHistoryContainer = document.getElementById('leaveHistory');
    leaveRequests.forEach(request => {
        leaveHistoryContainer.innerHTML += `<tr>
            <td>${request.leaveType}</td>
            <td>${request.startDate}</td>
            <td>${request.endDate}</td>
            <td>${request.status}</td>
        </tr>`;
    });
};

function logout() {
    localStorage.removeItem('authToken');
    window.location.href = 'login.html';
}
