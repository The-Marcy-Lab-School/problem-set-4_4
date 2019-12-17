
function makeCounter(num) {
  let startingValue = num;
  return function() {
    startingValue += 1;
    return startingValue;
  };
}

function makeFriendList() {
  const myArr = [];
  return {
    addFriend(friend) {
      myArr.push(friend);
      return `${friend} successfully added.`;
    },
    removeFriend(friend) {
      if (myArr.includes(friend)) {
        myArr.splice(myArr.indexOf(friend), 1);
        return `${friend} successfully removed.`;
      }
      return `${friend} not found.`;
    },
    displayFriends() {
      return myArr;
    },
  };
}

function Teacher(name, school, grade, subject, students = []) {
  this.name = name;
  this.school = school;
  this.grade = grade;
  this.subject = subject;
  this.students = students;
}
Teacher.prototype.addStudent = function(studentstr) {
  this.students.push(studentstr);
  return this.students.length;
};

Teacher.prototype.changeSchools = function (newSchool) {
  this.school = newSchool;
  return newSchool;
};


function Quadrilateral(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
  this.getPerimeter = function() {
    const total = this.side1 + this.side2 + this.side3 + this.side4;
    return total;
  };
}


function Rectangle(length, width) {
  Quadrilateral.call(this);
  this.side1 = length;
  this.side2 = width;
  this.side3 = length;
  this.side4 = width;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);

Rectangle.prototype.getArea = function() {
  const area = this.side1 * this.side2;
  return area;
};
module.exports = {
  makeCounter,
  makeFriendList,
  Teacher,
  Quadrilateral,
  Rectangle,
};
