let graphics, gameCanvas;

export class Display {
  constructor(title) {
    this.title = title;
    this.createDisplay();
  }

  createDisplay() {
    document.title = this.title;
    gameCanvas = document.getElementById("canvas");
    graphics = gameCanvas.getContext("2d");
    this.resizeCanvas();
  }

  resizeCanvas() {
    gameCanvas.width = document.body.clientWidth;
    gameCanvas.height = document.body.clientHeight;
    graphics.font = `${TILE_SIZE}px Arial`;
    graphics.webkitImageSmoothingEnabled = false;
    graphics.mozImageSmoothingEnabled = false;
    graphics.imageSmoothingEnabled = false;
  }

  getWidth() {
    return gameCanvas.attribute('width');
  }

  getHeight() {
    return gameCanvas.attribute('height');
  }

  getGraphics() {
    return graphics;
  }
}

CanvasRenderingContext2D.prototype.drawAsset = (asset, x, y) => {
  graphics.fillText(asset, x, y, TILE_SIZE);
};
// CanvasRenderingContext2D.prototype.myDrawImage = (asset, x, y, width, height) => {
//   graphics.drawImage(asset.sheet, asset.x, asset.y, asset.width, asset.height, x, y, width, height);
// };

// CanvasRenderingContext2D.prototype.drawText = (txtObj) => {
//   graphics.font = `${txtObj.fontSize}px Arial`;
//   graphics.fillStyle = txtObj.fillColor;
//   graphics.strokeText(txtObj.text, txtObj.x, txtObj.y);
//   graphics.fillText(txtObj.text,  txtObj.x, txtObj.y);
// };
