export const projectionParams = new Map([
  ['DE', {
    center: [13.4, 52.5],
    translate: [160, 120],
    scale: 1200,
  }],
  ['CH', {
    center: [5.75, 48],
    translate: [0, 0],
    scale: 4500,
  }],
]);

export const hexbinParams = new Map([
  ['DE', {
    size: [200, 400],
    radius: 3,
  }],
  ['CH', {
    size: [400, 300],
    radius: 2.5,
  }],
  [false, {
    size: [400, 300],
    radius: 2.5,
  }],
]);

export const relevantNumber = new Map([
  ['DE', 20],
  ['CH', 0],
]);

export const aspectRatio = new Map([
  ['DE', 'portrait'],
  ['CH', 'landscape'],
]);
