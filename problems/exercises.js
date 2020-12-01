// Question 1
function makeCounter(startingValue){
  let count = startingValue;
  return function(){
    count += 1;
    return count;
  }
}

// Question 2
class Circle {
  constructor(r, color){
    this.radius = r;
    this.color = color;
  }

  drawCircle(){
    return `Drawing a ${this.color} circle.`
  }

  getCircumference(){
    return Math.PI * this.radius * 2;
  }

  getArea(){
    return Math.PI * (this.radius ** 2);
  }

  changeColor(c){
    this.color = c;
    return c;
  }
}

// Question 3
class Teacher {
  constructor(name, school, grade, subject){
    this.name = name;
    this.school = school;
    this.grade = grade;
    this.subject = subject;
    this.students = [];
  }

  addStudent(name){
    this.students.push(name);
    return this.students.length;
  }

  changeSchools(school){
    this.school = school;
    return school;
  }
}

class BankAccount {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this._balance = 0.00;
  }

  showBalance(){
    return `Your balance is $${this._balance.toFixed(2)}.`
  }

  deposit(am){
    this._balance += am;
    return this.showBalance()
  }

  withdraw(am){
    if(this._balance > am){
      this._balance -= am;
      return this.showBalance()
    }
    return "You do not have enough funds."
  }
}

module.exports = {
  makeCounter,
  Circle,
  Teacher,
  BankAccount
};