const StringBuilder = function (value) {
  this.value = value;
  this.append = function (str) {
    this.value += str;
    return this.value;
  };
  this.prepend = function (str) {
    this.value = str + this.value;
    return this.value;
  };
  this.pad = function (str) {
    this.value = str + this.value + str;
    return this.value;
  };
};
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
