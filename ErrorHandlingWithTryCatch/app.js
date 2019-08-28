const user={email:'user1@exe.com'};

try{
    //produces a ReferenceError
    //myFunction();
    
    // produce a TypeError
    //null.myFunction();
    
    //Produce a SyntaxError
    //eval('Hello world');
    
    //Produce URIError
    //decodeURIComponent('%');
    
    //custom error
    if(!user.name){
        //Just a string is thrown here we can throw primitive types too but it is good practise to wrap string in error object.
        //throw 'User has no name';
        throw new Error("User has no name"); //or throw new SyntaxError("User has no name");
}
    
    
    /*
        The decodeURIComponent() function decodes a Uniform Resource Identifier (URI) component previously created by encodeURIComponent or by a similar routine.

        The encodeURIComponent() function encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

        console.log(ecodeURIComponent('?age=31'));                      outputs "%3Fage%3D31"
        console.log(encodeURIComponent('?name=balindra &age=32'));      outputs "%3Fname%3Dbalindra%26age%3D32"
        
       console.log(ecodeURIComponent("%3Fage%3D31"));                           outputs "?age=31"
        console.log(encodeURIComponent("%3Fname%3Dbalindra%26age%3D32"));       outputs "?name=balindra &age=32"
    */
}catch(e){
    console.log(e); // print error name and message seperated by :
    console.log(e.name+' '+e.message);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(e instanceof Error);
    
}finally{
    console.log('Finally runs regardless of either error happens or not ')
}

console.log('Program continue');