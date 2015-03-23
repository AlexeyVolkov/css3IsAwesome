var audio = document.getElementById("myAudio");

var bike = document.getElementById("bike");
bike.onmouseover=function(){
	audio.play();
};
bike.onmouseout=function(){
	audio.pause();
};