/**
 * Quiz 2 focuses on functions and events
 *
 * @category    Quiz 2
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      LAWRENCE PYTLESKI <ljpytleski@hawkmail.hfcc.edu>
 * @date        2020.02.13
 * @grade       8.5 / 10
 **/

// 3 pts
// 1. Define a function that take two arguments, you can choose the name.
//      The function should them multiply them together and return the result

function multiplyNumbers( num1, num2 )
{
    return num1 * num2;
}

let total = multiplyNumbers( 4, 7 );


// 1/2 pts
// 2. Create a button with an id of multiply, with text that says "Multiple 4 and 7"
//      Add an onclick event to this button that calls the function above, passing in 4 and 7.

// let button1 = document.getElementById("Multiply 4 and 7");
// button1.addEventListener( "click", multiplyNumbers );

// This one should be in the HTML like this....
// <button onclick="multiplyNumbers( 4, 7 );" >Multiple 4 and 7</button>


// 2 pts
// 3. Write a function that displays a welcome message to the user in the dev console or anywhere on the page.

function showAlert() {
    alert ("Welcome!");
}

// 2.5/3 pts
// 4. Create a button with an id of welcome, with text that says "Display Welcome"
//      Add a JS created listener click event to this button that calls the welcome function above.

let button2 = document.getElementById("welcome");

button2.addEventListener( "click", showAlert );
