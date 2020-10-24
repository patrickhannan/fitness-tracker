const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

// View routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
  });
  
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
  });

// Connection
const connection = mongoose.connection;

connection.on("connected", function () {
  console.log("Mongoose connected");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
