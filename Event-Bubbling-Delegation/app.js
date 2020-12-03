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


// this method only work for the first element
// WORST WAY
// const dleI = document.querySelector('.delete-item').addEventListener('click', deleteItem);
// function deleteItem(){
//     console.log('delete item');
// }


// EVENT DELEGATION, opposite of Event Bubbling
// we need to use event delegation when we dynamically insert a new element inside the html using js, and also in general case if we do not use  delegation , the operation will only work on the first element


// here we are adding an event Listener in the body to capture a click event 
document.body.addEventListener('click', deleteItem);


function deleteItem(e){
    // GOOD WAY TO DO THIS

    // conditional statement to check for the class name    
    //if(e.target.parentElement.className === 'fa fa remove'){
       // console.log('delete item');
    
    // BEST WAY, we use classList instead of className.contains
    // and we are targeting the class, here we needed to use parentElement because, the cross icon is a 'i' tag which is a childElement of the 'a' tag, so we called for the parentElement

    // we are not using className because for that in the if condition we need to match all the class name of the target element
    
    // we know that classList returns a DOM-Token List

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete item');
        
        // now to remove list items
        
        // e.target -> 'i' tag
        // e.target.parentElement -> 'a' tag
        // e.target.parentElement.parentElement -> 'li' tag , we need this because li i.e the specific list element needs to be get deleted

        // here we want to click the cross in the list items,  but on clicking the cross we are getting the 'i' tag which is the icon tag but we need  the 'a' tag which is having a "delete-item" class, for that we need parent of 'i' and for delete we need to delete the 'li' for that we need to targer the parrent element of the 'a' tag 
        
        e.target.parentElement.parentElement.remove();

    }
}