//1. Given two numbers, write a function that will return  the larger number

function largerNum(num1, num2) {
    if (num1 > num2){
        return(num1)
    }
    else return(num2)

}

// 2. Given two numbers, amount correct and amount possible of a test, return the corresponding letter grade.
// Example: 
// input: 23, 25
// output: "A"
// Example:
// input: 4, 10
// output: "F"

function testGrader(score, possible) {
    let grade = ((score/possible)*100)
        if(grade >= 90)
            return("A")
        else if(grade >= 80)
            return("B")
        else if(grade >= 70)
            return("C")
        else if(grade >= 60)
            return("D")
        else if(grade >= 50)
            return("F")
    }

// --------------------------------------------


// 3. Given an integer that represents an hour in the day (1 - 24), write a function that returns "good morning", "good afternoon", "good evening", or "good night" based off of what hour it is. You'll need to think in military time.
//Morning is between 5am and 11am (5 - 11)
//afternoon is between 12pm and 5pm (12 - 17)
//evening is between 6pm and 9pm (18 - 21)
//night is between 10pm and 4am (22 -24 and 1 - 4)
//Make sure your ranges are inclusive

function timeOfDayGreeting(hour) {
   if(hour >= 1 and hour <=4)
        return("Good night!")
    if (hour >=5) and (hour<=11)
        return("Good morning!")
    if (hour >=12) and (hour<=17)
        return("Good afternoon!")
    if (hour>=18) and (hour<=21)
        return("Good evening!")
    }


//4. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (at or above 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
function isFever(temp) {

}

//5. Write a function that takes in a car object, if it is not moving then return true
let myCar = {
    make: "Ford",
    model: "Mustang",
    color: "Red",
    moving: false
}

function isStopped(car) {

}

//6. Write a function that returns true if a dish is yours and is dirty, or false if one of the statements is false

let dish = {
    yourDish: true,
    isDirty: true
}

function washDish(dish) {

}