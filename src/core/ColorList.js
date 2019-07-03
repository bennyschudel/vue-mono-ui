import Color from './Color';

class ColorList {
  constructor(colors = []) {
    this._colors = colors.map(Color);
  }

  colors() {
    return this._colors;
  }
}

const _ColorList = (...rest) => new ColorList(...rest);
_ColorList.prototype = ColorList.prototype;

export default _ColorList;
