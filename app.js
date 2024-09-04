const path = require("path");

const express = require("express");

const { observeMetrics, metricsEndpoint } = require("./util/metrics");

const mongo = require("./util/mongoose");

const bodyParser = require("body-parser");

const gameRoutes = require("./routes/game");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Use middleware to observe metrics
app.use((req, res, next) => {
  observeMetrics(req, res);
  next();
});

app.get("/metrics", metricsEndpoint);

app.use(gameRoutes);

app.listen(8080);
