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



 function createPost(post,callback){
     setTimeout(function(){
         posts.push(post);
         callback();
     }
    ,2000);
 };

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

createPost({title :'Post Three', body: 'This is the post three.'},getPost);