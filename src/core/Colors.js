import Color from './Color.js';

function Colors(colors) {
  return colors.map(d => Color(d));
}

export default Colors;
