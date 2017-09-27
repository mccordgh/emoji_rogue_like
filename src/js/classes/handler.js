export class Handler {
  constructor(game) {
    this.game = game;
  }

  getWidth() {
    return this.world.getWidth();
  }

  getHeight() {
    return this.world.getHeight();
  }

  getInputManager() {
    return this.game.getInputManager();
  }

  getGameCamera() {
    return this.game.getGameCamera();
  }

  getWorld() {
    return this.world;
  }

  setWorld(world) {
    this.world = world;
  }

  getGame() {
    return this.game;
  }
}
