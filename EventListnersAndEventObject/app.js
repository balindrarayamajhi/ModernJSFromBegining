// Events

/*
document.querySelector('.clear-tasks').addEventListener('click',function(){
    console.log('Hello world');
})
*/
/*
if the selected a tag has href to anylink where it should be redirected then you will see Hello world
very qiuck and redirect to the url provided ,not to do so (mean remains in the same page ), we need to prevent default behavior and javascript has method to prevent default behavior
*/
/*
document.querySelector('.clear-tasks').addEventListener('click',function(event){
    console.log('Hello world');
    event.preventDefault();
    });
*/

//let's pass named function instead of anynomous function

document.querySelector('.clear-tasks').addEventListener('click',onClick);

function onClick(event){

    //console.log('clicked');
    
    //closer to look to an event object
    //console.log(event);
    
    //Event target Element
    /*
    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.className);
    console.log(event.target.classList);
    
    event.target.innerText="It's  clicked."; // change the text of evenet here button in clicked
    */
    
    // Event type
    console.log(event.type); //click, mouseover etc
    
    //Timestamp
    console.log(event.timeStamp);
    
    //Coords relative to the window
    console.log(event.clientX+ ' , '+event.clientY);
    
    //coords relative to the Element
    console.log(event.offsetX+' , '+event.offsetY); //here the element is button
}
