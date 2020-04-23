/**
 * Quiz 7 focuses on jQuery
 *
 * @category    Quiz 7
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      YOUR NAME <YOUREMAIL@hawkmail.hfcc.edu>
 * @date        2020.04.16
 * @grade       9.5 / 10
 */

// 1 pt
// 1. Assume this is an HTML file, add a tag to import the jQuery file from a CDN.

<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>

// 1 pt
// 2. Assume this is an HTML file, add a tag to import a local jQuery file called jquery.min.js

<script src="jquery-3.4.1.min.js"></script>

// 1.5 / 2 pts
// 3. Use jQuery to select the following div below and store it in a variable called div.
// <div id="newUserSignUpModal" style="display:none;" ><p>There is form data in this div.</p></div>

let div = $( '#newUserSignUpModal' );

// 1 pt
// 4. The div selected above is currently hidden, use a jQuery method on this div variable to make it visible.

quiz7.show();

// 2 pts
// 5. Assume the user is done using the modal in the div above.
//      Use a jQuery method to slowly fade the div out over a time span of 4 seconds.

quiz7.fadeOut(4000);

// 3 pts
// 6. List three more methods below that are available via the jQuery API.

.find() gets the descendants of each element in the current set of matched elements,
.add() creates a new jQuery object,
.length finds the number of elements in the jQuery object.