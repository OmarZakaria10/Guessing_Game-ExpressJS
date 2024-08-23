const path = require("path");

const express = require("express");

const mongo = require("./util/mongoose");

const bodyParser = require("body-parser");

const gameRoutes = require("./routes/game");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(gameRoutes);

app.listen(3000);
