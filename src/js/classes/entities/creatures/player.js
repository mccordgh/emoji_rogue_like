// import { Assets } from '../../gfx/assets';
import { Creature } from './creature';

export class Player extends Creature {
  constructor(handler, x, y){
    super(handler, x, y);
    this.asset = '😎';
    this.x = x;
    this.y = y;
    this.type = 'player';
  }

  tick(dt) {
    console.log(dt)
    this.xMove = this.yMove = 0;
    this.getInput();
    this.move();

    // this.handler.getGameCamera().centerOnEntity(this);
  }

  render(g) {
    g.drawAsset(this.asset, this.x * TILE_SIZE, (this.y + 1) * TILE_SIZE);
    // g.drawAsset(this.asset, this.x - this.handler.getGameCamera().getxOffset(), this.y - this.handler.getGameCamera().getyOffset(), TILE_SIZE, TILE_SIZE);

    // ****** DRAW BOUNDING BOX DON'T DELETE!!
    // g.fillStyle = "green";
    // g.fillRect(this.b.x + this.x - this.handler.getGameCamera().getxOffset(), this.b.y + this.y - this.handler.getGameCamera().getyOffset(), this.b.w, this.b.h);
    // ****** DRAW BOUNDING BOX DON'T DELETE!!
  }

  getInput() {
    let manager = this.handler.getInputManager();
    console.log(manager, manager.up);
    if (manager.up || manager.w || manager.z) {
      console.log('up');
      this.yMove = -1;
    }

    if (manager.down || manager.s) {
      this.yMove = 1;
    }

    if (manager.left || manager.a || manager.q) {
      this.xMove = -1;
    }

    if (manager.right || manager.d) {
      this.xMove = 1;
    }
  }
}
