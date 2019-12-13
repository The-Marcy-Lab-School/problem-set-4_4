function makeCounter(startingValue) {
  let counter = startingValue;
  return function() {
    counter += 1;
    return counter;
  };
}

function makeFriendList() {
  const friends = [];
  return {
    addFriend(friend) {
      friends.push(friend);
      return `${friend} successfully added.`;
    },
    removeFriend(friend) {
      if (friends.includes(friend)) {
        friends.splice(friends.indexOf(friend), 1);
        return `${friend} successfully removed.`;
      }
      return `${friend} not found`;
    },
    displayFriends() {
      return friends;
    },
  };
}

function Teacher(name, school, grade, subject) {
  this.name = name;
  this.school = school;
  this.grade = grade;
  this.subject = subject;
  this.students = new Array();
}

Teacher.prototype = {
  constructor: Teacher,
  addStudent(student) {
    this.students.push(student);
    return this.students.length;
  },
  changeSchools(newSchool) {
    this.school = newSchool;
    return this.school;
  },
};

function Quadrilateral(a, b, c, d) {
  this.side1 = a;
  this.side2 = b;
  this.side3 = c;
  this.side4 = d;
}

Quadrilateral.prototype.getPerimeter = function() {
  return this.side1 + this.side2 + this.side3 + this.side4;
};

function Rectangle(a, b) {
  Quadrilateral.call(this, a, b, a, b);
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;
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
