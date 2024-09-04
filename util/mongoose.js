const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config({ path: "./config.env" });
}

const uri = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const scoresSchema = new mongoose.Schema({
  name: String,
  score: Number,
  date: Date,
});

try {
  // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
  mongoose.connect(uri, clientOptions).then(() => {
    mongoose.connection.db.admin().command({ ping: 1 });
  });

  console.log("Pinged your deployment. You successfully connected to MongoDB!");
  var Score = mongoose.model("scores", scoresSchema);
} catch (err) {
  console.error(err);
}

module.exports = Score;
