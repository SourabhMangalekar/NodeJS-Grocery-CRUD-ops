const db = require("../util/database");

module.exports = class Grocery {
  constructor(id, item) {
    this.id = id;
    this.item = item;
  }

  // This method gets all the Groceries
  static fetchAll() {
    return db.execute("SELECT * FROM groceries1.groceries;");
  }

  // This method is used for Adding a new Item to grocery List
  static post(item) {
    return db.execute(
      "INSERT INTO `groceries1`.`groceries` (`item`) VALUES (?)",
      [item]
    );
  }

  // This method is used for editing the specific item from the list
  static update(id, item) {
    return db.execute(
      "UPDATE `groceries1`.`groceries` SET `item` = ? WHERE (`id` = ?)",
      [item, id]
    );
  }

  // This method is used for delete particular item from the list
  static delete(id) {
    return db.execute(
      "DELETE FROM `groceries1`.`groceries` WHERE (`id` = ?);",
      [id]
    );
  }
};
