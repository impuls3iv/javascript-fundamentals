// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").
function greaterNum(a, b){
  if (a > b){
    console.log(a)
  } else {
    console.log(b)
  };
}

greaterNum(4, 5)
// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.
function helloWorld(languageCode){
  if (languageCode == "es"){
    console.log("Ole Worldo")
  } else if (languageCode == "he"){
    console.log("Shalom Olam")
  } else if (languageCode == "en"){
    console.log("Hello World")
  } else{
    console.log("I dont know that language")
  };
}

  helloWorld("he")
// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.
function assignGrade(assignGrade){
  if (assignGrade < 50){
    console.log("Your grade of " + assignGrade + " is an F")
  } else if (assignGrade < 60) {
    console.log("Your grade of " + assignGrade + " is an D")
  } else if (assignGrade < 70) {
    console.log("Your grade of " + assignGrade + " is an C")
  } else if (assignGrade < 80) {
    console.log("Your grade of " + assignGrade + " is an B")
  } else if (assignGrade >= 80) {
    console.log("You got an A!! You probably cheated...")
  }
}

assignGrade(40)
assignGrade(51)
assignGrade(90)
// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".
function pluralizer(noun, number){
  if (number == 0){
    console.log(number + " " + noun + "s")
  } else if (number == 1){
    console.log(number + " " + noun)
  } else {
    console.log(number + " " + noun + "s")
  }
}

pluralizer("dog", 0)
pluralizer("phone", 5)
pluralizer("car", 1)
