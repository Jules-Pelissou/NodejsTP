//exercice 0:
console.log("message javascript du serveur");

var myApp = require("simple-hello-world-example");

var msg = myApp.printMsg(); // print and return " Hello World! "

let express = require("express");
let app = express();
let port = 8080;

app.use("/test", express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
