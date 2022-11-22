





/* ------------------- */
/* ADD TAsK to the List */

function addTask() {
  
    let addInput = document.getElementById('add-input');
    let taskValue = addInput.value;

    if (taskValue && taskValue.trim().length > 0) {
        taskValue = taskValue.trim();
       let todoItem = {description: taskValue, done: false};
        
       postData(todoItem);

    } else {

        alert("inputfield is empty!");
       
    };
};



/* POST DATA to API */

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
};




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



/* DELETE DATA to API */

const deleteData = function (id)  {
    fetch('http://localhost:3000/' + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
};

const putData = function (id, todo)  {
    
    fetch('http://localhost:3000/' + id, {
        method: "PUT",
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json",
        },
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
};

/* -------------------- */
/* create DOM content */

function createTask(todo) {
  
for (let i = 0; i < todo.length; i++) {

    const taskList = document.getElementById('listcontainer');
    const taskDiv = document.createElement('div');
    taskDiv.id='innercontainer-'+i;
    taskDiv.classList.add("innerDiv");
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.innerHTML = todo[i].description;
    

    const checkbox = document.createElement('input');
    checkbox.id = todo[i]._id;
    checkbox.classList.add("check-box");
    checkbox.type = "checkbox";
    checkbox.setAttribute("onclick","updateCheckbox(this.id)");
    checkbox.checked=todo[i].done;

    


    const trashcan = document.createElement('i');
    trashcan.classList.add('fa-solid', 'fa-trash-can');
    trashcan.id=todo[i]._id;
    trashcan.setAttribute("onclick","deleteItem(this.id)");
    ul.appendChild(checkbox);
    li.appendChild(trashcan);
    ul.appendChild(li);
    taskDiv.appendChild(ul);
    taskList.appendChild(taskDiv);

    if(todo[i].done == true)
    {
      //const itemDone = document.querySelector('li');
      li.classList.toggle('active');
    }
    else
    {
      //const itemDone = document.querySelector('li');
      li.classList.toggle('li');
    }
}

};

window.addEventListener('load', (event) => {
    // console.log('page is fully loaded');
    getTask();

  
  });

  

function deleteItem(id)
  {
    let ele = document.getElementById(id);
    let itemVal = ele.parentElement.innerText;
    ele.parentElement.parentElement.parentElement.remove();
    deleteData(id);
  };

  function updateCheckbox(id)
  {    
    if (document.getElementById(id).checked) 
  {
    
        let todoItem = { done: true};

    putData(id, todoItem);

   
    

  } else {
  
        let todoItem = { done: false};

    putData(id, todoItem);


 
  } 
  };

  /* Keypress on Load */

  window.onload = function(e){ 
    let fieldInput = document.getElementById("add-input");
    let btnClick = document.getElementById("addbutton");
    fieldInput.addEventListener("keypress", (e) => {

      if (e.key === "Enter") {
        
        addTask();
    
      }
    });
}

// // document.addEventListener('change',function(e){
// //   if(e.target && e.target.id== 'brnPrepend'){
// //         //do something
// //    }
// // }
// );
