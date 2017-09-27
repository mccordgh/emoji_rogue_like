export class State {
  constructor(){
    this.currentState = null;
  }

  getState() {
    return this.currentState;
  }

  setState(state) {
    this.currentState = state;
  }
}
