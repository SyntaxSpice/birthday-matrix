var can = document.getElementById("c");
var ctxBg = can.getContext("2d");

can.height = window.innerHeight;
can.width = window.innerWidth;


var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
chinese = chinese.split("");

var font_size = 10;
var columns = can.width / font_size;
var drops = [];

for (var x = 0; x < columns; x++) {
	drops[x] = 1;
}



function draw() {
	var text;

	ctxBg.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctxBg.fillRect(0, 0, can.width, can.height);
	ctxBg.fillStyle = "#0F0";
	ctxBg.font = font_size + "px arial";

	for (var i = 0; i < drops.length; i++) {
		text = chinese[Math.floor(Math.random() * chinese.length)];
		ctxBg.fillText(text, i * font_size, drops[i] * font_size);
		if (drops[i] * font_size > can.height && Math.random() > 0.975) {
			drops[i] = 0;
		}
		drops[i]++;
	}
}

setInterval(draw, 33);