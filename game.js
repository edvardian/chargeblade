var game = new Phaser.Game( 720, 480, Phaser.AUTO, "gameStage" );
var maxVelocity = 100;

var gameState = {
	preload: function(){
		game.load.image("player", "assets/images/player.png");
	},

	create: function(){
		player = this.add.sprite(game.world.centerX, game.world.centerY, "player");
		player.anchor.set(0.5);

		game.physics.arcade.enable(player);

		player.body.drag.set(1000);
		player.body.maxVelocity.set(1);
		cursors = this.input.keyboard.createCursorKeys();
		mousePoint = this.input.mousePointer;

		},

	update: function(){
		//New input methods. Has Sprite looking pointing to the mouse, and moves with WASD keys.

		//player.angle = playerRotation(player.position, mousePoint.position);
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

/*
function playerRotation(playerPosition, mousePosition){
	var angle = Math.atan2( (mousePosition.y - playerPosition.y), (mousePosition.x - playerPosition.x) ) *  180 / Math.PI ;
	return angle;
}
*/

game.state.add("gameState", gameState);
game.state.start("gameState");