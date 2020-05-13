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
        $.ajax({
            url: "message.txt",
            dataType: 'text',
            success: function (data) {
                console.log(data);
            }
        });

        let appendBox = document.getElementById('output');
        appendBox.append($.ajax.value);
    },

    onAPIRequest: function (event) {
        let requestString = document.getElementById('dataBuilder').value;

        console.log("Request Object String: ", requestString);
        console.log("Sending AJAX Request....");

        try {
            PageManager.makeRequest('https://cislinux.hfcc.edu/~crbanks1/api.php', JSON.parse(requestString));
        } catch (e) {
            console.error("Request Error:", e.message);
        }
    },
    makeRequest: function (url, data) {
        $.ajax({method: "POST", url: url, data: data, complete: PageManager.getResponse});
    },
    getResponse: function (response) {
        console.log("Response:", response.responseText);

        let closeButton = '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>';

        try {
            let json = JSON.parse(response.responseText);

            if (json.statusCode == '200') {
                $('#alerts').append('<div class="alert alert-success alert-dismissible fade show text-left" role="alert">' + json.message + ' ' + closeButton + '</div>');
            } else if (json.statusCode == '500') {
                $('#alerts').append('<div class="alert alert-danger alert-dismissible fade show text-left" role="alert">' + json.message + ' ' + closeButton + '</div>');
            }
        } catch (e) {
            console.error("Response Error:", e.message);
        }
    },
}

    window.onload = PageManager.init;