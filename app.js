let count = 1;
//https://codepen.io/denic86/pen/MWXoQar
//https://learn.javascript.ru/forms-submit
let form = Array.from(document.forms);
form.forEach(el => {
    el.addEventListener("submit", function(e) {
        e.preventDefault()
        newTask(e.target)
        el.reset()
        count++
    });
});

function newTask(el) {
    let input = el.querySelector('.todo__add')
    let name = input.value;
    if (!name) return
    let blockPriority = el.closest('.todo__priority')
    // let priority = blockPriority.dataset.priority
    addTaskToList(name, blockPriority)
}

function addTaskToList(name, blockPriority) {
    let task = createTaskHtml(name)
    list = blockPriority.querySelector('.todo__list');
    list.prepend(task)
}

function createTaskHtml(name){
    let todoTask = document.createElement('div')
    todoTask.className = "todo__task";

    let todoCheckbox = document.createElement('input');
    todoCheckbox.className = "todo__checkbox";
    todoCheckbox.id = `task_${count}`;
    todoCheckbox.type = "checkbox"

    let todoLabel = document.createElement('label');
    todoLabel.className = "todo__label";
    todoLabel.textContent = name;
    todoLabel.setAttribute("for", `task_${count}`);

    let todoPlus = document.createElement('div');
    todoPlus.className = "todo__plus todo__plus_rotate";
    todoTask.prepend(todoPlus);
    todoTask.prepend(todoLabel);
    todoTask.prepend(todoCheckbox);
    return todoTask
}
