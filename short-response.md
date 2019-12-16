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
The following code will log 1. This is becuase variable b is added to the global object, so it will not throw an error when referenced from outside of its function.
It's very clearly initialized within function func() but is not trapped within the scope and closed off from rest of the code due to it being placed within the global object.

2. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```

This code will log the global window object and all its properties. This is because 'this' refers to the current window that it is called upon.
Assigning it to the context variable does not change the window 'this' is pointing at when logged.

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

Unlike the previous code, this snippet will return us the object called obj and it's properties. In the other example, the code logged the global object's windows which listed its large amount properties 
while this code snippet logs obj with only the func property which executes a function that return the current window object, which is the object we are inside of (obj).
  
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

The bug you are looking for is on line 55. Within the if statement, we use 'this' when we are not within the scope as cmoputer.price
So, when the code is ran it is asking itself is undefined > 20000, and the answer will always be false therefore never returning 1000 and always 0.
So by using an arrow function instead we are able to keep everything within the same scope, allowing 'this' to work properly and retrieve the value of this.price.

const specialDiscount = () => {
    if (this.price > 20000) {
      return 1000;
    } else {
      return 0;
    }
  }
  
By intializing your method this way you fix the bug within the above code.

5. What is a closure?

6. What are the benefits of using a constructor functions to create object instances instead of a factory function?

7. What is the `__proto__` property and how does it differ from the `protoype` property?

8. What is inheritance?