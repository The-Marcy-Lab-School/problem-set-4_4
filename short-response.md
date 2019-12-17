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
*When the 'func' fucntion is invoked the b variable becomes a apart of the global scope. So, when the varibale 'b' is logged it will return what value the variable 'b' was assigned with, which is 1.


2. What does the following code log? Why?
      ```javascript
      function func() {
        return this;
      }

      let context = func();

      console.log(context);
      ```
*This will log the global object. This is because when the 'func' function is invoked in the 'context', 'this' is returned and 'this' is refering to the global object. 

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
*This will return the object 'obj' with the function 'func', because the function is invoked in the variable 'context' as a method of the 'obj' object. 

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
*This was returning 3500, because 'this.price' in the function 'specialDiscount' is not refering to the 'price' property in the 'computer' object. However, if you 

5. What is a closure?
*A closure is a function declared inside of a fucntion, that has access to the outer function's scope. 

6. What are the benefits of using a constructor functions to create object instances instead of a factory function?
*The main benefits would be that by using constructor functions to create objects, is that you can have a constructor that has properties and methods you want multiple objects to have. This means you do not have to repeatedly create the same properties you want multiple objects to have when you create them, you just have to create a 'new' object from your constructor. This also means you can maintian methods in one construcor for multiple objects. 

7. What is the `__proto__` property and how does it differ from the `protoype` property?
*The `__proto__` is a property that points to the object's protoype object. It differs from the protoype, because protoype is the object used to build `__proto__`, and it is only availble on functions while `__proto__` is available everywhere. 


8. What is inheritance?
*Inheritance is when parent classes pass down properties and methods to child classes, but child classes being seperate from the parent class. 