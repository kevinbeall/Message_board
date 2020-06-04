var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there! I will be returning soon to connect a database (MongoDB) so I can save any messages you add. For now only you will be able to see the messages you add.",
    user: "Kevin Beall",
    added: new Date()
  }
]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Add a Message' });
});

router.post('/new', (req, res, next) => {
  const body = req.body;
  const newMsg = { text: body.text, user: body.user, added: new Date() }
  messages.unshift(newMsg);
  res.redirect('/');
});

module.exports = router;
