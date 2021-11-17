class CharDB {
  constructor(DAO) {
    this.DAO = DAO;
  }

  createTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS chars (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          charName TEXT,
          survival INTEGER,
          dexterity INTEGER,
          perception INTEGER,
          intelligence INTEGER,
          charisma INTEGER,        
          )`;
    return this.DAO.run(sql);
  }

  create(
    charName,
    survival,
    dexterity,
    perception,
    intelligence,
    charisma
  ) {
    return this.DAO.run(
      "INSERT INTO chars (charName, survival, dexterity, perception, intelligence, charisma) VALUES (?, ?, ?, ?, ?, ?)",
      [
        charName,
        survival,
        dexterity,
        perception,
        intelligence,
        charisma
      ]
    );
  }

  update(char) {
    const {
      id,
      charName,
      survival,
      dexterity,
      perception,
      intelligence,
      charisma
    } = char;
    return this.DAO.run(
      `UPDATE chars
      SET charname = ?,
        survival = ?,
        dexterity = ?,
        perception = ?,
        intelligence = ?,
        charisma = ?
      WHERE id = ?`,
      [
        charName,
        survival,
        dexterity,
        perception,
        intelligence,
        charisma,
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
