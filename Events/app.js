// click is an event

// USING UN-NAMED FUNCTION
// addEventListener() accepts two parameters one for the event and anathor a callback annonymous function which specifies the operation

// document.querySelector('.clear-tasks').addEventListener('click', function(e){
    // console.log('hello');// hello will be console logged permanently if we use # in href in the html file 

// by default on clicking the button it will redirect to the href page in the html.
// e is the event object, e.preventDefault() is use to restrict the default behaviour
    
    // e.preventDefault();
// });


// WE CAN ALSO USE NAMED FUNCTION (any function)

document.querySelector('.clear-tasks').addEventListener('click', newF);
function newF(e){
    // console.log('clicked');

    let val;
    val = e;
    // console.log(val);
    
    // Event target element (action taken place target)
    val = e.target;
    
    // we can perform all the general functions of the DOM (Style, manupulation etc)
    val = e.target.className;
    val = e.target.classList;
    e.target.innerText = 'Changed after Click'; // button text changed
    

    // Event Type
    val = e.type;

    // Timestamps
    val = e.timeStamp;

    // co-ordinates of the event relative (according) to the window
    val = e.clientY;
    val = e.clientX; 

    // co-ordinates of the event relative (according) to the element
    val = e.offsetY; // Y-axis, position may differ on based of the pixel clicked on the padding of an element
    val = e.offsetX;// X-axis, position may differ on based of the pixel clicked on the padding of an element
    
    // console.log(val);
}


// MOUSE EVENTS

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// Double-Click
clearBtn.addEventListener('dblclick', runEvent);

// MOUSE-DOWN (press and hold click to activate this event)
clearBtn.addEventListener('mousedown', runEvent);

// MOUSE-UP (release click to activate this event)
clearBtn.addEventListener('mouseup', runEvent);

// MOUSE-ENTER (hover enter to a spefic region  to activate this event)
card.addEventListener('mouseenter', runEvent);

// MOUSE-LEAVE (leave hovering form a spefic region  to activate this event)
card.addEventListener('mouseleave', runEvent);

// MOUSE-OVER, MOUSE-OUT only gets activated when we visit other element inside the main , here the main is 'card' and 'clear-tasks' is an inside element

// card.addEventListener('mouseover', runEvent);
// card.addEventListener('mouseout', runEvent);

// MOUSE-MOVE (it activates the event on any mouse movement inside a specific region, here we took 'card')
card.addEventListener('mousemove', runEvent);


// EVENT HANDLER
function runEvent(e){
    console.log(`Event Type :- ${e.type}`);

    // displaying the mouse position on webpage (line 82 -> app.js)
    heading.innerText = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    // changing the body background color with mouse movement
    // document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}