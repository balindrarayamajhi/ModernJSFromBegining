//const sayHello = function(){
//    console.log('Hello');
//}


//const sayHello = ()=>{
//    console.log('Hello');
//}

//oneline function does not  need curley braces.
//const sayHello = ()=>console.log('Hello');
  
//const sayHello = ()=>{
//    return 'Hello' 
//}

//oneline return no need of braces and return statement 
//const sayHello = ()=> 'Hello';

// need paranthesis while returning object literal
//cost sayHello =() => ({msg : 'Hello'})


// single param paranthesis is optional for multiple and no param it is compulsory 
//const sayHello = name => console.log(`Hello ${name}`);
//sayHello('Balindra');

//multiple params need paranthesis
//const sayHello =(firstname,lastname) => console.log(`Hello ${firstname} ${lastname}` );
//sayHello('Balindra','Rayamajhi');
//
//
const users =['balindra','rejina','ranjan','rajani'];
//
//const namelengthArray =users.map(function(name){
//    return name.length;   
//});
//
//console.log(namelengthArray);
//
//const nameArray=users.filter(function(name){
//    if(name.length<=6) return name;
//})
//
//console.log(nameArray);

const namelengthArray =users.map((name)=> name.length);

console.log(namelengthArray);

const nameArray=users.filter((name) =>{
    if(name.length<=6) return name;
})
console.log(nameArray);