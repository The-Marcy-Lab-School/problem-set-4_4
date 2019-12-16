//Question 1
const makeCounter = function(startingValue) {
  return function() {
    startingValue++;
    return startingValue;
  }
};

//Question 2
const makeFriendList = function(friendArr) {
  return {
    addFriend(name) {
      friendArr.push(name);
      return `${name} successfully added.`
    },
    removeFriend(name) {
      if(friendArr.includes(name)) {
        friendArr.splice(friendArr.indexOf(name), 1);
        return `${name} successfully removed.`
      }
      return `${name} not found.`
    },
    displayFriends() {
      return friendArr;
    }
  }
}

//Question 3
function Teacher(name, school, grade, subject) {
  this.name = name;
  this.school = school;
  this.grade = grade;
  this.subject = subject;
  this.students = [];
}

Teacher.prototype.addStudent = function(studentName) {
  this.students.push(studentName);
  return this.students.length;
}

Teacher.prototype.changeSchools = function(schoolName) {
  this.school = schoolName;
  return this.school;
}

//Question 4
function Quadrilateral(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
}

Quadrilateral.prototype.getPerimeter = function() {
    return (this.side1 + this.side2 + this.side3 + this.side4);
}

//Question 5
function Rectangle(length, width) {
  Quadrilateral.call(this, length, width);
  this.length = length;
  this.width = width;
  this.side3 = length;
  this.side4 = width;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
}