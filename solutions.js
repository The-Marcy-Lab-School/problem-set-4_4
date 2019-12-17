// problem 1
function makeCounter(startingValue){
    return function(){
        return startingValue += 1;
    }
}

// problem 2
function makeFriendList(){
    let arr = [];
    return {
        addFriend: function(name){
            arr.push(name);
            return `${name} successfully added.`
            
        },
        removeFriend: function(name){
            if(arr.includes(name)){
                arr.splice(arr.indexOf(name), 1);
                return `${name} successfully removed.`
            }else{
                return `${name} not found.`
            }
        },
        displayFriends: function(){
            return arr;
        }
        
    }
}

// problem3
function Teacher(name, school, grade, subject){
    this.name = name;
    this.school = school;
    this.grade = grade;
    this.subject = subject; 
    this.students = [];
}

Teacher.prototype.addStudent = function(str){
    return this.students.push(str);
}

Teacher.prototype.changeSchools = function(str){
    return this.school = str;
}

// problem 4 &\ 5
function Quadrilateral(side1, side2, side3, side4) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.side4 = side4;
}

Quadrilateral.prototype.getPerimeter = function() {
    return (this.side1 + this.side2 + this.side3 + this.side4);
}


function Rectangle(length, width) {
  Quadrilateral.call(this, length, width);
    this.length1 = length;
    this.width1 = width; 
    this.side3 = length;
    this.side4 = width;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);

Rectangle.prototype.getArea = function() {
  return this.side1 * this.side2;
}

module.exports = {
    makeCounter, 
    makeFriendList,
    Teacher,
    Quadrilateral,
    Rectangle,
}