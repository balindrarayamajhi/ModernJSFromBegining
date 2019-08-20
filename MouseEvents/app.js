const clearBtn=document.querySelector('.clear-tasks');
const card= document.querySelector('.card');
const heading =document.querySelector('h5');


//1 click
//clearBtn.addEventListener('click',runEvent);

//2 double click
//clearBtn.addEventListener('dblclick',runEvent);

//3 mousedown 
//clearBtn.addEventListener('mousedown',runEvent); //click and hold mouse 

//4 mouseup 
//clearBtn.addEventListener('mousedown',runEvent); //clicked and holded mouse is released

//5 mouseover
//card.addEventListener('mouseover',runEvent);

//6 mouseout
//card.addEventListener('mouseout',runEvent);

//7 mouseenter
//card.addEventListener('mouseenter',runEvent);

//8 mouseleave
//card.addEventListener('mouseleave',runEvent);

/*
    if there are one element(contained) nested with another element(container)  and all evenets mouseenter, mouseleave, mouseover and mouseout is attched with the container block then mouseenter and mouseleave will be fired when the mouse eneter and leave the container element and not fired while entering and leaving elements inside the the coantainer but mouseover nad mouseout will be fired in both cases.  
*/

//9 mousemove
card.addEventListener('mousemove',runMouseMoveEvent);

//Event Handlers
function runEvent(e){
    console.log('EVENT TYPE : '+e.type);
    
}

function runMouseMoveEvent(e){
     console.log('EVENT TYPE : '+e.type);

    heading.textContent='MouseX : '+e.offsetX+' MouseY: '+e.offsetY;
   document.body.style.backgroundColor='lightgreen';
}