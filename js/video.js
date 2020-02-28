var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() {
	video.play();
	console.log("Play Video");
}

function pauseVid() {
	video.pause()
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate = 0.8*video.playbackRate; 
  	console.log("Speed is "+video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate = 1.25*video.playbackRate; 
	console.log("Speed is "+video.playbackRate);
} 

function skipAhead() {
			video.currentTime += 60;
	if (video.ended){
		video.currentTime = 0; 
	}
	console.log("Current location is "+ video.currentTime);
} 

function mute() {  
  	if (video.muted) {
		video.muted = false; 
		console.log("Changing to Unmuted"); 
		document.getElementById("mute").innerHTML = "mute";
		}
	else{ 
		console.log("Changing to Muted");
		video.muted = true; 
		document.getElementById("mute").innerHTML = "unmute";
}}

function changeVolume() {
	video.volume = document.querySelector("#volumeSlider").value/100; 
	console.log("Volume is " + video.volume);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"; 
}


function gray() {
	console.log("In grayscale")
	video.classList.add("grayscale")
}

function color() {
	console.log("In color")
	myVideo.classList.remove("grayscale")
}
