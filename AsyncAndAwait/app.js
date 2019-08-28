/*
function myfunc(){
    return 'Hello';
}

console.log(myfunc());
*/

//add async to the begining of the function what it does is it makes the function to return promise

/*async function myfunc(){
    return 'Hello';
}

myfunc().then(ret => console.log(ret));

*/

//if we do sth asynchronous here ,we can use await inside async function to makes JavaScript wait until that promise settles and returns its result.
/*
async function myfunc(){
    
    const promise =new Promise((resolve,reject)=>{
                setTimeout(()=>resolve('Hello'),1000)
        });
    const res=await promise;
    console.log(res);
}
myfunc();
*/
/*
async function getUser(){
    //await the response of the fetch call
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    console.log(data);
}

getUser();
*/
//and the code below result same

async function getUser(){
    //await the response of the fetch call
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    //console.log(data);
    return data;
}

getUser().then(ret => console.log(ret));