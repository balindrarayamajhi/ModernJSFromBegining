//Destructuring Assignmnet 

//Array Destructuring 

//let [x,y]=[1,2,3,4];
//console.log(x);
//console.log(y);

//rest pattern 
//let[a, b, ...rest]=[100,200,300,400,500,600];
//
//console.log(a);
//console.log(b);
//console.log(rest);
//let options = {
//  title: "Menu",
//  width: 100,
//  height: 200
//};

//let {title, width, height} = options;
//order does not matter
//let {height, width, title}=options;
//console.log(title);
//console.log(width);
//console.log(height);
//
//({name,age, ...restobj}={name:'Balindra',age:32,gender:'Male',bloodgroup:'B-ve',heght:'165.1cm'});
//console.log(name);
//console.log(age);
//console.log(restobj);

// Array Destructuring

// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople() {
//   return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();


