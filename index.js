const express = require("express");
const { fork } = require("child_process");
const app = express();

app.get("/route", (req, res) => {
  const child = fork("./computation.js");
  child.send("start");
  child.on("message", (sum) => {
    res.send({ sum: sum, msg: "msgssss" });
  });
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
