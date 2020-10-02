// click is an event

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
    val = e.offsetY; // Y-axis, position may differ on based of the pixel clicked on the padding 
    val = e.offsetX;// X-axis, position may differ on based of the pixel clicked on the padding 
    
    console.log(val);
}