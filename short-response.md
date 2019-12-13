# Problem Set #2
## Closures, Prototypes, and Constructors

1. What does the following code log? Why?
      ```javascript
      function func() {
        b = 1;
      }

      func();

      console.log(b);
      ```
  - This snippet logs `1` to the console because when `b` was initialized without a variable keyword and was added a property to the global scope.

2. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```
  - This snippet logs the `window` or `global` objects to the console because `this` is evaluated to a function declaration in the global scope.

3. What will the code below output? Explain the difference, if any, between this output and that of problem 8.
      ```javascript
      const obj = {
        func: function() {
          return this;
        },
      };

      let context = obj.func();

      console.log(context);
      ```
  - This snippet logs `obj` because `this` is evaluated to be the context of the function declaration, which is the `obj` where it was declared as a method.

4. We expect the following code to log `34000` but instead we are getting `35000`. What is the bug and how can we fix it?
      ```javascript
      const computer = {
        price: 30000,
        shipping: 2000,
        total: function() {
          var tax = 3000;
          function specialDiscount() {
            if (this.price > 20000) {
              return 1000;
            } else {
              return 0;
            }
          }

          return this.price + this.shipping + tax - specialDiscount();
        }
      };

      console.log(computer.total());
      ```
  - The bug is that out `specialDiscount` isn't returning the value we want because it was declared inside another function. `this` evaluates to the global object and `0` is returned. We could fix this by structuring our code so that `specialDiscount` is its own method of `computer` or by calling `price` with the correct object name using *dot* or *bracket* notation.

5. What is a closure?
  - A closure is a function that reads or writes to a variable in its local scope that is the block scope of an encapsuling function.

6. What are the benefits of using a constructor functions to create object instances instead of a factory function?
  - When creating instances, constructor functions are beneficial because we have to use them with the `new` which sets the execution context to the created object. Factory functions don't need to be invoked with `new` because they already return an object and `this` doesn't evaluate to it.

7. What is the `__proto__` property and how does it differ from the `prototype` property?
  - `__proto__` is a property that points to the prototype of an objects constructor function, so inherited properties and methods live here. `prototype` is another property of obejects that holds properties that belong to the object itself.

8. What is inheritance?
  - Inheritance is a principle of object-oriented programming and in JavaScript a side effect of the relationship between a constructor function's prototype and the prototypes of objects created as an instance of the function. An instance prototype is the constructor function's prototype property, and so methods and properties can be passed down to these instances, hence the term 'inherit'.