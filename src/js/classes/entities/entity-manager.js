let handler, player, entities;

export class EntityManager {
  constructor(_handler, _player) {
    handler = _handler;
    player = _player;
    entities = new Array(player);
  }

  tick(dt) {
    for(let i = 0; i < entities.length; i++){
      let e = entities[i];
      e.tick(dt);
    }
  }

  render(g) {
    //Iterate through every entity, check whether they are currently in the camera view.
    //If they are in view then draw them
    entities.forEach(function(e) {
      // if (
      //   e.handler.getWidth() + e.handler.getGameCamera().getxOffset() // check right side
      //   && e.handler.getHeight() + e.handler.getGameCamera().getyOffset() // check bottom
      //   && e.handler.getGameCamera().getxOffset() - e.width // check left side
      //   && e.handler.getGameCamera().getyOffset() - e.height // check top
      // ) {
      e.render(g);
      // }
    });
  }

  getPlayer() {
    return player;
  }

  getHandler() {
    return handler;
  }

  getEntities() {
    return entities;
  }

  addEntity(e) {
    entities.push(e);
  }

  removeEntity(e) {
    let index = entities.indexOf(e);

    entities.splice(index, 1);
  }

  removeEntitiesByType(type) {
    entities = entities.filter(e => e.type !== type)
  }
}
