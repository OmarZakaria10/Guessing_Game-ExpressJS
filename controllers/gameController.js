Score = require("../util/mongoose");

exports.updateScore = async (req, res, next) => {
  try {
    const { playerName, score } = req.body;
    const currentTime = new Date().toLocaleTimeString();
    const Player = new Score({
      name: playerName | "No name",
      score: score,
      date: new Date(),
    });
    Player.save();
    console.log(Player);
    res.status(200).json({ message: "Score updated", score: Player.score });
  } catch (err) {
    console.error(err);
  }
};

exports.getTopScores = async (req, res, next) => {
  try {
    let topScores = await Score.find().sort({ score: -1 }).limit(10);
    console.log(topScores);
    res.status(200).json(topScores);
  } catch (err) {
    console.error(err);
  }
};
