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
    //
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
