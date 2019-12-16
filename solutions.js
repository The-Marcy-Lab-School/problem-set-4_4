const makeCounter = function(startingValue) {
  return function() {
    startingValue += 1;
    return startingValue;
  };
};

const makeFriendList = function() {
  const friendsList = [];
  return {
    addFriend (newFriend) {
      friendsList.push(newFriend);
      return `${newFriend} successfully added.`;
    },
    removeFriend (friend) {
      if (friendsList.indexOf(friend) === -1) return `${friend} not found`;
      friendsList.splice(friendsList.indexOf(friend), 1);
      return `${friend} successfully removed.`;
    },
    displayFriends () {
      return friendsList;
    },
  };
};

const Teacher = function(name, school, grade, subject) {
  this.name = name;
  this.school = school;
  this.grade = grade;
  this.subject = subject;
  this.students = [];
};

Teacher.prototype.addStudent = function(student) {
  this.students.push(student);
  return this.students.length;
};

Teacher.prototype.changeSchools = function(newSchool) {
  this.school = newSchool;
  return newSchool;
};

const Quadrilateral = function(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
};

Quadrilateral.prototype.getPerimeter = function() {
  return this.side1 + this.side2 + this.side3 + this.side4;
};

const Rectangle = function (side1, side2) {
  Quadrilateral.call(this, side1, side2, side1, side2);
};

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Quadrilateral;

Rectangle.prototype.getArea = function() {
  return this.side1 * this.side2;
};

module.exports = {
  makeCounter,
  makeFriendList,
  Teacher,
  Quadrilateral,
  Rectangle,
};
