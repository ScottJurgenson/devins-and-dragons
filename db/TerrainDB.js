class terrainDB {
  constructor(DAO) {
    this.DAO = DAO;
  }

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS terrain (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        terrain TEXT,
        navigateDC INTEGER,
        scoutDC INTEGER,
        huntDC INTEGER,
        mapDC INTEGER,
        entertainDC INTEGER,
        watchDC INTEGER
        )`;
    return this.DAO.run(sql);
  }

  create(terrain, navigateDC, scoutDC, huntDC, mapDC, entertainDC, watchDC) {
    return this.DAO.run(
      "INSERT INTO terrain (terrain, navigateDC, scoutDC, huntDC, mapDC, entertainDC, watchDC) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [terrain, navigateDC, scoutDC, huntDC, mapDC, entertainDC, watchDC]
    );
  }

  update(char) {
    const {
      id,
      terrain,
      navigateDC,
      scoutDC,
      huntDC,
      mapDC,
      entertainDC,
      watchDC,
    } = char;
    return this.DAO.run(
      `UPDATE terrain
      SET terrain = ?,
        navigateDC = ?,
        scoutDC = ?,
        huntDC = ?,
        mapDC = ?,
        entertainDC = ?,
        watchDC = ?
      WHERE id = ?`,
      [terrain, navigateDC, scoutDC, huntDC, mapDC, entertainDC, watchDC, id]
    );
  }

  delete(id) {
    return this.DAO.run(`DELETE FROM terrain WHERE id = ?`, [id]);
  }

  getById(id) {
    return this.DAO.get(`SELECT * FROM terrain WHERE id = ?`, [id]);
  }

  getAll() {
    return this.DAO.getAll("SELECT * FROM terrain");
  }
}

module.exports = terrainDB;
