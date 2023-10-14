let allMovies = [];

let result = "";

function displayMessage(message) {
    document.getElementById("text").innerHTML += message;
  }

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this. haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    console.log("A new movie is added");
    displayMessage("A new movie is added<br>");
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    console.log("Printing all movies....");
    displayMessage("Printing all movies....<br>");
    for (movie of allMovies) {
        console.log(movie.title + ", rating of " + movie.rating + ", havewatched: " + movie.haveWatched);
        displayMessage(movie.title + ", rating of " + movie.rating + ", havewatched: " + movie.haveWatched + "<br>");
    }
    console.log("\nYou have " + allMovies.length +  " movies in total");
    displayMessage("<br>You have " + allMovies.length +  " movies in total<br>");
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    console.log("printing movie that has a rating higher than " + rating);
    displayMessage("printing movie that has a rating higher than " + rating + "<br>");
    var counter = 0;
    for (movie of allMovies) {
        if (movie.rating > rating) {
            console.log(movie.title + " has a rating of " + movie.rating);
            displayMessage(movie.title + " has a rating of " + movie.rating + "<br>");
            counter++;
        } else {
            continue;
        }
    }
    console.log("\nIn total, there are " + counter + " matches")
    displayMessage("<br>In total, there are " + counter + " matches" + "<br>");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("changing the status of the movie...");
    displayMessage("changing the status of the movie...<br>");
    for (movie of allMovies) {
        if (movie.title === title) {
            if (movie.haveWatched == false) {
                movie.haveWatched = true;
            } else {
                movie.haveWatched = false;
            }
            break;
        }
    }
}

////////////////////////////////////////////////////////////
//Styling
var page = document.getElementsByTagName("body")[0];
page.style.background = "black";
page.style.textAlign = "center";
page.style.padding = "20px";
page.style.fontFamily =  "Helvetica Neue , Helvetica, Arial, sans-serif";
page.style.alignContent = "center";
page.style.height = "55em";
page.style.backgroundImage = "url('images/theater.JPEG')";
page.style.backgroundSize = "cover"

var header = document.getElementById("header");
header.style.color = "white";

var box = document.getElementById("box");
box.style.background = "beige";
box.style.height = "44em";
box.style.width = "30em";
box.style.position = "absolute";
box.style.marginBottom = "20px";
box.style.alignContent = "center"
//centering
box.style.left = "50%";
box.style.top = "60%";
box.style.transform = "translate(-50%, -50%)";
//border
box.style.borderRadius = "50px"
box.style.border = "thick solid #aba472";

var text = document.getElementById("text");
text.style.textAlign = "left";
text.style.marginLeft = "6em";
text.style.fontSize = "15px";

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
displayMessage("----------------<br>");
displayMessage("running program......<br>");
displayMessage("----------------<br>");

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
displayMessage("----------------<br>");

console.log("----------------");
addMovie(movie1);
console.log("----------------");

displayMessage("----------------<br>");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayMessage("----------------<br>");
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
displayMessage("----------------<br>");
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
displayMessage("----------------<br>");
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
displayMessage("----------------<br>");
console.log("----------------");

highRatings(3.5);