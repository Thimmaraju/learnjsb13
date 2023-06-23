
// arr1 = [] // empty array

// arr2 = [1,4,5,6,2,3,9] // array with elements 

// arr3 = ["raju", 2, true, undefined, null] // array different data type elements 

// //Length of the array  - How many elements 


// console.log(arr3.length)

// // how to access specific value in an array 

// //index  - always starts from 0

// console.log(arr2[3])


// // sorting 

// arr4 = arr2.sort()

// console.log(arr4)

// arr5 = ["raju", "kiran", "pradeep", "swetha" ]

// arr6 = arr5.sort()

// console.log(arr6)


// //joining 2 arrays 

// arr7 = arr3.concat(arr6)

// console.log(arr7)


dailyactivities = ["eat", "sleep"]


// To add elements in begining of the arrays
dailyactivities.unshift("excercise")

console.log(dailyactivities)

//To add an element at end of the array

dailyactivities.push("read")

console.log(dailyactivities)

//edit specific index value

dailyactivities[1]= "walking"

console.log(dailyactivities)


// to remove elements from end 

dailyactivities.pop()


console.log(dailyactivities)

dailyactivities.pop()
console.log(dailyactivities)
//to elements from the beginning 
dailyactivities.shift()

console.log(dailyactivities)

dailyactivities.shift()

console.log(dailyactivities)


// How to check spefic element available in my array or not 


arr5 = ["raju", "kiran", "pradeep", "swetha" ]


console.log(arr5.indexOf("kiran"))

if(arr5.includes("Harsha")){

    console.log("Element is present")
}
else{

    console.log("Element is not present")

}


str = "this is javascript class"

splittedarr = str.split(" ")
console.log(splittedarr)

str2 = arr5.join("")

console.log(str2)


str3 = "Javascript"


str4 = str3.split("").reverse().join("")


console.log(str4)

console.log(arr5.reverse())

// concat
// shift
//unshift
//pop
//push
//reverse
//sort
//split 
//join
//includes
console.log(arr5.indexOf("kiran"))


let colors = ['red', 'green', 'blue'];

for (const i of colors){

    console.log("this is loop")

    console.log(i);
}

//==============================================

x = ["abc", "bca","aaa", "bcb", "c", "rac", "rar", "ysj", "ysy"]

//output -  aaa bcb rar

for (let i of x){

    y = x[i].split("")  // [a, b, c]
    

    if(y.length == 1){


    }
    else if(y[0] == y[y.length-1]){

        console.log(x[i])
    }
}

// exersize 

a = [1,2,3,4,5,6]

b= ["A", "B", "C"]


//output c = [1, "A", 2, "B", 3, "C", 4, 5, 6]

