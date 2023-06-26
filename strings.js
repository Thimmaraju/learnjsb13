
str = "This Javascript class"

str2 = 'Raju'

str3 = `Javascript`


console.log(typeof(str3))


str4 = "Person a's son is b"

locator = `//*[i'd="idvale"]`

console.log(locator)

var x = "₹6,999"

var y = "₹7,749"

num1 = Number("₹6,999".replace("₹", "").replace(',', ""))

console.log(num1)


num2 = Number("₹7,749".replace("₹", "").replace(',', ""))

total = num1+num2

console.log(total)


str5 = "ThiMMaRaju"
console.log(str5)
str6 = str5.toLowerCase()

console.log(str6)

str7 = str5.toUpperCase()

console.log(str7)

str8 = str5.concat(str6)

console.log(str8)


str9 = "      Raju   "

console.log(str9)


str10 = str9.trim()

console.log(str10)

console.log(str10.length)


st1 = "This is strings class"

arr1 = st1.split(" ")

console.log(arr1)

console.log(arr1[0])

console.log(st1.charAt(0))

console.log(st1.substr(8,15))

console.log(st1.slice(0,4))


if(st1.includes("strings")){

    console.log("Strings is present")
}

else{

   console.log("Raju is not preset")
}