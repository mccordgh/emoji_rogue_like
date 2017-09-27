import { Entity } from '../entity';

let n;

export class Creature extends Entity {
  constructor(handler, x, y) {
    super(handler, x, y);
    this.xMove = 0;
    this.yMove = 0;
  }

  tick() {
    //
  }

  move() {
    this.x += this.xMove;
    this.y += this.yMove;
  }

  moveX() {
    //
  }

  moveY() {
    //
  }

  collisionWithTile(x, y) {
    try {
      return this.handler.getWorld().getTile(x, y).isSolid;
    }
    catch(e) {
    }
  }
}
