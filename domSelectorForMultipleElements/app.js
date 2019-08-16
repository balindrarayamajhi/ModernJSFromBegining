/*
    DOM selector for multiple elements :selector that are used to select multiple dom elements and return either HTML collection on Node list ,both are similar to arrays expect ther are certian thing we can't do as 
    with regular arrays but we can change both HTML collection and Node list to regular array using Array.form() .
*/

/*
document.querySelectorAll() : returns NodeList, there are some differences on Nodelist and HTMLCollection . NodeList 
not only elemnts but also things like text node and allows to do forEach() and other array method without converting it to an array.
*/
//document.getElementsByClassName : Note getElements not getElement 
/*
const items =document.getElementsByClassName('collection-item');

console.log(items);
console.log(items[0]);
items[0].style.color='red';
items[3].textContent='Hello';
items[4].innerText='Hi';
*/
/*In this case elements with class 'collection-items' within <ul>....</ul> tags will be selected because here selector is not in global scope instead first the scope is limited to 'ul' by querySelector('ul') . Such combination is allowed.
*/
/*
const listItems=document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);
*/



//document.getElementsByTagName(): returns NodeList
/*
var  itemsbyTag =document.getElementsByTagName('li')
console.log(itemsbyTag);
itemsbyTag[4].style.color='green';

*/


//document.querySelectorAll() : returns NodeList

//var items= document.querySelectorAll('ul.collection li.collection-item');
var items= document.querySelectorAll('li');
console.log(items);

items.forEach(function (item,index){
    console.log(index+ ' '+item.className);
    
});
var itemsOdd=document.querySelectorAll('li:nth-child(odd)');
console.log(itemsOdd);
itemsOdd.style.color='red';
//querySelectorAll('li:nth-child(odd)').forEach(function(item){item.style.color:'red';
//})
//itemsOdd.forEach(function(item,index){
//    console.log(index+' '+item.className);
//    item.style.color='red';
//})



