// // EVENT BUBBLING, With bubbling, the current event is first captured and handled by the innermost element and then propagated to outer elements, which are defined

// // this event gets activated when 'Task List' i.e the card-title is clicked
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// })

// // due to event bubbling this event is also getting activated for the click event in card-title
// // parent of .card-title
// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// })

// // due to event bubbling this event is also getting activated for the click event in card-title
// // parent of .card-content
// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// })

// // due to event bubbling this event is also getting activated for the click event in card-title
// // parent of .card
// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// })


// EVENT DELEGATION, opposite of Event Bubbling
// we need to use event delegation when we dynamically insert a new element inside the html using js, and also in general case if we do not use  delegation , the operation will only work on the first element

// this method only work for the first element
// WORST WAY
// const dleI = document.querySelector('.delete-item').addEventListener('click', deleteItem);
// function deleteItem(){
//     console.log('delete item');
// }

// here we are adding an event Listener in the body to capture a click event 
document.body.addEventListener('click', deleteItem);


function deleteItem(e){
    // GOOD WAY TO DO THIS

    // conditional statement to check for the class name    
    //if(e.target.parentElement.className === 'delete-item secondary-content'){
       // console.log('delete item');
    
    // BEST WAY, we use classList instead of className.contains
    // and we are targeting the class, here we needed to use parentElement because, the cross icon in a childElement of the 'a' tag, so we called for the parentElement

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        
        // now to remove list items
        
        // e.target -> 'i' tag
        // e.target.parentElement -> 'a' tag
        // e.target.parentElement.parentElement -> 'li' tag , we need this because li i.e the specific lidt element needs to be get deleted
        
        e.target.parentElement.parentElement.remove();

    }
}