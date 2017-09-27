export class Tile {
  constructor(asset, id) {
    this.isSolid = false;
    this.id = id;
    this.asset = asset;
  }

  render(g, x, y) {
    g.drawAsset(this.asset, x, y);
  }

  getId() {
    return this.id;
  }
}
