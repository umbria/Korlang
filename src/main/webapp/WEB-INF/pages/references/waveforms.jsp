<!DOCTYPE html>
<html>
<head>
<title>Waveform.js</title>
<link href='/favicon.ico' rel='shortcut icon'>
<meta content='Waveform.js' property='og:title'>
<meta content='Waveform.js makes drawing SoundCloud waveforms simple and lets you style and color them the way you want.' property='og:description'>
<meta content='website' property='og:type'>
<meta content='http://waveformjs.org/images/logo.png' property='og:image'>
<meta content='Waveform.js' property='og:site_name'>
<meta content='http://waveformjs.org' property='og:url'>
<meta content='121401014666351' property='fb:app_id'>
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'></script>
<script src='//platform.twitter.com/widgets.js'></script>
<script src='//connect.soundcloud.com/sdk.js'></script>
<script>
  //<![CDATA[
    SC.initialize({
      client_id: "YOUR_CLIENT_ID"
    });
  //]]>
</script>
<script src='/js/waveform.js'></script>
<script src='/js/application.js'></script>
<link href='http://cloud.webtype.com/css/c09e383b-9747-406d-8ff5-95ae1c9217e9.css' rel='stylesheet' type='text/css'>
<link href='/css/references/application.css' rel='stylesheet' type='text/css'>
</head>
<body>
<!-- / NAVIGATION -->
<nav>
<h4><a href="#top">Waveform.js <em>(1.0.0)</em></a></h4>
<ul>
<li><a href="http://github.com/soundcloud/waveformjs" target="_blank">Github Repository</a></li>
</ul>
<h4><a href="#top">Introduction</a></h4>
<h4><a href="#usage">Usage</a></h4>
<ul>
<li><a href="#options">Options</a></li>
<li><a href="#functions">Functions</a></li>
<li><a href="#endpoint">Endpoint</a></li>
</ul>
<h4><a href="#examples">Examples</a></h4>
<ul>
<li><a href="#track">Track</a></li>
<li><a href="#fly">On the Fly</a></li>
<li><a href="#weird">Weird</a></li>
</ul>
</nav>
<!-- / CONTENT -->
<section>
<!-- / Introduction -->
<a name='top'>
<h1>Waveform.js <div id="logo"></div></h1>
</a>
<p>Waveform.js makes drawing <a href="http://soundcloud.com">SoundCloud</a> waveforms simple and lets you <strong>style</strong> and <strong>color</strong> them the way you want it. It comes as a small JavaScript <strong>library</strong> and is using a <em>lightweight service</em> hosted on <a href="http://waveformjs.org">waveformjs.org</a> that translates the waveform images provided by SoundCloud into <strong>floating points</strong>.</p>
<em>"Damn Good Waveforms" (Eric Wahlforss, CTO of SoundCloud, 2nd of July 2013)</em>
<p>The project is open source and <a href="http://github.com/soundcloud/waveformjs">hosted on Github</a>. This page provides all the documentation you'll need as well as a list of <a href="#examples">examples</a>. Waveform.js is available to use under the <a href="#">MIT software license</a>. It was written by <a href="https://twitter.com/intent/user?screen_name=johanneswagener">Johannes Wagener</a> and <a href="https://twitter.com/intent/user?screen_name=leemartin">Lee Martin</a>. You can report <strong>bugs</strong> and discuss <strong>features</strong> on the <a href="http://github.com/soundcloud/waveformjs/issues">Github issues page</a>.</p>
<a class='button' href='/waveform.js'>Download Latest Version (1.0.0)</a>
<!-- / Usage -->
<a name='usage'>
<h2>Usage</h2>
</a>
<p>Start by adding the <code>waveform.js</code> script to your page or app:</p>
<pre class='code'>&lt;script src=&quot;waveform.js&quot;&gt;&lt;/script&gt;</pre>
<p>Once added you can create new waveforms using the <code>Waveform</code> prototype:</p>
<pre class='code'>var waveform = new Waveform({&#x000A;  container: document.getElementById(&quot;test&quot;),&#x000A;  data: [1, 0.2, 0.5]&#x000A;});</pre>
<a name='options'></a>
<p>The following options can be passed, except for <code>container</code> all others are optional:</p>
<dl>
<dt>container</dt>
<dd>html element that will contain the new canvas element.</dd>
<dt>width</dt>
<dd>width in pixel, if not passed will be calculated from the container</dd>
<dt>height</dt>
<dd>height in pixel, if not passed will be calculated from the container</dd>
<dt>innerColor</dt>
<dd>color of the waveform. can be a hex triplet string, a canvas gradient or a function that returns one of these.</dd>
<dt>outerColor</dt>
<dd>color of the outer area. can be a hex triplet string or a canvas gradient.</dd>
<dt>interpolate</dt>
<dd>interpolated waveforms will be stretched to the full width, non interpolated will be drawn in one pixel lines per sample and cut off on the left end.</dd>
</dl>
<a name='functions'></a>
<h3>Waveform#update()</h3>
<p>With the <code>update</code> method the data can be updated and the waveform redrawn, it also accepts the <code>interpolate</code> option.</p>
<pre class='code'>waveform.update({&#x000A;  data: [0.5, 1.0, 0.5, 1.0]&#x000A;});</pre>
<h3>Waveform#dataFromSoundCloudTrack()</h3>
<p>The <code>dataFromSoundCloudTrack</code> method accepts a SoundCloud track object (containing the waveform_url) and will call the waveformjs.org endpoint to retrieve and set the data samples.</p>
<h3>Waveform#optionsForSyncedStream()</h3>
<p>The <code>optionsForSyncedStream</code> method returns an options object that can be passed to soundManager or the SoundCloud JS SDK <code>SC.stream</code> method. These options will automatically sync and redraw the waveform according to its stream loading and playing progress. The options will only include the whileplaying and whileloading option, all others can be overridden.</p>
<a name='endpoint'>
<h3>SoundCloud Waveform Endpoint</h3>
</a>
<p>The endpoint is located at <a href="http://waveformjs.org/w">http://waveformjs.org/w</a> and accepts a <code>url</code> parameter that is pointing to a SoundCloud waveform image URL (waveform_url in the track object). The response will be an array of floats between 0 and 1. JSONP is supported.</p>
<a name='examples'>
<h2>Examples</h2>
</a>
<a name='track'>
<h3>Hooking up a waveform to a SoundCloud track</h3>
</a>
<div class='example-waveform' id='example2'></div>
<p>
Using the <code>dataFromSoundCloudTrack</code> the data of the waveform will be pulled from the endpoint on waveform.js.org that converts the SoundCloud waveform image into the floats.
Additionally <code>optionsForSyncedStream</code> will prepare options for SC.stream that will sync up the loading and playing progress of the stream with the waveform.
<a href='javascript:window.exampleStream.togglePause(); false;'>Click here to test playback!</a>
</p>
<script class="example">// assumes that the SoundCloud JS SDK is loaded and initialized.

SC.get("/tracks/293", function(track){
  var waveform = new Waveform({
    container: document.getElementById("example2"),
    innerColor: "#333"
  });

  waveform.dataFromSoundCloudTrack(track);
  var streamOptions = waveform.optionsForSyncedStream();
  SC.stream(track.uri, streamOptions, function(stream){
    window.exampleStream = stream;
  });
});

</script>
<a name='fly'>
<h3>Drawing a waveform with a gradient on the fly</h3>
</a>
<div class='example-waveform' id='example4'></div>
<p>
When the <code>interpolate</code> option is false, each data sample will be drawn on one pixel.
Once the full width has been exceeded the older data will be cut off. This can be used to
draw waveforms when sounds are recorded with the SoundCloud Javascript SDK.
In addition this waveform is styled using a canvas gradient as <code>innerColor</code>.
</p>
<script class="example">var data = [];

var waveform = new Waveform({
  container: document.getElementById("example4"),
  interpolate: false
});
var ctx = waveform.context;

var gradient = ctx.createLinearGradient(0, 0, 0, waveform.height);
gradient.addColorStop(0.0, "#f60");
gradient.addColorStop(1.0, "#ff1b00");
waveform.innerColor = gradient;

var i=0;
setInterval(function(){
  data.push(Math.cos(i++/25) - 0.2 + Math.random()*0.3);
  waveform.update({
    data: data
  });
}, 50);

</script>
<a name='weird'>
<h3>Weird customized waveform with random colors</h3>
</a>
<div class='example-waveform' id='example1'></div>
<p>
In this example the data is set manually to just a few samples, which will be interpolated to the full width.
The <code>innerColor</code> is a function that gets called for each vertical line and will return a random color.
</p>
<script class="example">new Waveform({
  container: document.getElementById("example1"),
  innerColor: function(x, y){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
  },
  data: [0, 0.3, 1, 0.5, 1, 0.3, 0]
});
</script>
</section>
</body>
</html>
