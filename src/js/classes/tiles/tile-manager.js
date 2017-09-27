import { Grass } from './paths/grass';
import { borderTree } from './solids/solid-tree';

let tiles = [];

tiles[0] = new Grass();
tiles[1] = new borderTree();

export class TileManager {

  static getTiles() {
    return tiles;
  }
}

