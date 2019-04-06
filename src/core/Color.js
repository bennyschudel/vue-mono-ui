const tinycolor = require('tinycolor2');

tinycolor.prototype.toRgbArray = function() {
  const { r, g, b } = this.toRgb(...arguments);

  return [r, g, b];
};

tinycolor.prototype.mostReadableBW = function() {
  return tinycolor.mostReadable(this, ['black', 'white']);
};

tinycolor.prototype.equals = function() {
  return tinycolor.equals(this, ...arguments);
};

export default tinycolor;
