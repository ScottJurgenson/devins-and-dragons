var express = require("express");
var app = express();
const Promise = require('bluebird')
const AppDAO = require('./db/DAO')
const CharDB = require('./db/CharDB')
const TerrainDB = require('./db/TerrainDB');

const DAO = new AppDAO('./db/database.sqlite3');
const charDB = new CharDB(DAO);
const terrainDB = new TerrainDB(DAO)

app.use(express.json());

app.get("/test", (req, res, next) => {
    res.json("nice");
   });

app.get("/getAllChar", async function(req, res, next) {
    return charDB.getAll().then(response => res.json(response))
   });

app.get("/getAllTerrain", async function(req, res, next) {
    return terrainDB.getAll().then(response => res.json(response))
   });

app.listen(3000, () => {
 console.log("Server running on port 3000");
});