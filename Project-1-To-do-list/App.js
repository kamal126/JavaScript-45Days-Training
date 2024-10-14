// Day 1: Variables
let tasks = [];

// Day 2: Functions to Add, Remove, and Mark Complete Tasks
function addTask(taskName) {
    const task = {
        id: Date.now(),
        name: taskName,
        completed: false
    };
    tasks.push(task);
    renderTasks();
}

function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function toggleTaskComplete(id) {
    tasks.forEach(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
    });
    renderTasks();
}

// Day 3: Control Flow - Event Handlers
document.getElementById('add-task-btn').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    if (taskInput.value !== '') {
        addTask(taskInput.value);
        taskInput.value = ''; // Clear input field
    }
});

// Day 4: Control Flow - Render Tasks Function
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear existing tasks

    // Day 6: Using Arrays
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        // Day 7: Objects
        li.innerHTML = `
            <span>${task.name}</span>
            <div>
                <button class="remove-btn" onclick="removeTask(${task.id})">Remove</button>
                <button onclick="toggleTaskComplete(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}
