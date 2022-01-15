//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require("express");
const router = express.Router();
let error = "";
const users = [
  {
    name: "Leonardo",
  },
  {
    name: "Donatello",
  },
  {
    name: "Raphael",
  },
  {
    name: "Donatello",
  },
];

router.post("/addUser", (req, res, next) => {
  const name = req.body.name;
  const userIndex = users.findIndex((user) => user.name === name);
  if (userIndex >= 0) {
    error = "User always exists";
  } else {
    users.push({ name });
  }
  res.redirect("/ta02");
});

router.post("/removeUser", (req, res, next) => {
  const name = req.body.name;
  const userIndex = users.findIndex((user) => user.name === name);
  if (userIndex >= 0) {
    users.splice(userIndex, 1);
  } else {
    error = "User does not exist";
  }
  res.redirect("/ta02");
});

router.get("/", (req, res, next) => {
  res.render("pages/ta02", {
    title: "Team Activity 02",
    path: "/ta02", // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users,
    error: error
  });
  error = "";
});

module.exports = router;
