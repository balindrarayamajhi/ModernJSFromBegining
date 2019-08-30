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

    If we want a “default” value to replace the missing one, we can provide it using =:

                // default values
                let [name = "Guest", surname = "Anonymous"] = ["Julius"];
                
                alert(name);    // Julius (from array)
                alert(surname); // Anonymous (default used)

    Default values can be more complex expressions or even function calls. They are evaluated only if the value is not provided. For instance, here we use the prompt function for two defaults. But it will run only for the missing one:

                // runs only prompt for surname
                let [name = prompt('name?'), surname = prompt('surname?')] = ["Julius"];

                alert(name);    // Julius (from array)
                alert(surname); // whatever prompt gets
                
Object destructuring
    The destructuring assignment also works with objects.The basic syntax is:

            let {var1, var2} = {var1:…, var2…}

    We have an existing object at the right side, that we want to split into variables. The left side contains a “pattern” for corresponding properties. In the simple case, that’s a list of variable names in {...}.
                
    For instance:
                
                let options = {
                  title: "Menu",
                  width: 100,
                  height: 200
                };
                
                let {title, width, height} = options;
                
                alert(title);  // Menu
                alert(width);  // 100
                alert(height); // 200

    Properties options.title, options.width and options.height are assigned to the corresponding variables. The order does not matter. This works too:


    changed the order in let {...}

                let {height, width, title} = { title: "Menu", height: 200, width: 100 }

    The pattern on the left side may be more complex and specify the mapping between properties and variables.                
                        

If we want to assign a property to a variable with another name, for instance, options.width to go into the variable named w, then we can set it using a colon:

            let options = {
            title: "Menu",
            width: 100,
            height: 200
            };
            
            // { sourceProperty: targetVariable }
            let {width: w, height: h, title} = options;
            
            // width -> w
            // height -> h
            // title -> title
            
            alert(title);  // Menu
            alert(w);      // 100
            alert(h);      // 200

    The colon shows “what : goes where”. In the example above the property width goes to w, property height goes to h, and title is assigned to the same name.
    
For potentially missing properties we can set default values using "=", like this:
    
        let options = {
        title: "Menu"
        };
        
        let {width = 100, height = 200, title} = options;
        
        alert(title);  // Menu
        alert(width);  // 100
        alert(height); // 200

Just like with arrays or function parameters, default values can be any expressions or even function calls. They will be evaluated if the value is not provided.

In the code below prompt asks for width, but not for title:

                let options = {
                title: "Menu"
                };

                let {width = prompt("width?"), title = prompt("title?")} = options;

                alert(title);  // Menu
                alert(width);  // (whatever the result of prompt is)

We also can combine both the colon and equality:

                let options = {
                  title: "Menu"
                };
                
                let {width: w = 100, height: h = 200, title} = options;
                
                alert(title);  // Menu
                alert(w);      // 100
                alert(h);      // 200
                
If we have a complex object with many properties, we can extract only what we need:
                
                 let options = {
                  title: "Menu",
                  width: 100,
                  height: 200
                };
                
                // only extract title as a variable
                let { title } = options;
                
                alert(title); // Menu

 
The rest pattern “…”
    What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?
                
    We can use the rest pattern, just like we did with arrays. It’s not supported by some older browsers (IE, use Babel to polyfill it), but works in modern ones.It looks like this:
                 let options = {
                  title: "Menu",
                  height: 200,
                  width: 100
                };
                
                // title = property named title
                // rest = object with the rest of properties
                let {title, ...rest} = options;
                
                // now title="Menu", rest={height: 200, width: 100}
                alert(rest.height);  // 200
                alert(rest.width);   // 100
    
Gotcha if there’s no let
    In the examples above variables were declared right in the assignment: let {…} = {…}. Of course, we could use existing variables too, without let. But there’s a catch.
    This won’t work:
                
                 let title, width, height;
                
                // error in this line
                {title, width, height} = {title: "Menu", width: 200, height: 100};

    The problem is that JavaScript treats {...} in the main code flow (not inside another expression) as a code block. Such code blocks can be used to group statements, like this:
                
                 {
                  // a code block
                  let message = "Hello";
                  // ...
                  alert( message );
                }                
    So here JavaScript assumes that we have a code block, but why there’s an error. We have destructuring instead.To show JavaScript that it’s not a code block, we can wrap the expression in parentheses (...):
                
                let title, width, height;
                
                // okay now
                ({title, width, height} = {title: "Menu", width: 200, height: 100});
                
                alert( title ); // Menu


Nested destructuring
    If an object or an array contain other nested objects and arrays, we can use more complex left-side patterns to extract deeper portions.
                
    In the code below options has another object in the property size and an array in the property items. The pattern at the left side of the assignment has the same structure to extract values from them:
                
                 let options = {
                  size: {
                    width: 100,
                    height: 200
                  },
                  items: ["Cake", "Donut"],
                  extra: true
                };
                
                // destructuring assignment split in multiple lines for clarity
                let {
                  size: { // put size here
                    width,
                    height
                  },
                  items: [item1, item2], // assign items here
                  title = "Menu" // not present in the object (default value is used)
                } = options;
                
                alert(title);  // Menu
                alert(width);  // 100
                alert(height); // 200
                alert(item1);  // Cake
                alert(item2);  // Donut

    The whole options object except extra that was not mentioned, is assigned to corresponding variables:
                
               
                
                