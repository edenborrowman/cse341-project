//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');


let loggedIn = false;

router.get('/', (req, res, next) => {
  res.render('pages/ta06', {
    title: 'Team Activity 06',
    loggedIn: loggedIn,
    error: ""
  });
});

router.post('/login', [body('name').isEmail()], (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    const name = req.body.name;
    const password = req.body.password;
    if (name === "me@here.com" && password === "pw") {
        loggedIn = true;        
    } else {
        res.status(403).render('pages/ta06', {
            title: 'Team Activity 06',
            loggedIn: loggedIn,
            error: "This is a problem. I blame Bob."
          });
    } 
    res.redirect("/ta06/");
});

module.exports = router;