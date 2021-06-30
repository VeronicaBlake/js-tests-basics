// Dog Challenges

// Add the following properties to the dog object: name, legs, tail, and likes. 
// The name property should have a value that is a string, the legs property 
// should have a value that is a number, the tail property should have a 
// boolean value, and the likes property should have a value that is an 
// array.Inside the array, include at least 4 values.
let goodDoggo = {
<<<<<<< HEAD
  name : "Rudy",
  legs : 3,
  tail : true,
  likes : ["walks", "being a good boy", "treats,", "revolution"]
=======
  name: "Roach",
  legs: 6,
  tail: true,
  likes: ["Veronica", "bones", "park", "music"]
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471
}


// write a function that returns the value of the legs property on your dog 
//object using dot notation.
function howManyLegs() {
<<<<<<< HEAD
 return(goodDoggo.legs)
=======
  return goodDoggo.legs
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471
}

// Cat Challenges

let cat = {
  name: "Pickles",
  legs: 4,
  whiskers: true,
  likes: ["napping", "playing", "running at 2:00am", "pets", "stealing food off the counter"]
}

// Write a function that uses bracket notation to change the cat's name from 
// "Pickles" to "Kevin".Then use either dot or bracket notation to return 
// the value of the name property.
function renameCat() {
<<<<<<< HEAD
  cat.name = "Kevin"
  return(cat.name)
=======
  return cat["name"] = "Kevin"
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471
}

// Create a function that uses dot or bracket notation to create a property 
// on the cat object called "color" and assign it to any color you'd like. 
// Then return the value of the color property.

function colorTheCat() {
<<<<<<< HEAD
  cat.color="black & white"
  return(cat.color)
}

// Delete the whiskers property off of the cat object. You may use either dot or 
//bracket notation.

delete cat.whiskers
=======
  return cat["color"] = "brown"
}

// Delete the whiskers property off of the cat object. You may use either dot or bracket notation.
delete cat["whiskers"]
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471

// Write a function that uses dot AND bracket notation to access and return the 
// value of the fourth item in the likes array("pets"). 
// Example: objectName.property[indexNumber]

function returnIndex(cat) {
<<<<<<< HEAD
  return(cat.likes[3])
=======
  return cat.likes[3]
>>>>>>> 62b03a66da01660ea5bb17727f26859a7da5d471
}