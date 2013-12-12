<!DOCTYPE html> 
<html>
<head>
<script src="waveform.js"></script>
<link href='/css/waveforms.css' rel='stylesheet' type='text/css'> 
<script type="text/javascript">

var waveform = new Waveform({
	  container: document.getElementById("test"),
	  data: [1, 0.2, 0.5]
	});


</script>
</head>
<body> 

<div style="text-align:center"> 
  <button onclick="playPause()">Play/Pause</button> 
  <button onclick="makeBig()">Big</button>
  <button onclick="makeSmall()">Small</button>
  <button onclick="makeNormal()">Normal</button>
  <br> 
  <video id="video1" width="420">
    <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
    <source src="http://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
    Your browser does not support HTML5 video.
  </video>
</div> 

<div class='example-waveform' id='example4'>
<canvas width="550" height="50">canvas</canvas>
</div>

<script> 
var myVideo=document.getElementById("video1"); 

function playPause()
{ 
if (myVideo.paused) 
  myVideo.play(); 
else 
  myVideo.pause(); 
} 

function makeBig()
{ 
myVideo.width=560; 
} 

function makeSmall()
{ 
myVideo.width=320; 
} 

function makeNormal()
{ 
myVideo.width=420; 
} 
</script> 

<p>Video courtesy of <a href="http://www.bigbuckbunny.org/" target="_blank">Big Buck Bunny</a>.</p>
</body> 
</html>