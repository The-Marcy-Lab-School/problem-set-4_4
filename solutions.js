//1
function makeCounter(startingValue) {
    return function() {
        return startingValue++;
        console.log(startingValue++);
    } 
}

//2
function makeFriendList() {
    const friends = [];
    
    return {
        addFriend: function(name) {
            friends.push(name);
            return `${name} successfully added`
        },
        removeFriend: function(name) {
            let result = friends.find((friend) => friend === name);
            
            if(!result) return `${name} not found`;
            
            let deleteIndex = friends.indexOf(result);
            friends.splice(deleteIndex, 1);
            return `${name} successfully removed`;
        },
        displayFriends: function() {
            return friends;
        }
    }
}

//3
function Teacher(name, school, grade, subject, students) {
    this.name = name;
    this.school = school;
    this.grade = grade;
    this.subject = subject;
    this.students = [];
}

Teacher.prototype.addStudent = function(nameOfStudent){
        return this.students.push(nameOfStudent);
}

Teacher.prototype.changeSchools = function(newSchool) {
    return this.school = newSchool;
}

//4
function Quadrilateral(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
}

Quadrilateral.prototype.getPerimeter = function(side1, side2, side3, side4) {
    return this.side1 + this.side2 + this.side3 + this.side4;
}

//5
function Rectangle(length, width) {
    Quadrilateral.call(this);
    this.side1 = length;
    this.side2 = width;
    this.side3 = length;
    this.side4 = width;
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function(length, width) {
    return this.side1 * this.side2;
}