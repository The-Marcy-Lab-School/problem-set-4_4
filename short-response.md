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

5. What is a closure?

6. What are the benefits of using a constructor functions to create object instances instead of a factory function?

7. What is the `__proto__` property and how does it differ from the `protoype` property?

8. What is inheritance?