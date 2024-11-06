document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    const dueDate = document.getElementById('due-date').value;
    if (taskText === '' || dueDate === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = `${taskText} - Fecha de entrega: ${dueDate}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Completar';
    completeButton.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskItem.appendChild(deleteButton);
    taskItem.appendChild(completeButton);
    document.getElementById('task-list').appendChild(taskItem);

    document.getElementById('new-task').value = '';
    document.getElementById('due-date').value = '';
});