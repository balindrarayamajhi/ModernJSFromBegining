const form =document.querySelector('form');
const taskInput=document.getElementById('task');
const heading =document.querySelector('h5');
const select =document.querySelector('select');
//clear input value 
taskInput.value='';

//event in form
/*
form.addEventListener('submit',function(e){
    console.log('EVENT TYPE : '+e.type);
    //get input value 
    console.log('INPUT : '+taskInput.value);
    e.preventDefault();
});
*/

//event on actual input not in from
/* 
        keydown event 
        The keydown event is fired when a key is pressed.
        Unlike the keypress event, the keydown event is fired for all keys, 
        regardless of whether they produce a character value.
    
*/
//taskInput.addEventListener('keydown',keyEventHandler);
    
      
   

//keyup event 

//taskInput.addEventListener('keyup',keyEventHandler);

//keypress 
/*
    The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered. For example, a lowercase "a" will be reported as 65 by keydown and keyup, but as 97 by keypress. An uppercase "A" is reported as 65 by all events.
*/
//taskInput.addEventListener('keypress',keyEventHandler);

//focus event

//taskInput.addEventListener('focus',function(e){
//    e.target.style.background = 'lightyellow';
//
//});

//blur event 
//taskInput.addEventListener('blur',function(e){
//    e.target.style.background = '';
//
//});

//cut and paste event when we do cut and paste 
//The copy event fires when the user initiates a copy action through the browser's user interface.
//taskInput.addEventListener('cut',eventHandler);
//taskInput.addEventListener('paste',eventHandler);
//taskInput.addEventListener('copy',eventHandler);

//The input event fires when the value of an <input>, <select>, or <textarea> element has been changed. 
//taskInput.addEventListener('input',eventHandler);


//change event : used in select list 
select.addEventListener('change',eventHandler);

function keyEventHandler(e){
    console.log('EVENT TYPE : '+e.type);
    console.log(e.target.value);
    heading.innerText=e.target.value; 
}

function eventHandler(e){
    console.log('EVENT TYPE : '+e.type);
    console.log(e.target.value);
    heading.innerText=e.target.value; 
}