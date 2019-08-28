const http=new EasyHTTP;
//http.get('http://jsonplaceholder.typicode.com/users')
//    .then(success=>console.log(success))
//    .catch(failure=>console.log(failure));

//User data 
const user={
    name:'Micheal Zilestra',
    username:'micheal',
    email:'zmicheal@exe.com'

}

//create user
//http.post('http://jsonplaceholder.typicode.com/users',user)
//    .then(success=>console.log(success))
//    .catch(failure=>console.log(failure));

//update user 
//http.put('http://jsonplaceholder.typicode.com/users/2',user)
//    .then(success=>console.log(success))
//    .catch(failure=>console.log(failure));

//delete user 
http.delete('http://jsonplaceholder.typicode.com/users/11')
    .then(success=>console.log(success))
    .catch(failure=>console.log(failure));