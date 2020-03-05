/**
 * Quiz 4 focuses on DOM
 *
 * @category    Quiz 4
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      LAWRENCE PYTLESKI <ljpytleski@hawkmail.hfcc.edu>
 * @date        2020.02.27
 * @grade
 */

// Use my page for all examples below.
// https://cislinux.hfcc.edu/~crbanks1

// 2 pts
// 1. Use the JS to get my footer into a variable called foot.

var foot = document.getElementById("myFooter").name;

// 3 pts
// 2. Add an event to my footer to fire a method when clicked. Any method name is fine.

<button onclick="document.getElementById('demo').innerHTML = Date()">What time is it?</button>

// 2 pts
// 3. Store my title element in a variable called myTitle.

var myTitle = "CIS-172-70 20W Dashboard";

// 3 pts
// 4. Use JS to change my Title and Footer to say "This Class rocks!"

<title id="demo"></title>
<footer id='demo'></footer>
var myTitle = "This Class rocks!";
document.getElementById("demo").innerHTML = myTitle;