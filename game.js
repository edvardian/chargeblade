
var canvasID = document.getElementById("mainCanvas");
var mainScreen = canvasID.getContext("2d");

mainScreen.fillStyle = "#000000";
mainScreen.fillRect(50, 50, 100, 100);

//EVENT HANDLERS
//document.getElementById("gameTitle").addEventListener("mouseover", function(){document.getElementById("gameTitle").innerHTML = document.getElementById("secondTitle").innerHTML });
document.getElementById("gameTitle").addEventListener("mouseover", function(){document.getElementById("gameTitle").innerHTML = document.getElementById("nameChange").value });
document.getElementById("gameTitle").addEventListener("mouseout", function(){document.getElementById("gameTitle").innerHTML = "CHARGEBLADE"});

/*
i = 0;

while (true){
	mainScreen.fillStyle = "#FFFFFF";
	mainScreen.fillRect(0, 0, 800, 800);
	mainScreen.fillStyle = "#000000";
	mainScreen.fillRect(i, i, 100, 100);
	if (i >= 300){
		i = 0;
	}
}
*/