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
            myButton1.addEventListener( 'click', PageManager.onButtonClick1);

            let myButton2 = document.getElementById('myButton2');
            myButton2.addEventListener('click', PageManager.onButtonClick2);

            let myButton3 = document.getElementById('myButton3');
            myButton3.addEventListener('click', PageManager.onButtonClick3);

            let select = document.getElementById('selectColor');
            select.addEventListener('change', PageManager.updateColor);
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
        }
    };

window.onload = PageManager.init;

