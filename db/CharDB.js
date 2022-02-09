class CharDB {
  constructor(DAO) {
    this.DAO = DAO;
  }

  createTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS chars (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          charName TEXT,
          navigateTrackMod INTEGER,
          scoutMod INTEGER,
          huntForageMod INTEGER,
          mapMod INTEGER,
          entertainMod INTEGER,
          watchMod INTEGER   
          )`;
    return this.DAO.run(sql);
  }

  create(
    charName,
    navigateTrackMod,
    scoutMod,
    huntForageMod,
    mapMod,
    entertainMod,
    watchMod
  ) {
    return this.DAO.run(
      "INSERT INTO chars (charName, navigateTrackMod, scoutMod, huntForageMod, mapMod, entertainMod, watchMod) VALUES (?, ?, ?, ?, ?, ?,?)",
      [
        charName,
        navigateTrackMod,
        scoutMod,
        huntForageMod,
        mapMod,
        entertainMod,
        watchMod
      ]
    );
  }

  update(char) {
    const {
      id,
      charName,
      navigateTrackMod,
      scoutMod,
      huntForageMod,
      mapMod,
      entertainMod,
      watchMod
    } = char;
    return this.DAO.run(
      `UPDATE chars
      SET charname = ?,
        navigateTrackMod = ?,
        scoutMod = ?,
        huntForageMod = ?,
        mapMod = ?,
        entertainMod = ?,
        watchMod = ?
      WHERE id = ?`,
      [
        charName,
        navigateTrackMod,
        scoutMod,
        huntForageMod,
        mapMod,
        entertainMod,
        watchMod,
        id
      ]
    );
  }

  delete(id) {
    return this.DAO.run(`DELETE FROM chars WHERE id = ?`, [id]);
  }

  getById(id) {
    return this.DAO.get(`SELECT * FROM chars WHERE id = ?`, [id]);
  }

  getAll() {
    return this.DAO.getAll("SELECT * FROM chars");
  }
}

module.exports = CharDB;
