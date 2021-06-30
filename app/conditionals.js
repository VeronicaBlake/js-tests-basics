//1. Given two numbers, write a function that will return  the larger number

function largerNum(num1, num2) {
    if (num1 > num2){
<<<<<<< HEAD
        return num1}
    else return num2
    }
=======
        return(num1)
    }
    else return(num2)

}
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471

// 2. Given two numbers, amount correct and amount possible of a test, return the corresponding letter grade.
// Example: 
// input: 23, 25
// output: "A"
// Example:
// input: 4, 10
// output: "F"

//a much better way to do this than writing out 90-97 is to just say if it's equal to or greater than 90 make it an A
// remember that to find a letter grade you need to multiply by 100
function testGrader(score, possible) {
    let grade = ((score/possible)*100)
<<<<<<< HEAD
    if (grade >= 90){
        return "A"
    }
    else if (grade >= 80){
        return "B"
    }
     else if (grade >= 70){
        return "C"
    }
     else if (grade >= 60){
        return "D"
    }
    else return "F"
}

=======
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
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471

// --------------------------------------------


// 3. Given an integer that represents an hour in the day (1 - 24), 
    //write a function that returns greeting 
    //based off of what hour it is. You'll need to think in military time.
//Morning  (5 - 11): "good morning"
//afternoon  (12 - 17): "good afternoon"
//evening (18 - 21): "good evening"
//night  (22 -24 and 1 - 4): "good night"
//Make sure your ranges are inclusive

<<<<<<< HEAD
//the hour has to be less than or equal to 21, and greater than or equal to 18

function timeOfDayGreeting(hour) {
    if(((hour >= 1) && (hour <=4)) | ((hour<=24) && (hour>=22)))
        return("good night")
    if ((hour >=5) && (hour <=11))
        return("good morning")
    if ((hour >=12) && (hour <=17))
        return("good afternoon")
    if ((hour >=18) && (hour <=21))
        return("good evening")
    }

//4. Write a function that will take in a number and return 'fever' if it indicates a fever 
    //(over 98.6) and additionally if the person should go to the hospital 
    //(at or above 103) 'fever go to hospital' (hint: try this with string concatenation), 
    //if it is under return 'no fever'
=======
function timeOfDayGreeting(hour) {
   if(hour >= 1) and (hour <=4)
        return("Good night!")
    if (hour >=5) and (hour<=11)
        return("Good morning!")
    if (hour >=12) and (hour<=17)
        return("Good afternoon!")
    if (hour>=18) and (hour<=21)
        return("Good evening!")
    }


//4. Write a function that will take in a number and return 'fever' if it indicates a fever (over 98.6) and additionally if the person should go to the hospital (at or above 103) 'fever go to hospital' (hint: try this with string concatenation), if it is under return 'no fever'
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471
function isFever(temp) {
if(temp<= 98.6){
    return "no fever"
}
else if((temp>98.6) &&(temp<103)){
    return "fever"
}
else return "fever go to hospital"
}

//5. Write a function that takes in a car object, if it is not moving then return true
let myCar = {
    make: "Ford",
    model: "Mustang",
    color: "Red",
    moving: false
}

function isStopped(myCar) {
if(myCar.moving == false){
    return true
}
else return false
}

//6. Write a function that returns true if a dish is yours and is dirty, 
//or false if one of the statements is false

let dish = {
    yourDish: true,
    isDirty: true
}

function washDish(dish) {
if((dish.yourDish == true) && (dish.isDirty == true)){
    return true
}
else return false 
}