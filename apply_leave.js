document.getElementById('leaveForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const leaveType = document.getElementById('leaveType').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const reason = document.getElementById('reason').value;

    if (!leaveType || !startDate || !endDate || !reason) {
        alert('Please fill all fields');
        return;
    }

    // Simulate storing the leave request (You can replace this with an API request)
    const leaveRequest = {
        leaveType,
        startDate,
        endDate,
        reason,
        status: 'pending'
    };

    // Store leave request in localStorage (or replace with backend call)
    let leaveRequests = JSON.parse(localStorage.getItem('leaveRequests')) || [];
    leaveRequests.push(leaveRequest);
    localStorage.setItem('leaveRequests', JSON.stringify(leaveRequests));

    alert('Leave application submitted successfully');
    window.location.href = 'dashboard.html'; // Redirect back to the dashboard
});
