

student = {

    "firstname" : "Harsha",
    "lastname": "L",
    "Place": "Bangalore",
    "Age" : 29

}



// {


//     cy.get(locator).type(student.firstanme)
// }

console.log(student.firstname)

console.log(student["Place"])

student["course"] = "cypress"


console.log(student.course)

student["company"]= "ABC"

console.log(student.company)

student['Place'] = "Chennai"

console.log(student['Place'])

delete  student["Age"]

console.log(student.Age)


users = {

    "username1"  : "Harsha",
    "username2" : "Pradeep",
    "username3": "Kiran",
    "username4" :"Swetha"

}

//========================================
//es6
//for in

for (let i in users){

    console.log("this is object values looping ")

    console.log(i)

    console.log(users[i])

    console.log( i + " :" +users[i])
}

