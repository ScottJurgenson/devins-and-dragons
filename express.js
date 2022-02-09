var express = require("express");
var app = express();
const Promise = require("bluebird");
const AppDAO = require("./db/DAO");
const CharDB = require("./db/CharDB");
const TerrainDB = require("./db/TerrainDB");
var cors = require('cors')

const DAO = new AppDAO("./db/database.sqlite3");
const charDB = new CharDB(DAO);
const terrainDB = new TerrainDB(DAO);

app.use(cors());
app.use(express.json());

app.get("/test", (req, res, next) => {
  res.json("nice");
});

app.get("/char", async function (req, res, next) {
  return charDB.getAll().then((response) => res.json(response));
});

app.post("/char/create", function (req, res, next) {
  charDB.createTable();
  let char = req.body;
  console.log(char)
  return charDB.create(char.charName, char.navigateTrackMod, char.scoutMod, char.huntForageMod, char.mapMod, char.entertainMod, char.watchMod)
});

app.post("/char/update/:id", function (req, res, next) {
  let char = req.body;
  return charDB.update(char)
});

app.get("/char/delete/:id", async function (req, res, next) {
  return charDB.delete(id).then((response) => res.json(response));
});

app.get("/char/:id", async function (req, res, next) {
  return charDB.getById(id).then((response) => res.json(response));
});

app.get("/terrain", async function (req, res, next) {
  return terrainDB.getAll().then((response) => res.json(response));
});

app.post("/terrain/create", function (req, res, next) {
  console.log("terrain");
  res.json(req.body);
});

app.post("/terrain/update/:id", function (req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

app.get("/terrain/delete/:id", async function (req, res, next) {
  return terrainDB.delete(id).then((response) => res.json(response));
});

app.get("/terrain/:id", async function (req, res, next) {
  return terrainDB.getById(id).then((response) => res.json(response));
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
