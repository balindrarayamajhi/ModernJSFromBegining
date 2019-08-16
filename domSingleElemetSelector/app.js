/*
    in Vanilla js there are two categories of selector
    single element selector : allow to grab one elmement by its id or class or whatever it may and it only stores one thing.
    
    so,if uses single element selector let say class which appears multiple times in dom it just grab the single first one but  multiple element selector grabs all of the element of that class and then returns in HTML collection or node list based on the selector used.
*/
//get element by id
console.log(document.getElementById('task-title'));

//get things from the elements

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

//change stylingy
//document.getElementById('task-title').style.background='red';
//document.getElementById('task-title').style.papdding='5px';

var taskTitle=document.getElementById('task-title');
//change content
taskTitle.textContent='Task List';
taskTitle.innerText='My Task List';
//to insert html 
document.getElementById('task-title').innerHTML='<span style = "color:lightgreen"> Task-List</span>';


//document.querySelector() : it'a more powerful as we don't to select by id 
//basically works like jquery selector ,any css selector can be put here .

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title')); 
console.log(document.querySelector('h5')); // if there is more than one it selects the first one.
//as query selector takes css selector we can have the follwoing options
document.querySelector('li:last-child').style.color='yellow';
document.querySelector('li:nth-child(3)').style.color='red';
document.querySelector('li:nth-child(odd)').style.color='brown';//select the first odd child
document.querySelector('li:nth-child(even)').style.color='blue';//select the first even child 