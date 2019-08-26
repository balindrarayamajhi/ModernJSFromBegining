class Person{
    constructor(firstname,lastname,dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.birthday=new Date(dob);
        
    }
    greeting(){
        return `Hello there ${this.firstname} ${this.lastname}`;
    }
    
    calculateAge(){
        const diff =Date.now()-this.birthday.getTime();
        const ageDate=new Date(diff);
        console.log(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970) ;
    }
    
    //static method
    static addNumber(x,y){
        return(x+y);
    }
}

//const balindra =new Person('Balindra','Rayamajhi','11-10-1988');
//console.log(balindra);
//console.log(balindra.greeting());
//console.log(balindra.calculateAge());
//console.log(Person.addNumber(1,2))

//subclasses : inheritance in ES6 classes 

class Customer extends Person{
    constructor(firstname,lastname,dob,phone,membership){
        super(firstname,lastname,dob);
        this.phone=phone;
        this.membership=membership;
    
    }
}

const john= new Customer('John','Deo','10-10-1970','9851090635','Standard');
console.log(john);