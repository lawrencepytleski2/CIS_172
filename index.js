let PageManager = {

    init: function (){
        let myButton = document.getElementById('myButton');
        myButton.addEventListener( 'click', PageManager.onnButtonClick);

        let myButton2 = document.getElementById('myButton2');
        myButton2.addEventListener('click', PageManager.onnButtonClick);

        let myButton3 = document.getElementById('myButton3');
        myButton3.addEventListener('click', PageManager.onnButtonClick);
        },

    onnButtonClick : function( event1 )
    {
        console.log('event:', event1);
        let textBox = document.getElementById('h1Text');
        let newText = textBox.value;
        let myH1 = document.getElementById('h1');
        myH1.innerHTML = newText;
        // .append( STRING );
    },

    onnButtonClick : function( event2 )
    {
        console.log('event:', event2);
        let appendBox = document.getElementById('appendBox');

        appendBox.append(lastName.value);

    },

    onnButtonClick : function( event3 )
    {
        console.log(PageManager);
    },

    init: function (){
        let select = document.getElementById('selectColor');
        select.addEventListener( 'select', PageManager.updateColor );
    },

    updateColor: function ()
    {
        let bodyElement = document.body;

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