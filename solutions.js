function makeCounter(startingValue){
    return function(){
        startingValue += 1;
        return startingValue
    };
};

function makeFriendList(){
   let myArr = [];
   return {
        addFriend(friend){
           myArr.push(friend);
           return `${friend} successfully added.`;       
        },
        removeFriend(friend){
            if(myArr.includes(friend)){
                myArr.splice(myArr.indexOf(friend),1);
                return `${friend} successfully removed.`
            }
            return `${friend} not found.`
        },
        displayFriends(){
            return myArr;
        },
    }
};

function Teacher(name,school,grade,subject,students){
    this.name = name;
    this.school = school;
    this.grade = grade;
    this.subject = subject;
    this.students = [];
}

Teacher.prototype.addStudent = function(student){
    this.students.push(student);
    return this.students.length;
}

Teacher.prototype.changeSchools = function(school){
    this.school = school;
    return school;
}

const maya = new Teacher('Maya Bhattacharjee', 'The Marcy Lab School', 'post-secondary', 'L&D')

function Quadrilateral(side1,side2,side3,side4){
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.side4 = side4;
}

Quadrilateral.prototype.getPerimeter = function(){
    return this.side1 + this.side2 + this.side3 + this.side4;
}

function Rectangle(side1,side2){
    Quadrilateral.call(this, side1,side2,side1,side2);
}
Rectangle.prototype = Object.create(Quadrilateral.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function(){
    return this.side1 * this.side2;
}

const rect = new Rectangle(30, 40);


module.exports ={
  makeCounter,
  makeFriendList,
  Teacher,
  Quadrilateral,
  Rectangle,
};