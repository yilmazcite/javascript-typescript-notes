//Working With jQuery

//What is jQuery?
/*
•	jQuery is a JavaScript library.
•	It's a library that "…makes things like HTML document traversal and manipulation, event handling, animation, much simpler…" (https://jquery.com/)
•	It’s the most popular and downloaded library of JavaScript.
*/

//SELECTING ELEMENTS:

//Instead of selecting an element like 'document.querySelector('h1')', 'jQuery('h1')' or '$('h1')' can be used with jQuery in order to select an element.

//To select an item more specifically:

//Select the element 'h1' that is nested inside a div with a class named 'header':
$('#header h1');

//Select the element with the class name 'title' which is inside 'h1':
$('h1.title');

/*
•	There are 5 buttons in the HTML file.
•	To make a change for all of them, document.querySelectorAll() method should be used without jQuery.
•	With jQuery, $() or jQuery() directly selects all the elements inside the document.
*/

$('button'); //Selects all the 'buttons' inside the document.

//MANIPULATING STYLES:

/*
•	To manipulate CSS styles with jQuery, after selecting the element, '.css()' property is used.
•	Then the change is specified.
•	'.css()' property firstly takes in the CSS property that is to be changed,
•	and then secondly takes in the change value that will be applied:
*/

//Select the 'h1' element, manipulate its css style and change the 'color' of the element to 'red':
$('h1').css('color', 'red');

//It is also possible to get the value with .css() property.
//This can be done simply by using the name of the property, without specifying a change:

console.log($('h1').css('color')); //logs "rgb(0, 128, 0)"
console.log($('h1').css('font-size')); //logs "32px"

/*
•	Keep in mind that it is not a good idea to manipulate CSS using DOM and jQuery.
•	The best practice is to make the change in the CSS file and then apply the change to an element using DOM and jQuery.
*/

//How to add the CSS styles of a class to an element:
$('h1').addClass('big-title');

//How to remove the CSS styles of a class from an element:
$('h1').removeClass('big-title');

//Multiple styles can be added to/removed from an element at once.
//All class names can be within the same quotation marks but a whitespace is necessary between each class name:
$('h1').addClass('big-title margin-50');

//It is also possible to check if an element has a certain class:
$('h1').hasClass('margin-50'); //Returns 'true' or 'false'.

//MANIPULATING TEXT:

/*
•	There are two ways to select an element and manipulate its text: .text() and .html()
•	One of them is to use the '.text()' property. Inside the property, the text that will be changed is inserted:
*/

$('h1').text('Bye');
$('button').text('Do not click me');

/*
•	As an alternative to using '.innerHTML' in the DOM, '.html()' can be used.
•	With '.html()', tags can be used inside the property because the '.html()' property reads and treats them properly.
•	However, trying the same with '.text()' property does not return the same result. '.text()' treats its property as pure text as a whole.
*/

$('button').html('<em>Hey</em>'); //Change made: 'Hey' (italicized)
$('button').text('<em>Hey</em>'); //Change made: <em>Hey</em>

//MANIPULATING ATTRIBUTES:

/*
•	Attributes are 'img', 'src', 'a' etc...
•	In order to manipulate attributes with jQuery, '.attr()' method is used.
•	Just like other properties, the actual value of the attribute can be checked.
•	For this, again, a second property must not be inserted.
*/

console.log($('img').attr('src')); //Gets the 'src' value of 'img' tag.

$('a').attr('href', 'https://www.google.com'); //Changes the value of anchor (a) tag's 'href' to "https://www.google.com".

console.log($('a').attr('href')); //Gets the actual value of the tag.

/*
•	It is to be remembered that a class is also an HTML attribute.
•	It means that if a class is applied to an HTML element, with '.attr()' property...
•	...the classes that are applied to an element can be found:
*/

console.log($('h1').attr('class')); //logs the existing class names of ‘h1’

//ADDING EVENT LISTENERS:

//Adding event listeners with jQuery is much easier than just using pure JavaScript.

$('h1').click(function () {
  $('h1').css('color', 'purple');
});

/*
•	With pure JavaScript, a for loop would be required to do the same change for all the buttons in this document.
•	With jQuery, that is unnecessary:
*/

//'click' event example:

$('button').click(function () {
  $('h1').css('color', 'red');
});

//'keypress' event example:

$('input').keypress(function (event) {
  $('h1').text(event.key);
});

/*
•	An event listener can be added without properties like '.click()' or 'keypress()'.
•	'.on()' method can be used as a relatively more flexible alternative.
•	This method takes two parameters; the first one is the event, and the second one is the action, mostly the function in which the event happens.
•	The examples above with '.click()' and '.keypress()' methods could be also done with '.on()' method.
*/

//'mouseover' event example with '.on()':

$('p').on('mouseover', function () {
  $('p').css('color', 'blue');
});

//ADDING AND REMOVING ELEMENTS

//To add elements, either before() and after(), or prepend() and append() can be used.

//before() and after() Methods:

//'.before()' method adds the new element before the opening tag of the selected element, not inside the selected element.
$('button').before('<button>Button</button>');

//'.after()' method adds the new element after the closing tag of the selected element, not inside the selected element.
$('h1').after('<input></input>');

//prepend() and append() Methods:

/*
•	With '.prepend()' and '.append()', this works in a slightly different way.
•	'.prepend()' method adds the new element right before the content of the selected element; so, right after the opening tag, not before.
*/

$('h1').prepend('<input></input>');

/*
•	With '.append()', it works in the same logic but in the opposite direction.
•	The new element is added after the content of the selected element, but before the closing tag of the selected element.
*/

$('h1').append('<input></input>');

/*
•	To remove elements, '.remove()' method can be used.
•	This method gets rid of all occurences of the selected element from the document:
*/

$('h1').remove();

//WEBSITE ANIMATION:

//Check the methods separately:
$('button').on('click', function () {
  $('h1').hide();
  $('h1').show();

  $('h1').toggle();

  $('h1').fadeOut();
  $('h1').fadeIn();

  $('h1').slideUp();
  $('h1').slideDown();
  $('h1').slideToggle();

  /*
•	Custom CSS can be also used to animate an element.
•	CSS property and value should be in curly paranthesis.
•	Important: Only the CSS properties with a 'numeric value' can be used within '.animate()' method:
*/

  $('h1').animate({ opacity: 0.5 });
  $('h1').animate({ margin: '20px' });

  //Animation methods can be used together:
  $('h1').slideUp().slideDown().slideUp().animate({ opacity: 0.5 });
});

//Check jQuery Effect Methods for More: https://api.jquery.com/category/effects/
