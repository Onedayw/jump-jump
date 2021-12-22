const ANGEL = 30;
const SPEED = 3;

class Example1 extends Phaser.Scene {
  distanceToMove;

  constructor() {
    super({key: "Example1"});
    this.distanceToMove = 0.0;
  }

  preload() {
    this.load.image('Ball', 'assets/Pokemon_Ball.png');
    this.load.image('Cube', 'assets/Cube.png' )
  }

  create() {
    this.cube = this.add.image(400, 330, 'Cube');
    this.ball = this.add.image(400, 300, 'Ball');

    this.input.on('pointerup', function(pointer) {
      console.log(this.distanceToMove);

      this.ball.x += Math.cos(ANGEL * Math.PI / 180) * this.distanceToMove * SPEED;
      this.ball.y -= Math.sin(ANGEL * Math.PI / 180) * this.distanceToMove * SPEED;
      this.distanceToMove = 0.0;
      console.log(this.ball.x);
      console.log(this.ball.y);
    }, this)
  }

  update(delta) {
    if (this.input.activePointer.leftButtonDown()) {
      this.distanceToMove++;
    }

    if (this.input.activePointer.rightButtonDown()) {
      this.distanceToMove--;
    }
  }
}
