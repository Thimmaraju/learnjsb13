
function PrintMessage(){

    console.log("THis is function")
}

PrintMessage()

PrintMessage()

PrintMessage()


// function add(a, b){

//     console.log("firstvalue : "+ a  )
//     console.log("secondvalue : "+ b  )

//     console.log("Sum of two numbers : "+ (a+b)  )
// }

// add(23, 45)


// add(2,7)


function substraction(x,y){

    return x-y
}

finalvalue = substraction(45, 20)

console.log(finalvalue)

//es6  arrow functions 

// multiple syntax 


// function add(a, b){

//     console.log("firstvalue : "+ a  )
//     console.log("secondvalue : "+ b  )

//     console.log("Sum of two numbers : "+ (a+b)  )
// }


add = (a, b) => {

    console.log("firstvalue : "+ a  )
    console.log("secondvalue : "+ b  )

    console.log("Sum of two numbers : "+ (a+b)  )

}

suqarerootvalue = x =>{

    console.log(x*x)
}

suqarerootvalue(10)

printtext = () =>{
   

    console.log("This is arrow function")

}

printtext()



substractionvalue = (value1, value2 ) =>  (value1-value2)


k= substractionvalue(35, 25)
console.log(k)


// create a function string1 , string2

// if that string anagram

// mary 

// army

// true

// palindrom 
 
// madam 

// ispalidrome()
