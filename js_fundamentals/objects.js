// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe.
//It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa
var myArr = ["tomato", "lettuce", "meat"]
var myRecipe = {
  title:"tacos",
  servings:2,
  ingredients:myArr
};

console.log(myRecipe.title)
console.log(myRecipe.servings)

for (i = 0; i < myRecipe.ingredients.length; i++){
  console.log(myRecipe.ingredients[i])
}


// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'
var bookOne = { title:'Count of Monte Cristo', author:'Dumas', alreadyRead:true };
var bookTwo = { title:'Clockwork Orange', author:'Another dude', alreadyRead:false };
var bookThree = { title:'Swiss Family Robinson', author:'Christian Dude', alreadyRead:true };

var bookArr = [bookOne, bookTwo, bookThree]

for (i = 0; i < bookArr.length; i++){
  if (bookArr[i].alreadyRead === true){
    console.log("You have read " + bookArr[i].title + " by " + bookArr[i].author)
  } else {
    console.log("You have not read " + bookArr[i].title + " by " + bookArr[i].author)
  };
};
// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
var starArr = ['Hartnett', 'McGreggor', 'Bana', 'Sizemore'];
var movie = { title:"Blackhawk Down", duration:190, stars:starArr};

console.log(movie.title + " lasts for " + movie.duration + " minutes. And Stars: " + movie.stars)
