/**
 * Quiz 4 focuses on DOM
 *
 * @category    Quiz 4
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      LAWRENCE PYTLESKI <ljpytleski@hawkmail.hfcc.edu>
 * @date        2020.02.27
 * @grade       5 / 10
 */

// Use my page for all examples below.
// https://cislinux.hfcc.edu/~crbanks1

// 1.5 / 2 pts
// 1. Use the JS to get my footer into a variable called foot.

var foot = document.getElementById("myFooter");

// 1 / 3 pts
// 2. Add an event to my footer to fire a method when clicked. Any method name is fine.

<button onclick="document.getElementById('demo').innerHTML = Date()">What time is it?</button>
foot.addEventListener('click', someMethodName);

// 1 / 2 pts
// 3. Store my title element in a variable called myTitle.

var myTitle = document.getElementById("myTitle");

// 1.5 / 3 pts
// 4. Use JS to change my Title and Footer to say "This Class rocks!"


document.getElementById("myFooter").innerHTML = "This Class rocks!";
document.getElementById("myTitle").innerHTML = "This Class rocks!";