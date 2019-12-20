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
It logs 1 because b is assigned the value in the global scope when the function is called, 
so when the is logged, it prints 1.

2. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```
It returns the Window object, because this is in the global scope.

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
A property  is assigned to a function inside the object, and storing that function to the variable context. Instead of the window object being returned,
we get the value of func, which in this case is  a function. 
This is  because it is not pointing to window anymore - it's inside the context of obj.

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
Change specialDiscount() from a function declaration to an arrow function, 
`this` will the be bound the object fixing the issue.

5. What is a closure?
A closure is a function inside a function.
It hides variables since the outer function creates a scope for the inner function.

6. What are the benefits of using a constructor functions to create object instances instead of a factory function?
  The ability create methods in prototype, which will apply to the constructor object as well as all the objects that are constructed with it is a benefit of using constructor functions. 
  You can also create new objects and have variables point to the object you create through them.

7. What is the `__proto__` property and how does it differ from the `protoype` property?

  Prototype is a property of a function, while `proto` is an object that points to the prototype and also lists things like the constructor and methods that can be used for all objects.

8. What is inheritance?
  Inheritance is when an object that is created by a constructor takes in parameters or values from the constructor object and uses it in itself. 
  Inheriting methods, for example, takes the methods of the constructor prototype, which allows the object to use the methods as well.
