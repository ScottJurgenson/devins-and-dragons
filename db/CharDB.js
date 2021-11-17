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
          charisma INTEGER,
          strengthMod INTEGER,
          dexterityMod INTEGER,
          constitutionMod INTEGER,
          intelligenceMod INTEGER,
          wisdomMod INTEGER,
          charismaMod INTEGER          
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
    charisma,
    strengthMod,
    dexterityMod,
    constitutionMod,
    intelligenceMod,
    wisdomMod,
    charismaMod
  ) {
    return this.DAO.run(
      "INSERT INTO chars (charName, strength, dexterity, constitution, intelligence, wisdom, charisma, strengthMod, dexterityMod, constitutionMod, intelligenceMod, wisdomMod, charismaMod) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        charName,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        strengthMod,
        dexterityMod,
        constitutionMod,
        intelligenceMod,
        wisdomMod,
        charismaMod
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
      strengthMod,
      dexterityMod,
      constitutionMod,
      intelligenceMod,
      wisdomMod,
      charismaMod
    } = char;
    return this.DAO.run(
      `UPDATE chars
      SET charname = ?,
        strength = ?,
        dexterity = ?,
        constitution = ?,
        intelligence = ?,
        wisdom = ?,
        charisma = ?,
        strengthMod = ?,
        dexterityMod = ?,
        constitutionMod = ?,
        intelligenceMod = ?,
        wisdomMod = ?,
        charismaMod = ?
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
        strengthMod,
        dexterityMod,
        constitutionMod,
        intelligenceMod,
        wisdomMod,
        charismaMod
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
