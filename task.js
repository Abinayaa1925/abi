// Load tasks from localStorage or initialize as an empty array
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to render tasks on the page
function renderTasks() {
    const tableBody = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';  // Clear the table before re-rendering

    tasks.forEach((task, index) => {
        const row = tableBody.insertRow();
        
        // Task name cell
        const taskCell = row.insertCell(0);
        taskCell.textContent = task.name;
        
        // Status cell with dynamic class based on status
        const statusCell = row.insertCell(1);
        statusCell.innerHTML = `<span class="status ${task.status.replace(" ", "")}">${task.status}</span>`;
        
        // Action cell with dropdown for updating status and delete button
        const actionCell = row.insertCell(2);
        actionCell.innerHTML = `
            <select onchange="updateStatus(this, ${index})">
                <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
                <option value="In Progress" ${task.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
            </select>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
    });
}

// Add a new task to the list and save to localStorage
function addTask() {
    const taskName = document.getElementById('taskName').value.trim();
    const taskStatus = document.getElementById('taskStatus').value;

    if (taskName === '') {
        alert('Please enter a task name.');
        return;
    }

    // Create a new task object
    const newTask = {
        name: taskName,
        status: taskStatus
    };

    // Add task to the array
    tasks.push(newTask);
    
    // Save tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Clear input fields
    document.getElementById('taskName').value = '';

    // Re-render the task list
    renderTasks();
}

// Update task status when the dropdown changes
function updateStatus(selectElement, index) {
    const status = selectElement.value;

    // Update task status in the array
    tasks[index].status = status;

    // Save updated tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Re-render the task list
    renderTasks();
}

// Delete task from the list
function deleteTask(index) {
    // Remove task from the array
    tasks.splice(index, 1);

    // Save updated tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Re-render the task list
    renderTasks();
}

// Initial render when the page loads
document.addEventListener('DOMContentLoaded', renderTasks);
