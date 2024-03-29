document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.getElementById('number').value;
// document.querySelector('input [type="number"]').value;
  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload =function() {
    //if(this.status === 200) {
      //const response = JSON.parse(this.responseText);
      console.log(this.response);
      //let output = '';
      let output = ''; 
      if(JSON.parse(this.responseText).type === 'success'){ 
      
          const response = JSON.parse(this.responseText);
           
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    //}
  }

  xhr.send();

  e.preventDefault();
}