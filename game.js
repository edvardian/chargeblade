"use strict";

class Game extends Phaser.Game{
	eventHandling(){
		console.log("Event Handler");
	}

}


var game = new Game( 720, 480, Phaser.AUTO, "gameStage" );
var maxVelocity = 100;

var stateStartScreen = {
	preload: function(){
		game.load.image("startIcon", "assets/images/starticon.png");
	},

	create: function(){
		var startIcon = this.add.sprite(game.world.centerX, game.world.centerY, "startIcon");
		startIcon.anchor.set(0.5);
	},

	update: function(){
		if (this.input.keyboard.isDown(Phaser.KeyCode.T)){
			game.state.start("stateMainGame");
		}
	}
}

var stateMainGame = {
	preload: function(){
		game.load.image("player", "assets/images/player.png");
	},

	create: function(){
		var player = this.add.sprite(game.world.centerX, game.world.centerY, "player");
		player.anchor.set(0.5);

		game.physics.arcade.enable(player);

		player.body.drag.set(1000);
		player.body.maxVelocity.set(1);
		var cursors = this.input.keyboard.createCursorKeys();
		var mousePoint = this.input.mousePointer;

	},

	update: function(){
		//New input methods. Has Sprite looking pointing to the mouse, and moves with WASD keys.
		player.rotation = game.physics.arcade.angleToPointer(player.body, mousePoint);

		if (this.input.keyboard.isDown(Phaser.KeyCode.W)){
			game.physics.arcade.accelerateToXY(player, player.x, (player.y - 1), 1000, maxVelocity, maxVelocity );
			console.log("W is pressed");
		}
		else if (this.input.keyboard.isDown(Phaser.KeyCode.S)){
			game.physics.arcade.accelerateToXY(player, player.x, (player.y + 1), 1000, maxVelocity, maxVelocity );
			console.log("S is pressed");
		}
		else if (this.input.keyboard.isDown(Phaser.KeyCode.A)){
			game.physics.arcade.accelerateToXY(player, (player.x - 1), player.y, 1000, maxVelocity, maxVelocity );
			console.log("A is pressed");
		}
		else if (this.input.keyboard.isDown(Phaser.KeyCode.D)){
			game.physics.arcade.accelerateToXY(player, (player.x + 1), player.y, 1000, maxVelocity, maxVelocity );
			console.log("D is pressed");
		}
		else{
			player.body.acceleration.set(0);
		}

		game.world.wrap(player, 16);

	}
}

game.state.add("stateStartScreen", stateStartScreen);
game.state.add("stateMainGame", stateMainGame);
game.state.start("stateStartScreen");