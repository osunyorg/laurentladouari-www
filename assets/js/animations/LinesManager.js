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
    const line = new Line(angles[this.lines.length % angles.length], link, this.lines.length, this.game);
    this.lines.push(line);
  }

  createFromTitle(title) {
    if (!this.game.lastLine) {
      return;
    }

    const angle = this.game.lastLine.rotation + 180;
    const line = new Line(angle, title, this.lines.length, this.game);
    this.lines.push(line);
  }
  clear() {
    this.lines = [];
  }
  update() {
    this.lines.forEach(line => line.update());
  }
}