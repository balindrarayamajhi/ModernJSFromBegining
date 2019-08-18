// replace and remove elements in dom, working with classes manupulating classes and attirbute 

// 1 create  element and replace 

//  1.1 create Element
const newHeading =document.createElement('h2');

// 1.1.1 Add id 
newHeading.id='task-titile';

//1.2 create new text node and add it as child of newHeading

//1.2.1 create new text node
const newTextNode=document.createTextNode('Task List ');


//1.2.2 Append newTextNode as child of newHeading
newHeading.appendChild(newTextNode);

// 1.3 Get old heading

const oldHeading =document.getElementById('task-title');

/*
    We need parent of oldHeading to repalce it with newHeading because we are going to call replceChild() on parent node
*/

// 1.4 get parent of oldHeading

const parent=oldHeading.parentElement;

// 1.5 replace 
parent.replaceChild(newHeading,oldHeading);

 
// 2. remove element

const lis=document.querySelectorAll('li');


lis[0].remove();


//we can  use removeChild() 
const parentlis=lis[1].parentElement;
parentlis.removeChild(lis[2]);


// 3. classes and attributes


const  firstli= document.querySelector('li:first-child');
const link =firstli.children[0];
 let val ;

//  3.1 add and delete classes

val=link.className; // return string of the class(es).
val =link.classList; // return DOMTokenList , it is an arraylike stucture and classes are indexed.
val =link.classList[0];
link.classList.add('test');
link.classList.remove('test');


//3.2 Attributes

val =link.getAttribute('href');
link.setAttribute('href','http://www.google.com');
val=link.hasAttribute('href') //true or false
val=link.hasAttribute('title');
link.setAttribute('title','Google');
val=link.hasAttribute('title');
link.removeAttribute('title');
val=link.hasAttribute('title');
console.log(val);




