/*
Promises
an alternative to callback, an alternative way to handle callback, called promises because while they are hadling asyc operation they can promise to do something when that operation is finished.

We handle promise response with .then

*/
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// function createPost(post){
//     setTimeout(function(){
//         posts.push(post);
//     }
//    ,2000);
// };
//
//function getPost(){
//    setTimeout(function(){
//        let output='';
//        posts.forEach(function(post){
//            output+=`<li ${post.title}<br/> ${post.body} </li>`;
//        });
//        document.body.innerHTML= output;
//                      
//    },
//      1000);
//}
//
//createPost({title :'Post Three', body: 'This is the post three.'});
//getPost();
//



// function createPost(post,callback){
//     setTimeout(function(){
//         posts.push(post);
//         callback();
//     }
//    ,2000);
// };  
// is replaced by the code below with promise 

function createPost(post){
    
    /* 
         resolve is what we want to call when we are done 
         with what are doing 
         And 
         reject,we want to call if there is some kind of error we want to throw.
         
         */
    
     return new Promise(function(resolve,reject){
         setTimeout(function(){
         posts.push(post);
             const testerror =true;
             if(!testerror){
                resolve();
             }else{
                 reject('Error : something went wrong');
             }
         }
        ,2000);    
     })
     
 }


function getPost(){
    setTimeout(function(){
        let output='';
        posts.forEach(function(post){
            output+=`<li ${post.title}<br/> ${post.body} </li>`;
        });
        document.body.innerHTML= output;
                      
    },
      1000);
}
// get post is passed as resolved in promise

//createPost({title :'Post Three', body: 'This is the post //three.'}).then(getPost);


/*
.then(fn1).catch(fn2) fn1 is the function passed we want to call when we are done with what are doing with .then and and fn2 is the function passed we want to call if there is some kind of error we want to throw
*/
createPost({title :'Post Three', body: 'This is the post three.'}).then(getPost).catch(function(message){
                    console.log(message)
                    alert(message);
                    });