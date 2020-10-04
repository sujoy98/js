const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// After we submit a form we generally need to reset the input area for some new value, we can do that with JS
taskInput.value = '';

// FORM EVENTS

// 'submit' is an anther type of event, its default behaviour is also same as link it redirects to action of the 'form' tag
form.addEventListener('submit', runEvent);

// Focus, this event gets activated when an input area is clicked and ready to take input from the keyboard
taskInput.addEventListener('focus', runEvent);

// Blur, opposite to focus, this event gets activated when we exits an input area
taskInput.addEventListener('blur', runEvent);

// CUT and PASTE events are similar like text cut-paste, inside the input area
taskInput.addEventListener('cut', runEvent);
taskInput.addEventListener('paste', runEvent);

// INPUT, it gets activated to any kind of inputs including cut and paste all wull show input event
// taskInput.addEventListener('input', runEvent);

// Change, this gets activated in changing options
// select.addEventListener('select', runEvent);

// KEYBOARD EVENTS

// Keydown, this event gets activated when we press any keyboard key
// taskInput.addEventListener('keydown', runEvent);

// Keyup, this event gets activated when we release any keyboard key
// taskInput.addEventListener('keyup', runEvent);

// Keypress, this event gets activated when we press any keyboard key more or less same as keydown
taskInput.addEventListener('keypress', runEvent);




function runEvent(e){
    console.log(`EventType: ${e.type}`);

    // now to get the value which is being submitted, taskInput is having the value
    // console.log(taskInput.value);

    
    // we generally do this in case of submit events, for resisisting to redirect to other page
    // e.preventDefault();

    // to get the values from the keydown, we need target
    console.log(e.target.value);
    
    // form keydown we can change the heading
    // heading.textContent = e.target.value;
}