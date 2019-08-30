/*
    singleton pattern is manifestation of module pattern
    singleton object is an immidaitley  invoked anymanous function and can only return  one instance of  object at a time 
    and repeated calls to constructor just return the some object and like the module pattern it maintains private reference which cannot be accessed outside.
*/

const singleton =(function(){
    let instance;
    function createInstance(){
        return new Object({name:'Balindra',age:31});
    }
    
    return{
            getInstance: function(){
            if(!instance){
                instance=createInstance();
            }
            return instance;
            }
        }
})();

const instanceA=singleton.getInstance();
const instanceB=singleton.getInstance();

console.log(instanceA===instanceB);// true