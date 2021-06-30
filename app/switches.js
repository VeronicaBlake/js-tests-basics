// 1. Given a string with the value of a day of the week, 
//return the number that that day is in the week. A second argument 
//will be provided to determine if should start week on Monday if true, 
//else Sunday if false. If the string is not a day of the week but is bad input, 
//then return the string 'That's not a day of the week'.

// Example: 
    // input: 'Sunday', false
    // output: 1
//Example:
    // input: 'Sunday', true
    // output: 7


//switches use a strict equality. Instead of a bunch of else ifs, 
//you can use a switch. if it's this, give me that. if it's this, give me that. 
//tbh i'd just use an array. but here's the switch.
function daysPosition(day, offset) {
    let output = 0
    if(offset){
        output = -1
    }
    switch(day,toLowerCase()){
        case "sunday":
            output +=  1
            break;
        case "monday":
            output +=  2 
            break;
        case "tuesday":
            output +=  3
            break;
        case "wednesday":
            output +=  4
            break;
        case "thursday":
            output +=  5
            break;
        case "friday":
            output +=  6
            break;
        case "saturday":
            output +=  7
            break;
        default:
            output =  "That's not a day of the week."
    }
    if(output === 0 && offset){
        output =7
    }
    return offset
}


// --------------------------------------------


/** 2. Given both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

 function golfScore(score, par) {

 }
 

// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
    // output: '-5 Hold'
// Example:
    // output: '2 Bet'

let count = 0

function cardCounter(card) {

}
