const path = require("path");

const gameController = require("../controllers/gameController");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

let scores = [];

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "game.html"));
});

router.post("/update-score", gameController.updateScore);

router.get("/game", (req, res, next) => {
  res.redirect("/");
});

router.get("/scoreboard", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "scoreboard.html"));
});

router.get("/top-scores",gameController.getTopScores); 
  


module.exports = router;
