const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: {
    preload,
    create
  }
};

const game = new Phaser.Game(config);

function preload() {
}

function create() {
  let count = 1;
  const text = this.add.text(10, 10, 'Count 1', { fontSize: 30 });
  text.setInteractive();
  text.on('pointerdown', () => {
    count++;
    text.text = `Count ${count}`;
  });
}
