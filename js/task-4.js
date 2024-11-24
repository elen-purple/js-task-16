const StringBuilder = function (value) {
  this.value = value;
  this.append = function (str) {
    this.value += str;
    return value;
  };
  this.prepend = function (str) {
    this.value = str + this.value;
    return value;
  };
  this.pad = function (str) {
    this.value = str + this.value + str;
    return value;
  };
};
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
