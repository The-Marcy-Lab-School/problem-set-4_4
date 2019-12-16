// Question 1

const makeCounter = (startingValue) => {
      return function() {
        startingValue +=1
        console.log(startingValue)
    }
}

// Question 2

const makeFriendList = () => {
    const friendsList = [];
    
    return {
    addFriend(friend) {
      friendsList.push(friend)
      return `${friend} successfully added.`
    },
    removeFriend(friend) {
      if (friendsList.includes(friend)) {
        friendsList.splice(friendsList.indexOf(friendsList[friend]),1)
        return `${friend} successfully removed.`
      } else return 'friend not found';
    },
    displayFriends() {
      return friendsList
    }
  };
}

// Question 3

function Teacher(name, school, grade, subject, ...students) {
  this.name = name;
  this.school = school;
  this.grade = grade;
  this.subject = subject;
  this.students = students;
  this.addStudent = (student) => {
    this.students.push(student);
    return this.students.length;
  }
  this.changeSchools = (newSchool) => {
    this.school = newSchool;
    return `${newSchool}`
  }
}

// Question 4

function Quadrilateral( side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
  Quadrilateral.prototype.getPerimeter = function() {
      (side1 + side2 + side3 + side4)
  }
}

// Question 5

const Rectangle = function(side1, side2) { // side1=side3 side2=side4
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