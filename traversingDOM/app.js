let val;

const list=document.querySelector('ul.collection')// selects the firstone
const listItem=document.querySelector('li.collection-item:first-child');// selects the first one aslo if not there is :first-child
 val =listItem;
val=list;

/*
.childNodes is NodeList which also conatians not only element node ,it contains all nodes and line break is the text node sit returns element nodes as well as text node 
*/
//console.log(document.querySelector('ul.collection').childNodes);

val=list.childNodes

/*

    .children is HTMLCollection it contains only element node (i.e nodes for each pair of Html tags), In most of the cases you only cares about elements nodes.
*/

//console.log(document.querySelector('ul.collection').children);

val=list.children;


/*

nodeName and nodeType

    nodeName   type
    #element    1 (tagname without # eg LI in thi case )
    #attribute  2 (depricated reffered as text A  )
    #text       3
    #comment    8
    #document   9 (itself)
    #doctype    10
    
*/

/*
console.log(list.childNodes[0].nodeName +' '+list.childNodes[0].nodeType);
console.log(list.childNodes[1].nodeName+' '+list.childNodes[1].nodeType);
console.log(list.childNodes[3].nodeName +' '+list.childNodes[3].nodeType);

*/
/*
console.log(list.childNodes[1].childNodes);
console.log(list.childNodes[1].childNodes[1].nodeName+' '+list.childNodes[1].childNodes[1].nodeType);

list.children[1].childNodes[0].textContent='Hello';
list.children[2].textContent='Hola';
list.children[2].children[0]id='test-id';

*/

// firstChild, firstElementChild lastChild, lastElementChild
/*
console .log(list.firstChild);
console .log(list.firstElementChild)
console .log(list.lastChild);
console .log(list.lastElementChild);
*/

//childElementCount

/*
console.log(list.childElementCount);
console.log(list.children.length);
console.log(list.childNodes.length);
*/

//Get parent node

/*
console.log(listItem.parentNode);

console.log(listItem.parentElement);

console.log(listItem.parentElement.parentElement);

*/

// Get sibling and Element sibling

/*
console.log(listItem.nextSibling);
console.log(listItem.nextElementSibling);
console.log(listItem.previousSibling);
console.log(listItem.previousElementSibling);// if this is the first elemenet child of parent it does not have previousElemet sibling 
*/

//Get number of sibling nodes

console.log(listItem.parentElement.childNodes.length);

//Get number of sibling element

console.log(listItem.parentElement.children.length);