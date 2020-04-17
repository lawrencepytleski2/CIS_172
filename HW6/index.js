/**
 * HW 6
 *
 * @category    HW 6
 * @author      Lawrence Pytleski
 * @date
 * @link
    * @grade
 */

let PageHandler = {

    pageDiv : null,
    isHidden : true,

    init: function () {

        console.log("Page has loaded!");

        PageHandler.pageDiv = $('#JohnCena');
        PageHandler.pageDiv.hide();

        let showDiv = $('#showDiv');
        showDiv.click(PageHandler.onReturnButtonClick);

        $('#jQueryButton').click( PageHandler.onReturnButtonClick );
    },

    onReturnButtonClick : function( event )
    {
        if(PageHandler.isHidden)
        {
            PageHandler.pageDiv.show();
            PageHandler.isHidden = false;
        }
        else
        {
            PageHandler.pageDiv.hide();
            PageHandler.isHidden = true;
        }
    },

    onReturnButtonClick : function( event )
    {
        $('a[href=http://www.google.com]').click(function(){
            window.open(this.href);
            return false;
        });
    }


};


window.onload = PageHandler.init;