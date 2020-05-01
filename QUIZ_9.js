/**
 * Quiz 9 focuses on AJAX
 *
 * @category    Quiz 9
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      YOUR NAME <YOUREMAIL@hawkmail.hfcc.edu>
 * @date        2020.04.30
 * @grade
 */


// 4 pts
// 1. Create a JS object called cartData and save 3 properties in it.
//    The properties should be name, price, and quantity; feel free to give them any values.

let cartData = {
    name: 'Ajax',
    price: '$21.00',
    quantity: '7'
}

// 1 pts
// 2. Create a variable called cartDatabaseUrl and set it to the following string.
//              https://example.com/api/v2/cart

let cartDatabaseUrl = document.getElementById('https://example.com/api/v2/cart').value;

// 3 pts
// 3. Send an ajax POST request to the url in the cartDatabaseUrl variable, and pass along the cartData object

$.ajax( {method: "POST", url: url, data: data, complete: cartData.getResponse} );

// 2 pts
// 4. Assume the api responded and the resulting response string is stored in a variable called responseString.
//          Parse the response string into an object and store it in a variable called responseObj.

cartData.responseString('https://example.com/api/v2/cart', JSON.parse(responseObj));

// 2 pts
// E. Name a http status codes for success and one for error.

2xx: Success

4xx: Client Error
5xx: Server Error