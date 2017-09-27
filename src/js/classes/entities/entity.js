export class Entity {
  constructor(handler, x, y, width, height) {
    this.x = x;
    this.y = y;
    this.handler = handler;
    this.moveThrough = false;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  // checkEntityCollisions(xOffset, yOffset) {
  //   let candidates =  this.handler.getWorld().getSpatialGrid().retrieve(new Rectangle(this.x + this.b.x + xOffset, this.y + this.b.y + yOffset, this.b.w, this.b.h), this);
  //
  //   for(let i = 0; i < candidates.length; i++) {
  //     let e = candidates[i];
  //     if (e.moveThrough) return false;
  //
  //     if (e.getCollisionBounds(0, 0).intersects(this.getCollisionBounds(xOffset, yOffset))) {
  //       this.checkForCollisionEvents(this, e);
  //
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  // checkForCollisionEvents(e1, e2) {
  //   if (this.checkCollidingTypes(e1, e2, 'monster', 'monster')) return;
  //
  //   let h = this.handler;
  //   let hG = h.getGame();
  //   let hW = h.getWorld();
  //
  //   if (this.checkCollidingTypes(e1, e2, 'player', 'exit')) {
  //     if (hW.level >= 4) {
  //       hW.dialogue.clear();
  //
  //       let ending = new Ending(this.handler);
  //       hG.getGameState().setState(ending);
  //     }
  //
  //     hW.changeLevel();
  //     return;
  //   }
  //
  //   if (this.checkCollidingTypes(e1, e2, 'player', 'monster')) {
  //     hW.dialogue.clear();
  //     this.handler.getWorld().death = 1;
  //   }
  // }

  // checkCollidingTypes(e1, e2, type1, type2) {
  //   return ((e1.type === type1 && e2.type === type2) || (e1.type === type2 && e2.type === type1));
  // }

  setX(x) {
    this.x = x;
  }

  setY(y) {
    this.y = y;
  }
}
