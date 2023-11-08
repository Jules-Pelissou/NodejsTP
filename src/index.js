//exercice 0:
console.log("message javascript du serveur");

var myApp = require("simple-hello-world-example");

var msg = myApp.printMsg(); // print and return " Hello World! "

let express = require("express");
let app = express();
let port = 8080;
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/test", express.static("public"));

app.use("/form", express.static("public/tva.html"));
app.get("/tva", function (req, res) {
  res.send(
    `Prix HT :  ${req.query.HT} Prix TVA : ${req.query.tva}  Prix TTC : ${
      req.query.HT * (1 + req.query.tva / 100)
    }`,
  );
});

app.post("/tva2", function (req, res) {
  res.send(
    `Prix HT :  ${req.body.HT} Prix TVA : ${req.body.tva}  Prix TTC : ${
      req.body.HT * (1 + req.body.tva / 100)
    }`,
  );
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
