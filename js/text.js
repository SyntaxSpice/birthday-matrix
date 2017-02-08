/*****************************************

WAKE UP, NEO...

Author: Jack Rugile;

MODS by Victor Casals - VSDigital

* Multiple message
* Simulation of human typing
* Cursors
 
/*****************************************/
var c = document.getElementById('text');
var ctx = c.getContext('2d');
var cw = c.width = 400;
var ch = c.height = 58;
document.body.appendChild(c);

ctx.font = 'normal 16px monospace';
ctx.textAlign = 'left';
ctx.textBaseline = 'top';
ctx.fillStyle = '#fff';
ctx.strokeStyle = 'rgba(0, 0, 0, .3)';
ctx.shadowColor = '#3f3';
var page=0;

  // ... multiple messages... //
  var messagesArray= new Array(
     "",
    "",
    "",
    "",
    "",
    "",
    "",
    "With vylupleniem, Nastya...",
    "The Matrix has you",
    "And Middle-earth too..",
    "And Kharkiv...",
    "Oh..how many places have u...",
    "Oh..sorry..forgot..",
	"What if I told you",	  
	"Сongratulations!",
	"No matter which pill you took",
	"May you life be emotionally full",
	"And inexorably, Irrevocably..",
	"Breathtakingly, Breathtakingly, Happy..",  
    "This day shakes the world each year",
    "Of course u know why...",
    "Don't stop be so interesting and positive",
	"So if you wa#@~&$4..Oops!",
	"System error! Reload the World!",
    "██████████████████████████████████"
  );

  // ...cursor style... //
  var cursor = new Array(
  	"█",
  	"",
  	"█",
  	"",
  	"█",
  	"",
  	"█",
  	"█",
  	"█",
  	"█",
  	"█",
  	"█",
  	"█",
  	"█",
  	"█",
  	"█",
  	"█",
  	"█",
  	"█",
	"█",
  	"█",
  	"█",
  	"█",
  	"█",
  	"█",
	"█",
  	"█",
  	"█"
  );



var messageArray = messagesArray[page].split('');
var totalMessages = messagesArray.length-1;
var messageLength = messageArray.length;
var pointer = 0;
var typeTick = 0;
var typeTickMax = 0;

var minTick=5;
var maxTick=50;
var typeResetTick = 0;
var typeResetMax = 200;
 
var updateTypeTick = function(){
  

  if(pointer < messageLength){
    if(typeTick < typeTickMax){
      typeTick++;
    } else {
      typeTick = 0;
      pointer++; 
      typeTickMax= Math.floor((Math.random()*maxTick)+minTick);;

    }
  } else {
    if(typeResetTick < typeResetMax){
      typeResetTick++;
    } else { 
    	typeResetTick = 0;
      typeTick = 0;
      pointer = 0;
     
      // ...change message... //      
      if(page<totalMessages)page++;
      else page=0;
      
      messageArray=messagesArray[page].split('');
      messageLength = messageArray.length;
 
    }
  }
}

var renderMessage = function(){
 
 var text;
  
  switch(cursor[page])
  {
      
    case "\n":   // ... NO ANIMATION
      text= messageArray.slice(0, messageLength);
      break;
      
      
    default:
      text= messageArray.slice(0, pointer);
      text[pointer]=cursor[page];
      break;
      
      
  }
  
   
 
  ctx.shadowBlur = 9;
	ctx.fillText(text.join(''), 20, 20);
  ctx.shadowBlur = 0;
  
  }
    
var renderLines = function(){
  ctx.beginPath();
  for(var i = 0; i < ch/2; i += 1){    
    ctx.moveTo(0, (i*2) + .5);
    ctx.lineTo(cw, (i*2) + .5);    
  } 
  ctx.stroke();
}

var loop = function(){
  ctx.clearRect(0, 0, cw, ch);
  updateTypeTick();
	renderMessage();
  renderLines();
  setTimeout(loop, 2);
}
    
loop();