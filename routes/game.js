const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

let scores = [];

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "game.html"));
});

router.post('/update-score', (req, res, next) => {
    const { playerName, score } = req.body;
    const currentTime = new Date().toLocaleTimeString();
    // You can save the score to a database or an array
    scores.push({ playerName: playerName || 'no name', score: score ,time: currentTime});
    scores.sort((a, b) => b.score - a.score);
    console.log('Scores:', scores);
    res.status(200).json({ message: 'Score updated',  score: score });
});

router.get('/game', (req, res, next) => {
    res.redirect('/')
    
});

router.get('/scoreboard', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'scoreboard.html'))
});

router.post('/top-scores', (req, res, next) => {
    const topScores = scores.slice(0, 5);
    res.status(200).json(topScores);
});

module.exports = router;