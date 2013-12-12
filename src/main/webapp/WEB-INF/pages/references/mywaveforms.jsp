<!DOCTYPE html>
<html>
<head>
<title>Waveform.js</title>


<script
	src='http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js'></script>
<script src='//platform.twitter.com/widgets.js'></script>
<script src='//connect.soundcloud.com/sdk.js'></script>
<script>
	//<![CDATA[
	SC.initialize({
		client_id : "YOUR_CLIENT_ID"
	});
	//]]>
</script>
<script src='/js/waveform.js'></script>
<script src='/js/application.js'></script>
<link
	href='http://cloud.webtype.com/css/c09e383b-9747-406d-8ff5-95ae1c9217e9.css'
	rel='stylesheet' type='text/css'>
<link href='/css/references/application.css' rel='stylesheet'
	type='text/css'>
</head>
<body>

	<!-- / CONTENT -->
	<section>
		
		
		
		<a name='examples'>
			<h2>Examples</h2>
		</a> <a name='track'>
			<h3>Hooking up a waveform to a SoundCloud track</h3>
		</a>
		<div class='example-waveform' id='example2'></div>
		<p>
			Using the
			<code>dataFromSoundCloudTrack</code>
			the data of the waveform will be pulled from the endpoint on
			waveform.js.org that converts the SoundCloud waveform image into the
			floats. Additionally
			<code>optionsForSyncedStream</code>
			will prepare options for SC.stream that will sync up the loading and
			playing progress of the stream with the waveform. <a
				href='javascript:window.exampleStream.togglePause(); false;'>Click
				here to test playback!</a>
		</p>
		<script class="example">
			// assumes that the SoundCloud JS SDK is loaded and initialized.

			SC.get("/tracks/293", function(track) {
				var waveform = new Waveform({
					container : document.getElementById("example2"),
					innerColor : "#333"
				});

				waveform.dataFromSoundCloudTrack(track);
				var streamOptions = waveform.optionsForSyncedStream();
				SC.stream(track.uri, streamOptions, function(stream) {
					window.exampleStream = stream;
				});
			});
		</script>
		
	</section>
</body>
</html>
