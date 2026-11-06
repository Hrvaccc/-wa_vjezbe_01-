const express = require("express");

const app = express();
const PORT = 3000;

const users = [
  { id: 1, ime: "Ivo", prezime: "Ivić" },
  { id: 2, ime: "Ana", prezime: "Anić" },
  { id: 3, ime: "Marko", prezime: "Marić" },
];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Poslužitelj radi na http://localhost:${PORT}`);
});
