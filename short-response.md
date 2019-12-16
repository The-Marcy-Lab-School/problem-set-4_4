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
The above code logs `1`. This is because the number variable b is added to the global object upon the invocation of the function on line 10. Thus despite being declared in the scope of the function, it is accessible from the global scope.

2. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```
This function logs the global object, this is because even though `this` is being returned within the function, the function execution context is still global.

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
The code above logs the object `obj` as the context. This is because the function returning this is now a method on the `obj` object, which means that the function execution context is now `obj`.

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
Below is the fix I mentioned:
      ```javascript
      const computer = {
        price: 30000,
        shipping: 2000,
        total: function() {
          var tax = 3000;
          const specialDiscount = () => return this.price > 20000 ? 1000: 0;
          return this.price + this.shipping + tax - specialDiscount();
        },
      };

      console.log(computer.total());
      ```

5. What is a closure?

6. What are the benefits of using a constructor functions to create object instances instead of a factory function?

7. What is the `__proto__` property and how does it differ from the `protoype` property?

8. What is inheritance?