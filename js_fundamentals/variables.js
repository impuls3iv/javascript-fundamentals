// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: job title, geographic location, partner's name, number of children.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var job = 'Developer'
var location = 'Toronto'
var partner = 'Mika'
var kids = 2

console.log("You will be a " + job + " in " + location + " and married to " + partner + " with " + kids + " kids")
// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their age based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.
var currentYear = 2016
var birthYear = 1987
var age = 0

age = currentYear - birthYear

console.log("I am " + age + " years old")
// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 28
var lifeSpan = 100
var perDiem = 0.5
var total = 0

total = (lifeSpan - currentAge) * 365 * 0.5

console.log("You will need " + total + " to last you until the ripe old age of " + lifeSpan)


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
var radius = 4
var circum = 0
var pi = 3.14

circum = 2 * pi * radius
console.log("The circumference is " + circum)

var area = 0
area = pi * radius ^ 2
console.log("The area is " + area)
// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.
//T(°F) = T(°C) × 1.8 + 32
var celc = 0
var fer = 32
var tempFer = 0
tempFer = celc * 1.8 + 32
//T(°C) = (T(°F) - 32) / 1.8
tempCel = (fer - 32) / 1.8

console.log(celc + " degrees Celcius is " + tempFer + " Ferenheight")
console.log(fer + " degrees Fahrenheight is " + tempCel + " Celcius") 
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
