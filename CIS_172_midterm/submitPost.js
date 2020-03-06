/**
 * CIS 172 Midterm
 *
 * @category    Midterm
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      LAWRENCE PYTLESKI <ljjpytleski@hawkmail.hfcc.edu>
 * @date        2020.03.05
 * @grade
 */

let SubmitHandler = {

    handleNewButton() {

        let sweetButton = {};

        sweetButton.id = document.getElementById('id').value;
        sweetButton.message = document.getElementById('message').value;

        handleNewButton.push(sweetButton);
        console.log(sweetButton);

    sendNewPostToApi: function (handleNewButton)
    {
        $.ajax( Blueit.siteApiUrl, {action:"post", pid:buttonId, val:Value, data:handleNewButton} );
    }
}
};

let sweetButtonBtn = document.getElementById("SubmitHandler");
sweetButtonBtn.addEventListener( "click", SubmitHandler );

