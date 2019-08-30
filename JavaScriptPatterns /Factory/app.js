/* 
    factory pattern is used to create multiple objects  
    also called factorty method in JS.
    a way of creating an interface to create objects but we can let subclasses to define which class instance to instatiate.
    often used in application to manage, mantain and manipulate collections of objects that different but at the same have many similar charcteristics.
*/

function Memberfactory(){
    this.createMember=function(name,type){
        let member='';
        if(type==='simple'){
            member=new SimpleMemberShip(name);
        }else if(type==='standard'){
            member=new StandardMemberShip(name);
        }else if(type==='super'){
            member=new SuperMemberShip(name);
        }
    
    member.type=type;
    member.define=function(){
        console.log(`${this.name} ${this.type}:${this.cost}`);
        
        }
        return member;
    }
    
}

const SimpleMemberShip=function(name){
    this.name=name;
    this.cost='$5';
}

const StandardMemberShip=function(name){
    this.name=name;
    this.cost='$10';
}

const SuperMemberShip=function(name){
    this.name=name;
    this.cost='$15';
}

const members=[];
const factory=new Memberfactory();
members.push(factory.createMember('Rejina Shrestha','simple'));

members.push(factory.createMember('Ranjan Shrestha','standard'));

members.push(factory.createMember('Rejina Shrestha','super'));

members.forEach(member=>member.define());