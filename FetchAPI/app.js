document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJson);
document.getElementById('button3').addEventListener('click',getAPIdata);

function getText(){
    //fetc returns promises
    fetch('test.txt')
        .then(function(res){
            // res.text() returns promise here this anynomous function passed to fetch() returns promise
            return res.text();
                }).then(function(data){
                    console.log(data)
                    })
                    .catch(function(error){
                        console.log(error);
                    });
        
    
}

// Get local json data
function getJson() {
  fetch('posts.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}

// Get github Api data 

function getAPIdata(){
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(function(user) {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
      console.log(err);
    });
}