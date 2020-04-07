/**
 * CIS 172 Midterm
 *
 * @category    Midterm
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      LAWRENCE PYTLESKI <ljjpytleski@hawkmail.hfcc.edu>
 * @date        2020.03.05
 * @grade
 */

let submitHandler = {

    username: null,
    post: null,
    handleNewButton: function () {

        let dateOfPost = new Date();
        let newPost = {
            userName: document.getElementById('username').value,
            newPost: document.getElementById('post').value,
            postDate: dateOfPost
        };

        main.sendNewPostToApi(newPost);

    }
};