/* 
        local storage will stay until you manually clear it out and session storage will be clear when browser is closed.
*/

// set local storage
//localStorage.setItem('name','Balindra');
//localStorage.setItem('age','31');

// open browser in dev tool mode and go to application there you find localstorage and session storage.

// set local storage
//sessionStorage.setItem('name','Rejina');

//retrieve from local storage 
//const name= localStorage.getItem('name');
//const age=localStorage.getItem('age');
//
//console.log('NAME : '+name+' Age : '+age);

//remove a item from the storage-can be removed from browser
//localStorage.removeItem('name');

//clear localStorage
//localStorage.clear();

//document.querySelector('form').addEventListener('submit',function(e){
//    const task=document.getElementById('task').value;
//    let tasks;
//    if(localStorage.getItem(tasks)==null){
//        tasks=[];
//    }else{
//        tasks=JSON.parse(localStorage.getItem('tasks'));
//    };
//    tasks.push(task);
//    localStorage.setItem('tasks',JSON.stringify(tasks));
//    alert('task saved');
//    e.preventDefault(); 
//})

document.querySelector('form').addEventListener('submit',function(e){
    const task=document.getElementById('task').value;
    let tasks;
    if(localStorage.getItem('tasks')==null){
         tasks=[];
        console.log('is null');
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    };
    
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('task saved');
    
    task.forEach(function(task){
        console.log(task);
    });
    e.preventDefault(); 
})


