var game = new Phaser.Game( 720, 480, Phaser.AUTO, "gameStage" );

var gameState = {
	preload: function(){
		game.load.image("player", "assets/images/player.png");
	},

	create: function(){
		stageCenterX = (game.width/2);
		stageCenterY = (game.height/2);
		player = this.add.sprite(stageCenterX, stageCenterY, "player");
		player.anchor.set(0.5);

		game.physics.arcade.enable(player);

		player.body.drag.set(70);
		player.body.maxVelocity.set(200);
		cursors = this.input.keyboard.createCursorKeys();

		},

	update: function(){
		if (cursors.up.isDown){
			game.physics.arcade.accelerationFromRotation(player.rotation, 300, player.body.acceleration);
		}
		else{
			player.body.acceleration.set(0);
		}

		if (cursors.left.isDown){
			player.body.angularVelocity = -300;
		}
		else if (cursors.right.isDown){
			player.body.angularVelocity = 300;
		}
		else{
			player.body.angularVelocity = 0;
		}

		game.world.wrap(player, 16);
	}
}

game.state.add("gameState", gameState);
game.state.start("gameState");