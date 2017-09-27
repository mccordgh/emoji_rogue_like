import { Grass } from './paths/grass';
import { SolidTree } from './solids/solid-tree';

let tiles = [];

tiles[0] = new Grass();
tiles[1] = new SolidTree();

export class TileManager {

  static getTiles() {
    return tiles;
  }
}

