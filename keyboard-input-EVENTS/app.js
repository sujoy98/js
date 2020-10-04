const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// After we submit a form we generally need to reset the input area for some new value, we can do that with JS
taskInput.value = '';

// FORM EVENTS

// 'submit' is an anther type of event, its default behaviour is also same as link it redirects to action of the 'form' tag
form.addEventListener('submit', runEvent);


// KEYBOARD EVENTS

form.addEventListener('keydown', runEvent);

function runEvent(e){
    console.log(`EventType: ${e.type}`);

    // now to get the value which is being submitted, taskInput is having the value
    // console.log(taskInput.value);

    
    // we generally do this in case of submit events, for resisisting to redirect to other page
    // e.preventDefault();

    // to get the values from the keydown, we need target
    console.log(e.target.value);
    // form keydown we can change the heading
    heading.textContent = e.target.value;
}