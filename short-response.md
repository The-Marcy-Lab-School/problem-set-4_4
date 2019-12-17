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
  This logs 1, since the variable wasn't declared with any keyword it turned into a property in the global object which it's value can be accessed from anywhere.

2. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```
  This logs "window" since during run time the current execution context is the global object. 

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
  This will output "obj" since the execution context during run time is the object which the property's value belongs to.

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
  We keep getting 3500, because when the inner function specialDiscount is invoked the execution context during run time is the global object. The global object doesn't have a property named "price" who's value is greater than 20000, so it will return 0 as the specialDiscount. When the outer function returns the properties "price", "shipping" then "this" is referring to the object computer. The object does have the properties "price" and "shipping", so it will add those values with the value of tax and what specialDiscount returns when called. One way to fix this is to change "this" in the inner function to "computer"

5. What is a closure?
  A closure is an inner function that gives you access to the conten in the outer function, and do something with that data to create something

6. What are the benefits of using a constructor functions to create object instances instead of a factory function?
  The benefits of using a constructor instead of a factory function is that with constructors we can create object instances that inherit all properties and methods from the constructor while with the factory function you are returning and creating a new object which can't read the execution context "this"

7. What is the `__proto__` property and how does it differ from the `protoype` property?
  A __proto__ is the prototype that an object instances inherites methods and properties from the class constructor prototype properties and methods

8. What is inheritance?
  Inheritance is when object instances get all the properties and methods from the constructor they were created from