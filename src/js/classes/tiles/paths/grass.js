import { Tile } from '../tile';
import {EmojiManager} from '../../emojis/emoji-manager';

export class Grass extends Tile {
  constructor(id) {
    super(EmojiManager.getEmojiByKey('grass'), id);
  }
}
