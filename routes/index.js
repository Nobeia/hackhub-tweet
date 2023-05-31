const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

let tweets = [];
router.get('/tweet', (req, res) => {
  res.json(tweets);
});

router.get('/tweet/delete/:id', (req, res) => {
  tweets = tweets.filter(tweet => tweet.id != req.params.id);
  res.json(tweets);
});

router.get('/tweet/post',(req, res) => {
  const newTweet = {
    id: Date.now(),
    title: 'newtitle',
    constent: 'newcontent'
  };
  tweets.push(newTweet);
  res.json(tweets);
});


module.exports = router;