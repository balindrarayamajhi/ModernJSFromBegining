//EVENT BUBLING : event on child going up to parents 
/*
document.querySelector('.card-title').addEventListener('click',function(){
    console.log('card-title');
});

document.querySelector('.card-content').addEventListener('click',function(){
    console.log('card-content');
});

document.querySelector('.card').addEventListener('click',function(){
    console.log('card');
});

document.querySelector('.col').addEventListener('click',function(){
    console.log('col');
});

document.querySelector('.row').addEventListener('click',function(){
    console.log('row');
});

document.querySelector('.container').addEventListener('click',function(){
    console.log('container');
});


document.querySelector('body').addEventListener('click',function(){
    console.log('body');
});

*/

//Event delegation  :putting event on parent and going down to children 

//const delItem=document.querySelector('.delete-item'); 
//delItem.addEventListener('click',deleteItem);
/*
    In this exmaple there are 6 elemets having class delete-item and event haldler is attached to the first element with class delete-item, in this event delegation is needed . More oftenly when you add an element in DOM dynamically through java script then you also need to use event deligation , for that you need to chose parent and add event listner to it and  while handling the event you need to check the 
*/

//function deleteItem(){
//    console.log('delete-item');
//}


document.querySelector('body').addEventListener('click',eventDeligationDemo);
function eventDeligationDemo(e){
     
//    if(e.target.className==='fa fa-remove')
//        console.log('delete-item');
//       
    
    
//    
//     if(e.target.parentElement.className==='delete-item secondary-content')
//        console.log('delete-item');
  
    
    if(e.target.parentElement.classList.contains('delete-item'))
       console.log('delete-item');
    
}

