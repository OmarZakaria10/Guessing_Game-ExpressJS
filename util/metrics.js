const client = require("prom-client");

// Create a Registry to register the metrics
const register = new client.Registry();

// Define custom metrics
const counter = new client.Counter({
  name: "node_request_count_total",
  help: "Total number of requests made",
  labelNames: ["method", "route", "status"],
});

const histogram = new client.Histogram({
  name: "node_request_duration_seconds",
  help: "Histogram of the request duration in seconds",
  labelNames: ["method", "route", "status"],
  buckets: [0.1, 0.5, 1, 1.5, 2, 5],
});

// Register the metrics
register.registerMetric(counter);
register.registerMetric(histogram);

// Function to observe metrics
function observeMetrics(req, res) {
  res.on("finish", () => {
    const responseTimeInSeconds = res.get("X-Response-Time") / 1000 || 0;
    const { method, path } = req;
    const status = res.statusCode;

    counter.inc({ method, route: path, status });
    histogram.observe({ method, route: path, status }, responseTimeInSeconds);
  });
}

// Function to expose metrics
function metricsEndpoint(req, res) {
  res.setHeader("Content-Type", register.contentType);
  register.metrics().then((metrics) => res.send(metrics));
}

module.exports = {
  observeMetrics,
  metricsEndpoint,
};
