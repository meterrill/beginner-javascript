// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList = 'wrapper';

// put it into the body
document.querySelector('body').insertAdjacentElement('afterbegin', myDiv);

// make an unordered list
const myList = document.createElement('ul');

// add three list items with the words "one, two three" in them
const li1 = document.createElement('li');
li1.innerText = 'one';
const li2 = document.createElement('li');
myList.appendChild(li1);
li2.innerText = 'two';
myList.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'three';
myList.appendChild(li3);

// put that list into the above wrapper
document.querySelector('.wrapper').insertAdjacentElement('afterbegin', myList);

// create an image
const myImage = document.createElement('img');

// set the source to an image
myImage.setAttribute('src', 'https://picsum.photos/200');

// set the width to 250
myImage.setAttribute('width', '250');

// add a class of cute
myImage.className = 'cute';

// add an alt of Cute Puppy
myImage.setAttribute('alt', 'Cute Puppy');

// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// Have that function make 4 cards

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
