// reseting the input area
const taskInput = document.getElementById('task');
taskInput.value = '';

// // set localStorage item form window object, we can view the valus from inspect-application-local storage

// localStorage.setItem('name', 'Jhon');
// localStorage.setItem('age', '21');


// set session storage
// sessionStorage.setItem('name', 'Mike');

// remove item from the local storage
// localStorage.removeItem('name'); // we need to specifie the key


// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// clear local storage
// localStorage.clear();

// console.log(`${name}: ${age}`);


// ADD A TASK FROM THE HTML-FORM INSIDE THE LOCAL STORAGE

document.querySelector('form').addEventListener('submit', function(e){
  
  // task  from html file line 25 having id task 
  const task = document.getElementById('task').value;
  
    let tasks;

    // 'taskss' is the key in the local storage
    if(localStorage.getItem('taskss') === null) {
      tasks = [];
    } else {
      // local storage only accepts string to store so we need JSON to parse it
      tasks = JSON.stringify(localStorage.getItem('taskss'));
    }
  
    // pushing the value comming from the task into the local variable tasks
    tasks.push(task);
  
    localStorage.setItem('taskss', JSON.stringify(tasks));

    // 'taskss' is the key in the local storage
    // localStorage.setItem('taskss',task);
  
    alert('Task saved');
  
    e.preventDefault();
  });

//   loop through the tasks array

// const tasks = JSON.parse(localStorage.getItem('taskss'));
// tasks.forEach(function(taskItarator){
//     console.log(taskItarator)
// });