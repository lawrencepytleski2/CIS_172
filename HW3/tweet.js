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