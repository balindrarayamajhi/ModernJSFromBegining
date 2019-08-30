// Basic structure
/*

(function(){
    //declare private variable and functions : private means can't be accessed outside module
    
    return{
       //public variables and functions 
    }
    
    
})

*/

//create UIController
//Standard module pattern 

/*
const UICtrl= (function(){
    let text='Hello world';
    const changeText=function(){
        const element=document.querySelector('h1');
        element.textContent=text
    }
    
    return{
        callChangeText:function(){
            changeText();
            console.log(text);
        }
    }
    
})();

UICtrl.callChangeText();

//UICtrl.changeText(); //TypeError: UICtrl.changeText is not a function at app.js:36

console.log(UICtrl.text); //undefined

*/

//Revealing  module pattern

const itemCtrl=(function(){
    let data=[];            // sometimes it is defined let _data =[];. It's concention to indiacate private variable.
   function add(item){
        data.push(item);
        console.log('Item Added');
    }
    
    function get(id){
        return data.find(item=>  item.id==id);
            
    }
    
    return{
        add: add,
        get: get
    }
    
})();

itemCtrl.add({id:1,name:'John'});
console.log(itemCtrl.get(1));

/*
 module pattern and revaling module pattern is very similar, the main difference between them is instead of returning own public function(in module pattern), basically map object literal to private function to reveal(revealing module pattern).
 
 reveal -verb
        make (previously unknown or secret information) known to others.
 */