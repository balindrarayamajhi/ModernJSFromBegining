/* 
    allows to subscribe or unsubscribe to certain event or certain functionalities.
    gives really nice subscription pattern 
    used to notify dom of certain elements to updated on certin event 
    
*/
    

function EventObserver(){
    this.observers=[];
}

EventObserver.prototype={
    subscribe:function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    };
    unsubsribe:function(fn){
        /*
            Filters out from the list whatever matches the callback function.if there is no match ,the callback gets to stay on the list . The filter returns a new list and reassigns the list of observer.
        */
        this.observers=this.observers.filter(function(item){
    
                         if(item!==fn)
                            //return item;
                    });
                console.log(`You are now subscribed to ${fn.name}`);
        /*
            The filter() method creates an array filled with all array elements that pass a test (provided as a function).

            Note: filter() does not execute the function for array elements without values.

            Note: filter() does not change the original
        */
            
           
    }
    
    fire:function(){
       this.observers.forEach(item => item.call()); 
    }
}

const clickObv =new EventObserver();

//EvenListner
document.querySelector('.sub-ms').addEventListner('click',function(){
    clickObv.subscribe(getCurrentMilliseconds);
});

document.querySelector('.unsub-ms').addEventListner('click',function(){
    clickObv.subscribe(getCurrentMilliseconds);
});

document.querySelector('.sub-s').addEventListner('click',function(){
    clickObv.subscribe(getCurrentSeconds);
});

document.querySelector('.unsub-s').addEventListner('click',function(){
    clickObv.subscribe(getCurrentSeconds);
});

document.querySelector('.fire').addEventListner('click',function(){
    clickObv.fire();


//click handler 

const getCurrentMilliseconds=function(){
    console.log(`Current Miliseconds : ${new Date().toMilliseconds()}`);
}

const getCurrentSeconds=function(){
    console.log(`Current Seconds : ${new Date().getSecond()}`);
}