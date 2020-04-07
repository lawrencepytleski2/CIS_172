/**
 * HW 3
 *
 * @category    HW 3
 * @author      Chad Banks <crbanks1@hfcc.edu>
 * @author      Lester Lipinsky
 * @date        2020.04.07
 * @grade       10 / 10
 */

let tweet = {};

tweet.tweetCollection = [];

tweet.tweetBuilder = function ()
{
    let tweet = {};

    tweet.id = document.getElementById('id').value;
    tweet.message = document.getElementById('message').value;
    tweet.likes = document.getElementById('likes').value;
    tweet.shares = document.getElementById('shares').value;
    tweet.comments = document.getElementById('comments').value;
    tweet.date = document.getElementById('date').value;
    tweet.username = document.getElementById('username').value;

    tweet.tweetCollection.push(tweet);
    console.log(tweet);
};

let tweetBtn = document.getElementById("tweetBuilder");
tweetBtn.addEventListener( "click", tweet.tweetBuilder );
