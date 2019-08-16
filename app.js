//Window object - methods and properties

//Alert

//alert('Hello World');

//prompt
//const input =prompt();
//alert(input);

//confrim

//if(confirm('Are you sure')){
//    console.log('YES');
//}

let val;

//outer height and width

//console.log(window.outerHeight);
//console.log(window.outerWidth);
//
//
////inner height and width
//console.log(window.innerHeight);
//console.log(window.innerWidth);


// scroll x y

//val =window.scrollX;
//val =window.scrollY;

//Location object

//val=window.location;

//console.log(val);

val =window.location.port;
console.log('port :'+val);



val=window.location.protocol;
console.log('prtotcol : '+val);

console.log('host : '+window.location.host);
console.log('pathname : '+this.location.pathname);

val=window.location.href;
console.log('href : '+val);

console.log('search : '+this.location.search);

//Redirect
//this.location.href='http://www.google.com';

//history
//window.history.length();
//window.history.go(-4);

//reload
//window.location.reload();
 


//Navigator
console.log(window.navigator);
console.log(window.navigator.appName);
console.log(window.navigator.appVersion);
console.log(window.navigator.userAgent);
console.log(window.navigator.platform);
console.log(window.navigator.vendor);
console.log(window.navigator.languauge);

