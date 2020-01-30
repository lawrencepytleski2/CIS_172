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
    console.log("The Shining:", b);
}


while (favInt <= -42 )
{
    favInt--;
    console.log("Favorite Integer:", favInt);
    if (favInt = 0)
    {
        console.log("ZERO DETECTED!")
    }
}

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
