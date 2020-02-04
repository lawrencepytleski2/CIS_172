/**
 * Quiz 1 focuses on variables and control structures
 *
 * @category    Quiz 1
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Law
 * @date        2020.01.30
 * @link
 * @grade       10 / 10
 */

const favBook = 'The Shining';
let favInt = "07";

if (favInt > "42")
{
    console.log("BIGGER");
}
else if (favInt < "42")
{
    console.log("SMALLER");
}
else
{
    console.log("EQUAL");
}

let b;
for(b = 1; b <= 7; b++ )
{
    console.log(favBook, b);
}

// -1 pt
while (favInt <= -42 )
{
    favInt--;
    console.log("Favorite Integer:", favInt);
    if (favInt == 0) // Remember, one equal is an assignment. Two or three is a comparison.
    {
        console.log("ZERO DETECTED!")
    }
}


// +1/2 pts
switch(favBook)
{
    case 1:
        if (favBook == "The Matrix")
        console.log("Excellent Movie!");
        break;
    case 2:
        if (favBook == "Tears Of Steel")
            console.log("I love open source!");
        break;
    case 3:
        if (favBook == "Fight Club")
            console.log("Excellent Movie!");
        break;
    case 4:
        if (favBook == "Citizen Kane")
            console.log("All Time Best Movie!");
        break;
    case 5:
        if (favBook == "Star Wars")
            console.log("He didn't say Luke I am your father!");
        break;
    default:
        console.log("Default");
}
