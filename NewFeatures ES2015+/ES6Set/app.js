// SETS - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);
//console.log(set1);

//pass an array to Set constructor to create new set
const set2=new Set([1,true,'str1']);
//console.log(set2);

//get count 
//console.log(set1.size);
//console.log(set2.size);


//check for values 
//console.log(set1.has('str1')); //fasle
//console.log(set1.has('A string'))//true
//console.log(set2.has(1+0)); // true
//console.log(set1.has({name:'John'})); // fasle 
//even there is an object with same property and value but this is an object not a primitive value if we have used reference 
// store it in set and passed that reference on has() method then it would return true like
//const bal={name:'Balindra',age:'31',gender:'Male'};
//set1.add(bal);
//console.log(set1.has(bal));// true


//delete an item in set
set1.delete(100);
//console.log(set1);

//Iterating through set
//
//for(let item of set1){
//    console.log(item);
//}
//set1.values() and set.keys() get the same thing as set1 but set1.entries() gives an entry as [key, value] pair of item

//for(let item of set1.entries()){
//    console.log(item);
//}

// forEach loop 
set1.forEach(item =>console.log(item));

//convert set to an array 
const setArray = Array.from(set1);
console.log(setArray);

