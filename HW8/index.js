/**
 * HW 8
 *
 * @category    HW 8
 * @author      Lawrence Pytleski
 * @date
 * @link  ljpytleski@hawkmail.hfcc.edu
    * @grade
 */

let PageManager = {

    init: function () {

        let readBtn = document.getElementById('readBtn');
        readBtn.addEventListener('click', PageManager.onReadFile);
        console.log("Page loaded!");

        let requestBtn = document.getElementById('requestBtn');
        requestBtn.addEventListener('click', PageManager.onAPIRequest);
        console.log("Page loaded!");

    },

    onReadFile: function (event) {
        let readBtn = new XMLHttpRequest();
        readBtn.onReadFile = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("output").innerHTML = this.responseText;
            }
        };
        readBtn.open("GET", "message.txt", true);
        readBtn.send();
    },

    onAPIRequest: function (event) {

            let requestString = document.getElementById('output').value;

            console.log( "Request Object String: ", requestString );
            console.log( "Sending AJAX Request...." );

            try {
                PageManager.makeRequest('https://cislinux.hfcc.edu/~crbanks1/api.php', JSON.parse(requestString));
            }
            catch( e )
            {
                console.error( "Request Error:" );
            }
        },
        makeRequest: function( url, data )
        {
            $.ajax( {method: "POST", url: url, data: data, complete: PageManager.onAPIRequest} );
        },
    }

    window.onload = PageManager.init;