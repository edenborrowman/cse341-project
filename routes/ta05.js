//TA04 PLACEHOLDER
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('pages/ta04', {
    title: 'Team Activity 04',
    path: '/ta04', // For pug, EJS
    activeTA04: true, // For HBS
    contentCSS: true, // For HBS
  });
});

router.get('/change-style', (req, res, next) => {
    res.render('pages/change-style', {
        title: 'Change Style',
        path: 'ta05/change-style', 
    });
});

module.exports = router;
