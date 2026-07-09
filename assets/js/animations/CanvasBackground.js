import Scene from "./Scene";

export class CanvasBackground {
  get width () {
    return this.container.offsetWidth
  }
  get height () {
    return this.container.offsetHeight
  }
  constructor() {
    this.tick = 0;
    this.container = document.querySelector('#canvas-background-container');

    if (!this.container) {
      return console.warning('no game container found');
    }

    this.camera = {
      x: 0,
      y: 0
    }
  }
  setup() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);

    this.resize();
    this.listen();

    this.scene = new Scene(this);
    this.loop();

    this.scene.reinit();
  }
  listen() {
    window.addEventListener('resize', this.resize.bind(this));
  }
  resize() {
    this.canvas.width = this.container.offsetWidth * window.devicePixelRatio;
    this.canvas.height = this.container.offsetHeight * window.devicePixelRatio;
    this.canvas.style.width = this.container.offsetWidth + "px";
    this.canvas.style.height = this.container.offsetHeight + "px";
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  loop () {
    this.tick += 1;

    this.ctx.clearRect(0, 0, this.width, this.height);
    requestAnimationFrame(this.loop.bind(this));
    this.scene.update();
  }
  drawLine(ax, ay, bx, by) {
    this.ctx.beginPath(); // Start a new path
    this.ctx.moveTo(ax, ay); // Move the pen to (30, 50)
    this.ctx.lineTo(bx, by); // Draw a line to (150, 100)
    this.ctx.stroke(); // Render the path
  }
  updatePageTransitionTransform () {
    const distanceFactor = 0.1,
          x = canvasBackground.lastLine.end.x * distanceFactor,
          y = canvasBackground.lastLine.end.y * distanceFactor;

    document.documentElement.style.setProperty('--transition-transform-out', `translate(${-x}px, ${-y}px)`);
    document.documentElement.style.setProperty('--transition-transform-in', `translate(${x}px, ${y}px)`);
  }
  reinit() {
    this.resize();
    this.scene.reinit();
  }
}

export const canvasBackground = new CanvasBackground();
