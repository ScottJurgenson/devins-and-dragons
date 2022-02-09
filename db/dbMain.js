const Promise = require('bluebird')
const AppDAO = require('./DAO')
const CharDB = require('./CharDB')
const TerrainDB = require('./TerrainDB');
const { DomElementSchemaRegistry } = require('@angular/compiler');

const DAO = new AppDAO('./database.sqlite3');
const charDB = new CharDB(DAO);
const terrainDB = new TerrainDB(DAO)


function addChar(char) {
  charDB.createTable();
  charDB.create(char.name, char.navigateTrackMod, car.scoutMod, char.constitution, char.mapMod, char.wisdom, char.entertainMod, char.watchMod);

}

function deleteChar(char) {
    charDB.delete(char.ID)
}

function getAllChar() {
    charDB.getAll().then(results => {
        return results
    })
}

function getCharById(charID) {
    charDB.getById(charID).then(result => {
        return result
    })
}

function updateChar(char) {
    charDB.update(char)
}




