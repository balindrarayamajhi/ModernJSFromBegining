document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getAPIdata);

function getText(){
    //fetc returns promises
//    fetch('test.txt')
//        .then(function(res){
//            // res.text() returns promise here this anynomous function passed to fetch() returns promise
//            return res.text();
//                }).then(function(data){
//                    console.log(data)
//                    })
//                    .catch(function(error){
//                        console.log(error);
//                    });
//        
//    
//}        
//this code is replaced by the code below using arrow function

fetch('test.txt')
    .then(res => res.text())
    .then(data=>{
        console.log(data);
        document.getElementById('output').innerHTML=data;
    })
    .catch((error)=>console.log(error));
        
    
}

// Get local json data
//function getJson() {
//  fetch('posts.json')
//    .then(function(res){
//      return res.json();
//    })
//    .then(function(data) {
//      console.log(data);
//      let output = '';
//      data.forEach(function(post) {
//        output += `<li>${post.title}</li>`;
//      });
//      document.getElementById('output').innerHTML = output;
//    })
//    .catch(function(err){
//      console.log(err);
//    });
//} 
//       this code is replaced by the code below using arrow function 


function getJson() {
  fetch('posts.json')
    .then(res=> res.json())
    .then(data=> {
      let output = '';
      data.forEach(post=>output += `<li>${post.title}</li>`);
      document.getElementById('output').innerHTML = output;
    })
    .catch(err=>console.log(err));
}
// Get github Api data 

//function getAPIdata(){
//  fetch('https://api.github.com/users')
//    .then(function(res){
//      return res.json();
//    })
//    .then(function(data) {
//      console.log(data);
//      let output = '';
//      data.forEach(function(user) {
//        output += `<li>${user.login}</li>`;
//      });
//      document.getElementById('output').innerHTML = output;
//    })
//    .catch(function(err){
//      console.log(err);
//    });
//} 
//this code is replaced by the code below using arrow function

function getAPIdata(){
  fetch('https://api.github.com/users')
    .then( res => res.json())
    .then( data=> {
      let output = '';
      data.forEach(user => output += `<li>${user.login}</li>`)
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
    
}