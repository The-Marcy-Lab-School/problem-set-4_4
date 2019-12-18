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
      
  This code logs undefined for the function call `func()` and `console.log(b)`. This is because there is no return statement and the variable `b` is not defined outside function. 

2. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```
  The code logs `window` as `this` is referencing the global object. 

3. What will the code below output? Explain the difference, if any, between this output and that of problem 2.
      ```javascript
      const obj = {
        func: function() {
          return this;
        },
      };

      let context = obj.func();

      console.log(context);
      ```
  The code will log the object method that contains the function. This output differs as the invocation type is different for each problem. Problem 3 deals with function invocation and `this` would be referring to `func`. While the `this` in problem 2 references the global object `window`.

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
  The bug is within the `specialDiscount(this.price)` invocation. This is because the `this.price` looks for price within the function `specialDiscount()` and is not able to find an existing price. This can be fixed by replacing `this.price` with `computer.price` so that price is looked for within `computer`

5. What is a closure?
  A closure is a function when it creates an enclosed scope that can only be accessed by the function or object method that is returned by the function.

6. What are the benefits of using a constructor functions to create object instances instead of a factory function?
  Using constructor functions to create object instances are more beneficial than using factory functions as they allow you to make modify object instances without affecting any other object instance that you have made. Factory functions prevent you from make specific changes and therefore can give you an outcome that is not intended. Constructors make it easy to create more objects with the same properties and methods.

7. What is the `__proto__` property and how does it differ from the `protoype` property?
  The `__proto__` is an accessor property that allows you to read and write to the `protoype` property. While `protoype` is the object that builds the `__proto__` when a new object is created with `new`.

8. What is inheritance?
  Inheritance occurs within objects with relationships such as `is-a`. An object is able to inherit from its protoype and can form inheritance by creating a protoype chain on a constructor. This can be seen through `call()`, which allows for the properties of the constructor to be inherited. 