/**
 * HW 7
 *
 * @category    HW 7
 * @author      Lawrence Pytleski
 * @date
 * @link
    * @grade
 */

let PageManager = {

    init: function (){
        let myButton1 = document.getElementById('myButton1');
        myButton1.addEventListener( 'click', PageManager.onButtonClick1);

        let myButton2 = document.getElementById('myButton2');
        myButton2.addEventListener('click', PageManager.onButtonClick2);

        let myButton3 = document.getElementById('myButton3');
        myButton3.addEventListener('click', PageManager.onButtonClick3);

        let select = document.getElementById('background-color');
        select.addEventListener('change', PageManager.updateColor);

        let bgcolor = localStorage.getItem('background-color');
        console.log("bgcolor:", bgcolor);

        if(!bgcolor)
            localStorage.setItem( "background-color", "white" );

        let myButton4 = document.getElementById('Clicker');
        myButton4.addEventListener('click', localStorage.clicks;
    },

    onButtonClick1 : function( event )
    {
        console.log('event:', event);
        let textBox = document.getElementById('h1Text');
        let newText = textBox.value;
        let myH1 = document.getElementById('h1');
        myH1.innerHTML = newText;
        // .append( STRING );
    },

    onButtonClick2 : function( event ) {
        console.log('event:', event);
        let appendBox = document.getElementById('appendBox');
        appendBox.append(lastName.value);
    },

    onButtonClick3 : function( event ) {
        console.log(PageManager);
    },

    updateColor : function ( event )
    {
        var bodyElement = document.body;

        if( event.target.value === "Red" )
        {
            bodyElement.style.backgroundColor = "Red";
        }
        else if( event.target.value === "Blue" )
        {
            bodyElement.style.backgroundColor = "Blue";
        }
        else if( event.target.value === "Green" )
        {
            bodyElement.style.backgroundColor = "Green";
        }
        else
        {
            bodyElement.style.backgroundColor = "white";
        }
    },

     setCookie : function(name, class, email, date, movie)
        {

            document.cookie = "Name: Lawrence Pytleski";
            document.cookie = "Class: CIS-172";
            document.cookie = "Email: ljpytleski@hawkmail.hfcc.edu";
            document.cookie = "Date: ";
            document.cookie = "Movie: The Big Lebowski";

            document.cookie = name + " , " + class + " , " + email + " , " + date + " , " + movie;
        },
        getCookies : function()
        {
            return document.cookie;
        }
    }
};

window.onload = PageManager.init;