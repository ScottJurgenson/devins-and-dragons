class CharDB {
  constructor(DAO) {
    this.DAO = DAO;
  }

  createTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS chars (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          charName TEXT,
          strength INTEGER,
          dexterity INTEGER,
          constitution INTEGER,
          intelligence INTEGER,
          wisdom INTEGER,
          charisma INTEGER
          )`;
    return this.DAO.run(sql);
  }

  create(
    charName,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma
  ) {
    return this.DAO.run(
      "INSERT INTO chars (charName, strength, dexterity, constitution, intelligence, wisdom) VALUES (?, ?, ?, ?, ?, ?)",
      [
        charName,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
      ]
    );
  }

  update(char) {
    const {
      id,
      charName,
      strength,
      dexterity,
      constitution,
      intelligence,
      wisdom,
      charisma,
    } = char;
    return this.DAO.run(
      `UPDATE chars
      SET charname = ?,
        strength = ?,
        dexterity = ?,
        constitution = ?,
        intelligence = ?,
        wisdom = ?,
        charisma = ?
      WHERE id = ?`,
      [
        charName,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        id,
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
