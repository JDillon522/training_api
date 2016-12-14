var express = require('express');
var router = express.Router();
var admin = require('firebase-admin');
// var key = require('../bin/firebaseKey.json');

//
// admin.initializeApp({
//   credential: admin.credential.cert(key),
//   databaseURL: "https://training-api-76609.firebaseio.com/"
// });

// var db = admin.database();
// var ref = db.ref("/api");
// var namesRef = ref.child('/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', names: [] });
});

// router.get('/api/users', function(req, res, next) {
//   namesRef.once("value", function(snapshot) {
//     res.status(200).send(snapshot.val()).end();
//   });
// });
//
// router.post('/api/users', (req, res, next) => {
//   var user = {
//     name: req.body.name || '',
//     age: req.body.age || '',
//   }
//   namesRef.push(user, (err) => {
//     if (err) {
//       console.log(err);
//       return res.status(400).send(err);
//     }
//
//     return res.status(200).send(user);
//   });
// });
//
// router.put('/api/users', (req, res, next) => {
//   var id = req.body.id;
//   var user = req.body.user;
//   var userPath = namesRef.child(id);
//
//   userPath.update(user, (err) => {
//     if (err) {
//       console.log(err);
//       return res.status(400).send(err);
//     }
//
//     return res.status(200).send(user);
//   });
// });
//
// router.delete('/api/users', (req, res, next) => {
//   var id = req.body.id;
//   var userPath = namesRef.child(id);
//
//   userPath.remove((err) => {
//     if (err) {
//       console.log(err);
//       return res.status(400).send(err);
//     }
//
//     return res.status(200).send('User: ' + id + ' deleted.');
//   });
// });

module.exports = router;
