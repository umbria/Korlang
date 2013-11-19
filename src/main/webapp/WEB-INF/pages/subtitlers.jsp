
<!DOCTYPE html>
<html>
  <head><script type="text/javascript">var NREUMQ=NREUMQ||[];NREUMQ.push(["mark","firstbyte",new Date().getTime()]);</script>
    <title>Segment Timer</title>
    <!-- <link href="http://3.viki.io/assets/favicon-805623f86d18c419f485869b12cb2478.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" /> -->
    <link href="/favicon/viki.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
<!--     <link href="http://4.viki.io/assets/subtitler-7c95770d6e3bd19918f58c737ed59ba8.css" media="all" rel="stylesheet" /> -->
    <link href="/css/subtitlers.css" media="all" rel="stylesheet" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="cMgVhtQL84KL8Vjp4t2LpTG7R+B+F8kVxYHzEVoTmiE=" name="csrf-token" />
  </head>
  <body>

  <!-- <a class="brand" href="http://www.viki.com" title="Viki Home"></a> -->
  <a class="brand" href="/" title="Viki Home"></a>
<!-- <a class="video-title affix-top" data-event-label="show-video" href="http://www.viki.com/videos/198359v-iu-sea-of-moonlight-feat-fiestar">Sea Of Moonlight (Feat. Fiestar)</a> -->
<a class="video-title affix-top" data-event-label="show-video" href="/198359v-iu-sea-of-moonlight-feat-fiestar">Sea Of Moonlight (Feat. Fiestar)</a>
<!-- <a class="close-editor" data-event-label="close-segment-timer" href="http://www.viki.com/videos/198359v-iu-sea-of-moonlight-feat-fiestar" title="Exit Editor"> -->
<a class="close-editor" data-event-label="close-segment-timer" href="/198359v-iu-sea-of-moonlight-feat-fiestar" title="Exit Editor">
  <i class="icon icon-x"></i>
</a>
<div class="wrapper-main">
  <div class="misc-actions pull-right">
    <div id="player-selection" class="misc-switch-player pull-left">
      <i class="icon-viki-play"></i>
    </div>
    <div class="misc-item misc-item-right pull-left">
      <div class="btn btn-inverse btn-small btn-group">
        More <i class="icon-btn-caret"></i>
      </div>
      <ul class="dropdown-menu hidden">
        <li><a data-event-label="show-bulk-translation" href="/bulk_translations/198359" target="_blank">Bulk Translation</a></li>
        <li><a data-event-label="show-volunteer-finder" href="/volunteer_finder" target="_blank">Volunteer Finder</a></li>
      </ul>
    </div>
  </div>

  <ul class="tab" data-tab-links="1">
    <li>
      <a href="/translations/198359?end_time=0&amp;start_time=0" data-event-label='show-subtitle-editor'>Subtitle Editor</a>
    </li>
    <li>
      <a href="javascript:void(0);" id="tool-button" class="active" data-event-label='show-segment-timer'>Segment Timer</a>
    </li>
    <li>
      <a id="disqus-button" href="javascript:void(0);" data-event-label='show-disqus'>Team Discussion</a>
    </li>
    <li>
      <a id="team-note-button" href="javascript:void(0)" data-event-label='show-team-note'>Team Notes</a>
    </li>
  </ul>

  <div class="tab-content">
    <div id="tool-tab" class="wrapper wrapper-tool">
      <div class="video_wrapper">
		<video id="subber_player" class="video-js vjs-default-skin" preload width="976" height="450" data-setup={&quot;key&quot;:&quot;#$8ff53c2409184340bb5&quot;,&quot;rtmp_info&quot;:{&quot;net_connection_url&quot;:&quot;rtmp://viki.fcod.llnwd.net/a7881/&quot;,&quot;url&quot;:&quot;mp4:e2/75844/75844_240p.mp4&quot;},&quot;type&quot;:&quot;rtmp&quot;,&quot;techOrder&quot;:[&quot;dailymotion&quot;,&quot;youtube&quot;,&quot;flash&quot;,&quot;html5&quot;],&quot;swf&quot;:&quot;/assets/flowplayer.swf&quot;,&quot;rtmpPluginSwf&quot;:&quot;/assets/flowplayer.rtmp-3.2.11.swf&quot;}>
		<source src="http://v.viki.io/75844/75844_240p.mp4?end=1384862340&amp;h=4cf36de50db0fdfdbc90cdbc59cada02"" type='video/mp4' />
		<source src="http://content.viki.com/75844/75844_240p.webm" type='video/webm' />
<!-- Thie data-setup is {"key":"#$8ff53c2409184340bb5","rtmp_info":{"net_connection_url":"rtmp://viki.fcod.llnwd.net/a7881/","url":"mp4:e2/75844/75844_240p.mp4"},"type":"rtmp","techOrder":["dailymotion","youtube","flash","html5"],"swf":"/assets/flowplayer.swf","rtmpPluginSwf":"/assets/flowplayer.rtmp-3.2.11.swf"} -->
        <!-- <video id="subber_player" class="video-js vjs-default-skin" preload width="976" height="450" data-setup={&quot;key&quot;:&quot;#$8ff53c2409184340bb5&quot;,&quot;rtmp_info&quot;:{&quot;net_connection_url&quot;:&quot;rtmp://viki.fcod.llnwd.net/a7881/&quot;,&quot;url&quot;:&quot;mp4:mp4/mov_bbb.mp4&quot;},&quot;type&quot;:&quot;rtmp&quot;,&quot;techOrder&quot;:[&quot;dailymotion&quot;,&quot;youtube&quot;,&quot;flash&quot;,&quot;html5&quot;],&quot;swf&quot;:&quot;/assets/flowplayer.swf&quot;,&quot;rtmpPluginSwf&quot;:&quot;/assets/flowplayer.rtmp-3.2.11.swf&quot;}> -->
        <!-- <source src="/mp4/mov_bbb.mp4?end=1384806540&amp;h=3a25f59d5b54d7d19a55808b1278552d" type='video/mp4' /> -->
<!--             <source src="/75844_240p.webm" type='video/webm' /> -->
        </video>
        <ul id="subtitles" data-language-code="en" ></ul>
      </div>

      <div class="videotime">
        <div class="full_bar">
          <span class="play_range"></span>
          <span class="current_knob tooltip-north">
            <span class="tip">
              Drag to navigate through video
            </span>
          </span>
        </div>
      </div>

      <div class="bottom_pane">
        <!-- <div id="timeframe" class="clear" data-waveform-url="http://x1.vikiassets.com/waveforms/5008a217078c7a12bfd734b2b80204d6ae9af298.json"> -->
        <div id="timeframe" class="clear" data-waveform-url="/waveforms/5008a217078c7a12bfd734b2b80204d6ae9af298.json">
          <span class="needle"></span>

          <div class="grayframe timescale">
            <span id="timescales" style="background-position: -0px 50%;"></span>

            <div id="timelines" class="timeline"></div>
            <div class="clearfix"></div>
          </div>
          <div class="middleframe">
            <div id="waveform"></div>
            <ul id="segments" data-url="/media_resources/198359/segments"
                data-start-time="0"
                >
              <li class="segment-disabled front"></li>
              <li class="segment-disabled rear"></li>
            </ul>
          </div>
          <div class="grayframe"></div>
          <div class="timeframe-spinner"><span class="spinner">Loading...</span></div>
        </div>
        <div class="control_toolbar clearfix">
          <ul class="control_actions play_actions pull-left">
            <li class="action_list">
              <a id="rewind" class="player_controller rewind_button" href="#"><i></i></a>
            </li>
            <li class="action_list">
              <a id="play_button" class="player_controller play_button" href="#"><i></i></a>
              <a id="pause_button" class="player_controller pause_button hide" href="#"><i></i></a>
            </li>
            <li class="action_list">
              <a id="fast_forward" class="player_controller fast_forward_button" href="#"><i></i></a>
            </li>
          </ul>
          <ul class="control_actions setting_actions pull-right">
	          <li class="action_list">
							<div class="action-select action-fps">
              	Quality
								<select id="mpp" name="mpp"><option value="42">High</option>
<option value="100">Medium</option>
<option value="250">Low</option></select>
							</div>
	          </li>
            <li class="action_list">
              <div class="action-select action-language">
                Select subtitle language
                <select id="language_code" name="language_code"><option value="ab">Abkhazian</option>
<option value="aa">Afar</option>
<option value="af">Afrikaans</option>
<option value="ak">Akan</option>
<option value="sq">Albanian</option>
<option value="al">Alemannic</option>
<option value="am">Amharic</option>
<option value="ag">Anglo-Saxon</option>
<option value="ar">Arabic</option>
<option value="an">Aragonese</option>
<option value="hy">Armenian</option>
<option value="ra">Aromanian</option>
<option value="as">Assamese</option>
<option value="at">Asturian</option>
<option value="av">Avar</option>
<option value="ay">Aymara</option>
<option value="az">Azeri</option>
<option value="bal">Balochi</option>
<option value="bm">Bambara</option>
<option value="ba">Bashkir</option>
<option value="eu">Basque</option>
<option value="be">Belarusian</option>
<option value="bn">Bengali</option>
<option value="bho">Bhojpuri</option>
<option value="bh">Bihari</option>
<option value="bi">Bislama</option>
<option value="bs">Bosnian</option>
<option value="br">Breton</option>
<option value="bg">Bulgarian</option>
<option value="my">Burmese</option>
<option value="ca">Catalan</option>
<option value="ceb">Cebuano/Binisaya</option>
<option value="ch">Chamorro</option>
<option value="ce">Cherokee</option>
<option value="nya">Chewa/Nyanja</option>
<option value="hne">Chhattisgarhi</option>
<option value="zh">Chinese(简体)</option>
<option value="zt">Chinese(繁體)</option>
<option value="ctg">Chittagonian</option>
<option value="kw">Cornish</option>
<option value="co">Corsican</option>
<option value="cr">Cree</option>
<option value="hr">Croatian</option>
<option value="cs">Czech</option>
<option value="dcc">Dakhini</option>
<option value="da">Danish</option>
<option value="dv">Divehi</option>
<option value="nl">Dutch</option>
<option value="dz">Dzongkha</option>
<option selected="selected" value="en">English</option>
<option value="eo">Esperanto</option>
<option value="et">Estonian</option>
<option value="fo">Faroese</option>
<option value="fj">Fijian</option>
<option value="fi">Finnish</option>
<option value="fr">French</option>
<option value="ful">Fula</option>
<option value="gl">Galician</option>
<option value="gan">Gan</option>
<option value="ka">Georgian</option>
<option value="de">German</option>
<option value="el">Greek</option>
<option value="kl">Greenlandic</option>
<option value="gn">Guarani</option>
<option value="gu">Gujarati</option>
<option value="hat">HaitianCreole</option>
<option value="hak">Hakka</option>
<option value="bgc">Haryanvi</option>
<option value="ha">Hausa</option>
<option value="he">Hebrew</option>
<option value="hi">Hindi</option>
<option value="hm">Hmong</option>
<option value="hu">Hungarian</option>
<option value="is">Icelandic</option>
<option value="io">Ido</option>
<option value="ibo">Igbo</option>
<option value="ilo">Ilokano</option>
<option value="id">Indonesian</option>
<option value="ia">Interlingua</option>
<option value="ie">Interlingue</option>
<option value="iu">Inuktitut</option>
<option value="ik">Inupiak</option>
<option value="ga">Irish</option>
<option value="it">Italian</option>
<option value="ja">Japanese</option>
<option value="jv">Javanese</option>
<option value="kn">Kannada</option>
<option value="mu">Karaoke</option>
<option value="ks">Kashmiri</option>
<option value="cb">Kashubian</option>
<option value="kk">Kazakh</option>
<option value="km">Khmer</option>
<option value="kin">Kinyarwanda</option>
<option value="ky">Kirghiz</option>
<option value="rn">Kirundi</option>
<option value="tm">Klingon</option>
<option value="kok">Konkani</option>
<option value="ko">Korean</option>
<option value="ku">Kurdish</option>
<option value="lo">Lao</option>
<option value="la">Latin</option>
<option value="lv">Latvian</option>
<option value="li">Limburgian</option>
<option value="ln">Lingala</option>
<option value="lt">Lithuanian</option>
<option value="jb">Lojban</option>
<option value="nd">LowSaxon</option>
<option value="lb">Luxembourgish</option>
<option value="mk">Macedonian</option>
<option value="mad">Madurese</option>
<option value="mai">Maithili</option>
<option value="mg">Malagasy</option>
<option value="ms">Malay</option>
<option value="ml">Malayalam</option>
<option value="mt">Maltese</option>
<option value="gv">Manx</option>
<option value="mi">Maori</option>
<option value="mr">Marathi</option>
<option value="mh">Marshallese</option>
<option value="mwr">Marwari</option>
<option value="mnp">MinBei</option>
<option value="cdo">MinDong</option>
<option value="zm">MinNan</option>
<option value="mo">Moldovan</option>
<option value="mn">Mongolian</option>
<option value="mos">Mossi</option>
<option value="nh">Nahuatl</option>
<option value="na">Nauruan</option>
<option value="ne">Nepali</option>
<option value="no">Norwegian(Bokmål)</option>
<option value="nn">Norwegian(Nynorsk)</option>
<option value="oc">Occitan</option>
<option value="or">Oriya</option>
<option value="om">Oromo</option>
<option value="pi">Pali</option>
<option value="ps">Pashto</option>
<option value="fa">Persian</option>
<option value="pl">Polish</option>
<option value="pt">Portuguese</option>
<option value="pa">Punjabi</option>
<option value="qu">Quechua</option>
<option value="rm">RaetoRomance</option>
<option value="ro">Romanian</option>
<option value="ru">Russian</option>
<option value="sm">Samoan</option>
<option value="sg">Sango</option>
<option value="sa">Sanskrit</option>
<option value="skr">Saraiki</option>
<option value="sc">Sardinian</option>
<option value="gd">ScottishGaelic</option>
<option value="sr">Serbian</option>
<option value="sh">Serbo-Croatian</option>
<option value="tn">Setswana</option>
<option value="sn">Shona</option>
<option value="sb">Sicilian</option>
<option value="se">SimpleEnglish</option>
<option value="sd">Sindhi</option>
<option value="si">Sinhalese</option>
<option value="sk">Slovak</option>
<option value="sl">Slovenian</option>
<option value="so">Somali</option>
<option value="st">SouthernSotho</option>
<option value="es">Spanish</option>
<option value="su">Sundanese</option>
<option value="sw">Swahili</option>
<option value="ss">Swati</option>
<option value="sv">Swedish</option>
<option value="syl">Sylheti</option>
<option value="tl">Tagalog</option>
<option value="tg">Tajik</option>
<option value="ta">Tamil</option>
<option value="tt">Tatar</option>
<option value="te">Telugu</option>
<option value="th">Thai</option>
<option value="bo">Tibetan</option>
<option value="ti">Tigrinya</option>
<option value="tp">TokPisin</option>
<option value="tq">Tokipona</option>
<option value="to">Tongan</option>
<option value="ts">Tsonga</option>
<option value="tr">Turkish</option>
<option value="tk">Turkmen</option>
<option value="tw">Twi</option>
<option value="udm">Udmurt</option>
<option value="uk">Ukrainian</option>
<option value="ur">Urdu</option>
<option value="ug">Uyghur</option>
<option value="uz">Uzbek</option>
<option value="vi">Vietnamese</option>
<option value="vo">Volapük</option>
<option value="wa">Walloon</option>
<option value="cy">Welsh</option>
<option value="fy">WestFrisian</option>
<option value="wo">Wolof</option>
<option value="xh">Xhosan</option>
<option value="han">Xiang</option>
<option value="yi">Yiddish</option>
<option value="yo">Yoruba</option>
<option value="za">Zhuang</option>
<option value="zom">Zomi</option>
<option value="zu">Zulu</option>
<option value="lol">lolspeak</option></select>
              </div>
            </li>
            <li class="action_list">
              <a href="#" id="setting_button" class="settings_controller settings_menu"><i></i></a>
            </li>
          </ul>
          <ul class="control_actions segment_actions">
            <li class="action_list">
              <a id="start-segment" class="segment_controller open_segment inactive" href="#"><i></i> Open new segment</a>
              <a id="end-segment" class="segment_controller close_segment hide" href="#"><i></i> Close segment</a>
            </li>
            <li class="action_list">
              <a id="save-changes" class="segment_controller save_segment inactive" href="#"><i></i> Save</a></li>
          </ul>

          <ul id="setting_menu" class="menu_dropdown settings_menu_dropdown hide">
            <li class="dropdown_list"> <a data-event-label="show-tutorial" href="#" id="intro">Tutorial</a> </li>
<!--             <li class="dropdown_list"> <a data-event-label="show-faq" href="http://support.viki.com/entries/21501235-Using-the-Segment-Timer" target="_blank">Frequently Asked Questions</a> </li> -->
            <li class="dropdown_list"> <a data-event-label="show-faq" href="http:///21501235-Using-the-Segment-Timer" target="_blank">Frequently Asked Questions</a> </li>
            <li class="dropdown_list"> <a data-event-label="show-shortcut" href="#" id="showkeyboard">Shortcuts</a> </li>
            <!-- <li class="dropdown_list"> <a data-event-label="show-feedback" href="http://support.viki.com/anonymous_requests/new" target="_blank">Feedback</a> </li> -->
            <li class="dropdown_list"> <a data-event-label="show-feedback" href="/new" target="_blank">Feedback</a> </li>
          </ul>

          <div id='tool-tip-container'></div>
        </div>
      </div>
    </div>
    <div id="disqus-tab" class="wrapper wrapper-tool wrapper-tool-bordered hidden">
      <div class="disqus-wrapper">
        <div id="disqus_thread">
        </div>
      </div>
    </div>
    <div id="team-note-tab" class="wrapper wrapper-tool wrapper-tool-bordered hidden">
      <div class="team-note-wrapper">
          <div class="alert alert-noresults">
    <i class="icon-emo-sad pull-left"></i>
    <div class="alert-body">No team notes for this channel yet.</div>
  </div>

      </div>
    </div>
  </div>
</div>

<div class="pagination-bottom">
  <div class="pagination align-left">
    <span class="pagination-label">Parts: </span>

        <a href='#' class='page-link selected'>1</a>
  </div>
</div>

<div id="message-box-container" class="message-box growl-box pull-right"></div>

<div id="overlay" class="modal-backdrop" style="display: none"></div>
<div id="user_info" data-visitor=false data-new-user=false></div>


    <script>
//<![CDATA[

    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-1670373-19', 'viki.com');
    ga('send', 'pageview');

//]]>
</script>
  <script>
//<![CDATA[

    window.locale = 'en';

//]]>
</script>  
  <div id="inactivity-popup"
  data-start-time=0 data-end-time=0
  class="modal popup" style="display: none;">
  <div class="modal-header">
    <a href="#" type="button" class="modal-close close" data-dismiss="modal" aria-hidden="true">
      <i class="icon icon-x"></i>
    </a>
    <h3>Error</h3>
  </div>
  <div class="modal-body">
    <p id='inactivity-message'>
      You have been inactive for 5 minutes. The video will be reserved for you to segment if you continue segmenting. Otherwise, it will be open to other segmenters
    </p>
  </div>
  <div class="modal-footer">
    <!-- <a class="btn btn-small" href="http://www.viki.com/videos/198359v-iu-sea-of-moonlight-feat-fiestar">Back to video player</a> -->
    <a class="btn btn-small" href="/198359v-iu-sea-of-moonlight-feat-fiestar">Back to video player</a>
  </div>
</div>

  <div id="unsupported-popup" class="modal popup" style="display: none;">
  <div class="modal-header">
    <a href="#" type="button" class="modal-close close" data-dismiss="modal" aria-hidden="true">
      <i class="icon icon-x"></i>
    </a>
    <h3>Alert</h3>
  </div>
  <div class="modal-body">
    <h4>The browser you are using is not recommended.</h4>
    <p><span class="translation_missing" title="translation missing: en.recommended_browser">Recommended Browser</span>
      <a href="https://www.google.com/intl/en/chrome/" title="Google Chrome" target="_blank">Chrome</a>,
      <a href="http://www.mozilla.org/en-US/firefox/new/" title="Firefox" target="blank">Firefox</a>,
      <a href="http://www.apple.com/safari/" title="Safari" target="_blank">Safari</a>, or
      <a href="http://www.microsoft.com/windows/internet-explorer/default.aspx" title="Internet Explorer" target="_blank">
        Internet Explorer 9.0+</a>.<br><br>
        If you choose to continue using your current browser, you may encounter problems.
    </p>
  </div>
  <div class="modal-footer">
    <!-- <a class="btn btn-small" href="http://www.viki.com/videos/198359v-iu-sea-of-moonlight-feat-fiestar">Back to video player</a> -->
    <a class="btn btn-small" href="/198359v-iu-sea-of-moonlight-feat-fiestar">Back to video player</a>
  </div>
</div>

  <div id="shortcuts-pop" class="modal popup shortcuts-pop two-col" style="display: none;">
  <div class="modal-header">
    <a href="#" type="button" class="modal-close close" data-dismiss="modal" aria-hidden="true">
      <i class="icon icon-x"></i>
    </a>
    <h3>Keyboard Shortcuts</h3>
  </div>
  <div class="modal-body">
    <table class="help-shortcuts-table first pull-left">
      <tbody>
      <tr>
        <td></td>
        <th class="row-heading first">Navigate</th>
      </tr>
      <tr>
        <th><span class="key">&larr;</span> / <span class="key">&rarr;</span></th>
        <td>Move back / forward by 1 sec</td>
      </tr>
      <tr>
        <th><span class="key">Shift + &larr;</span> / <span class="key">Shift + &rarr;</span></th>
        <td>Move back / forward by 0.1 sec</td>
      </tr>
      <tr>
        <th>
          <span class="key">P</span>
        </th>
        <td>Play or Pause</td>
      </tr>
      <tr>
        <th><span class="key">Tab</span></th>
        <td>Move to next segment</td>
      </tr>
      <tr>
        <th><span class="key">Shift + Tab</span></th>
        <td>Move to previous segment</td>
      </tr>
      <tr>
        <td></td>
        <th class="row-heading">Adjust Segment</th>
      </tr>
      <tr>
        <th>
          <span class="key">S</span>
        </th>
        <td>Select segment</td>
      </tr>
      <tr>
        <th>
          <span class="key">R</span>
        </th>
        <td>Replay selected segment</td>
      </tr>
      <tr>
        <th>
          <span class="key for-pc">Ctrl + &larr; / &rarr;</span>
          <span class="key for-mac">Cmd + &larr; / &rarr;</span>
        </th>
        <td>Move start time earlier/later by 0.1 sec</td>
      </tr>
      <tr>
        <th>
          <span class="key for-pc">Ctrl + &darr; / &uarr;</span>
          <span class="key for-mac">Cmd + &darr; / &uarr;</span>
        </th>

        <td>Move end time earlier/later by 0.1 sec</td>
      </tr>
      <tr>
        <th><span class="key">Del</span></th>
        <td>Delete selected segment</td>
      </tr>
      </tbody>
    </table>

    <table class="help-shortcuts-table first">
      <tbody>
      <tr>
        <td></td>
        <th class="row-heading first">Create Segments</th>
      </tr>
      <tr>
        <th><span class="key">Spacebar</span></th>
        <td>Open new segment or Close segment</td>
      </tr>
      <tr>
        <th><span class="key">Shift + Spacebar</span></th>
        <td>Close segment and open new segment at the same time</td>
      </tr>
      <tr>
        <td></td>
        <th class="row-heading">Subtitle</th>
      </tr>
      <tr>
        <th>
          <span class="key">&uarr;</span>
        </th>
        <td>Move to subtitling</td>
      </tr>
      <tr>
        <th>
          <span class="key">&darr;</span>
        </th>
        <td>Move from subtitling</td>
      </tr>
      <tr>
        <td></td>
        <th class="row-heading">Save</th>
      </tr>
      <tr>
        <th>
          <span class="key">Enter</span>
        </th>
        <td>Save</td>
      </tr>
      </tbody>
    </table>
  </div>
</div>

  <div id="intro-pop" class="modal popup intro-pop" style="display: none;">
  <div class="modal-header">
    <a href="#" type="button" class="modal-close close" data-dismiss="modal" aria-hidden="true">
      <i class="icon icon-x"></i>
    </a>
    <h3>Welcome to the Segment Timer</h3>
  </div>
  <div class="modal-body"></div>
  <div class="modal-footer">
    To learn more about subtitling and segmenting,
    <!-- <a href=" http://blog.viki.com/2013/05/welcome-to-viki-u-learn-how-to-subtitle.html" class="btn btn-primary btn-small close-btn">check out Viki U!</a> -->
    <a href="/welcome-to-viki-u-learn-how-to-subtitle.html" class="btn btn-primary btn-small close-btn">check out Viki U!</a>
  </div>
</div>


  <!-- <script crossorigin="anonymous" src="http://3.viki.io/assets/subtitler-4b0e5535127d8309ff4f32771193890a.js"></script> -->
  <script crossorigin="anonymous" src="/js/subtitlers.js"></script>
  <script type="text/javascript">
    $(document).ready(function() {
      SubtitlerPage.init();
      window.subtitler = new Subtitler();
      new AnalyticsHelper('segment-timer');
    });
  </script>
  <script>
//<![CDATA[

  var disqus_config = function () {
    this.page.remote_auth_s3 = 'eyJpZCI6NzI3NTg4MCwidXNlcm5hbWUiOiJ5b3VuZ3Nlb2tfa2ltIn0= 7313706c29a146dc9fc42db239629b87a9fd5da9 1384792143';
    this.page.api_key = 'CgISd7nCmsbPdplcs8OQHZLPwXNbbhvfxDqnImn6UAxqkJ91Y1QrGlfAnnny5pLW';
  }
  var disqus_identifier = 'subber_3180';
  var disqus_shortname = 'vikiorg';
  $('#disqus-button').click(function() {
    $.ajax({ type: 'get', url: "http://" + disqus_shortname + ".disqus.com/embed.js", dataType: 'script' });
  });

//]]>
</script>
  <!-- begin usabilla live embed code -->
<script type="text/javascript">/*{literal}<![CDATA[*/window.lightningjs||function(c){function g(b,d){d&&(d+=(/\?/.test(d)?"&":"?")+"lv=1");c[b]||function(){var i=window,h=document,j=b,g=h.location.protocol,l="load",k=0;(function(){function b(){a.P(l);a.w=1;c[j]("_load")}c[j]=function(){function m(){m.id=e;return c[j].apply(m,arguments)}var b,e=++k;b=this&&this!=i?this.id||0:0;(a.s=a.s||[]).push([e,b,arguments]);m.then=function(b,c,h){var d=a.fh[e]=a.fh[e]||[],j=a.eh[e]=a.eh[e]||[],f=a.ph[e]=a.ph[e]||[];b&&d.push(b);c&&j.push(c);h&&f.push(h);return m};return m};var a=c[j]._={};a.fh={};a.eh={};a.ph={};a.l=d?d.replace(/^\/\//,(g=="https:"?g:"http:")+"//"):d;a.p={0:+new Date};a.P=function(b){a.p[b]=new Date-a.p[0]};a.w&&b();i.addEventListener?i.addEventListener(l,b,!1):i.attachEvent("on"+l,b);var q=function(){function b(){return["<head></head><",c,' onload="var d=',n,";d.getElementsByTagName('head')[0].",d,"(d.",g,"('script')).",i,"='",a.l,"'\"></",c,">"].join("")}var c="body",e=h[c];if(!e)return setTimeout(q,100);a.P(1);var d="appendChild",g="createElement",i="src",k=h[g]("div"),l=k[d](h[g]("div")),f=h[g]("iframe"),n="document",p;k.style.display="none";e.insertBefore(k,e.firstChild).id=o+"-"+j;f.frameBorder="0";f.id=o+"-frame-"+j;/MSIE[ ]+6/.test(navigator.userAgent)&&(f[i]="javascript:false");f.allowTransparency="true";l[d](f);try{f.contentWindow[n].open()}catch(s){a.domain=h.domain,p="javascript:var d="+n+".open();d.domain='"+h.domain+"';",f[i]=p+"void(0);"}try{var r=f.contentWindow[n];r.write(b());r.close()}catch(t){f[i]=p+'d.write("'+b().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};a.l&&q()})()}();c[b].lv="1";return c[b]}var o="lightningjs",k=window[o]=g(o);k.require=g;k.modules=c}({});
window.usabilla_live = lightningjs.require("usabilla_live", "//w.usabilla.com/03b835297ef6.js");
/*]]>{/literal}*/</script>
<!-- end usabilla live embed code -->
  <script type="text/javascript" id="inspectletjs">
  window.__insp = window.__insp || [];
  __insp.push(['wid', 627009691]);
  (function() {
    function __ldinsp(){var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://www.inspectlet.com/inspectlet.js'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); }
    if (window.attachEvent){
      window.attachEvent('onload', __ldinsp);
    }else{
      window.addEventListener('load', __ldinsp, false);
    }
  })();
</script>


  <script type="text/javascript">if (typeof NREUMQ !== "undefined") { if (!NREUMQ.f) { NREUMQ.f=function() {
NREUMQ.push(["load",new Date().getTime()]);
var e=document.createElement("script");
e.type="text/javascript";
e.src=(("http:"===document.location.protocol)?"http:":"https:") + "//" +
  "js-agent.newrelic.com/nr-100.js";
document.body.appendChild(e);
if(NREUMQ.a)NREUMQ.a();
};
NREUMQ.a=window.onload;window.onload=NREUMQ.f;
};
NREUMQ.push(["nrfj","beacon-6.newrelic.com","606139402d","2066229","dl5ZR0FXXlgDS0pHEVdFXkdfXUBHSUoNWxM=",0,59,new Date().getTime(),"","","","",""]);}</script></body>
</html>