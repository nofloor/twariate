const twariate = require('./index');
const color = require('color');

test('Sizes', () => {
  let sizes = twariate.sizes(4);
  expect(sizes[1]).toBe('0.25rem');
  expect(sizes[10]).toBe('2.5rem');
  expect(sizes[15]).toBe('3.75rem');
  expect(sizes[100]).toBe('25rem');

  sizes = twariate.sizes(6, true);
  expect(sizes['0.5']).toBe('0.1875rem');
  expect(sizes[1]).toBe('0.375rem');
  expect(sizes[10]).toBe('3.75rem');
});

test('Screen Sizes', () => {
  let sizes = twariate.screenSizes();
  expect(sizes['vw-5']).toBe('5vw');
  expect(sizes['vw-10']).toBe('10vw');
  expect(sizes['vw-50']).toBe('50vw');
  expect(sizes['vw-95']).toBe('95vw');
  expect(sizes['vw-100']).toBeUndefined();

  expect(sizes['vh-5']).toBe('5vh');
  expect(sizes['vh-10']).toBe('10vh');
  expect(sizes['vh-50']).toBe('50vh');
  expect(sizes['vh-95']).toBe('95vh');
  expect(sizes['vh-100']).toBeUndefined();
});

test('Tints', () => {
  const tints = twariate.tints('#123456');
  expect(tints[5]).toBe(twariate.tint('#123456', 0.95));
  expect(tints[50]).toBe(twariate.tint('#123456'));
  expect(tints[85]).toBe(twariate.tint('#123456', 0.15));
  expect(tints[100]).toBeUndefined();
});

test('Shades', () => {
  let shades = twariate.shades('#123456');
  expect(shades[105]).toBe(twariate.shade('#123456', 0.05));
  expect(shades[150]).toBe(twariate.shade('#123456'));
  expect(shades[185]).toBeUndefined();

  shades = twariate.shades('#123456', 100);
  expect(shades[185]).toBe(twariate.shade('#123456', 0.85));
});

test('Alphas', () => {
  const alphas = twariate.alphas('#123456');
  expect(alphas['0.05']).toBe(twariate.alpha('#123456', 0.05));
  expect(alphas['0.5']).toBe(twariate.alpha('#123456'));
  expect(alphas['0.85']).toBe(twariate.alpha('#123456', 0.85));
  expect(alphas[1]).toBeUndefined();
});