/**
 * CIS 172 Midterm
 *
 * @category    Midterm
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      LAWRENCE PYTLESKI <ljjpytleski@hawkmail.hfcc.edu>
 * @date        2020.03.05
 * @grade
 */

let Blueit = {

    siteApiUrl: 'https://cislinux.hfcc.edu/~crbanks1',

    upBtn1: 'up1',
    downBtn1: 'down1',
    upBtn1: 'up2',
    downBtn1: 'down2',
    upBtn1: 'up3',
    downBtn1: 'down3',
    upBtn1: 'up4',
    downBtn1: 'down4',

    init: function () {
        try {
            Blueit.siteApiUrl = "https://cislinux.hfcc.edu/~crbanks1";

            Blueit.upBtn1 = document.getElementById('up1');
            Blueit.upBtn1.onclick = Blueit.handleUpClick;
            Blueit.downBtn1 = document.getElementById('down1');
            Blueit.downBtn1.onclick = Blueit.handleDownClick;
            Blueit.upBtn1 = document.getElementById('up2');
            Blueit.upBtn1.onclick = Blueit.handleUpClick;
            Blueit.downBtn1 = document.getElementById('down2');
            Blueit.downBtn1.onclick = Blueit.handleDownClick;
            Blueit.upBtn1 = document.getElementById('up3');
            Blueit.upBtn1.onclick = Blueit.handleUpClick;
            Blueit.downBtn1 = document.getElementById('down3');
            Blueit.downBtn1.onclick = Blueit.handleDownClick;
            Blueit.upBtn1 = document.getElementById('up4');
            Blueit.upBtn1.onclick = Blueit.handleUpClick;
            Blueit.downBtn1 = document.getElementById('down4');
            Blueit.downBtn1.onclick = Blueit.handleDownClick;
        },

        handleUpClick: function (e) {
            Blueit.sendVoteToApi(e.target.id, 1);
        }
    ,
        handleDownClick: function (e) {
            Blueit.sendVoteToApi(e.target.id, -1);
        }
    ,
        sendVoteToApi: function (buttonId, Value) {
            // Value can be 1 or negative one
            $.ajax(Blueit.siteApiUrl, {action: "vote", pid: buttonId, val: Value});
        }
    ,
        sendNewPostToApi: function (dataObj) {
            $.ajax(Blueit.siteApiUrl, {action: "post", pid: buttonId, val: Value, data: dataObj});
        }
    }
}

catch(err){
    console.error("Error: Please abort!", err);
    throw new Error("One of the things failed!");
}




window.onload = Blueit.init;