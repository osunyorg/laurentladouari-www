import getPointFromRotationAndLength from "./helpers/getPointFromRotationAndLength";

export default class Line {
  constructor(rotation, link, index, game) {
    this.game = game;
    this.index = index;
    this.start = { x: 0, y: 0 };
    this.end = { x: 0, y: 0 };
    this.offset = { x : 5, y: 5 }
    this.link = link;
    this.anchor = this.link.querySelector('.line-anchor');
    this.rotation = rotation + (Math.random() * 60 - 30);
    this.length = 1000;

    this.link.addEventListener('click', () => {
      this.game.lastLine = this;
    });
  }
  update() {
    const rect = this.anchor.getBoundingClientRect();

    this.start.x = rect.left + this.offset.x;
    this.start.y = rect.top + this.offset.y + window.scrollY;

    this.rotation += Math.sin(this.game.tick * 0.01 + this.index *2) * 0.05;

    this.end = getPointFromRotationAndLength(this.start.x, this.start.y, this.rotation, this.length);

    this.game.drawLine(this.start.x, this.start.y, this.end.x, this.end.y);
  }
}