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
    
    const task = document.getElementById('task').value; // 'task' is the input id
    localStorage.setItem('newTask', task)
    alert('Task Saved');

    e.preventDefault();
});
9:02