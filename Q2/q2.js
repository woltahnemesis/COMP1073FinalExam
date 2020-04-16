// JavaScript Document

//Main class 
class Person {
  constructor(name, age, gender, classes) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.classes = classes;
  }

//Method that greets when it's invoked    
  greeting() {
    console.log("Hi! I'm " + this.name);
  };

//Method that says gooybye when it's invoked
  bye() {
    console.log(this.name + ' has left the building. Bye for now!');
  };
}

//Instantiating the object called Person
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP']);
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase']);


//This is a subclass that's inheriting the main class' properties
class Teacher extends Person {
    //2 properties were added
  constructor(name, last, age, gender, classes, subject, grade) {
    super(name, age, gender, classes);
    // subject and grade are specific to Teacher
    this.last = last;
    this.subject = subject;
    this.grade = grade;
  }
}

//Instantiating the teacher
let rich = new Teacher('Rich', 'Freeman', 25, 'male', ['ASP.net', 'PhP'], 'BootStrap', 99.01);
