/**
 * Quiz 10 is cumulative
 *
 * Have a great summer, and stay safe!
 *
 * @category    Quiz 10
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      LAWRENCE PYTLESKI <ljpytleski@hawkmail.hfcc.edu>
 * @date        2020.05.07
 * @grade       7 / 10
 */

// 1 pts
// 1. Take this JSON string below, and convert it into an object called discordUser using the JSON library.
// {"uid":64029,""name":"Jon","age":47,"type":"paid","games":["D&D","Halo","Mario"]}

let discordUser = JSON.parse('{"uid":64029,""name":"Jon","age":47,"type":"paid","games":["D&D","Halo","Mario"]}');

// 1 / 2 pts
// 2. Load the discordUser object created above into a localStorage object called currentUser.

let currentUser = localStorage.setItem('currentUser', discordUser);

// 2 / 4 pts
// 3. Check to make sure the uid and age properties of the discordUser object are numbers.
//          Also check to ensure the name and type properties are strings.
//          If any of these are false, then throw an Error.

validateName : function( event )
{
    let currentUser = localStorage.getItem('discordUser');

    if( 'uid', 'age' !== "number" )
    {
        alert('UID & Age should be a number!');
        throw new Error('UID & Age should be a number!');
    }

    else if( 'name', 'type' !== "string")
    {
        alert('Name & Type should be a string!');
        throw new Error('Name & Type should be a string!');
    }

// 1 pts
// 4. Create an AJAX POST request to the following URL, and be sure to pass the discordUser object with it.
//              https://notdiscord.com/api/v2/user/save

makeRequest: function( url )
{
    $.ajax( {method: "POST", url: 'https://notdiscord.com/api/v2/user/save', complete: discordUser.getResponse} );
}

// 2 pts
// 5. Wrap this whole file in a try, and then add a catch at the bottom.
//          The catch should log the error object you pass in to the console.error method.

    try {

        let discordUser = JSON.parse('{"uid":64029,""name":"Jon","age":47,"type":"paid","games":["D&D","Halo","Mario"]}');

        let currentUser = localStorage.getItem('discordUser');

        validateName : function (event) {
            let currentUser = localStorage.getItem('discordUser');

            if ('uid', 'age' !== "number") {
                alert('UID & Age should be a number!');
                return false;
            } else if ('name', 'type' !== "string") {
                alert('Name & Type should be a string!');
                return false;
            }
        }
        makeRequest: function (url) {
            $.ajax({method: "POST", url: 'https://notdiscord.com/api/v2/user/save', complete: discordUser.getResponse});
        }
    }
    catch(e)
        {
            console.error(e);
        }
