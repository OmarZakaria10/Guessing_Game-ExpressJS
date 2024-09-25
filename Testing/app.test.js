const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app"); // Import the Express app
const Score = require("../util/mongoose"); // Correctly import only the Score model
require("dotenv").config();
// Connect to MongoDB before running tests
beforeAll(async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(
      process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
});

// Disconnect from MongoDB after all tests
afterAll(async () => {
  await mongoose.disconnect();
});

// Clear the database after each test to avoid conflicts
afterEach(async () => {
  await Score.deleteMany({});
});

describe("Game API Endpoints", () => {
  // Test for getting top scores
  it("should return top scores", async () => {
    // Insert some dummy data into the database
    await Score.create([
      { name: "Player 1", score: 100 },
      { name: "Player 2", score: 200 },
    ]);

    const response = await request(app)
      .get("/top-scores")
      .expect("Content-Type", /json/)
      .expect(200);

    // Validate response data
    expect(response.body).toBeInstanceOf(Array); // Expect an array of scores
    expect(response.body.length).toBeGreaterThanOrEqual(2); // Expect at least 2 records
  });

  // Test for posting a new score
  it("should update the score", async () => {
    const newScore = {
      playerName: "John Doe",
      score: 500,
    };

    const response = await request(app)
      .post("/update-score")
      .send(newScore)
      .expect(200);

    // Validate the response
    expect(response.body.message).toBe("Score updated");
    expect(response.body.score).toBe(500);

    // Check if the score was saved in the database
    const savedScore = await Score.findOne({ name: "John Doe" });
    expect(savedScore).toBeTruthy();
    expect(savedScore.score).toBe(500);
  });
});
