export default function (x1, y1, x2, y2) {
  const deltaX = x2 - x1,
        deltaY = y2 - y1,
        rad = Math.atan2(deltaY, deltaX),
        deg = rad * (180 / Math.PI);

  return deg;
}