let localTaskNames = window.localStorage.getItem('taskNames');
let taskNames;
const taskInput = document.getElementById('task-input');
const submit = document.getElementById('submit');


if(localTaskNames) {
    taskNames = JSON.parse(localTaskNames);
    createTasks(taskNames);
}   else {
    taskNames = [];
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    if(taskInput.value) {
        createTasks([taskInput.value]); 

        taskNames.push(taskInput.value);

        window.localStorage.setItem('taskNames', JSON.stringify(taskNames));
        
        taskInput.value = '';
    }
});





function createTasks(tasksToRender) {
    const result = document.getElementById('result');

    tasksToRender.forEach((taskName, index) => {
        const task = document.createElement('div');
        task.classList.add('task');
        task.setAttribute('id', `task-${index}`);
        
        const taskText = document.createElement('span');
        taskText.textContent = taskName;
        
        const deleteTask = document.createElement('button');
        deleteTask.classList.add('delete');
        deleteTask.setAttribute('id', `delete-${index}`);
        deleteTask.textContent = 'delete';
        
        deleteTask.addEventListener('click', () => {
            task.remove();

            const currentIndex = taskNames.indexOf(taskName);

            if (currentIndex > -1) {
                taskNames.splice(currentIndex, 1);
                window.localStorage.setItem('taskNames', JSON.stringify(taskNames));
            }
        });
        
        task.append(taskText);
        task.append(deleteTask);
        
        result.append(task);
    });
}