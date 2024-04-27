class Storage {
  #items

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items
  }

  addItem(newItem) {
    this.#items.push(newItem)
  }

  removeItem(itemToRemove) {
    return this.#items.filter(item => item !== itemToRemove)
  }//поясніть будьласка, як зробити так щоб ця властивість саме видаляла предмет, а не повертала новий масив.
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
