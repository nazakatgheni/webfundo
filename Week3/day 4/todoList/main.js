console.log("running")
//gra b form 
let form = document.querySelector('form');
form.addEventListener('submit', submitTodo)
//submit is biult in event in js


//grab input to get input value
let input = document.querySelector('input');
let todos = document.querySelector('.todos');
let totalTodos = document.querySelector('#total-todos')
let completedTodo = document.querySelector('#complete-todos');


function submitTodo(event) {
    console.log("submitted");

    console.log(event);
    // event.preventDefault();

    //create new object to store new to do add task
    let newTodo = {
        id: Date.now(),
        //to get input value
        task: input.value,
        isComplete: false
    }
    console.log(newTodo)
    //create new div for each to do object

    let todoDiv = document.createElement('div')
    todoDiv, classList.add`todo-text-${newTodo.id}`;
    // todos.appendChild(todoDiv)

    //create p tag
    let toDoText = document.createElement('p')
    toDoText.innerText = newTodo.task;
    toDoText.classList.add(`todo-text-${newTodo.id}`);
    //p tag inside div parent 
    todoDiv.appendChild(toDoText)//todoDiv parent

    //? create checkbox
    let todoComplete = document.createElement('input');
    todoComplete.type = 'checkbox';
    todoComplete.unid = `todo-text-${newTodo.id}`; //unid = unique id
    todoComplete.addEventListener('click', toggleTodo);

    todoDiv.appendChild(todoComplete);

    // create delete button
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTodo)
    deleteButton.unid = `todo-text-${newTodo.id}`;
    completedTodo.innerte++;
    deleteButton.textClassName = `todo-text-${newTodo.id}`;
    todoDiv.appendChild(deleteButton);

    todoDiv.appendChild(todoDiv);

    input.value = '';
    totalTodos.innerText++;
};

function toggleTodo(element) {
    let todoTextClassName = element.currentTarget.unid; // target the id
    console.log(todoTextClassName)
    let todoText = document.querySelector(`.${todoTextClassName}`) // select by unique class value
    console.log(todoText)


    // when we complete the checkbox value,the child div in .todos will add 'complete' in their class, then we can use this .complete in css
    if (todoText.classList.contains('complete')) {
        todoText.classList.remove('complete')
        completedTodo.innerText--;
    } else {
        todoText.classList.add('complete');
        completedTodo.innerText++;
    }

}

function deleteTodo(element) {
    let todoDiClassValue = element.currentTarget.unid;
    let todoDiv = document.querySelector(`.${todoDivClassValue}`)
    let todoClassValue = element.currentTarget.textClassName
    let todoText = document.querySelector(`.todoClassValue`)

    if (todoText.classList.contains('complete')) {
        completedTodo.innerText--;
        todoDiv.remove();
        totalTodos.innerText--;
    } else {
        todoDiv.remove();
        totalTodos.innerText--;
    }
}