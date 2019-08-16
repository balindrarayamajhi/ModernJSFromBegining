let val;

val=document;

//html collection
/*
console.log(document.all);
console.log(document.all[0]);
console.log(document.all[5]);
console.log(document.all.length);
console.log(document.head);
console.log(document.body);
console.log(document.doctype);
console.log(document.domain);
console.log(document.URL);
console.log(document.characterSet);
console.log(document.contentType);

//forms
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].id);
console.log(document.forms[0].method);
console.log(document.forms[0].action);

*/

/*
//links
val=document.links;
val =document.links.length;//val=val.length;
val =document.links[0];
val=document.links[0].id;
val=document.links[0].className;
val=document.links[0].href;
val=document.links[0].classList;

*/


//images 

//val=document.images;
//if there is images then we can access by images[index]


//scripts
/*
val=document.scripts;
val=document.scripts[2].getAttribute('src');

console.log(val);

*/


/*
if you want use for each loop in HTML Collection , you can not do that but you can change HMTL collection to any an array and use forEach 
*/

let scripts=Array.from(document.scripts);
scripts.forEach(function(script){
    console.log(script.getAttribute('src'));
})