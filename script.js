class Stopwatch {
  constructor() {
    var running = false;
    var elapsedTime = 0;
  }
  start() {
    this.running = true;
  }
  stop() {
    running = false;
  }
  reset() {
    running = false;
    elapsedTime = 0;
  }
  getCurrentTime() {}
}
