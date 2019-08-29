// MAPS = key-value pairs - can use ANY type as a key or value
/*
    One of the important differences is also that you’re able to use anything for the keys. You’re not just limited to primitive values like symbols, numbers, or strings, but you can even use functions, objects and dates – too. Keys won’t be casted(coerced) to strings like with regular objects, either.
*/

//const map=new Map();
//map.set('some string','value1');
//map.set({},'value2');
//map.set(function(){},{name:'balindra'});

//Get values by keys
//console.log(map.get('some string'));
//console.log(map.get({})); //undefined
//console.log(map.get(function(){})); //undefined
//
//console.log(map.size);


//const map2=new Map();
//map2.set('testkey','value-2');
//map2.set('testkey','value-2-ver 2.0'); //override the existing value
//map2.set({age:'31'},function(){});
//map2.set(function(a,b){return a+b},{name:'Balindra'});
//console.log('in map2');
//console.log(map2.get('testkey'));
//console.log(map2.get({age:'31'})); //undefined
//console.log(map2.get(function(a,b){return a+b}));//undefined
//
//const map3=new Map();
//map2.set(function add(a,b){return a+b},{name:'Balindra'});
//console.log('in map3');
////console.log(map3.get(add)); // add is not defined 
//console.log(map3.get(function add(a,b){return a+b}));

/*
    don't  use empty function, or anynomous function and empty object 
*/
const key1='str',key2={}, key3=function(){};
const map1=new Map();

map1.set(key1,'string');
map1.set(key2,function(){});
map1.set(key3,{});

//get values by key 
//console.log(map1.get(key1),map1.get(key2),map1.get(key3)); 

//count values
//console.log(map1.size); 

//ITERATING MAP

//  Loop using for...of get keys and value

//for (let [key,value] of map1){
//    console.log(`${key} = ${value}`);
//}

//iterate only keys
//for (let key of map1.keys()){
//    console.log(`${key}`);
//}
// 
//iterate only values 

//for (let value of map1.values()){
//    console.log(`${value}`);
//}

//loop with forEach 

 //get key values
//map1.forEach(function(key,value){
//    console.log(`${key} = ${value}`);
//    });
//console.log(typeof map1);//object
//console.log(typeof map1[Symbol.iterator]==='function'); //true 
//console.log(typeof map1.keys()[Symbol.iterator]==='function'); // true

//CONVERT TO ARRAYS 
 
//create an array of key value pair

//const keyvalArray=Array.from(map1);
//console.log(keyvalArray);

//create an array of keys 
//const keyArray=Array.from(map1.keys());
//console.log(keyArray);
//keyArray.forEach(key => console.log(key));

//create an array of values 
const valueArray=Array.from(map1.values());
console.log(valueArray);
valueArray.forEach(value => console.log(value));



