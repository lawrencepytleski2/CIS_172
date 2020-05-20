/**
 * CIS-172 Final
 * 
 * This file should allow users to choose and preview a car color.
 * It should also use local storage to remember the car options they selected.
 *
 * @category    Final
 * @author      LAWRENCE PYTLESKI (ljpytleski@hawkmail.hfcc.edu)
 * @date        2020.05.12
 * @grade       80 / 100
 *
 **/

var pagejs = {

    carcolor : false,
    metric: {"data":"All sorts of metrics are in here."},

    init: function ()
    {
        console.log("Page loaded!");

        // LOCAL STORAGE STUFF
        pagejs.carcolor = localStorage.getItem('car-color');

        if(!pagejs.carcolor)
        {
            localStorage.setItem( "car-color", "white" );
            pagejs.carcolor = 'white';
        }

        // Perform Actual Visible Update
        pagejs.updateDisplay( pagejs.carcolor );

        // COLOR PICKER LISTENER
        let selectBox = document.getElementById('carcolor');
        selectBox.addEventListener('change', pagejs.updateColor);

        // BUY BUTTON LISTENER
        let btn = document.getElementById('buybtn');
        btn.addEventListener('click', pagejs.onButtonClick);
    },
    updateDisplay : function()
    {
        let carimage = document.getElementById('carimage');
        carimage.src = pagejs.carcolor + '.png';

        let selectBox = document.getElementById('carcolor');
        selectBox.value = pagejs.carcolor;
    },
    updateColor : function(event){
        try {
            // Save The Value
            let sb = event.target;
            pagejs.carcolor = sb.value;

            localStorage.setItem( "car-color", pagejs.carcolor );

            // Perform Actual Visible Update
            pagejs.updateDisplay( pagejs.carcolor );

            switch(pagejs.carcolor)
            {
                case 'white':
                    console.log('white');
                    break;
                // etc etc
                default:
                    throw new Error('No color');
            }
        }
        catch(e)
        {
            console.error(e);
        }
    },
    onButtonClick: function()
    {
        console.log("BUY BUTTON!");
        $.ajax( {method: "POST", url: 'https://nottesla.com/api/v2/page/metrics', data:pagejs.metric, complete: pagejs.onButtonClick} );
        localStorage.setItem( "car-color", pagejs.metric );
    }
};


window.onload = pagejs.init;
