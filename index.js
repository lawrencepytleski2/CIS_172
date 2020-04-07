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
        let myButton = document.getElementById('myButton');
        myButton.addEventListener( 'click', PageManager.onnButtonClick);

        let myButton2 = document.getElementById('myButton2');
        myButton2.addEventListener('click', PageManager.onnButtonClick);

        let myButton3 = document.getElementById('myButton3');
        myButton2.addEventListener('click', PageManager.onnButtonClick);
        },

    onnButtonClick : function( event )
    {
        console.log('event:', event);
        let textBox = document.getElementById('h1Text');
        let newText = textBox.value;
        let myH1 = document.getElementById('h1');
        myH1.innerHTML = newText;
        // .append( STRING );
    },

    onnButtonClick : function( event2 ) {
        console.log('event:', event2);
        let appendBox = document.getElementById('appendBox');
        appendBox.append(lastName.value);
    }

};

window.onload = PageManager.init;