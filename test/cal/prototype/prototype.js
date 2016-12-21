if (!Array.prototype.back) {
  Array.prototype.back = function() {
    return this[this.length - 1];
  };
}
