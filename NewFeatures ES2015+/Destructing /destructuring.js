source : https://javascript.info/destructuring-assignment

Destructuring assignment
    The two most used data structures in JavaScript are Object and Array.Objects allow us to create a single entity that stores data items by key, and arrays allow us to gather data items into an ordered collection.

    But when we pass those to a function, it may need not an object/array as a whole, but rather individual pieces.

    Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient. Destructuring also works great with complex functions that have a lot of parameters, default values, and so on.

Array destructuring
    An example of how the array is destructured into variables:

            // we have an array with the name and surname
            let arr = ["Ilya", "Kantor"]

            // destructuring assignment
            // sets firstName = arr[0]
            // and surname = arr[1]
            let [firstName, surname] = arr;

            alert(firstName); // Ilya
            alert(surname);  // Kantor
    Now we can work with variables instead of array members.

    It looks great when combined with split or other array-returning methods like

            let [firstName, surname] = "Ilya Kantor".split(' ');


“Destructuring” does not mean “destructive” : It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.            

Ignore elements using commas
    Unwanted elements of the array can also be thrown away via an extra comma:

        // second element is not needed
        let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

        alert( title ); // Consul

    In the code above, the second element of the array is skipped, the third one is assigned to title, and the rest of the array items is also skipped (as there are no variables for them).

Works with any iterable on the right-side
    Actually, we can use it with any iterable, not only arrays:
    
        let [a, b, c] = "abc"; // ["a", "b", "c"]
        let [one, two, three] = new Set([1, 2, 3]);    


Assign to anything at the left-side
    We can use any “assignables” at the left side.For instance, an object property:
        
         let user = {};
        [user.name, user.surname] = "Ilya Kantor".split(' ');
        
        alert(user.name); // Ilya        


Looping with .entries()
    We can use Object.entries(obj) method with destructuring to loop over keys-and-values of an object:
    
            let user = {
            name: "John",
            age: 30
            };
            
            // loop over keys-and-values
            for (let [key, value] of Object.entries(user)) {
            alert(`${key}:${value}`); // name:John, then age:30
            }

    And the same for a map:
        
            let user = new Map();
            user.set("name", "John");
            user.set("age", "30");
            
            for (let [key, value] of user) {
            alert(`${key}:${value}`); // name:John, then age:30
            }


The rest ‘…’
    If we want not just to get first values, but also to gather all that follows – we can add one more parameter that gets “the rest” using three dots "...":
            
       
            let [name1, name2, ...rest]=["Julius", "Caesar", "Consul", "of the Roman Republic"];
            
            alert(name1); // Julius
            alert(name2); // Caesar
            
            // Note that type of `rest` is Array.
            alert(rest[0]); // Consul
            alert(rest[1]); // of the Roman Republic
            alert(rest.length); // 2

    The value of rest is the array of the remaining array elements. We can use any other variable name in place of rest, just make sure it has three dots before it and goes last in the destructuring assignment.

Default values
    If there are fewer values in the array than variables in the assignment, there will be no error. Absent values are considered undefined:

        let [firstName, surname] = [];

        alert(firstName); // undefined
        alert(surname); // undefined