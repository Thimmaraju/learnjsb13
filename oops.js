
// //es6 

// class classname{

//     //varibale

//     //methods 
// }

// //let stu1 = new student()


// // //stu1.printmessage()
// // console.log(stu1.stuname)


// // let stu2 = new student()

// // //stu2.printmessage()

// // stu1.printdetails("Raju", "blr")

// // stu1.addtonumbers(4,6)

// // stu1.addtonumbers(10,6)

// // student.printmessage()

// // console.log(student.stupalce)

// class student {

//    stuname = "Shwetha" 

//     stupalce = "Bangalore" 

//     constructor(){

//         console.log("This is constuctor")
//     }

//     printdetails(stname, stplace){

//         console.log(stname,stplace)
//     }

//     addtwonumbers(a, b){

//         console.log("first value: "+ a)
//         console.log("second value: "+ b)
//         console.log("sum value: "+ (a+b))
//     }


// }


// //constructor 

// stu1 = new student()

// stu2 = new student()

// st3 = new student()

// // constructor is method

// // which will automatically called when u create object of class


// // class 

// //  varibale 
// //     static  // classname.varibale

// //     non static  // objname.nonstatic

// //  methods 

// //  constructor

// //OOPS

// // 1. Encapsulation

// //     // Data binding between the methods 

// //     //m1

// //     //m2


// // 2. Inheritance 

// // 3. Prototype

// // 4. Polymorphism


// class employee{


//     details(empname, empplace, empid){

//         this.Employeename =empname

//         this.Employeeplace = empplace

//         this.EmployeeID = empid
//     }

//     printemployeedetails(){

//         console.log(this.Employeename, this.Employeeplace, this.EmployeeID)
//     }
// }

// let emp1 = new employee()

// //emp1.details("raju", "blr", "418")

// emp1.printemployeedetails()



// class Student2 {

//     constructor() {
//         let name, marks;
//     }

//     setName(value){
//         this.name=value
//     }

//     setMarks(value){
//         this.marks=value
//     }


//     getname() {
//         return this.name;
//     }

//     getMarks() {
//         return this.marks;
//     }

// }

// let stud = new Student2()

// //stud.setName("Raju")

// x = stud.getname()

// console.log(x)


// Inheritance 


// class A{
//     a=100;
//     display(){
//         console.log(this.a)
//     }
//     messageofclassA(){

//         console.log("Parent class message")
//     }

// }



// class B extends A
// {
//     b=200;
//     show(){
//         console.log(this.b)
//     }

//     messageofClassB(){

//         console.log("Clild class message")
//     }
// }


// class C extends B{

//     c=300;
//     show2(){
//         console.log(this.c)
//     }

//     messageofClassC(){

//         console.log("Clild class message")
//     }

// }

// obj1 = new C()

// obj1.show()

// obj1.messageofClassB()

// obj1.messageofclassA()

// obj1.display()
// obj1.show2()
// obj1.messageofClassC()


// // Prototype 


// class employee {

//     constructor (val1, val2, val3){
//     this.empname = val1;
//     this.empnum = val2;
//     this.empdept = val3;
//     }
    

// }


//   employee.prototype.Org = "DBS QA"

//  employee.prototype.displaydetails= function (){

//      console.log(this.empname, this.empnum, this.empdept, this.Org)
//  }

//   emp1 = new employee("Raju", 418, "L&D")


//   emp1.displaydetails()


//   emp2 = new employee("Kiran", "440", "L&D")

//   emp2.displaydetails()


//Polymorphism

class A{

    display(a,b){
        console.log(a)
        console.log(b)
        console.log("result :"+ (a+b))
    }
    message(){

        console.log("Parent class message")
    }

}
class B extends A
{
    display(a,b,c){
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(a+b+c)
    } 

    message(){

        console.log("Clild class message")
    }
}


obj = new A()

obj.display(2, 5, 8)
obj.message()

//Method overrding 

//method overloading 

// Promises

// Map and set 


//call back 

// Programs 
// var let const 

// == ===


