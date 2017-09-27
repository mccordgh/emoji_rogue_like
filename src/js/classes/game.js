import { Display } from './display/display';
import { GameState } from './states/game-state';
import { GameCamera } from './display/game-camera';
import { Handler } from './handler';
import { InputManager } from './input/input-manager';
// import { MainMenu } from './menus/main-menu';
import { State } from './states/state';

let running = false;
let display, handler, gameCamera, inputManager;
let state, gameState, mainMenu, graphics;

export class Game {
  constructor(title) {
    this.title = title;
  }

  run() {
    this.init();
    let fps = 60;
    let timePerTick = 1000 / fps;
    let delta = 0;
    let dt = 0;
    let now = Date.now();
    let lastTime = Date.now();
    let timer = 0;

    let loop = () => {
      if(running) {
        now = Date.now();
        delta = now - lastTime;
        timer += delta;
        lastTime = now;
      }

      if(timer >= timePerTick){
        dt = timer / 1000;
        this.tick(dt);
        this.render();
        timer = 0;
      }
      window.requestAnimationFrame(loop);
    };

    loop();

  }

  start() {
    if (running) return;
    running = true;
    this.run();
  }

  getInputManager() {
    return inputManager;
  }

  getDisplay(){
    return display;
  }

  getGameCamera() {
    return gameCamera;
  }

  getGameState() {
    return state;
  }

  init() {
    handler = new Handler(this);
    display = new Display(this.title);
    inputManager = new InputManager();
    graphics = display.getGraphics();
    state = new State();
    gameCamera = new GameCamera(handler, 0, 0);
    // soundManager = new SoundManager();
    // handler.setSM(soundManager);
    // mainMenu = new MainMenu(handler);
    // state.setState(mainMenu);
    gameState = new GameState(handler);
    state.setState(gameState);
  }

  tick(dt) {
    InputManager.tick();
    if (state.getState())
      state.getState().tick(dt);
  }

  render(){
    if (state.getState())
      state.getState().render(graphics);
  }
}
