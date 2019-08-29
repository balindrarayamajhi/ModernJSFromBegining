/*
Iterator are Generator are different but they are used in same way to iterate through somthing(iterable object). you can call part of, return ,pasue it and call the next part and so on.

Iterators are kind like a advance loop that can be paused and generator are functions that can be paused and return multiple values.
*/

/*

// Iterator Example

function nameIterator(names){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<names.length? 
                {value:names[nextIndex++],done:false} : {done:true}
        }
    }
}

//creates an array of names and call iterator

const names=nameIterator(['Balindra','Rejina','Rajani','Ranjan']);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

*/

/*

//in-built iterator example 
    const arr=[1,2,3,4,5];
    
    const itr=arr[Symbol.iterator]();
//The Symbol.iterator well-known symbol specifies the default iterator for an object. Used by for...of.

console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr.next());

// Using iterator in different way
const arr2=[1,2,3,4,5,6];
    
const itr2=arr[Symbol.iterator]();
let val=itr2.next().value;
while(val){
    console.log(val);
    val=itr2.next().value;
}
*/
/*
// Generator Example 

// for making genertor * must be put between the function keyword and function name

function* sayNames(){
    yield 'Balindra';
    yield 'Rejina';
    yield 'Rajani';
    yield 'Ranjan';
}

const name =sayNames();
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());
console.log(name.next());

*/
/*
//Generator one more example

function * generatorFunction() { 
  console.log('This will be executed first.');
  yield 'Hello, ';  
    
        //return{value: "Hello" ,done: false}
    
  console.log('I will be printed after the pause');  
  yield 'World!';
    
        //return{value: "World!" ,done: false}
    
}
const generatorObject = generatorFunction(); 
console.log(generatorObject.next()); 
console.log(generatorObject.next()); 
console.log(generatorObject.next()); 
*/



//ID creator

function * createIds(){
    let index=0;
    while(true){
        yield index++;
    }
}

const gen =createIds();
const gen1 =createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen1.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen1.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen1.next().value);


