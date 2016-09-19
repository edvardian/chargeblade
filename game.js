"use strict";

class Game extends Phaser.Game{
	constructor(width, height, renderer, parent, state, transparent, antialias, physicsConfig){
		super(width, height, renderer, parent, state, transparent, antialias, physicsConfig);
	}
}

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
	init: function(){
		this.player = null;
		this.mousePoint = null;
	},

	preload: function(){
		game.load.image("player", "assets/images/player.png");
	},

	create: function(){
		this.player = this.add.sprite(game.world.centerX, game.world.centerY, "player");
		this.player.anchor.set(0.5);

		game.physics.arcade.enable(this.player);

		this.player.body.drag.set(1000);
		this.player.body.maxVelocity.set(1);
		this.mousePoint = this.input.mousePointer;

	},

	update: function(){
		//New input methods. Has Sprite looking pointing to the mouse, and moves with WASD keys.
		this.player.rotation = game.physics.arcade.angleToPointer(this.player.body, this.mousePoint);

		if (this.input.keyboard.isDown(Phaser.KeyCode.W)){
			game.physics.arcade.accelerateToXY(this.player, this.player.x, (this.player.y - 1), 1000, maxVelocity, maxVelocity );
			console.log("W is pressed");
		}
		else if (this.input.keyboard.isDown(Phaser.KeyCode.S)){
			game.physics.arcade.accelerateToXY(this.player, this.player.x, (this.player.y + 1), 1000, maxVelocity, maxVelocity );
			console.log("S is pressed");
		}
		else if (this.input.keyboard.isDown(Phaser.KeyCode.A)){
			game.physics.arcade.accelerateToXY(this.player, (this.player.x - 1), this.player.y, 1000, maxVelocity, maxVelocity );
			console.log("A is pressed");
		}
		else if (this.input.keyboard.isDown(Phaser.KeyCode.D)){
			game.physics.arcade.accelerateToXY(this.player, (this.player.x + 1), this.player.y, 1000, maxVelocity, maxVelocity );
			console.log("D is pressed");
		}
		else{
			this.player.body.acceleration.set(0);
		}

		game.world.wrap(this.player, 16);
	}
}

var game = new Game( 720, 480, Phaser.AUTO, "gameStage" );
var maxVelocity = 100;

game.state.add("stateStartScreen", stateStartScreen);
game.state.add("stateMainGame", stateMainGame);
game.state.start("stateStartScreen");