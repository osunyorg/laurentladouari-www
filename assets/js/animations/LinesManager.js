import getAngleFromPoints from "./helpers/getAngleFromPoints";
import Line from "./Line";

const angles = [
  30,
  150
];

export default class LinesManager {
  constructor(game) {
    this.game = game;
    this.lines = [];
  }
  createFromLink(link) {
    const line = new Line({
      rotation: angles[this.lines.length % angles.length],
      element: link,
      index: this.lines.length,
      game: this.game
    });
    this.lines.push(line);
  }

  createFromTitle(title) {
    if (!this.game.lastLine) {
      return;
    }

    const line = new Line({
      rotation: this.game.lastLine.rotation + 180,
      element: title,
      index: this.lines.length,
      game: this.game,
      reverse: true
    });

    this.lines.push(line);
  }
  clear() {
    this.lines = [];
  }
  update() {
    this.lines.forEach(line => line.update());
  }
}