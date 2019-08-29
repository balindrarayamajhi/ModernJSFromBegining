// Create a symbol
const sym1= Symbol();

//create a symbol with iddentifier 
const sym2= Symbol('sym2');

console.log(sym1);  //Symbol()

console.log(sym2);  //Symbol(sym2)

console.log(typeof sym2); //symbol

//two Symbol never be equal, each symbol is unique even if they have same iddentifier 

console.log(Symbol()==Symbol()) //false
console.log(Symbol('123')==Symbol('123')) //false
console.log(sym2.toString());

//unique Objects key
const KEY1=Symbol();
const KEY2=Symbol();
const myObj={};
myObj[KEY1]='prop1';
myObj[KEY2]='prop2';
myObj.key3='prop3';
myObj.key4='prop4';

//Symbol are not enumerable in for....in 

for(let i in myObj){
    console.log(`${i} : ${myObj[i]}`);
}

//Symbols are ignored by JSON.stringfy
console.log(JSON.stringify(myObj));  //{"key3":"prop3","key4":"prop4"}
console.log(JSON.stringify({age:31})); //{"age":3}
console.log(JSON.stringify({[Symbol('age')]:31})); //{}