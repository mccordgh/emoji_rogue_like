import { EmojiManager } from '../../emojis/emoji-manager';
import { Tile } from '../tile';

export class borderTree extends Tile {
  constructor(id) {
    super(EmojiManager.getEmojiByKey('borderTree'), id);
    this.isSolid = true;
  }
}
