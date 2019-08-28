const http = new easyHTTP;

// Get Posts
//http.get('https://jsonplaceholder.typicode.com/posts',function(response){
//    console.log(response);
//});

//http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//  if(err) {
//    console.log(err);
//  } else {
//    console.log(posts);
//  }
//});

//Get Post single object 
//http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//  if(err) {
//    console.log(err);
//  } else {
//    console.log(post);
//  }
//});



//MAKE POST REQUEST 

//create data

//const data={
//      userId: 1101,
//      title: 'Test Title',
//      "body": 'This is test body for teting HTTP post request using custom library.'
//    }
//http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,posts){
//        if(err) {
//            console.log(err);
//          } else {
//            console.log(posts);
//          }
//});


//MAKE PUT REQUEST

//const data={
//      title: 'Test Title',
//      "body": 'This is test body for teting HTTP post request using custom library.'
//    }; 
//
//http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


//MAKE A DELETE REQUESTED
http.delete('https://jsonplaceholder.typicode.com/posts/5', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});