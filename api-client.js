



/* ------------------- */
/* ADD TAsK to the List */

function myfunction() {
// const addTask = document.getElementById('addbutton');
// addTask.addEventListener('click', (e) => {
//     e.preventDefault();
  
    let addInput = document.getElementById('add-input');
    let taskValue = addInput.value;

    if (taskValue && taskValue.trim().length > 0) {
        taskValue = taskValue.trim();

       let todoItem = {description: taskValue, done: false};

       // Post data to the database
       // postData(todoItem);


    } else {

        console.log("input is empty");
       
    };

};

/* POST DATA FROM API */

const postData = function (todo)  {
    fetch('http://localhost:3000/', {
        method: "POST",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
}



/* GET DATA FROM API */

const getTask = function() {
    const response =  fetch('http://localhost:3000/', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((response) => response.json())
        .then((data) =>  createTask(data));

};






/* -------------------- */
/* create DOM content */

function createTask(todo){
  //  const todoTasks = await getTask();
    console.log('todos', todo);
    const taskList = document.getElementById('listcontainer');
    const taskDiv = document.createElement('div');
    taskDiv.id='innercontainer-';
    taskDiv.classList.add("innerDiv");
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    // li.innerHTML = value;
    // console.log(value);
    // ul.appendChild(li);
    // taskDiv.appendChild(ul);
    // ul.appendChild(taskDiv);
    // document.body.appendChild(taskDiv);
// console.log(li.innerHTML);
};
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    getTask();

  });
