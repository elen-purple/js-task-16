const Storage = function (items) {
  this.items = items;
  this.getItems = function () {
    return items;
  };
  this.addItem = function (item) {
    items.push(item);
  };
  this.removeItem = function (item) {
    if (items.includes(item)) {
      items.splice(items.indexOf(item), 1);
    }
  };
};

const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
