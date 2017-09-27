// import { Assets } from '../../gfx/assets';
import { Creature } from './creature';
import { EmojiManager } from '../../emojis/emoji-manager';

const GET_INPUT_WAIT_TIME = 8;
let timeSinceLastInput = GET_INPUT_WAIT_TIME;

export class Player extends Creature {
  constructor(handler, x, y){
    super(handler, x, y);
    this.asset = EmojiManager.getEmojiByKey('faceSunglasses');
    this.x = x;
    this.y = y;
    this.type = 'player';
  }

  tick(dt) {
    if (timeSinceLastInput > GET_INPUT_WAIT_TIME) {
      this.xMove = this.yMove = 0;
      this.getInput();
      this.move();
      timeSinceLastInput = 0;
    }

    timeSinceLastInput++;
  }

  render(g) {
    g.drawAsset(this.asset, this.x * TILE_SIZE, (this.y + 1) * TILE_SIZE);
  }

  getInput() {
    let manager = this.handler.getInputManager();

    if (manager.up || manager.w || manager.z) {
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
