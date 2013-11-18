
<!DOCTYPE html>
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"  data-cast-api-enabled="true"> <!--<![endif]-->

<head>
  <title>Fan subbing, crowd-sourced subtitles and volunteer community of fans - Viki</title>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta http-equiv="Content-Language" content="en"/>
  <meta name="description" content="Join the premier Movie, TV show and Music Video fan community, creating subtitles for thousands of videos in hundreds of languages."/>
  <link rel='canonical' href='http://www.viki.com/community'/>
  <link rel='alternate' href='http://www.viki.mx/community' hreflang='es' /><link rel='alternate' href='http://www.viki.com/community' hreflang='en' /><link rel='alternate' href='http://www.viki.com/community' hreflang='x-default' />
  <meta property="fb:app_id" content="145730428798132"/>
  <!-- future proof IE browsers -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <!--[if lt IE 9]>

  <script type="text/javascript">
    document.createElement('header');
    document.createElement('nav');
    document.createElement('section');
    document.createElement('article');
    document.createElement('figure');
    document.createElement('aside');
    document.createElement('footer');
    document.createElement('hgroup');
  </script>
  <![endif]-->
  <link href="//0.viki.io/a/favicon-ccba0ff4bb7ea075ceb183324859a599.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
  <link href="//1.viki.io/a/application-d7e4dd648bc8ed67cf64f971b318b24c.css" media="all" rel="stylesheet" type="text/css" />

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script type="text/javascript">
    if (typeof jQuery === 'undefined') {
      document.write('<script src=\"//0.viki.io/a/jquery-7774e5317ed764b749bb337a0917164d.js\" type=\"text/javascript\"><\/script>');
    }
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-1670373-2']);
    _gaq.push(['_trackPageview']);
    _gaq.push(['_setCustomVar', 1, 'rails_action', 'community_landing_index']);

    (function () {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
    })();
  </script>
  <script>
    // New GA Universal Analytics tracking code
    (function (i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-1670373-18', 'viki.com');
    ga('send', 'pageview');
  </script>

  <script language="javascript" type="text/javascript">
  window.raynor = {};
  raynor.session = {};
  window.vikiDomain = "www.viki.com";
  window.vikiUriSSL = "https://www.viki.com"
  window.vikiGeoCode = "DE"
</script>

<script src="//0.viki.io/a/utility-0c2f623e30c1d6fea35e9fc15b9e3a72.js" type="text/javascript"></script>
<script type="text/javascript" language="javascript">
  (function () {
    function SessionManager() {
      this.initialized = false;
      this.info = { first_hit: false, id: null };

      this._expireIn = function (mins) {
        var date = new Date();
        date.setTime(date.getTime() + (mins * 60 * 1000));
        return date;
      }

      this.getInfo = function () {
        if (!this.initialized) {
          this.info.id = $.cookie('visit_session_id');
          if (this.info.id == null) {
            this.info.first_hit = true;
            this.info.id = raynor.utility.generateUuid();
          }
          raynor.utility.setCookie('visit_session_id', this.info.id, this._expireIn(2 * 60));
          this.initialized = true;
        }
        return this.info;
      }
    }

    var info = (new SessionManager()).getInfo();
    raynor.session.id = info.id;
    raynor.session.first_hit = info.first_hit;
  })();
</script>




  
  <script src="//cdn.optimizely.com/js/360160327.js"></script>
    <script src="//1.viki.io/a/flash_detect-b5e910c8164f108d541b9ac28966bf17.js" type="text/javascript"></script>
  <script type="text/javascript">
    if (!FlashDetect.installed) {
      document.write('<script src=\"//releases.flowplayer.org/5.4.3/commercial/flowplayer.min.js\" type=\"text/javascript\"><\/script>');
      document.write('<script src=\"//1.viki.io/a/player/analytics-1967d12ea3fcf2c7d1e0d8fef49d13ad.js\" type=\"text/javascript\"><\/script>');
      document.write('<link rel=\"stylesheet\" type=\"text/css\" href=\"//releases.flowplayer.org/5.4.3/skin/functional.css\">');
      document.write('<link href="//1.viki.io/a/player/html5-39e85657bca32dc34b6b8ceb86de589c.css" media="screen" rel="stylesheet" type="text/css" />')
    }
  </script>

</head>
<body class="theme-community">
  <div id="lang_suggest" class="alert alert-fix alert-fix-top hidden">
  <i class="icon-info-alt pull-left"></i>
  <div class="alert-body strong">
    Would you like to use viki.mx instead of viki.com?
    <div class="pull-right">
      <a href="#" class="btn btn-small js-close-langsuggest">Keep using viki.com</a>
      <a href="http://www.viki.mx" class="btn btn-small js-action-langswitch">Switch to viki.mx</a>
    </div>
  </div>
  <a href="#" class="close js-close-langsuggest" title="Close"><i class="icon-x-alt"></i></a>
</div>


  <nav id="menubar" class="menubar menubar-fixed">
  <div class="container">
      <div class="brand pull-left">
        <a href="/" class="icon-viki-logotype">
          <span>Viki - Global TV Powered by Fans</span>
        </a>
      </div>

    <div class="menus pull-left mll" data-menus="1">
      <div id="menu-tv" class="menu menu-collapsible menu-tv">
        <a href="/tv">TV <small class="new-badge-text">New</small></a>
        <div class="mega-menu">
          <ul class="submenu-nav" data-block-track="headerTvSideLinks">
            <li class="submenu-nav-list">
              <a href="/tv/browse" class="browse_all">Browse All</a>
            </li>
            <li class="submenu-nav-list">
              <a href="/tv/browse?sort=viewed" class="most_viewed">Most Viewed</a>
            </li>
            <li id="coming-soon-menu-tv" class="submenu-nav-list hidden">
              <a href="/coming_soon?type=tv" class="coming_soon">Coming Soon</a>
            </li>
            <li id="on-air-menu-tv" class="submenu-nav-list hidden">
              <a href="/on_air" class="on_air">On Air</a>
            </li>
            <li class="submenu-nav-list">
              <a href="/networks">Networks<small class="new-badge-text">New</small></a>
            </li>
          </ul>
          <div class="submenu-thumb" data-block-track="headerTvThumbnails">
            <a href="/tv?sort=latest" class="thumb-more pull-right more">More</a>
            <a href="/tv?sort=latest" class="thumb-heading new_in_tv">New in TV</a>
            <ul id="list-menu-tv" class="thumb-grid hidden"></ul>
            <div id="spinner-menu-tv" class="spinner-menu"><i class="form-spinner"></i></div>
          </div>
        </div>
      </div>

      <div id="menu-movies" class="menu menu-collapsible menu-movies">
        <a href="/movies">Movies</a>
        <div class="mega-menu">
          <ul class="submenu-nav" data-block-track="headerMoviesSideLinks">
            <li class="submenu-nav-list">
              <a href="/movies/browse" class="browse_all">Browse All</a>
            </li>
            <li class="submenu-nav-list">
              <a href="/movies/browse?sort=latest" class="most_viewed">Recently Added</a>
            </li>
            <li id="coming-soon-menu-movies" class="submenu-nav-list hidden">
              <a href="/coming_soon?type=movies" class="coming_soon">Coming Soon</a>
            </li>
          </ul>
          <div class="submenu-thumb" data-block-track="headerMoviesThumbnails">
            <a href="/movies?sort=viewed" class="thumb-more pull-right">More</a>
            <a href="/movies?sort=viewed" class="thumb-heading">Popular movies</a>
            <ul id="list-menu-movies" class="thumb-grid hidden"></ul>
            <div id="spinner-menu-movies" class="spinner-menu"><i class="form-spinner"></i></div>
          </div>
        </div>
      </div>

      <div id="menu-music" class="menu menu-collapsible menu-music">
        <a href="/music">Music</a>
        <div class="mega-menu">
          <ul class="submenu-nav" data-block-track="headerMusicSideLinks">
            <li class="submenu-nav-list">
              <a href="/music" class="browse_all">Browse All</a>
            </li>
            <li class="submenu-nav-list">
              <a href="/music?sort=viewed" class="most_viewed">Most Viewed</a>
            </li>
            <li id="coming-soon-menu-music" class="submenu-nav-list hidden">
              <a href="/coming_soon?type=artists" class="coming_soon">Coming Soon</a>
            </li>
          </ul>
          <div class="submenu-thumb" data-block-track="headerMusicThumbnails">
            <a href="/music?sort=latest" class="thumb-more pull-right">More</a>
            <a href="/music?sort=latest" class="thumb-heading">New in music</a>
            <ul id="list-menu-music" class="thumb-grid hidden"></ul>
            <div id="spinner-menu-music" class="spinner-menu"><i class="form-spinner"></i></div>
          </div>
        </div>
      </div>

      <div id="menu-news" class="menu menu-collapsible menu-news">
        <a href="/news">News</a>
        <div class="mega-menu">
          <ul class="submenu-nav" data-block-track="headerNewsSideLinks">
            <li class="submenu-nav-list">
              <a href="/news" class="browse_all">Browse All</a>
            </li>
            <li class="submenu-nav-list">
              <a href="/news?sort=viewed" class="most_viewed">Most Viewed</a>
            </li>
          </ul>
          <div class="submenu-thumb" data-block-track="headerNewsThumbnails">
            <a href="/news?sort=latest" class="thumb-more pull-right">More</a>
            <a href="/news?sort=latest" class="thumb-heading">Recent news</a>
            <ul id="list-menu-news" class="thumb-grid hidden"></ul>
            <div id="spinner-menu-news" class="spinner-menu"><i class="form-spinner"></i></div>
          </div>
        </div>
      </div>

      <div id="menu-explore" class="menu menu-collapsible menu-explore">
        <a href="/explore">Explore</a>
        <div class="mega-menu" data-block-track="headerExplore">
          <div class="submenu-col first-col">
            <div class="explore-heading movies-genres"><a href="/genres">TV &amp; Movie Genres</a></div>
            <ul class="explore-list">
                <li class="explore-item movies-genres">
                  <a href="/genres/korean-drama">Korean Drama</a>
                </li>
                <li class="explore-item movies-genres">
                  <a href="/genres/anime">Anime</a>
                </li>
                <li class="explore-item movies-genres">
                  <a href="/genres/cartoons">Cartoons</a>
                </li>
                <li class="explore-item movies-genres">
                  <a href="/genres/romance">Romance</a>
                </li>
                <li class="explore-item movies-genres">
                  <a href="/genres/comedy">Comedy</a>
                </li>
                <li class="explore-item movies-genres">
                  <a href="/genres/drama">Drama</a>
                </li>
                <li class="explore-item movies-genres">
                  <a href="/genres/telenovelas">Telenovelas</a>
                </li>
              <li class="explore-item">
                <a href="/genres" class="explore-more movies-genres">More</a>
              </li>
            </ul>
          </div>
          <div class="submenu-col">
            <div class="explore-heading music-genres"><a href="/music_genres">Music Genres</a></div>
            <ul class="explore-list">
                <li class="explore-item music-genres">
                  <a href="/music_genres/k-pop">K-Pop</a>
                </li>
                <li class="explore-item music-genres">
                  <a href="/music_genres/ballad">Ballad</a>
                </li>
                <li class="explore-item music-genres">
                  <a href="/music_genres/dance">Dance</a>
                </li>
                <li class="explore-item music-genres">
                  <a href="/music_genres/pop">Pop</a>
                </li>
                <li class="explore-item music-genres">
                  <a href="/music_genres/r-b">R&amp;B</a>
                </li>
                <li class="explore-item music-genres">
                  <a href="/music_genres/hip-hop-rap">Hip Hop/Rap</a>
                </li>
                <li class="explore-item music-genres">
                  <a href="/music_genres/original-soundtrack">Original Soundtrack</a>
                </li>
              <li class="explore-item">
                <a href="/music_genres" class="explore-more music-genres">More</a>
              </li>
            </ul>
          </div>
          <div class="submenu-col">
            <div class="explore-heading artists"><a href="/artists">Popular Artists</a></div>
            <ul id="list-menu-explore" class="explore-list"></ul>
            <div id="spinner-menu-explore" class="spinner-menu"><i class="form-spinner"></i></div>
          </div>
        </div>
      </div>
      <div class="menu menu-collapsible menu-community">
        <a href="/community">Community</a>
        <ul class="reg-menu">
          <li class="reg-menu-item">
            <a href="http://discussions.viki.com">Discussions
              </a>
          </li>
          <li class="reg-menu-item">
            <a href="http://blog.viki.com/search/label/Viki%20U">Viki U
            </a>
          </li>
          <li class="reg-menu-item">
            <a href="http://blog.viki.com/search/label/Community%20Stories">Community Stories
            </a>
          </li>
        </ul>
      </div>
      <div class="menu menu-collapsible menu-vikipass">
        <a href="https://www.viki.com/pass?origin=header" class="hidden" data-viewable="non-ps">Viki Pass</a>
      </div>
    </div>

    <div id="header-actions" class="hidden">
      <div id="user-dash" class="menus-on pull-right hidden">
        <div class="menu menu-activity">
          <a href="/inbox" class="mail-inbox"><span class="tag danger mail-count" id="mail-count"></span><i id="mail-icon" class="icon-mail hidden"></i></a>
        </div>
        <div class="menu menu-profile">
          <a href="#">
            <img class="thumbnail-avatar" alt="regular thumbnail avatar" src="//1.viki.io/a/ph/avatar_regular-cdc2bd2e0595b0a3f90ec80de219c279.png" height="30" width="30">
            <i class="icon-caret-down"></i>
          </a>
          <ul class="reg-menu">
            <li class="reg-menu-item">
              <a href="#" rel="your-profile">Your Profile</a>
            </li>
            <li class="reg-menu-item">
              <a href="#" rel="your-favs">Your Favorites</a>
            </li>
            <li class="reg-menu-item">
              <a href="#" rel="your-projects">Your Projects</a>
            </li>
            <li class="reg-menu-item reg-menu-divider">
              <a href="https://www.viki.com/settings">Edit Profile</a>
            </li>
            <li class="reg-menu-item">
              <a id="acc_settings" href="https://www.viki.com/settings#account-settings">Account Settings</a>
            </li>
            <li class="reg-menu-item">
              <a href="/sign_out" id="logout_button">Log Out</a>
            </li>
            <li class="reg-menu-item reg-menu-divider">
              <a href="/zendesk/login" title="Help Center">Help Center</a>
            </li>
          </ul>
        </div>
      </div>

      <div id="signup" class="menus pull-right hidden">
        <div class="menu mls">
          <a href="#" class="btn-facebook btn-small" data-fb-login="1">
            <i class="icon-facebook-square"></i> Login Now
          </a>
        </div>
        <div class="menu mls">
          <a href="/sign_in" class="btn btn-login btn-small">
            <i class="icon-user"></i>
          </a>
        </div>
      </div>

      <div class="menus pull-right">
        <div class="menu menu-search search-element">
          <form accept-charset="UTF-8" action="/search" data-search-form="1" id="search_form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
            <fieldset class="search-wrap">
              <input autocomplete="off" class="search-input" data-search-field="1" id="q" name="q" placeholder="Search" type="text" />
              <a href="#" data-search-btn="1" class="icon-search"></a>
              <i id="search-spinner" class="form-spinner hidden"></i>
            </fieldset>
</form>          <ul class="search-results hidden" data-search-result="1"></ul>
        </div>
      </div>
    </div>
  </div>
</nav>

  <div class="page-wrapper">
    <div class="page-body page-body-scrollable">
      <div class="page-container container">
        <div id="flash_messages"></div>


        






<header class="page-header pbm">
  <h1>
    <a href="/community">
      Welcome to the Viki community<span id='community_username' ></span>!
    </a>
  </h1>

  <p class="summary">
    The videos you see on our site are subtitled by a volunteer community of fans like you. <a href="http://bit.ly/VikiU">Join the fun!</a>
  </p>
</header>
<div class="row">
  <div class="unit size15">
    <div class="watch mbl">
      <div id="viki-player" class="watch-inner">
        <div class="watch-inner" id="55753f5079b84d5b64882db8b9b49672"></div><script type="text/javascript">url = FlashDetect.installed ? "/video_esi/1010376v?autoplay=false&autostart=false" : "/player5_fragment/1010376v?autoplay=false&autostart=false";
$.ajax( {
  type: "GET",
  async: false,
  url: url,
  dataType: "html",
  success: function(html) { $("#55753f5079b84d5b64882db8b9b49672").html(html) }
} );
</script>
      </div>
    </div>

    <div class="bts ptl">
      <a href="http://discussions.viki.com">
        <img alt="Viki Discussions" height="425" src="//1.viki.io/a/static/community/discussions_button-c63cf3e6bbe18310346c59da3f4277c3.png" width="583" />
      </a>
    </div>

    <div class="iframe-twitter-timeline bts ptx mtx">
      <a class="twitter-timeline" href="https://twitter.com/Viki" data-widget-id="307038610442555392">Tweets by @Viki</a>
    </div>
  </div>

  <div class="unit size9">
    <aside class="mlm">
      <div class="mod mod-well mod-well-info align-center hidden" data-viewable="non-logged-in">
        <h3 class="delta otro mtn">Ready for some serious fun?</h3>
        <div class="modal-action">
          <a href="javascript:void(0)" class="btn-facebook btn-block btn-large track-ga-event" data-fb-login="1" data-category="modalRegister" data-action="facebook">
            <i class="icon-facebook-square"></i> Login with Facebook
          </a>

          <p class="mbn">You can also
            <a href="/sign_up" title="Sign Up" class="lowercase track-ga-event" data-category="modalRegister" data-action="sign_up">
              Sign Up
            </a> with your email address</p>
        </div>
      </div>
      <div class="mod alert alert-info pam hidden" data-viewable="logged-in" id="getting-started">
        <p class="f-delta strong mtn">Tips to get you started:</p>
        <ul>
          <li><a href='/settings'>Complete your profile</a>. It's more social. :)</li>
          <li><a href='http://blog.viki.com/2013/05/welcome-to-viki-u-learn-how-to-subtitle.html'>Learn how</a> to subtitle, segment and more.</li>
          <li>Questions? Check out the <a href='/zendesk/login' title='Help Center'>Help Center</a>.</li>
        </ul>
        <a href="#" class="close" title="Close"><i class="icon-x-alt"></i></a>
      </div>
      <div class="mod" id='top25'>
        <div class="mod-hd">
          <h3>Top 25 Volunteers This Week
            <i class="icon-info-alt icon-small tooltip-east subtle">
              <span class="tip tip-medium tip-left">Congratulations to the community members who contributed the most subtitles and segments this week!</span>
            </i>
          </h3>
        </div>
        <form accept-charset="UTF-8" action="/community" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
          <fieldset class="form-filterby bts man">
              <div class="select-wrapper">
                <select id="top25" name="top25" onchange="this.form.submit();"><option value="">Subtitlers</option>
<option value="segments">Segmenters</option></select>
              </div>
              <div class="select-wrapper">
                <select class="mlm" id="language" name="language" onchange="this.form.submit();"><option value="">All languages</option><option value="Popular" disabled="disabled">Popular</option>
<option value="en">English</option>
<option value="fr">French</option>
<option value="es">Spanish</option>
<option value="tr">Turkish</option>
<option value="ro">Romanian</option>
<option value="ar">Arabic</option>
<option value="th">Thai</option>
<option value="id">Indonesian</option>
<option value="de">German</option>
<option value="it">Italian</option>
<option value="vi">Vietnamese</option>
<option value="tl">Tagalog</option>
<option value="ja">Japanese</option>
<option value="el">Greek</option>
<option value="pl">Polish</option>
<option value="Other" disabled="disabled">Other</option>
<option value="ab">Abkhazian</option>
<option value="aa">Afar</option>
<option value="af">Afrikaans</option>
<option value="ak">Akan</option>
<option value="sq">Albanian</option>
<option value="al">Alemannic</option>
<option value="am">Amharic</option>
<option value="ag">Anglo-Saxon</option>
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
<option value="eo">Esperanto</option>
<option value="et">Estonian</option>
<option value="fo">Faroese</option>
<option value="fj">Fijian</option>
<option value="fi">Finnish</option>
<option value="ful">Fula</option>
<option value="gl">Galician</option>
<option value="gan">Gan</option>
<option value="ka">Georgian</option>
<option value="kl">Greenlandic</option>
<option value="gn">Guarani</option>
<option value="gu">Gujarati</option>
<option value="hat">Haitian Creole</option>
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
<option value="ia">Interlingua</option>
<option value="ie">Interlingue</option>
<option value="iu">Inuktitut</option>
<option value="ik">Inupiak</option>
<option value="ga">Irish</option>
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
<option value="nd">Low Saxon</option>
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
<option value="mnp">Min Bei</option>
<option value="cdo">Min Dong</option>
<option value="zm">Min Nan</option>
<option value="mo">Moldovan</option>
<option value="mn">Mongolian</option>
<option value="mos">Mossi</option>
<option value="nh">Nahuatl</option>
<option value="na">Nauruan</option>
<option value="ne">Nepali</option>
<option value="no">Norwegian (Bokmål)</option>
<option value="nn">Norwegian (Nynorsk)</option>
<option value="oc">Occitan</option>
<option value="or">Oriya</option>
<option value="om">Oromo</option>
<option value="pi">Pali</option>
<option value="ps">Pashto</option>
<option value="fa">Persian</option>
<option value="pt">Portuguese</option>
<option value="pa">Punjabi</option>
<option value="qu">Quechua</option>
<option value="rm">Raeto Romance</option>
<option value="ru">Russian</option>
<option value="sm">Samoan</option>
<option value="sg">Sango</option>
<option value="sa">Sanskrit</option>
<option value="skr">Saraiki</option>
<option value="sc">Sardinian</option>
<option value="gd">Scottish Gaelic</option>
<option value="sr">Serbian</option>
<option value="sh">Serbo-Croatian</option>
<option value="tn">Setswana</option>
<option value="sn">Shona</option>
<option value="sb">Sicilian</option>
<option value="se">Simple English</option>
<option value="sd">Sindhi</option>
<option value="si">Sinhalese</option>
<option value="sk">Slovak</option>
<option value="sl">Slovenian</option>
<option value="so">Somali</option>
<option value="st">Southern Sotho</option>
<option value="su">Sundanese</option>
<option value="sw">Swahili</option>
<option value="ss">Swati</option>
<option value="sv">Swedish</option>
<option value="syl">Sylheti</option>
<option value="tg">Tajik</option>
<option value="ta">Tamil</option>
<option value="tt">Tatar</option>
<option value="te">Telugu</option>
<option value="bo">Tibetan</option>
<option value="ti">Tigrinya</option>
<option value="tp">Tok Pisin</option>
<option value="tq">Tokipona</option>
<option value="to">Tongan</option>
<option value="ts">Tsonga</option>
<option value="tk">Turkmen</option>
<option value="tw">Twi</option>
<option value="udm">Udmurt</option>
<option value="uk">Ukrainian</option>
<option value="ur">Urdu</option>
<option value="ug">Uyghur</option>
<option value="uz">Uzbek</option>
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
          </fieldset>
</form>          <div class="slides-scrollbar">
            <div class="slides-vertical">
              <div class="slides-wrapper slides-wrapper-filter">
                <ol class="nav-numbered-list nav-numbered-list-right">
                    <li>
                      <a href="/users/edvagab" class="media">
                        <img alt="24e0c6ce8b" class="thumbnail-avatar pull-left" height="30" src="http://0.viki.io/u/379812u/24e0c6ce8b.jpg" width="30" />
                        <div class="media-body">
                          edvagab
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/Cara_liisu" class="media">
                        <img alt="89884f4c5f" class="thumbnail-avatar pull-left" height="30" src="http://1.viki.io/u/7248002u/89884f4c5f.jpg" width="30" />
                        <div class="media-body">
                          Cara_liisu
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/eszter_molnar" class="media">
                        <img alt="Picture?size=square" class="thumbnail-avatar pull-left" height="30" src="http://graph.facebook.com/100001761336106/picture?size=square" width="30" />
                        <div class="media-body">
                          eszter_molnar
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/clarasant" class="media">
                        <img alt="Picture?size=square" class="thumbnail-avatar pull-left" height="30" src="http://graph.facebook.com/100000158915652/picture?size=square" width="30" />
                        <div class="media-body">
                          clarasant
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/rosangela_perini__2" class="media">
                        <img alt="73ef435254" class="thumbnail-avatar pull-left" height="30" src="http://0.viki.io/u/5444144u/73ef435254.jpg" width="30" />
                        <div class="media-body">
                          rosangela_perini__2
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/jurgita_pielikyte" class="media">
                        <img alt="Picture?size=square" class="thumbnail-avatar pull-left" height="30" src="http://graph.facebook.com/100000850161810/picture?size=square" width="30" />
                        <div class="media-body">
                          jurgita_pielikyte
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/luxxia" class="media">
                        <img alt="E38fa04f63" class="thumbnail-avatar pull-left" height="30" src="http://0.viki.io/u/5836671u/e38fa04f63.jpg" width="30" />
                        <div class="media-body">
                          luxxia
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/kiaza" class="media">
                        <img alt="Picture?size=square" class="thumbnail-avatar pull-left" height="30" src="http://graph.facebook.com/100003977860593/picture?size=square" width="30" />
                        <div class="media-body">
                          kiaza
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/carmen_aparicio_garc" class="media">
                        <img alt="Picture?size=square" class="thumbnail-avatar pull-left" height="30" src="http://graph.facebook.com/100001943824514/picture?size=square" width="30" />
                        <div class="media-body">
                          carmen_aparicio_garc
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/mariana123tudo" class="media">
                        <img alt="Picture?size=square" class="thumbnail-avatar pull-left" height="30" src="http://graph.facebook.com/100003133792866/picture?size=square" width="30" />
                        <div class="media-body">
                          mariana123tudo
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/vesna0" class="media">
                        <img alt="Avatar_profile" class="thumbnail-avatar pull-left" height="30" src="http://1.viki.io/a/ph/avatar_profile-acc6c5a5a9d35bd7d292dfd776cfec76.png" width="30" />
                        <div class="media-body">
                          vesna0
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/diana_elena_2" class="media">
                        <img alt="6eabf64bda" class="thumbnail-avatar pull-left" height="30" src="http://1.viki.io/u/1765397u/6eabf64bda.jpg" width="30" />
                        <div class="media-body">
                          diana_elena_2
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/BeckyK" class="media">
                        <img alt="98cd4f4fcd" class="thumbnail-avatar pull-left" height="30" src="http://0.viki.io/u/591253u/98cd4f4fcd.jpg" width="30" />
                        <div class="media-body">
                          BeckyK
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/Agatha" class="media">
                        <img alt="918156b812" class="thumbnail-avatar pull-left" height="30" src="http://0.viki.io/u/37824u/918156b812.jpg" width="30" />
                        <div class="media-body">
                          Agatha
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/roxanne_ss" class="media">
                        <img alt="18c7054ca6" class="thumbnail-avatar pull-left" height="30" src="http://1.viki.io/u/546702u/18c7054ca6.jpg" width="30" />
                        <div class="media-body">
                          roxanne_ss
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/Pappu" class="media">
                        <img alt="Tumblr_ltj3dbvxrp1qgrfdpo5_500" class="thumbnail-avatar pull-left" height="30" src="http://1.viki.io/u/a76/433/add/tumblr_ltj3dbVxrp1qgrfdpo5_500.jpg" width="30" />
                        <div class="media-body">
                          Pappu
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/nanqorwhek" class="media">
                        <img alt="6c51a12e88" class="thumbnail-avatar pull-left" height="30" src="http://0.viki.io/u/262329u/6c51a12e88.jpg" width="30" />
                        <div class="media-body">
                          nanqorwhek
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/Pelicancharm" class="media">
                        <img alt="Picture?size=square" class="thumbnail-avatar pull-left" height="30" src="http://graph.facebook.com/100006265564206/picture?size=square" width="30" />
                        <div class="media-body">
                          Pelicancharm
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/tigre_bianca" class="media">
                        <img alt="42e4f1f0c2" class="thumbnail-avatar pull-left" height="30" src="http://1.viki.io/u/7412144u/42e4f1f0c2.jpg" width="30" />
                        <div class="media-body">
                          tigre_bianca
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/guilitoy" class="media">
                        <img alt="C131aa2187" class="thumbnail-avatar pull-left" height="30" src="http://1.viki.io/u/181667u/c131aa2187.jpg" width="30" />
                        <div class="media-body">
                          guilitoy
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/stefka_vassileva" class="media">
                        <img alt="Picture?size=square" class="thumbnail-avatar pull-left" height="30" src="http://graph.facebook.com/1411907719/picture?size=square" width="30" />
                        <div class="media-body">
                          stefka_vassileva
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/mya_o_g" class="media">
                        <img alt="Aad072b67c" class="thumbnail-avatar pull-left" height="30" src="http://1.viki.io/u/7090498u/aad072b67c.gif" width="30" />
                        <div class="media-body">
                          mya_o_g
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/Serenite78" class="media">
                        <img alt="Picture?size=square" class="thumbnail-avatar pull-left" height="30" src="http://graph.facebook.com/100002190908970/picture?size=square" width="30" />
                        <div class="media-body">
                          Serenite78
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/hanna_tzuberi" class="media">
                        <img alt="Avatar_profile" class="thumbnail-avatar pull-left" height="30" src="http://1.viki.io/a/ph/avatar_profile-acc6c5a5a9d35bd7d292dfd776cfec76.png" width="30" />
                        <div class="media-body">
                          hanna_tzuberi
                        </div>
</a>                    </li>
                    <li>
                      <a href="/users/mille_holm" class="media">
                        <img alt="Avatar_profile" class="thumbnail-avatar pull-left" height="30" src="http://1.viki.io/a/ph/avatar_profile-acc6c5a5a9d35bd7d292dfd776cfec76.png" width="30" />
                        <div class="media-body">
                          mille_holm
                        </div>
</a>                    </li>
                </ol>
              </div>
            </div>
          </div>
      </div>
      <div class="mod hidden" data-viewable="logged-in">
        <div class="mod-hd">
          <h3 class="nekto">Submit a Channel</h3>
        </div>
        <div class="mod-bd">
          <p class="mtn">All videos are located in <q>Channels,</q> which are often created and managed by community members. If you'd like to create a Channel for a show, movie or artist that you don't see on Viki, you can start here.</p>
          <a href="#" class="btn btn-secondary mrs" data-modal="data-modal-channel-intro">Start Submission</a>
          


        </div>
      </div>
      <div class="mod">
        <a href="http://blog.viki.com/search/label/Community%20Stories">
          <img alt="Viki Community Stories" height="175" src="//0.viki.io/a/static/community/postcards_community_stories-c8c0f3717324463cc35bfd6e46dd4429.png" width="340" />
        </a>
      </div>
      <div class="mod">
        <div class="mod-hd">
          <h3 class="nekto">Blog Headlines</h3>
        </div>
        <div class="mod-bd" id="blog-feed"></div>
        <div class="mod-ft">
          <a href="http://blog.viki.com" class="mod-action" target="_blank">More from Viki Blog</a>
        </div>
      </div>
    </aside>
  </div>
</div>

<script type="text/javascript">
  $(function() {
    var fileInput = $('.form-file');
    var maxSize = fileInput.data('max-size');

    fileInput.parents('form').submit(function(e){
      var input = fileInput.get(0);

      if (input.files) {
        if (input.files.length) {
          var fileSize = input.files[0].size;
          if (fileSize > maxSize) {
            alert('The image is too large. Please try again with an image that is smaller than 400 KB file size.');
            return false;
          }
        } else {
          // Fallback for HTML5 form validation
          alert("Please choose an image.");
          return false;
        }
      }
    });
  });
</script>

      </div>
    </div>
  </div>
  <footer class="page-footer">
  <div class="container">
    <div class="social-share pull-left">
      <div class="item fb-item mln">
        <div class="fb-like" data-href="http://facebook.com/viki" data-show-faces="false" data-send="false" data-layout="button_count"></div>

      </div>
      <div class="item">
        <a href="http://www.facebook.com/viki" class="social-facebook" title="Follow Viki on Facebook" target="_blank">
          <i class="icon-facebook"></i>
        </a>
      </div>
      <div class="item">
        <a href="http://twitter.com/Viki" class="social-twitter" title="Follow Viki on Twitter" target="_blank">
          <i class="icon-twitter"></i>
        </a>
      </div>
      <div class="item">
        <a href="https://plus.google.com/116835588807092168489/posts" class="social-google" rel="publisher" title="Follow Viki on Google Plus" target="_blank">
          <i class="icon-gplus"></i>
        </a>
      </div>
      <div class="item">
        <a href="http://www.pinterest.com/viki/" class="social-pinterest" title="Follow Viki on Pinterest" target="_blank">
          <i class="icon-pinterest-2"></i>
        </a>
      </div>
    </div>
    <ul class="nav-horizontal nav-show-bot pull-right">
      <li><a href="/apps" title="Viki Apps">Viki Apps</a></li>
      <li><a href="http://dev.viki.com" title="Developers">Developers</a></li>
      <li><a href="/zendesk/login" title="Help Center">Help Center</a></li>
      <li><a href="/press" title="Press">Press</a></li>
      <li><a href="/partners" title="Partners">Partners</a></li>
      <li><a href="/jobs" title="Jobs">Jobs</a></li>
      <li><a href="/networks" title="Networks">Networks</a><small class="new-badge-text">New</small></li>
      <li><a href="http://blog.viki.com" title="Blog">Blog</a></li>
      <li><a href="/about" title="About Us">About Us</a></li>
      <li><a href="https://www.viki.com/pass?origin=footer" class="hidden" data-viewable="non-ps">Viki Pass</a></li>
    </ul>
  </div>
</footer>

  <div class="page-colophon">
  <div class="container">
    <div class="pull-left">
      © 2013 <a href="/" class="muted">Viki Inc</a>. All rights reserved.
    </div>
    <div class="colophon-links mll pull-left">
      <a href="/sitemap" class="muted" title="Sitemap">Sitemap</a>
      <a href="/terms_of_use" class="muted" title="Terms of Use">Terms of Use</a>
      <a href="/privacy" class="muted" title="Privacy Policy">Privacy Policy</a>
      <a href="/copyright" class="muted" title="Intellectual Property Policy">Intellectual Property Policy</a>
    </div>
    <div class="colophon-links pull-right">
      <i class="icon-globe icon-small"></i>
      <span class="muted">Languages:</span>
      <a href="/community?locale=en" class="first-child muted" rel="nofollow" title="English">
        <i class="img-flag-us"></i> English
</a>      <a href="/community?locale=es" class="muted" rel="nofollow" title="Español">
        <i class="img-flag-es"></i> Español
</a>    </div>
  </div>
</div>



  

  <form accept-charset="UTF-8" action="/auth_facebook" id="loginFbForm" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input id="facebook_token" name="facebook_token" type="hidden" />
</form>
  <div id="modal-backdrop" class="invisible"></div>
    <div id="data-modal-channel-intro" class="modal invisible">
    <div class="modal-header">
      <h3>What is a Channel and why submit one?</h3>
      <a href="#" class="modal-close" data-modal-action="close" title="Close"><i class="icon-x"></i></a>
    </div>
    <div class="modal-body">
      <i class="icon-info-alt f-alpha mrm pull-left"></i>
      <div class="alert-body">
        <p class="mtn">All videos on Viki are located within <q>Channels,</q> which are created and managed by community members like you! And it's the place to go to watch TV shows, movies, music videos and news.<br><br> Make sure submitting a Channel is what you want to do. If you're looking to suggest or request a title, <a href='http://support.viki.com/tickets/new' target='_blank'>send us a message</a> through the Help Center!<br><br> All submitted Channels will be reviewed in an approval process. If your Channel is approved, you will automatically become the <a href='http://viki.zendesk.com/entries/20808138-what-is-a-channel-manager-and-what-do-they-do' target='_blank'>Channel Manager</a>, so make sure you're ready for the responsibility!</p>
        <p class="strong">Your Channel is more likely to be approved if:</p>
        <ul><li>the title is not currently, or was not recently in theaters,</li><li>the Channel is for content produced with professional production quality,</li><li>and you searched for the Channel on Viki, to check if it already exists.</li></ul>
      </div>
    </div>
    <div class="modal-footer align-right">
      <a href="#" class="btn btn-primary" data-modal-action="close" data-modal="data-modal-channel-create">Got it, thanks!</a>
    </div>
  </div>
  <div id="data-modal-channel-create" class="modal invisible">
    <div class="modal-header">
      <h3>Submit a Channel</h3>
      <a href="#" class="modal-close" data-modal-action="close" data-submit-container-close="1" title="Close">
        <i class="icon-x"></i>
      </a>
    </div>
    <div class="modal-body">
      <form accept-charset="UTF-8" action="/community#data-modal-channel-create" enctype="multipart/form-data" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
        <fieldset class="row">
          <div class="unit size6">
            <label for="container[origin_country]">
              Original Country:
              <span class="tooltip-west">
                <i class="icon-info-alt icon-small subtle"></i>
                <span class="tip tip-left tip-medium">The country of origin of the content in this Channel. If the content comes from different countries, please select Various Countries.</span>
              </span>
            </label>
            <select class="size-block" id="container_origin_country" name="container[origin_country]" required="required"><option value="">Please select</option><option value="Popular" disabled="disabled">Popular</option>
<option value="kr">Korea</option>
<option value="jp">Japan</option>
<option value="ph">Philippines</option>
<option value="tw">Taiwan</option>
<option value="th">Thailand</option>
<option value="tr">Turkey</option>
<option value="cn">China</option>
<option value="us">United States</option>
<option value="in">India</option>
<option value="id">Indonesia</option>
<option value="hk">Hong Kong</option>
<option value="mx">Mexico</option>
<option value="gb">United Kingdom</option>
<option value="fr">France</option>
<option value="vn">Vietnam</option>
<option value="Other" disabled="disabled">Other</option>
<option value="af">Afghanistan</option>
<option value="al">Albania</option>
<option value="dz">Algeria</option>
<option value="as">American Samoa</option>
<option value="ad">Andorra</option>
<option value="ao">Angola</option>
<option value="ai">Anguilla</option>
<option value="aq">Antarctica</option>
<option value="ag">Antigua and Barbuda</option>
<option value="ar">Argentina</option>
<option value="am">Armenia</option>
<option value="aw">Aruba</option>
<option value="au">Australia</option>
<option value="at">Austria</option>
<option value="az">Azerbaijan</option>
<option value="bs">Bahamas</option>
<option value="bh">Bahrain</option>
<option value="bd">Bangladesh</option>
<option value="bb">Barbados</option>
<option value="by">Belarus</option>
<option value="be">Belgium</option>
<option value="bz">Belize</option>
<option value="bj">Benin</option>
<option value="bm">Bermuda</option>
<option value="bt">Bhutan</option>
<option value="bo">Bolivia</option>
<option value="ba">Bosnia and Herzegovina</option>
<option value="bw">Botswana</option>
<option value="bv">Bouvet Island</option>
<option value="br">Brazil</option>
<option value="io">British Indian Ocean Territory</option>
<option value="bn">Brunei</option>
<option value="bg">Bulgaria</option>
<option value="bf">Burkina Faso</option>
<option value="bi">Burundi</option>
<option value="kh">Cambodia</option>
<option value="cm">Cameroon</option>
<option value="ca">Canada</option>
<option value="cv">Cape Verde</option>
<option value="ky">Cayman Islands</option>
<option value="cf">Central African Republic</option>
<option value="td">Chad</option>
<option value="cl">Chile</option>
<option value="cx">Christmas Island</option>
<option value="cc">Cocos Islands</option>
<option value="co">Colombia</option>
<option value="km">Comoros</option>
<option value="ck">Cook Islands</option>
<option value="cr">Costa Rica</option>
<option value="hr">Croatia</option>
<option value="cu">Cuba</option>
<option value="cy">Cyprus</option>
<option value="cz">Czech Republic</option>
<option value="ci">Côte d&#x27;Ivoire</option>
<option value="dk">Denmark</option>
<option value="dj">Djibouti</option>
<option value="dm">Dominica</option>
<option value="do">Dominican Republic</option>
<option value="ec">Ecuador</option>
<option value="eg">Egypt</option>
<option value="sv">El Salvador</option>
<option value="gq">Equatorial Guinea</option>
<option value="er">Eritrea</option>
<option value="ee">Estonia</option>
<option value="et">Ethiopia</option>
<option value="fk">Falkland Islands</option>
<option value="fo">Faroe Islands</option>
<option value="fj">Fiji</option>
<option value="fi">Finland</option>
<option value="gf">French Guiana</option>
<option value="pf">French Polynesia</option>
<option value="tf">French Southern Territories</option>
<option value="ga">Gabon</option>
<option value="gm">Gambia</option>
<option value="ge">Georgia</option>
<option value="de">Germany</option>
<option value="gh">Ghana</option>
<option value="gi">Gibraltar</option>
<option value="gr">Greece</option>
<option value="gl">Greenland</option>
<option value="gd">Grenada</option>
<option value="gp">Guadeloupe</option>
<option value="gu">Guam</option>
<option value="gt">Guatemala</option>
<option value="gn">Guinea</option>
<option value="gw">Guinea-Bissau</option>
<option value="gy">Guyana</option>
<option value="ht">Haiti</option>
<option value="hm">Heard Island and McDonald Islands</option>
<option value="hn">Honduras</option>
<option value="hu">Hungary</option>
<option value="is">Iceland</option>
<option value="ir">Iran</option>
<option value="iq">Iraq</option>
<option value="ie">Ireland</option>
<option value="il">Israel</option>
<option value="it">Italy</option>
<option value="jm">Jamaica</option>
<option value="jo">Jordan</option>
<option value="kz">Kazakhstan</option>
<option value="ke">Kenya</option>
<option value="ki">Kiribati</option>
<option value="xk">Kosovo</option>
<option value="kw">Kuwait</option>
<option value="kg">Kyrgyzstan</option>
<option value="la">Laos</option>
<option value="lv">Latvia</option>
<option value="lb">Lebanon</option>
<option value="ls">Lesotho</option>
<option value="lr">Liberia</option>
<option value="ly">Libya</option>
<option value="li">Liechtenstein</option>
<option value="lt">Lithuania</option>
<option value="lu">Luxembourg</option>
<option value="mo">Macau</option>
<option value="mk">Macedonia</option>
<option value="mg">Madagascar</option>
<option value="mw">Malawi</option>
<option value="my">Malaysia</option>
<option value="mv">Maldives</option>
<option value="ml">Mali</option>
<option value="mt">Malta</option>
<option value="mh">Marshall Islands</option>
<option value="mq">Martinique</option>
<option value="mr">Mauritania</option>
<option value="mu">Mauritius</option>
<option value="yt">Mayotte</option>
<option value="fm">Micronesia</option>
<option value="md">Moldova</option>
<option value="mc">Monaco</option>
<option value="mn">Mongolia</option>
<option value="me">Montenegro</option>
<option value="ms">Montserrat</option>
<option value="ma">Morocco</option>
<option value="mz">Mozambique</option>
<option value="mm">Myanmar</option>
<option value="na">Namibia</option>
<option value="nr">Nauru</option>
<option value="np">Nepal</option>
<option value="nl">Netherlands</option>
<option value="an">Netherlands Antilles</option>
<option value="nc">New Caledonia</option>
<option value="nz">New Zealand</option>
<option value="ni">Nicaragua</option>
<option value="ne">Niger</option>
<option value="ng">Nigeria</option>
<option value="nu">Niue</option>
<option value="nf">Norfolk Island</option>
<option value="kp">North Korea</option>
<option value="mp">Northern Mariana Islands</option>
<option value="no">Norway</option>
<option value="om">Oman</option>
<option value="pk">Pakistan</option>
<option value="pw">Palau</option>
<option value="pa">Panama</option>
<option value="pg">Papua New Guinea</option>
<option value="py">Paraguay</option>
<option value="pe">Peru</option>
<option value="pn">Pitcairn</option>
<option value="pl">Poland</option>
<option value="pt">Portugal</option>
<option value="pr">Puerto Rico</option>
<option value="qa">Qatar</option>
<option value="cg">Republic Of Congo</option>
<option value="re">Reunion</option>
<option value="ro">Romania</option>
<option value="ru">Russia</option>
<option value="rw">Rwanda</option>
<option value="sh">Saint Helena</option>
<option value="kn">Saint Kitts and Nevis</option>
<option value="lc">Saint Lucia</option>
<option value="mf">Saint Martin</option>
<option value="pm">Saint Pierre and Miquelon</option>
<option value="vc">Saint Vincent and the Grenadines</option>
<option value="ws">Samoa</option>
<option value="sm">San Marino</option>
<option value="sa">Saudi Arabia</option>
<option value="sn">Senegal</option>
<option value="rs">Serbia</option>
<option value="sc">Seychelles</option>
<option value="sl">Sierra Leone</option>
<option value="sg">Singapore</option>
<option value="sk">Slovakia</option>
<option value="si">Slovenia</option>
<option value="sb">Solomon Islands</option>
<option value="so">Somalia</option>
<option value="za">South Africa</option>
<option value="gs">South Georgia And The South Sandwich Islands</option>
<option value="es">Spain</option>
<option value="lk">Sri Lanka</option>
<option value="sd">Sudan</option>
<option value="sr">Suriname</option>
<option value="sj">Svalbard and Jan Mayen</option>
<option value="sz">Swaziland</option>
<option value="se">Sweden</option>
<option value="ch">Switzerland</option>
<option value="sy">Syria</option>
<option value="st">São Tomé and Príncipe</option>
<option value="tj">Tajikistan</option>
<option value="tz">Tanzania</option>
<option value="cd">The Democratic Republic Of The Congo</option>
<option value="tg">Togo</option>
<option value="tk">Tokelau</option>
<option value="to">Tonga</option>
<option value="tt">Trinidad and Tobago</option>
<option value="tn">Tunisia</option>
<option value="tm">Turkmenistan</option>
<option value="tc">Turks and Caicos Islands</option>
<option value="tv">Tuvalu</option>
<option value="ug">Uganda</option>
<option value="ua">Ukraine</option>
<option value="ae">United Arab Emirates</option>
<option value="um">United States minor outlying islands</option>
<option value="uy">Uruguay</option>
<option value="uz">Uzbekistan</option>
<option value="vu">Vanuatu</option>
<option value="zz">Various countries</option>
<option value="va">Vatican City</option>
<option value="ve">Venezuela</option>
<option value="vg">Virgin Islands, British</option>
<option value="vi">Virgin Islands, U.S.</option>
<option value="wf">Wallis and Futuna</option>
<option value="eh">Western Sahara</option>
<option value="ye">Yemen</option>
<option value="zm">Zambia</option>
<option value="zw">Zimbabwe</option></select>
            
          </div>
          <div class="unit size6">
            <label for="container[origin_language]">
              Original Language:
              <span class="tooltip-east">
                <i class="icon-info-alt icon-small subtle"></i>
                <span class="tip tip-left">The language of origin of the content.</span>
              </span>
            </label>
            <select class="size-block" id="container_origin_language" name="container[origin_language]" required="required"><option value="">Please select</option><option value="Popular" disabled="disabled">Popular</option>
<option value="en">English</option>
<option value="fr">French</option>
<option value="es">Spanish</option>
<option value="tr">Turkish</option>
<option value="ro">Romanian</option>
<option value="ar">Arabic</option>
<option value="th">Thai</option>
<option value="id">Indonesian</option>
<option value="de">German</option>
<option value="it">Italian</option>
<option value="vi">Vietnamese</option>
<option value="tl">Tagalog</option>
<option value="ja">Japanese</option>
<option value="el">Greek</option>
<option value="pl">Polish</option>
<option value="Other" disabled="disabled">Other</option>
<option value="ab">Abkhazian</option>
<option value="aa">Afar</option>
<option value="af">Afrikaans</option>
<option value="ak">Akan</option>
<option value="sq">Albanian</option>
<option value="al">Alemannic</option>
<option value="am">Amharic</option>
<option value="ag">Anglo-Saxon</option>
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
<option value="eo">Esperanto</option>
<option value="et">Estonian</option>
<option value="fo">Faroese</option>
<option value="fj">Fijian</option>
<option value="fi">Finnish</option>
<option value="ful">Fula</option>
<option value="gl">Galician</option>
<option value="gan">Gan</option>
<option value="ka">Georgian</option>
<option value="kl">Greenlandic</option>
<option value="gn">Guarani</option>
<option value="gu">Gujarati</option>
<option value="hat">Haitian Creole</option>
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
<option value="ia">Interlingua</option>
<option value="ie">Interlingue</option>
<option value="iu">Inuktitut</option>
<option value="ik">Inupiak</option>
<option value="ga">Irish</option>
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
<option value="nd">Low Saxon</option>
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
<option value="mnp">Min Bei</option>
<option value="cdo">Min Dong</option>
<option value="zm">Min Nan</option>
<option value="mo">Moldovan</option>
<option value="mn">Mongolian</option>
<option value="mos">Mossi</option>
<option value="nh">Nahuatl</option>
<option value="na">Nauruan</option>
<option value="ne">Nepali</option>
<option value="no">Norwegian (Bokmål)</option>
<option value="nn">Norwegian (Nynorsk)</option>
<option value="oc">Occitan</option>
<option value="or">Oriya</option>
<option value="om">Oromo</option>
<option value="pi">Pali</option>
<option value="ps">Pashto</option>
<option value="fa">Persian</option>
<option value="pt">Portuguese</option>
<option value="pa">Punjabi</option>
<option value="qu">Quechua</option>
<option value="rm">Raeto Romance</option>
<option value="ru">Russian</option>
<option value="sm">Samoan</option>
<option value="sg">Sango</option>
<option value="sa">Sanskrit</option>
<option value="skr">Saraiki</option>
<option value="sc">Sardinian</option>
<option value="gd">Scottish Gaelic</option>
<option value="sr">Serbian</option>
<option value="sh">Serbo-Croatian</option>
<option value="tn">Setswana</option>
<option value="sn">Shona</option>
<option value="sb">Sicilian</option>
<option value="se">Simple English</option>
<option value="sd">Sindhi</option>
<option value="si">Sinhalese</option>
<option value="sk">Slovak</option>
<option value="sl">Slovenian</option>
<option value="so">Somali</option>
<option value="st">Southern Sotho</option>
<option value="su">Sundanese</option>
<option value="sw">Swahili</option>
<option value="ss">Swati</option>
<option value="sv">Swedish</option>
<option value="syl">Sylheti</option>
<option value="tg">Tajik</option>
<option value="ta">Tamil</option>
<option value="tt">Tatar</option>
<option value="te">Telugu</option>
<option value="bo">Tibetan</option>
<option value="ti">Tigrinya</option>
<option value="tp">Tok Pisin</option>
<option value="tq">Tokipona</option>
<option value="to">Tongan</option>
<option value="ts">Tsonga</option>
<option value="tk">Turkmen</option>
<option value="tw">Twi</option>
<option value="udm">Udmurt</option>
<option value="uk">Ukrainian</option>
<option value="ur">Urdu</option>
<option value="ug">Uyghur</option>
<option value="uz">Uzbek</option>
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
        </fieldset>
        <fieldset class="row">
          <div class="unit size6">
            <label for="container[english_title]">Title in English:</label>
            <input class="size-block" id="container_english_title" name="container[english_title]" required="required" type="text" value="" />
            
          </div>
          <div class="unit size6">
            <label for="container[container[origin_title]">
              Title in Original Language:
              <span class="tooltip-east">
                <i class="icon-info-alt icon-small subtle"></i>
                <span class="tip tip-left">Official title in the language of origin.</span>
              </span>
            </label>
            <input class="size-block" id="container_origin_title" name="container[origin_title]" required="required" type="text" value="" />
            
          </div>
        </fieldset>
        <fieldset class="row">
          <div class="unit size6">
            <label for="container[type]">Category:</label>
            <select class="size-block" id="container_type" name="container[type]" required="required"><option value="">Please select</option><option value="series">Series</option>
<option value="film">Film</option>
<option value="artist">Artist</option></select>
            
          </div>
          <div class="unit size6">
            <label for="container[poster_image]">
              Channel Image:
              <span class="tooltip-east">
                <i class="icon-info-alt icon-small subtle"></i>
                <span class="tip tip-left tip-medium">This image will serve as the Channel’s main image and thumbnail. You can add or edit this later.</span>
              </span>
            </label>
            <input accept="image/png,image/gif,image/jpeg" class="form-file" data-max-size="409600" id="container_poster_image" name="container[poster_image]" required="required" size="18" type="file" />
            <small class="form-help ">Recommended dimension is 590x330 pixels. Maximum file size of 400 KB.</small>
            
          </div>
        </fieldset>
        <fieldset>
          <label for="container[english_description]">
            Description in English:
            <span class="tooltip-west">
              <i class="icon-info-alt icon-small subtle"></i>
              <span class="tip tip-left tip-medium">Please give a description of the Channel that you&#x27;re submitting.</span>
            </span>
          </label>
          <textarea class="size-block mbn" id="container_english_description" name="container[english_description]" required="required" rows="5">
</textarea>
          <p class="note">After submitting your Channel, it will be reviewed. You’ll receive a notification after it has been approved or denied. This usually takes about 72 hours.</p>
          
        </fieldset>
        <fieldset class="bts ptm">
          <input class="btn btn-primary" name="commit" type="submit" value="Submit Channel" />
          <a href="#" class="btn btn-primary hidden" data-channel-create-submit="1" data-modal-action="close" data-modal="data-modal-channel-created">Submit Channel</a>
          <a href="#" class="btn btn-link btn-close" data-modal-action="close" data-submit-container-close="1">Cancel</a>
        </fieldset>
</form>    </div>
  </div>
  <div id="data-modal-channel-created" class="modal invisible">
    <div class="modal-header">
      <h3>Submit a Channel</h3>
      <a href="#" class="modal-close" data-modal-action="close" title="Close">
        <i class="icon-x"></i>
      </a>
    </div>
    <div class="modal-body">
      <div class="alert alert-success mvm">
        <i class="icon-check-alt pull-left"></i>
        <div class="alert-body f-delta">Your channel has been submitted successfully. You&#x27;ll receive a Private Message Notification when it has been approved or denied.</div>
      </div>
    </div>
  </div>


  <div id="fb-root"></div>

  <a href="#" id="trigger" data-modal-action="close" data-modal="data-modal-mobile-banner" class="hidden"></a>
<div id="data-modal-mobile-banner" class="modal modal-mobile-banner invisible">
  <div class="modal-body">
    <h3 class="modal-title">Viki on the go</h3>
    <p class="modal-desc">Get the Viki mobile application on your device for better experience.</p>
    <div class="align-center">
      <a href="#" class="btn btn-flat btn-primary btn-block btn-download-app" data-mobile-download="1">Download App</a>
      <div class="deepLink close-link hidden">Already installed the app? <a href="#" class="deepLink appPlay">Play on Viki App</a></div>
      <div class="modal-app-icons"></div>
      <a href="#" class="close-link" data-mobile-browse="1">Or continue browsing</a>
    </div>
  </div>
</div>

  <a href="#" class="hidden" data-modal="data-modal-register" data-modal-templ="modal_register" data-modal-init='["fbConnect","analytics","modals"]'></a>
<div id="data-modal-register" class="modal modal-register invisible"></div>

  <a href="#" data-modal="data-modal-favorite" class="hidden"></a>
<div id="data-modal-favorite" class="modal modal-welcome modal-favorite invisible">
  <div class="modal-body align-center">
    <h2 class="modal-heading">Want to favorite this?</h2>
    <h3 class="modal-title">Sign up to create a collection of your favorite shows to watch again.<br />It&#x27;s easy and FREE!</h3>
    <div class="modal-action">
      <a href="#" class="btn-facebook btn-large track-ga-event" data-fb-login="1" data-category="favorite-modal" data-action="facebook">
        <i class="icon-facebook-square"></i> Login with Facebook
      </a>
      <p>You can also
        <a href="/sign_up" title="Sign Up" class="lowercase track-ga-event" data-category="favorite-modal" data-action="sign_up">
          Sign Up
        </a> with your email address
      </p>
    </div>
    <a href="#" title="Close" class="modal-close track-ga-event" data-modal-action="close" data-category="favorite-modal" data-action="close">
      <i class="icon-x"></i>
    </a>
  </div>
</div>

  <div id="subtitle-tray" rel="popover-tray" class="popover-tray-subtitle popover-tray popover-right-down pos-affix invisible">
  <div class='new-feature invisible'>
  </div>
  <div rel="popover-target" class="popover invisible">
    <div class="popover-content content"></div>
    <div class="popover-arrow"></div>
  </div>
  <div id="subtitle-popover" rel="popover-open" class="popover-trigger-subtitle tooltip-east">
    <i class="img-character-inverse"></i>
    <div class="tip mtl">Viki One Liners</div>
  </div>
</div>

  <a href="#" data-modal="data-modal-qc-vikipass" class="hidden"></a>
<div id="data-modal-qc-vikipass" class="modal modal-subscription invisible">
  <div class="modal-body align-center">
    <h2 class="modal-heading mtl">We love our QCs!</h2>
    <h3 class="modal-title">
      We've upgraded your account to <br> Viki Pass, the new ad-free,<br> HD viewing experience.<br>Thank you & stay awesome :)<br>
    </h3>
    <div class="modal-action pbm">
      <a href="#" class="btn btn-firm btn-large btn-wide strong track-ga-event" data-category="modalQcVikipass" data-action="close" data-modal-action="close" rel="no-follow">
        YAY!
      </a>
    </div>
    <a href="#" title="Close" class="modal-close track-ga-event" data-category="modalQcVikipass" data-action="close" data-modal-action="close" rel="no-follow">
      <i class="icon-x"></i>
    </a>
  </div>
</div>


  <script src="//1.viki.io/a/application-8e8391dc189721ffda2a4f1b570960c9.js" type="text/javascript"></script>
  <script type="text/javascript">
    window.rootUrl = 'http://www.viki.com/';
    window.subscriptionsPath = '/subscriptions.json';
    window.user_locale = 'en';
    window.appVersion = '5194.5c4f0264e5368971e401d5ec0d7b26a80fdd985d';
    window.appId = '100000a';
    window.cur_a = "community_landing_index";
    
    var disqus_config = function(){
      this.language = (user_locale == 'es') ? 'es_MX' : 'en';
    };
    Viki.apiURL = '//api.viki.io/v4/';
    Viki.language = 'en';
    raynor.reference = {
      countries: {"af":{"en":"Afghanistan","es":"Afganist\u00e1n"},"al":{"en":"Albania","es":"Albania"},"dz":{"en":"Algeria","es":"Argelia"},"as":{"en":"American Samoa","es":"Samoa Americana"},"ad":{"en":"Andorra","es":"Andorra"},"ao":{"en":"Angola","es":"Angola"},"ai":{"en":"Anguilla","es":"Anguila"},"aq":{"en":"Antarctica","es":"Ant\u00e1rtida"},"ag":{"en":"Antigua and Barbuda","es":"Antigua y Barbuda"},"ar":{"en":"Argentina","es":"Argentina"},"am":{"en":"Armenia","es":"Armenia"},"aw":{"en":"Aruba","es":"Aruba"},"au":{"en":"Australia","es":"Australia"},"at":{"en":"Austria","es":"Austria"},"az":{"en":"Azerbaijan","es":"Azerbaiy\u00e1n"},"bs":{"en":"Bahamas","es":"Bahamas"},"bh":{"en":"Bahrain","es":"Bahr\u00e9in"},"bd":{"en":"Bangladesh","es":"Bangladesh"},"bb":{"en":"Barbados","es":"Barbados"},"by":{"en":"Belarus","es":"Bielorrusia"},"be":{"en":"Belgium","es":"B\u00e9lgica"},"bz":{"en":"Belize","es":"Belice"},"bj":{"en":"Benin","es":"Ben\u00edn"},"bm":{"en":"Bermuda","es":"Bermudas"},"bt":{"en":"Bhutan","es":"But\u00e1n"},"bo":{"en":"Bolivia","es":"Bolivia"},"ba":{"en":"Bosnia and Herzegovina","es":"Bosnia-Herzegovina"},"bw":{"en":"Botswana","es":"Botsuana"},"bv":{"en":"Bouvet Island","es":"Isla Bouvet"},"br":{"en":"Brazil","es":"Brasil"},"io":{"en":"British Indian Ocean Territory","es":"Territorio Brit\u00e1nico del Oc\u00e9ano \u00cdndico"},"bn":{"en":"Brunei","es":"Brun\u00e9i"},"bg":{"en":"Bulgaria","es":"Bulgaria"},"bf":{"en":"Burkina Faso","es":"Burkina Faso"},"bi":{"en":"Burundi","es":"Burundi"},"kh":{"en":"Cambodia","es":"Camboya"},"cm":{"en":"Cameroon","es":"Camer\u00fan"},"ca":{"en":"Canada","es":"Canad\u00e1"},"cv":{"en":"Cape Verde","es":"Cabo Verde"},"ky":{"en":"Cayman Islands","es":"Islas Caim\u00e1n"},"cf":{"en":"Central African Republic","es":"Rep\u00fablica Centroafricana"},"td":{"en":"Chad","es":"Chad"},"cl":{"en":"Chile","es":"Chile"},"cn":{"en":"China","es":"China"},"cx":{"en":"Christmas Island","es":"Isla Christmas"},"cc":{"en":"Cocos Islands","es":"Islas Cocos"},"co":{"en":"Colombia","es":"Colombia"},"km":{"en":"Comoros","es":"Comoras"},"cg":{"en":"Republic Of Congo","es":"Congo"},"cd":{"en":"The Democratic Republic Of The Congo","es":"Rep\u00fablica Democr\u00e1tica del Congo"},"ck":{"en":"Cook Islands","es":"Islas Cook"},"cr":{"en":"Costa Rica","es":"Costa Rica"},"ci":{"en":"C\u00f4te d'Ivoire","es":"Costa de Marfil"},"hr":{"en":"Croatia","es":"Croacia"},"cu":{"en":"Cuba","es":"Cuba"},"cy":{"en":"Cyprus","es":"Chipre"},"cz":{"en":"Czech Republic","es":"Rep\u00fablica Checa"},"dk":{"en":"Denmark","es":"Dinamarca"},"dj":{"en":"Djibouti","es":"Yibuti"},"dm":{"en":"Dominica","es":"Dominica"},"do":{"en":"Dominican Republic","es":"Rep\u00fablica Dominicana"},"ec":{"en":"Ecuador","es":"Ecuador"},"eg":{"en":"Egypt","es":"Egipto"},"sv":{"en":"El Salvador","es":"El Salvador"},"gq":{"en":"Equatorial Guinea","es":"Guinea Ecuatorial"},"er":{"en":"Eritrea","es":"Eritrea"},"ee":{"en":"Estonia","es":"Estonia"},"et":{"en":"Ethiopia","es":"Etiop\u00eda"},"fk":{"en":"Falkland Islands","es":"Islas Malvinas"},"fo":{"en":"Faroe Islands","es":"Islas Feroe"},"fj":{"en":"Fiji","es":"Fiyi"},"fi":{"en":"Finland","es":"Finlandia"},"fr":{"en":"France","es":"Francia"},"gf":{"en":"French Guiana","es":"Guayana Francesa"},"pf":{"en":"French Polynesia","es":"Polinesia Francesa"},"tf":{"en":"French Southern Territories","es":"Territorios Australes Franceses"},"ga":{"en":"Gabon","es":"Gab\u00f3n"},"gm":{"en":"Gambia","es":"Gambia"},"ge":{"en":"Georgia","es":"Georgia"},"de":{"en":"Germany","es":"Alemania"},"gh":{"en":"Ghana","es":"Ghana"},"gi":{"en":"Gibraltar","es":"Gibraltar"},"gr":{"en":"Greece","es":"Grecia"},"gs":{"en":"South Georgia And The South Sandwich Islands","es":"Islas Georgia del Sur y Sandwich del Sur"},"gl":{"en":"Greenland","es":"Groenlandia"},"gd":{"en":"Grenada","es":"Granada"},"gp":{"en":"Guadeloupe","es":"Guadalupe"},"gu":{"en":"Guam","es":"Guam"},"gt":{"en":"Guatemala","es":"Guatemala"},"gn":{"en":"Guinea","es":"Guinea"},"gw":{"en":"Guinea-Bissau","es":"Guinea-Bissau"},"gy":{"en":"Guyana","es":"Guyana"},"ht":{"en":"Haiti","es":"Hait\u00ed"},"hm":{"en":"Heard Island and McDonald Islands","es":"Islas Heard y McDonald"},"hn":{"en":"Honduras","es":"Honduras"},"hk":{"en":"Hong Kong","es":"Hong Kong"},"hu":{"en":"Hungary","es":"Hungr\u00eda"},"is":{"en":"Iceland","es":"Islandia"},"in":{"en":"India","es":"India"},"id":{"en":"Indonesia","es":"Indonesia"},"ir":{"en":"Iran","es":"Ir\u00e1n"},"iq":{"en":"Iraq","es":"Iraq"},"ie":{"en":"Ireland","es":"Irlanda"},"il":{"en":"Israel","es":"Israel"},"it":{"en":"Italy","es":"Italia"},"jm":{"en":"Jamaica","es":"Jamaica"},"jp":{"en":"Japan","es":"Jap\u00f3n"},"jo":{"en":"Jordan","es":"Jordania"},"kz":{"en":"Kazakhstan","es":"Kazajist\u00e1n"},"ke":{"en":"Kenya","es":"Kenia"},"ki":{"en":"Kiribati","es":"Kiribati"},"kr":{"en":"Korea","es":"Corea del Sur"},"kw":{"en":"Kuwait","es":"Kuwait"},"kg":{"en":"Kyrgyzstan","es":"Kirguist\u00e1n"},"la":{"en":"Laos","es":"Laos"},"lv":{"en":"Latvia","es":"Letonia"},"lb":{"en":"Lebanon","es":"L\u00edbano"},"ls":{"en":"Lesotho","es":"Lesoto"},"lr":{"en":"Liberia","es":"Liberia"},"ly":{"en":"Libya","es":"Libia"},"li":{"en":"Liechtenstein","es":"Liechtenstein"},"lt":{"en":"Lithuania","es":"Lituania"},"lu":{"en":"Luxembourg","es":"Luxemburgo"},"mf":{"en":"Saint Martin","es":"San Mart\u00edn"},"mo":{"en":"Macau","es":"Macao"},"mk":{"en":"Macedonia","es":"Macedonia"},"mg":{"en":"Madagascar","es":"Madagascar"},"mw":{"en":"Malawi","es":"Malaui"},"my":{"en":"Malaysia","es":"Malasia"},"mv":{"en":"Maldives","es":"Maldivas"},"ml":{"en":"Mali","es":"Mali"},"mt":{"en":"Malta","es":"Malta"},"mh":{"en":"Marshall Islands","es":"Islas Marshall"},"mq":{"en":"Martinique","es":"Martinica"},"mr":{"en":"Mauritania","es":"Mauritania"},"mu":{"en":"Mauritius","es":"Mauricio"},"yt":{"en":"Mayotte","es":"Mayotte"},"mx":{"en":"Mexico","es":"M\u00e9xico"},"fm":{"en":"Micronesia","es":"Micronesia"},"md":{"en":"Moldova","es":"Moldavia"},"mc":{"en":"Monaco","es":"M\u00f3naco"},"mn":{"en":"Mongolia","es":"Mongolia"},"ms":{"en":"Montserrat","es":"Montserrat"},"ma":{"en":"Morocco","es":"Marruecos"},"mz":{"en":"Mozambique","es":"Mozambique"},"mm":{"en":"Myanmar","es":"Myanmar"},"na":{"en":"Namibia","es":"Namibia"},"nr":{"en":"Nauru","es":"Nauru"},"np":{"en":"Nepal","es":"Nepal"},"nl":{"en":"Netherlands","es":"Pa\u00edses Bajos"},"an":{"en":"Netherlands Antilles","es":"Antillas Neerlandesas"},"nc":{"en":"New Caledonia","es":"Nueva Caledonia"},"nz":{"en":"New Zealand","es":"Nueva Zelanda"},"ni":{"en":"Nicaragua","es":"Nicaragua"},"ne":{"en":"Niger","es":"N\u00edger"},"ng":{"en":"Nigeria","es":"Nigeria"},"nu":{"en":"Niue","es":"Isla Niue"},"nf":{"en":"Norfolk Island","es":"Isla Norfolk"},"kp":{"en":"North Korea","es":"Corea del Norte"},"mp":{"en":"Northern Mariana Islands","es":"Islas Marianas del Norte"},"no":{"en":"Norway","es":"Noruega"},"om":{"en":"Oman","es":"Om\u00e1n"},"pk":{"en":"Pakistan","es":"Pakist\u00e1n"},"pw":{"en":"Palau","es":"Palau"},"pa":{"en":"Panama","es":"Panam\u00e1"},"pg":{"en":"Papua New Guinea","es":"Pap\u00faa Nueva Guinea"},"py":{"en":"Paraguay","es":"Paraguay"},"pe":{"en":"Peru","es":"Per\u00fa"},"ph":{"en":"Philippines","es":"Filipinas"},"pn":{"en":"Pitcairn","es":"Pitcairn"},"pl":{"en":"Poland","es":"Polonia"},"pt":{"en":"Portugal","es":"Portugal"},"pr":{"en":"Puerto Rico","es":"Puerto Rico"},"qa":{"en":"Qatar","es":"Qatar"},"re":{"en":"Reunion","es":"Reuni\u00f3n"},"ro":{"en":"Romania","es":"Ruman\u00eda"},"ru":{"en":"Russia","es":"Rusia"},"rw":{"en":"Rwanda","es":"Ruanda"},"sh":{"en":"Saint Helena","es":"Santa Elena"},"kn":{"en":"Saint Kitts and Nevis","es":"San Crist\u00f3bal y Nieves"},"lc":{"en":"Saint Lucia","es":"Santa Luc\u00eda"},"pm":{"en":"Saint Pierre and Miquelon","es":"San Pedro y Miquel\u00f3n"},"vc":{"en":"Saint Vincent and the Grenadines","es":"San Vicente y las Granadinas"},"ws":{"en":"Samoa","es":"Samoa"},"sm":{"en":"San Marino","es":"San Marino"},"st":{"en":"S\u00e3o Tom\u00e9 and Pr\u00edncipe","es":"Santo Tom\u00e9 y Pr\u00edncipe"},"sa":{"en":"Saudi Arabia","es":"Arabia Saud\u00ed"},"rs":{"en":"Serbia","es":"Serbia"},"sn":{"en":"Senegal","es":"Senegal"},"sc":{"en":"Seychelles","es":"Seychelles"},"sl":{"en":"Sierra Leone","es":"Sierra Leona"},"sg":{"en":"Singapore","es":"Singapur"},"sk":{"en":"Slovakia","es":"Eslovaquia"},"si":{"en":"Slovenia","es":"Eslovenia"},"sb":{"en":"Solomon Islands","es":"Islas Salom\u00f3n"},"so":{"en":"Somalia","es":"Somalia"},"za":{"en":"South Africa","es":"Sud\u00e1frica"},"es":{"en":"Spain","es":"Espa\u00f1a"},"lk":{"en":"Sri Lanka","es":"Sri Lanka"},"sd":{"en":"Sudan","es":"Sud\u00e1n"},"sr":{"en":"Suriname","es":"Surinam"},"sj":{"en":"Svalbard and Jan Mayen","es":"Svalbard y Jan Mayen"},"sz":{"en":"Swaziland","es":"Suazilandia"},"se":{"en":"Sweden","es":"Suecia"},"ch":{"en":"Switzerland","es":"Suiza"},"sy":{"en":"Syria","es":"Siria"},"tw":{"en":"Taiwan","es":"Taiw\u00e1n"},"tj":{"en":"Tajikistan","es":"Tayikist\u00e1n"},"tz":{"en":"Tanzania","es":"Tanzania"},"th":{"en":"Thailand","es":"Tailandia"},"tg":{"en":"Togo","es":"Togo"},"tk":{"en":"Tokelau","es":"Tokelau"},"to":{"en":"Tonga","es":"Tonga"},"tt":{"en":"Trinidad and Tobago","es":"Trinidad y Tobago"},"tn":{"en":"Tunisia","es":"T\u00fanez"},"tr":{"en":"Turkey","es":"Turqu\u00eda"},"tm":{"en":"Turkmenistan","es":"Turkmenist\u00e1n"},"tc":{"en":"Turks and Caicos Islands","es":"Islas Turcas y Caicos"},"tv":{"en":"Tuvalu","es":"Tuvalu"},"ug":{"en":"Uganda","es":"Uganda"},"ua":{"en":"Ukraine","es":"Ucrania"},"ae":{"en":"United Arab Emirates","es":"Emiratos \u00c1rabes Unidos"},"gb":{"en":"United Kingdom","es":"Reino Unido"},"us":{"en":"United States","es":"Estados Unidos"},"um":{"en":"United States minor outlying islands","es":"Islas menores alejadas de los Estados Unidos"},"uy":{"en":"Uruguay","es":"Uruguay"},"uz":{"en":"Uzbekistan","es":"Uzbekist\u00e1n"},"vu":{"en":"Vanuatu","es":"Vanuatu"},"va":{"en":"Vatican City","es":"Ciudad del Vaticano"},"ve":{"en":"Venezuela","es":"Venezuela"},"vn":{"en":"Vietnam","es":"Vietnam"},"vg":{"en":"Virgin Islands, British","es":"Islas V\u00edrgenes Brit\u00e1nicas"},"vi":{"en":"Virgin Islands, U.S.","es":"Islas V\u00edrgenes de los Estados Unidos"},"wf":{"en":"Wallis and Futuna","es":"Wallis y Futuna"},"eh":{"en":"Western Sahara","es":"S\u00e1hara Occidental"},"ye":{"en":"Yemen","es":"Yemen"},"zm":{"en":"Zambia","es":"Zambia"},"zw":{"en":"Zimbabwe","es":"Zimbabue"},"me":{"en":"Montenegro","es":"Montenegro"},"xk":{"en":"Kosovo","es":"Kosovo"},"zz":{"en":"Various countries","es":"Varios pa\u00edses"}}
    };
    raynor.init();
  </script>

  <script type="text/javascript">
  raynor.session.country_code = 'DE';
    raynor.session.signed_in = true;
    raynor.session.user_id = "7275880u";
    raynor.session.user_token = "86oywyu4jcxyMNFqlqOhJYhV4HwmYw_02";
    raynor.session.username = "youngseok_kim";
    raynor.session.profile_image = "http://graph.facebook.com/100000850560224/picture?width=215&height=215";
    raynor.session.profile_image_small = "http://graph.facebook.com/100000850560224/picture?width=30&height=30";
    raynor.session.name = "Youngseok Kim";
    raynor.session.qc = false;
    raynor.session.facebook_id = "100000850560224";
    raynor.session.og_watch = true;
    raynor.session.su = false;
    raynor.session.ab = false;
    raynor.session.ps = false;
    raynor.session.content_lang = {"code":"en","name":"English · English"};
    raynor.session.created_at = 1382818914
  raynor.session.can_manage = false;
  raynor.session.can_manage_team = false;

</script>


  
    <script type="text/javascript">
    var _cio = _cio || [];

    (function() {
      var a,b,c;a=function(f){return function(){_cio.push([f].
        concat(Array.prototype.slice.call(arguments,0)))}};b=["identify",
        "track"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
      var t = document.createElement('script'),
        s = document.getElementsByTagName('script')[0];
      t.async = true;
      t.id    = 'cio-tracker';
      t.setAttribute('data-site-id', '087421bb16c42b4dd37f');
      t.src = 'https://assets.customer.io/assets/track.js';
      s.parentNode.insertBefore(t, s);
    })();

    if (raynor.session.signed_in === true) {
      _cio.identify({
        id: parseInt(raynor.session.user_id),
        created_at: raynor.session.created_at,
        name: raynor.session.name,
        qc: raynor.session.qc,
        ps: raynor.session.ps || false
      });
    }
  </script>

</body>
</html>
