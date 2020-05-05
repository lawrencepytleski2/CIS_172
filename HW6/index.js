/**
 * HW 6
 *
 * @category    HW 6
 * @author      Lawrence Pytleski
 * @date
 * @link     ljpytleski@hawkmail.hfcc.edu
 * @grade       10 / 10
 */

let PageHandler = {
  pageDiv: null,
  isHidden: true,

  init: function () {
    try {
      console.log("Page has loaded!");

      PageHandler.pageDiv = $("#JohnCena");
      PageHandler.pageDiv.hide();

      let showDiv = $("#showDiv");
      showDiv.click(PageHandler.onReturnButtonClick);

      $("#jQueryButton").click(PageHandler.onReturnButtonClick);
    } catch (err) {
      console.error("Error!");
      throw "Error!";
    }
  },

  onReturnButtonClick: function (event) {
    try {
      if (PageHandler.isHidden) {
        PageHandler.pageDiv.show();
        PageHandler.isHidden = false;
      } else {
        PageHandler.pageDiv.hide();
        PageHandler.isHidden = true;
      }
    } catch (err) {
      console.error("Error!");
      throw "Error!";
    }
  },

  onReturnButtonClick: function (event) {
    try {
      $("a[href=http://www.google.com]").click(function () {
        window.open(this.href);
        return false;
      });
    } catch (err) {
      console.error("Error!");
      throw "Error!";
    }
  },
};

window.onload = PageHandler.init;
