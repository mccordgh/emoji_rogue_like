import { Entity } from '../entity';

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
    if (!this.collisionWithTile(this.x + this.xMove, this.y + this.yMove)) {
      this.x += this.xMove;
      this.y += this.yMove;
    }
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
