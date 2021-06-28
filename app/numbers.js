// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
<<<<<<< HEAD
    let result = (x +y)
    return result
=======
    return x + y

>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471
}

// Write a function that returns the Cubed value of x
function cubed(x) {
<<<<<<< HEAD
    let result = (x*x*x)
    return result
=======
    return Math.pow(x,3)
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471
}

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(x, y) {
<<<<<<< HEAD
    let result = (Math.floor(x/y))
    return result

=======
    return Math.floor(x/y)
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471
}

// Write a function that takes in a number and determines if it is even. 
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
<<<<<<< HEAD
    let result = (num%2)
    if (result == 0){
        return true
    }
    else return false
=======
    return num % 2 == 0
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471
}


// Given 2 numbers, generate a random number within that range. 
// Make it inclusive so that the starting and ending numbers are part 
// of the range.HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(num1, num2) {
<<<<<<< HEAD
    let result = Math.floor(Math.random() * [num2 - num1] + num1)
    return result
}
=======
    Math.floor(Math.random()*(num2 - num1 + 1)) + num1
}
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471
