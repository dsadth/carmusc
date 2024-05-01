const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "CarMusc",
});

app.get("/", (req, res) => {
  res.send("qwe");
});

app.get("/ask", (req, res) => {
  db.query("SELECT * FROM `carmusc`", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/created", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const ask = req.body.ask;

  db.query(
    "INSERT INTO carmusc (name, phone, ask) VALUES (?,?,?)",
    [name, phone, ask],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Query is true");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("listening");
});
