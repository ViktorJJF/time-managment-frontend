require("./config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middleware

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

// parse application/json
app.use(bodyParser.json());
app.use(cors());

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://VictorJJF:Sed4cfv52309$@cluster0-ceisv.mongodb.net/mastermind",
  {
    useNewUrlParser: true
  },
  (err, res) => {
    if (err) throw err;
    console.log("Base de datos ONLINE");
  }
);

const goals = require("./routes/api/goals");
const wimHof = require("./routes/api/wimHof");
const activities = require("./routes/api/activities");
app.use("/api", goals);
app.use("/api", wimHof);
app.use("/api", activities);
// app.use(require('./routes/api/user'));

//Handle Production
if (process.env.NODE_ENV === "production") {
  //static folder
  app.use(express.static(__dirname + "/public"));
  //Handle SPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Server starting on port ${process.env.PORT}`);
});
