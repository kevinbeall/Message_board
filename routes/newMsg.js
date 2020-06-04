var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('form', { title: 'Add a Message' });
});

router.post('/', (req, res, next) => {
  res.write(req.body);
  res.end();
  //res.redirect('/');
});

module.exports = router;
