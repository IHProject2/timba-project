const express = require('express');
const router  = express.Router();
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');
const User = require('../models/user');
const Game = require('../models/game');

/* GET home page */
router.get('/', (req, res, next) => {
  Game.find().populate('hostId').then(games =>{
    let user = req.user;
    res.render('index', {
      games,
      user,
      gameStr: JSON.stringify(games),
      userStr: JSON.stringify(user)
    });
  })
  
});

//BECOME A HOST
router.post('/', ensureLoggedIn(), (req, res, next) => {
  const userId = req.user._id;
  const hostInfo = {isHost: true};

  User.findByIdAndUpdate(userId, hostInfo, { new: true }, (err, theUser) => {
    if (err) {
      next(err);
      return;
    }
    req.user = theUser;
    res.redirect('/');
  }).catch(e => console.log(e));
});



module.exports = router;
