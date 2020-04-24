/**
 * HW 4
 *
 * @category    HW 4
 * @author      Lawrence Pytleski
 * @date
 * @link
    * @grade
 */

let PageManager = {

    init: function (){
        let myButton1 = document.getElementById('myButton1');
        myButton1.addEventListener( 'click', PageManager.onButtonClick);

        let myButton2 = document.getElementById('myButton2');
        myButton2.addEventListener('click', PageManager.onButtonClick);

        let myButton3 = document.getElementById('myButton3');
        myButton3.addEventListener('click', PageManager.onButtonClick);

        let select = document.getElementById('selectColor');
        select.addEventListener('click', PageManager.onButtonClick);
        },

    onButtonClick : function( event )
    {
        console.log('event:', event);
        let textBox = document.getElementById('h1Text');
        let newText = textBox.value;
        let myH1 = document.getElementById('h1');
        myH1.innerHTML = newText;
        // .append( STRING );
    },

    onButtonClick : function( event ) {
        console.log('event:', event);
        let appendBox = document.getElementById('appendBox');
        appendBox.append(lastName.value);
    },

    onButtonClick : function( event ) {
        console.log(PageManager);
    },

    updateColor: function ()
    {
        var bodyElement = document.body;

        if( bodyElement.style.backgroundColor === "white" )
        {
            bodyElement.style.backgroundColor = "red";
        }
        else if( bodyElement.style.backgroundColor === "red" )
        {
            bodyElement.style.backgroundColor = "blue";
        }
        else if( bodyElement.style.backgroundColor === "blue" )
        {
            bodyElement.style.backgroundColor = "green";
        }
        else
        {
            bodyElement.style.backgroundColor = "white";
        }
    }
};

window.onload = PageManager.init;

let selectBox = document.getElementById('bgcolor');