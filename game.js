var game = new Phaser.Game( 500, 300, Phaser.AUTO, "gameStage" );

var gameState = {
    preload: function(){
        game.load.image("player", "assets/images/player.png");
    },
    
    create: function(){
        game.add.sprite(250, 100, "player");
    },
    
    update: function(){
        
    }
}

game.state.add("gameState", gameState);
game.state.start("gameState");