let ErrorHandler = {

    init: function () {
        console.log('Page loaded!');

    },

    checkDate: function () {
        try {
            console.log("Clicked!");

            // Done some other stuff
            let currentDate = {
                let myDate = new Date();
            }

            let happyMessage
            let errorMessage = '<span style="color:red;">Sorry, an error occurred!</span>';


            console.log('myDate:', myDate);
            console.log('Month:', myDate.getMonth());
        } catch (e) {
            console.error(e);
        }
    },
}

window.onload = ErrorHandler.init;