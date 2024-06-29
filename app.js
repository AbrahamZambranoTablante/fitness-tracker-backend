const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("welcome fitness baby!");
});

const workoutController = require("./controllers/workoutController")
app.use("/workouts", workoutController);
module.exports = app;