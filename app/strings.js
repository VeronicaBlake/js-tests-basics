// Write a function that returns the character from a string at a given position
function letterAtPosition(str, position) {
    let result = str.charAt(position)
    return result
}

// Write a function that will join two strings with an optional separating character 
function concat(str1, str2, seperator = " ") {
    return str1 + seperator + str2

}

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
    return str[position].toUpperCase()
}