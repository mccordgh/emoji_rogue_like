import { EntityManager } from '../entities/entity-manager';
import { MazeGenerator } from './maze-generator';
import { Player } from '../entities/creatures/player';
import { TileManager } from '../tiles/tile-manager';
// import { Exit } from '../entities/statics/exit';
// import { GameOver } from '../menus/game-over';

export class World {
  constructor(handler) {
    this.width = null;
    this.height = null;
    this.tiles = [];
    this.handler = handler;
    handler.setWorld(this);
    this.entityManager = new EntityManager(handler, new Player(handler, 20, 20));
    this.level = 1;
    this.loadWorld();
    this.init();
  }

  changeLevel() {
    this.setPlayerSpawn(this.spawnX, this.spawnY);
    this.level += 1;
    this.tiles = [];

    this.entityManager.removeEntitiesByType('exit');
    this.entityManager.removeEntitiesByType('item');
    this.entityManager.removeEntitiesByType('monster');

    this.loadWorld();
    this.init();
  }

  init() {
    this.setPlayerSpawn(this.spawnX, this.spawnY);
    }

  getWorldHeight() {
    return this.height;
  }

  getWorldWidth() {
    return this.width;
  }

  setPlayerSpawn(x, y) {
    this.entityManager.getPlayer().setX(x);
    this.entityManager.getPlayer().setY(y);
  }

  loadWorld() {
    let pieces = this.fillWorld();
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (!this.tiles[x]) this.tiles[x] = [];
        this.tiles[x][y] = pieces[x][y];
      }
    }
  }

  fillWorld() {
    let maze = MazeGenerator.getRandomMaze(this.level);

    this.height = maze.mazeHeight;
    this.width = maze.mazeWidth;
    this.spawnX = maze.spawnX;
    this.spawnY = maze.spawnY;

    return maze.pieces;
  }

  tick(dt) {
    this.entityManager.tick(dt);
  }

  render(g) {
    g.clearRect(0, 0, this.width * TILE_SIZE, this.height * TILE_SIZE);
    this.renderTiles(g);
    this.entityManager.render(g);
  }

  renderTiles(g) {
    // let xStart = parseInt(Math.max(0, this.handler.getGameCamera().getxOffset() / TILE_SIZE));
    // let xEnd = parseInt(Math.min(this.width, (this.handler.getGameCamera().getxOffset() + this.width) / TILE_SIZE + 1));
    // let yStart = parseInt(Math.max(0, this.handler.getGameCamera().getyOffset() / TILE_SIZE));
    // let yEnd = parseInt(Math.min(this.height, (this.handler.getGameCamera().getyOffset() + this.height) / TILE_SIZE + 1));
    let xStart = 0;
    let xEnd = this.width;
    let yStart = 0;
    let yEnd = this.height;

    for (let y = yStart; y < yEnd; y++) {
      for (let x = xStart; x < xEnd; x++) {
        const tile = this.getTile(x, y);

        if (tile) {
          // tile.render(g, x * TILE_SIZE - this.handler.getGameCamera().getxOffset(), y * TILE_SIZE - this.handler.getGameCamera().getyOffset());
          tile.render(g, x * TILE_SIZE, (y + 1) * TILE_SIZE);
        }
      }
    }
  }

  getTile(x, y) {
    try {
      return TileManager.getTiles()[this.tiles[x][y]];
    }
    catch(e) {
    }
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getEntityManager() {
    return this.entityManager;
  }
}
