let GameMenu = function() {};


GameMenu.prototype = {

  menuConfig: {
    startY: 125,
    startX: 30
  },

  init: function () {
    this.titleText = game.make.text(game.world.centerX, 100, 'Savage Ghosting', {
      font: 'bold 60pt TheMinion',
      fill: '#FDFFB5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },

  create: function () {

    // if (music.name !== "dangerous" && playMusic) {
    //   music.stop();
    //   music = game.add.audio('dangerous');
    //   music.loop = true;
    //   music.play();
    // }
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'mainmenu-bg');
    game.add.existing(this.titleText);

    this.addMenuOption('Start', function () {
      game.state.start('Game');
    });
    this.addMenuOption('Options', function () {
      game.state.start('Options');
    });
    this.addMenuOption('Instructions', function () {
      game.state.start('Instructions');
    });

    // this.addMenuOption('Avatars', function () {
    //   game.state.start("Avatars");
    // });
    this.addMenuOption('Credits', function () {
      game.state.start('Credits');
    });
  }
};

Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);