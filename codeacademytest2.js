const config = {
  width: 400,
  height: 500,
  backgroundColor: 0xffff77
}

const game = new Phaser.Game(config)

const gameState = {};

function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
};

function create() {
  gameState.codey = this.add.sprite(200, 200, 'codey');
};

const config = {
  width: 300,
  height: 500,
  backgroundColor: 0xdda0dd,
  scene: {
  preload,
  create
}
};

const game = new Phaser.Game(config);
