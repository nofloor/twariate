const Color = require('color');

/***** SIZES **********************************************************************************************************/

function sizes(unit, halves = false) {
  const sizes = {};
  const a = halves ? 0.5 : 1;
  for (let i = 0; i <= 100; i = i + a) {
    sizes[i] = (i * unit / 16) + 'rem';
  }
  return sizes;
}

function screenSizes() {
  const sizes = {};
  for (let i = 5; i < 100; i = i + 5) {
    sizes['vw-' + i] = i + 'vw';
    sizes['vh-' + i] = i + 'vh';
  }
  return sizes;
}

/***** COLOR HELPERS **************************************************************************************************/

function tint(color, ratio = 0.5) {
  return Color(color).mix(Color('white'), ratio).hex();
}

function shade(color, ratio = 0.5) {
  return Color(color).mix(Color('black'), ratio).hex();
}

function alpha(color, ratio = 0.5) {
  return Color(color).alpha(ratio).rgb().toString()
}

/***** COLORS *********************************************************************************************************/

function tints(color) {
  const colors = {};
  for (let i = 5; i < 100; i = i + 5) {
    colors[i] = tint(color, (100 - i) / 100);
  }
  return colors;
}

function shades(color, max = 50) {
  const colors = {};
  for (let i = 5; i <= max; i = i + 5) {
    colors[i+100] = shade(color, i / 100);
  }
  return colors;
}

function alphas(color) {
  const colors = {};
  for (let i = 5; i < 100; i = i + 5) {
    colors[i/100] = alpha(color, i / 100);
  }
  return colors;
}

module.exports = { sizes, screenSizes, tints, shades, alphas, tint, shade, alpha };