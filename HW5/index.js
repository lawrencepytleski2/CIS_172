// Grade 10 / 10
 
let ErrorHandler = {

    let myObject = {

        debugButton : null,

        init : function()
        {
            myObject.debugButton = document.getElementById('debugButton');
            myObject.debugButton.addEventListener("click", myObject.checkDate );
            console.log( "button:", myObject.debugButton );
        },
        checkDate : function() {
            try {
                console.log("Clicked!");

                // Done some other stuff

                let errorMessage = '<span style="color:red;">Sorry, an error occurred!</span>';

                let myDate = new Date();
                console.log('myDate:', myDate);
                console.log('Month:', myDate.getMonth());
            }
            catch(e)
            {
                console.error(e);
            }
        },

        happyMessage : function() {
            try {
                if( mydate === "Monday" )
                {
                    console.log("Enjoy your day off!");
                }
                else if( mydate === "Tuesday" )
                {
                    console.log("Welcome to class!");
                }
                else if( mydate === "Wednesday" )
                {
                    console.log("Enjoy your day off!");
                }
                else if( mydate === "Thursday" )
                {
                    console.log("Welcome to class!");
                }
                else
                {
                    console.log("Enjoy your day off!");
                }
            }
            catch(e)
            {
                console.error(e);
            }
        },

            let errorMessage = '<span style="color:red;">Sorry, an error occurred!</span>';

        let appendBox = document.getElementById('appendBox');
        appendBox.append(happyMessage.value);
},
        } catch (e) {
            console.error(e);
        }
    },
}

window.onload = ErrorHandler.init;