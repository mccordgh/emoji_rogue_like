import { Tile } from '../tile';

export class SolidTree extends Tile {
  constructor(id) {
    super('🌳', id);
    this.isSolid = true;
  }
}
