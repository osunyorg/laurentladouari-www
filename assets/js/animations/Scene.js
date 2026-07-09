import LinesManager from "./LinesManager";

export default class Scene {
  constructor(game) {
    this.game = game;
    this.linesManager = new LinesManager(this.game);
  }
  reinit () {
    this.linesManager.clear();
    this.addLineToLinks();
    this.addLineToTitle();
  }
  addLineToLinks() {
    const links = document.querySelectorAll('#main .block-pages a');
    links.forEach(link => {
      this.linesManager.createFromLink(link);
    });
  }
  addLineToTitle() {
    const title = document.querySelector('#main h1');
    this.linesManager.createFromTitle(title);
  }
  update() {
    this.linesManager.update();
  }
}