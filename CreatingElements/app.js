//create  html elements , add id class and attributes and insert to dom
//add text nodes

// 1 create element 
const li =document.createElement('li');


// 1.1 add class of  li 
li.className='collection-item';


// 1.2 add id of li
li.id='new-item';

// 1.3 Add attribute
li.setAttribute('title','New Item');


// 2 create text node and append as child of li
// cost text=document.createTextNode('Hello World!');
//li.appendChild(text);
li.appendChild(document.createTextNode('Hello World!'));


// 3 create link and append as child of li

// 3.1 create link 
const link=document.createElement('a');

// 3.2 add class to link
link.className='delete-item secondary-content';

// 3.3 add href to link
link.href='#';


// 3.4 add icon html to link
link.innerHTML='<i class="fa fa-remove"></i>';

// 3.5 append link as child of li
li.appendChild(link);

// 4 append li as child of ul

//const ul=document.querySelector('ul.collection');
//ul.appendChild(li);
document.querySelector('ul.collection').appendChild(li);



console.log(li);
