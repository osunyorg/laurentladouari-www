export default function (x, y, rotation, length) {
  return {
      x: x + length * Math.cos(Math.PI * rotation / 180),
      y: y + length * Math.sin(Math.PI * rotation / 180)
    };
}