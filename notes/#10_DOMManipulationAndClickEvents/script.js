//DOM AND DOM MANIPULATION
/*
• DOM stands for Document Object Model.
• It enables JavaScript to manipulate HTML and CSS files simply by accessing them and making changes on them.
• It is like a connection point between these three technologies and can help JavaScript change HTML and CSS files within JavaScript.
• DOM is necessary for the website to be interactive.
*/

let heading = document.firstElementChild.lastElementChild.firstElementChild; //DOCUMENT > HTML > BODY > H1

heading.innerHTML = 'Good Bye!'; //With .innerHTML attribute, the text within the element can be changed.
/*
• Look for the HTML Tree logic for more info.
• The H1 element in the body of the HTML is reached by requesting it.
• To reach it, the first child of the document should be visited first, which is HTML, then the last element child is accessed which is 'body', coming after 'head', and finally the first element in the last element child is accessed, which is H1.
*/

heading = document.querySelector('.message'); //An element can be selected and stored into a variable like this; so that, it will be easier to use this element later by preventing from selecting the same element again and again and always typing 'document.querySelector('.message');

//It is also possible to get element by ID and class names:

document.getElementsByClassName('btn')[0].style.color = 'yellow';
//Since multiple elements can be named with the same class name, this method also uses plural 'elements', so it gives back an array even if there is one item with this class name.

document.getElementById('linkedGoogle').style.color = 'orange';
//Since an ID is unique and can only be used once, the ID can only refer to one element and that is why, the method does not give back an array and an instant change can be applied to the element without needing further square brackets.

/*
• .querySelector() method can also be used to make a change on an element by referring to its class name or ID.
• For an ID, a '#' is necessary before the ID inside the quotation marks and a '. (dot)' is necessary before the class name inside the quotation marks.
• It works in the logic of CSS.
*/
document.querySelector('#linkedGoogle').style.color = 'red'; //ID
document.querySelector('.btn').style.color = 'red'; //Class Name

/*
• There is some sort of a limitation of querySelector() method when it is used with a class name that multiple elements have.
• For instance, let's say there are three elements with '.btn' class.
• If querySelecter() method is used, the method will only select the first element with this class.
• The rest of the elements will not be selected.
*/
let btnsOpenModal = document.querySelector('.btn');
//There are three elements that use this class name but querySelector() will only select the first element and ignore the rest.

btnsOpenModal = document.querySelectorAll('.show-modal');
//To be able to reach all the elements with the same class name, .querySelectorAll() method is used.
//This method returns the elements with the same class name as an array.
//So, if a change is to be made in each one of the elements, a loop can be created:
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);

/*
• It is possible to create a path to select an element.
• For example, the 'anchor' tag in the first 'li' in a 'ul' list can be selected.
• Since this is a hierarchical selector, the order must be from outer to inner.
*/
document.querySelector('.listHere #linkedGoogle a');
/*This method eventually selects the 'anchor' (a) tag.
• The method reaches to anchor tag by first reaching the unordered list in which the anchor tag is.
• It reaches to the list by its class name, '.listHere', then selects the list item in which the anchor tag is by using its ID, #linkedGoogle.
• And finally reaches the 'a' tag.
*/

/*
• document.querySelector() method searches the whole document, selects a certain element and manipulates the element given in the paranthesis.
• What is inside paranthesis is simply the selector.
*/
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// .value property can be used to get the actual value of an element:
document.querySelector('.guess').value;
console.log(document.querySelector('.guess').value); //To see the result of .value property.

//The value can also be manipulated:
document.querySelector('.guess').value = 15;

console.log(document.querySelector('.guess').value); //When logged to the console after setting a value, console returns the value that is set.

/* .toggle() METHOD:

• .toggle() method can be used when a class is required to be removed from or added to an element.
• .toggle() adds the selected class to the element if the element does not have it.
• But it also removes the selected class from the element if the class is already there.
*/
player0Element.classList.toggle('player--active');
player1Element.classList.toggle('player--active');

//With .style attribute, CSS can be manipulated:
heading.style.color = 'red';
/* A CSS style is manipulated here.
• '.style' is required after the name of the element and then the change is specified.
• This is called 'setting a property' because a new value is set to the element. 
*/
heading.style;
/*This is called 'getting the property.'
• This one only simply asks for the property and looks for the already assigned value.
• So it returns 'red' in this example.
*/

//• While manipulating CSS, camelCase should be used. And the value should ALWAYS be specified as STRING.

document.querySelector('h1').style.fontSize = '75px';
//.fontSize is used camelCase and it is a string. (On a CSS file, it would have to be font-size)

//MORE INFO ABOUT IT: https://www.w3schools.com/jsref/dom_obj_style.asp

// .innerHTML, .textContext, .style are examples of PROPERTIES.
// .click(), .setAttribute() are examples of METHODS.

document.querySelector('input').click();
/*This is called 'calling a method' because the .click() method actually tells the object to do something.
• The 'input' element is searched and the .click() function is applied to it.
• What it does is the checkbox is already checked when the website is visited.
*/

document.getElementsByTagName('li');
/*
• This property looks for the whole document and finds all the elements with 'li' tag name.
• Since 'elements' are plural here, it is not possible to make a change on a single tag.
• Also, getElementsByTagName() method gives back the elements in an array.
• REMEMBER: EVEN IF THERE IS A SINGLE ITEM WITH THIS TAG NAME, THE METHOD WILL STILL GIVE BACK AN ARRAY.
• For a single element among the 'li' tags in the array to be changed, the order number of the item in the square brackets is needed, as it is the case with arrays all the time.
*/

document.getElementsByTagName('li')[2].style.color = 'blue';
document.getElementsByTagName('li').length; //The number of items with the requested tag name can be found with '.length'.

//HANDLING CLICK EVENTS
/*
• .addEventListener() method is a method with two parameters.
• In the first parameter, the event type (the action) is defined.
• It can be a mouse click, or a keypress in keyboard, or a mouse movement etc.
• And the second parameter the .addEventListener() method requires is actually the Event Handler FUNCTION, which explains what to do following the selected event.
• This method always requires the event handler function, which is the second parameter.
*/

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
/*
• In the first parameter of the .addEventListened method, the event type is defined, which is 'click'.
• It has to be in quotation marks and a comma after the first parameter is necessary.
• In the second parameter, a function is defined.
• It is possible because a parameter should hold a value and since a function has a value, it can be used as a parameter.
• Whatever inside this function (so basically whatever inside the second parameter) is executed following the happening of click event.

• IMPORTANT: When an already declared function is to be used as the second parameter of the method, the function is not actually being called.
• That is why, a set of parantheses are not used after the name of the function; just the name of the function is enough.

• The value that is taken from an input field can be stored in a variable.
• Also, a value from an input field returns back as a string.
• For a number comparison, this string should be turned into a number. See the example:
*/

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //The value of the .guess input is stored in the variable and also turned into a number from a string.
  console.log(guess, typeof guess);
});

//Applying sound effect after a click or a keypress event:

let audio1 = new Audio('sounds/audio-file.mp3');
//New audio with the source is assigned to a variable with the 'new' keyword.

//To activate the sound effect after the click.
audio1.play();

/*
• To manipulate a change after a selected period of time, setTimeout method can be used.
• Setting a timeout to remove the 'pressed' class automatically after a period of time in the example below.
• setTimeout firstly requires a function and then a time limit after when the function will be executed.
*/
setTimeout(function () {
  activeButton.classList.remove('pressed');
}, 100); //setTimeout executes the above function after 100 milliseconds (1 second).
