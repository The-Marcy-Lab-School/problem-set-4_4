// 1)
const makeCounter = function(startingValue){
    return function(){
        return startingValue += 1;
        console.log(startingValue += 1);
    }
}

//2)
 function makeFriendList(){
     const friends =[];
     return {
         addFriend: function(string){
             friends.push(string);
             return `${string} successfully added.`
         },
         removeFriend: function(string){
             if(friends.includes(string)){
             friends.splice(friends.indexOf(string),1);
             return `${string} successfully removed.`
            }
             return `${string} not found`;
         },
         displayFriends: function(){
            return friends;
         }
     }
 }
 
// 3)
function Teacher(name, school, grade, subject) {
    this.name = name;
    this.school = school;
    this.grade = grade;
    this.subject = subject;
    this.students = [];
}

Teacher.prototype.addStudent = function(name){
    this.students.push(name);
    return this.students.length;
};

Teacher.prototype.changeSchools = function(school){
    this.school = school;
    return this.school;
};


//4)
function Quadrilateral(side1, side2, side3, side4) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
}

Quadrilateral.prototype.getPerimeter = function (){
    return this.side1 + this.side2 + this.side3 + this.side4;
};

//5)
function Rectangle(length, width){
    Quadrilateral.call(this, length, width, length, width);
    this.getArea = function (){
       return  this.length * this.width;
    };
}

Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;