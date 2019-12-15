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
Answer: This function logs `1` because when func was invoked `b` was added to the global object because `b` was initialized without a variable keyword.

2. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```
Answer: The following logged the `Window `object because inside `func` when we returned `this` ,`this` is referring to the `global` object.

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
Answer: The following logs `obj` because `this` referred to the context of that object because of function declaration, meaning `obj` bcause it was declared as a method.

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

Answer: The following code logged 35000 because when we declared the function `specialDiscount` the `this` in our if statement didn't referred to price which is supposed to be `35000` , which is actually supposed to be `34000` if our statement was true and line 14 would've executed and return `34000`. To fix this we have to lexically bind `this` to the context of our object. In shorter `this` changes its context because of the function declartion on line 6. 
```javascript
  const computer = {
        price: 30000,
        shipping: 2000,
        total: function() {
          var tax = 3000;
          const specialDiscount = () => {
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
Answer: A closure is a function that references local variables from its local scope. Closures only see the environment in which it was created not the environment in which it is called.

6. What are the benefits of using a constructor functions to create object instances instead of a factory function?
Answer: The benefits of using a constructor functions to create object instances instead of a factory function because we use `new` which sets the execution context to the new object we create every time. Factory functions don't need `new` because they return an object already and `this` does not refer to that object.

7. What is the `__proto__` property and how does it differ from the `protoype` property?
Answer: `__proto__` is a property that points to the the prototype of the instances created by our object constructor function. `prototype` is a property that contain the properties of the object itself. We use `__proto` on instances and `prototype` on the object itself.

8. What is inheritance?
Answer: Inheritance is when an instance created from an object constructor function , can use the object constructor propeties and methods that live on it's prototype. An instance can also use the same methods and propeties which makes the term 'inherit'.