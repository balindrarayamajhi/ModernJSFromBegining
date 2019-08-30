const User =function(name){
    this.name=name;
    this.chatroom=null;
}

User.prototype={
    send :function(message,to){
        this.chatroom.send(message,this,to);
    },
    
    recieve:function(message,from){
        
        //console.log(`${from.name} to ${this.name} : ${message}`);
        console.log(from.name+ '  to '+this.name +' : '+message);
    }
}

const Chatroom =function(){
    let users=[] // list of users 
    return {
        register:function(user){
            users[user.name]=user;
            user.chatroom=this;
        },
        
        send: function(message,from,to){
        if(to){
        //single user message
            to.recieve(message,from);
        }else{
            //mass message 
            for(key in users){
                if(users[key]!==from){
                    users[key].recieve(message,from)
                    }
                }
            }
        }
    }
}

const rejina = new User('Rejina');
const rajani= new User('Rajani');
const ranjan=new User('Ranjan');

const chatroom=new Chatroom();
console.log(typeof chatroom);
//console.log(chatroom);
chatroom.register(rejina);
chatroom.register(rajani);
chatroom.register(ranjan);

rejina.send('Hello Ranjan',ranjan);
ranjan.send('Hello Rajani, How you doing there ?',rajani);
rejina.send('Hi guys knock knock , getting me?');