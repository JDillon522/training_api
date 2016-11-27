var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
var key = require('../bin/firebaseKey.json');

/* GET home page. */
router.get('/', function(req, res, next) {

  admin.initializeApp({
    credential: admin.credential.cert(key),
    databaseURL: "https://training-api-76609.firebaseio.com/"
  });

  var db = admin.database();
  var ref = db.ref("/api");

  var namesRef = ref.child('/names')

  namesRef.once("value", function(snapshot) {
    console.log(snapshot.val());

    res.render('index', { title: 'Express', names: snapshot.val() });
  });

});

module.exports = router;
