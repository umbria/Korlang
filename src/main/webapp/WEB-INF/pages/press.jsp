
<!DOCTYPE html>
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"  data-cast-api-enabled="true"> <!--<![endif]-->

<head>
  <title>Viki</title>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta http-equiv="Content-Language" content="en"/>
  <meta name="description" content=""/>
  
  
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
    _gaq.push(['_setCustomVar', 1, 'rails_action', 'static_pages_press']);

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
  
</head>
<body class="">
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
  <h1><a href="/press">Welcome to the Viki Press Room</a></h1>
  <p class="summary">
    Send media inquiries to <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#112;&#114;&#101;&#115;&#115;&#64;&#118;&#105;&#107;&#105;&#46;&#99;&#111;&#109;">&#112;&#114;&#101;&#115;&#115;&#64;&#118;&#105;&#107;&#105;&#46;&#99;&#111;&#109;</a>
  </p>
</header>

<h2 class="bbs mbm pbm">Press Highlights</h2>
<div class="row">
  <div class="unit size8">
    <blockquote class="citebox">
      <p>
        <a href="http://allthingsd.com/20130901/exclusive-japans-rakuten-acquires-viki-video-site-for-200-million/" title="Exclusive: Japan's Rakuten Acquires Viki Video Site for $200 Million" target="_blank">
          Exclusive: Japan's Rakuten Acquires Viki Video Site for $200 Million</a>
      </p>
      <p>Crowdsourced premium video site gets bought for global expansion by the Amazon of Japan.</p><br>
      <footer>
        <cite><img alt="All_things_d" height="15" src="//0.viki.io/a/static/press/all_things_d-5a3766b93d2195723e6809a23a46a626.png" width="107" /></cite>
      </footer>
    </blockquote>
    <blockquote class="citebox">
      <p>
        <a href="http://www.bloomberg.com/video/viki-ceo-hovaghimian-on-video-translation-site-6bELOpN7TRKqVuY9fxgSFA.html" title="Viki CEO Hovaghimian on Video Translation Site" target="_blank">
          Viki CEO Hovaghimian on Video Translation Site</a>
      </p>
      <p>Razmig Hovaghimian, chief executive officer of Viki, talks about the
        company's online distribution of translated television and video
        materials.</p>
      <footer>
        <cite><img alt="Bloombergtv" height="25" src="//1.viki.io/a/static/press/bloombergtv-632f549a889d9de4705f2da616a7492f.png" width="102" /></cite>
      </footer>
    </blockquote>
    <blockquote class="citebox">
      <p>
        <a href="http://www.forbes.com/sites/bruceupbin/2010/12/08/viki-unlocks-the-other-85-of-television/" title="Viki Unlocks The Other 85% Of Television" target="_blank">
          Viki Unlocks The Other 85% Of Television</a>
      </p>
      <p>I think Viki's real power is as a content pipe sending shows to bigger
        players that it has unlocked from behind the language barrier.</p>
      <footer>
        <cite><img alt="Forbes" height="18" src="//1.viki.io/a/static/press/forbes-7e4dbb7a2c899084c1d156bdfd89cd40.png" width="74" /></cite>
      </footer>
    </blockquote>
  </div>
  <div class="unit size8">
    <blockquote class="citebox">
      <p>
        <a href="http://techcrunch.com/2011/10/20/andreessen-horowitz-bbc-greylock-put-20m-in-international-video-site-viki/" title="Andreessen Horowitz, BBC, Greylock Put $20M In International Video Site Viki" target="_blank">
          Andreessen Horowitz, BBC, Greylock Put $20M In International Video
          Site Viki</a>
      </p>
      <p>What's interesting about Viki is that the model allows content owners
        to open up to new international markets.</p>
      <footer>
        <cite><img alt="Techcrunch" height="17" src="//1.viki.io/a/static/press/techcrunch-10cf5a2c5a5bd9568bbf411109418752.png" width="98" /></cite>
      </footer>
    </blockquote>
    <blockquote class="citebox">
      <p>
        <a href="http://blogs.wsj.com/searealtime/2011/10/21/singapore-start-up-sees-gold-mine-in-foreign-language-tv/" title="Singapore Start-up Sees Gold Mine In Foreign Language TV" target="_blank">
          Singapore Start-up Sees Gold Mine In Foreign Language TV</a>
      </p>
      <p>Viki, the Singapore-based web startup pools the linguistic talents of
        thousands of its users to help push world television content into
        markets historically impenetrable to all...</p>
      <footer>
        <cite><img alt="Wall_street_journal" height="18" src="//1.viki.io/a/static/press/wall_street_journal-fc24a21268a904420c250b0999ca3434.png" width="195" /></cite>
      </footer>
    </blockquote>
    <blockquote class="citebox">
      <p>
        <a href="http://latimesblogs.latimes.com/technology/2010/12/viki-making-online-video-speak-in-tongues.html" title="Viki: Making online video speak in tongues" target="_blank">
          Viki: Making online video speak in tongues</a>
      </p>
      <p>Their efforts enable Viki to bring the videos to markets outside their
        home countries and develop an international fan base...</p>
      <footer>
        <cite><img alt="Los_angeles_times" height="13" src="//0.viki.io/a/static/press/los_angeles_times-26fcc8590a7c61108d4aaf28be404ed3.png" width="101" /></cite>
      </footer>
    </blockquote>
  </div>

  <div class="unit size8">
    <blockquote class="citebox">
      <p>
        <a href="http://www.fastcompany.com/1842719/boom-tube-how-viki-creating-global-hulu" title="Boom Tube: How Viki Is Creating The Global Hulu" target="_blank">
          Boom Tube: How Viki Is Creating The Global Hulu</a>
      </p>
      <p>Viki's community, which includes tens of thousands of people around the
        world, operates much the way Wikipedia's does.</p>
      <footer>
        <cite><img alt="Fastcompany" height="18" src="//0.viki.io/a/static/press/fastcompany-dd39760eb1e31e4c739ea454ebe45291.png" width="122" /></cite>
      </footer>
    </blockquote>
    <blockquote class="citebox">
      <p>
        <a href="http://thenextweb.com/asia/2012/05/24/global-video-site-viki-moves-into-music-inks-deals-with-warner-music-and-other-labels/" title="Global video site Viki moves into music, inks deals with Warner Music and other labels" target="_blank">
          Global video site Viki moves into music, inks deals with Warner Music and other labels</a>
      </p>
      <p>Viki provides an opportunity to extend their reach and monetisation
        into these global markets, with the subtitling a particularly effective
        method...</p>
      <footer>
        <cite><img alt="Tnw" height="21" src="//0.viki.io/a/static/press/tnw-56334d76f86028929efc53b7e218cd85.png" width="48" /></cite>
      </footer>
    </blockquote>
    <blockquote class="citebox">
      <p>
        <a href="http://www.nst.com.my/life-times/sunday-life-times/click-for-viki-tv-1.123795" title="Click for Viki TV" target="_blank">
          Click for Viki TV</a>
      </p>
      <p>Over a billion videos viewed and nearly 250 million words translated,
        Viki uniquely brings global prime-time entertainment...</p>
      <footer>
        <cite><img alt="Newstraitstimes" height="18" src="//0.viki.io/a/static/press/newstraitstimes-e0034cf07841d77cbfea8e61ef659592.png" width="146" /></cite>
      </footer>
    </blockquote>
  </div>
</div>

<div class="row mtx">
  <div class="unit size16">
    <h2>Recent News</h2>
    <ul class="medias medias-block medias-noborder f-delta bts ptm">
      <li class="media">
        <cite class="country">The Next Web</cite>
        <a href="http://thenextweb.com/insider/2013/10/08/rakuten-owned-video-site-viki-announces-branded-channels-a-big-step-towards-making-more-money" title="Rakuten-owned video site Viki announces branded channels, a big step towards making more money" target="_blank">
          Rakuten-owned video site Viki announces branded channels, a big step towards making more money
        </a>
      </li>
      <li class="media">
        <cite class="country">C21Media</cite>
        <a href="http://www.c21media.net/viki-hosts-asian-lat-am-nets/" title="Viki hosts Asian, Lat Am nets" target="_blank">
          Viki hosts Asian, Lat Am nets
        </a>
      </li>
      <li class="media">
        <cite class="country">GigaOM</cite>
        <a href="http://gigaom.com/2013/10/08/viki-launches-branded-channels-plans-to-add-personalization/" title="After getting acquired for $200 million, Viki is plotting global growth" target="_blank">
          After getting acquired for $200 million, Viki is plotting global growth
        </a>
      </li>
      <li class="media">
        <cite class="country">OnScreenAsia</cite>
        <a href="http://www.onscreenasia.com/article/mipcom-viki-launches-brand-channels-for-broadcasters-and-content-providers/13247" title="MIPCOM: Viki launches 'Brand Channels' for broadcasters and content providers" target="_blank">
          MIPCOM: Viki launches 'Brand Channels' for broadcasters and content providers
        </a>
      </li>

      <li class="media">
        <cite class="country">AllthingsD</cite>
        <a href="http://allthingsd.com/20130901/exclusive-japans-rakuten-acquires-viki-video-site-for-200-million/" title="Exclusive: Japan's Rakuten Acquires Viki Video Site" target="_blank">
          Exclusive: Japan's Rakuten Acquires Viki Video Site
        </a>
      </li>
      <li class="media">
        <cite class="country">Techcrunch</cite>
        <a href="http://techcrunch.com/2013/09/02/video-site-viki-had-offers-from-google-and-yahoo-before-it-took-a-200m-deal-with-rakuten-which-plans-to-use-the-translation-platform-in-e-commerce/" title="Rakuten Acquires Viki to Strengthen Digital Content Offerings" target="_blank">
          Rakuten Acquires Viki to Strengthen Digital Content Offerings
        </a>
      </li>
      <li class="media">
        <cite class="country">Techcrunch</cite>
        <a href="http://techcrunch.com/2013/07/24/video-site-viki-adds-blake-krikorian-and-dave-goldberg-as-its-newest-strategic-investors-as-it-passes-400m-words-in-its-crowdsourced-subtitle-catalog/" title="Video Site Viki Adds Blake Krikorian And Dave Goldberg As Its Newest Strategic Investors As It Passes 400M Words In Its Crowdsourced Subtitle Catalog" target="_blank">
          Video Site Viki Adds Blake Krikorian And Dave Goldberg As Its Newest Strategic Investors As It Passes 400M Words In Its Crowdsourced Subtitle Catalog
        </a>
      </li>
      <li class="media">
        <cite class="country">The Next Web</cite>
        <a href="http://thenextweb.com/apps/2013/07/03/global-video-service-viki-hits-10-million-mobile-app-downloads-up-nearly-7-fold-from-a-year-ago/" title="Viki Hits 10 Million Mobile App Downloads, Up Nearly 7-fold From a Year Ago" target="_blank">
          Viki Hits 10 Million Mobile App Downloads, Up Nearly 7-fold From a Year Ago
        </a>
      </li>
      <li class="media">
        <cite class="country">Deadline Hollywood</cite>
        <a href="http://www.deadline.com/2013/06/falling-skies-reigns-in-china-for-online-streaming-site-viki/" title="'Falling Skies' Reigns Supreme in China for Online TV Site Viki" target="_blank">
          <q>Falling Skies</q> Reigns Supreme in China for Online TV Site Viki
        </a>
      </li>
      <li class="media">
        <cite class="country">Business Times</cite>
        <a href="https://docs.google.com/a/viki.com/file/d/0ByNn_HL9fqioN0YwbFRKOWRUTmM/" title="Online TV suits up and brings knuckle dusters to the fight" target="_blank">
          Online TV suits up and brings knuckle dusters to the fight
        </a>
      </li>
      <li class="media">
        <cite class="country">Television Asia Plus</cite>
        <a href="https://docs.google.com/a/viki.com/document/d/1E5uiRt5pVTgOIJeHNiPSSW5VKVrm4lz9y4RNPde-sFY/" title="Research Report: Increasingly Mobile" target="_blank">
          Research Report: Increasingly Mobile
        </a>
      </li>
      <li class="media">
        <cite class="country">The National</cite>
        <a href="http://www.thenational.ae/lifestyle/brace-for-an-era-of-global-tv/" title="Brace for an Era of Global TV" target="_blank">
          Brace for an Era of Global TV
        </a>
      </li>
      <li class="media">
        <cite class="country">The Next Web</cite>
        <a href="http://thenextweb.com/media/2013/05/09/global-video-site-viki-is-bringing-back-social-rolls-out-improved-real-time-commenting-system/" title="Global video site Viki is bringing social back, as it reintroduces improved real-time commenting system" target="_blank">
          Global video site Viki is bringing social back, as it reintroduces improved real-time commenting system
        </a>
      </li>
      <li class="media">
        <cite class="country">ZDNet</cite>
        <a href="http://www.zdnet.com/sg/spore-startup-finds-niche-in-crowdsourcing-content-subtitles-7000015721/" title="S’Pore Startup Finds Niche in Crowdsourcing Content" target="_blank">
          S’Pore Startup Finds Niche in Crowdsourcing Content
        </a>
      </li>
      <li class="media">
        <cite class="country">Music Weekly Asia</cite>
        <a href="http://musicweekly.asia/music-business/viki-signs-deal-with-universal-music-group/" title="Viki Signs Deal with Universal Music Group" target="_blank">
          Viki Signs Deal with Universal Music Group
        </a>
      </li>
      <li class="media">
        <cite class="country">MIPWorld</cite>
        <a href="http://blog.mipworld.com/2013/04/interview-with-viki-from-crowdsourced-subtitles-to-hulu-for-rest-of-the-world/" title="From crowdsourced subtitles to 'Hulu for rest of the world'" target="_blank">
          From crowdsourced subtitles to <q>Hulu for rest of the world</q>
        </a>
      </li>
      <li class="media">
        <cite class="country">The Korea Times</cite>
        <a href="https://docs.google.com/file/d/0ByNn_HL9fqioODVUaVVfRUx1X00/edit?usp=sharing" title="Viki Spreads Global Content" target="_blank">
          Viki Spreads Global Content
        </a>
      </li>
      <li class="media">
        <cite class="country">CNN Money</cite>
        <a href="http://paidcontent.org/2013/04/10/viki-doubles-down-on-content-arbitrage-with-asian-tv-and-movie-deals/" title="Viki Doubles Down on Content Arbitrage with Asian TV and Movie Deals" target="_blank">
          Viki Doubles Down on Content Arbitrage with Asian TV and Movie Deals
        </a>
      </li>
      <li class="media">
        <cite class="country">Techcrunch - </cite>
        <a href="http://techcrunch.com/2013/04/09/viki-the-youtube-for-foreign-language-content-revamps-site-upgrades-subtitling-tech-to-scale-up-users/" title="Viki, the Hulu for Foreign Language Content, Revamps Site, Upgrades Subtitling Technology to Scale Up Users" target="_blank">
          Viki, the Hulu for Foreign Language Content, Revamps Site, Upgrades Subtitling Technology to Scale Up Users
        </a>
      </li>
      <li class="media">
        <cite class="country">WorldScreen</cite>
        <a href="http://www.worldscreen.com/articles/display/2013-4-11-nov-venevision-international-viki" title="Venevision International Does Deal with Viki" target="_blank">
          Venevision International Does Deal with Viki
        </a>
      </li>
      <li class="media">
        <cite class="country">Deadline Hollywood</cite>
        <a href="http://www.deadline.com/2013/04/miptv-briefs-cinedigm-lovehate-deal-swedens-mexiko-telenovels-sell/" title="Telenovelas Sell, Venevision Inks Viki Deal" target="_blank">
          Telenovelas Sell, Venevision Inks Viki Deal
        </a>
      </li>
      <li class="media">
        <cite class="country">SaigonDaily</cite>
        <a href="http://saigondaily.net/viki-partners-tv-asahi-to-bring-programing-global/" title="Viki partners TV Asahi to Bring Programing Global" target="_blank">
          Viki partners TV Asahi to Bring Programing Global
        </a>
      </li>
      <li class="media">
        <cite class="country">e27</cite>
        <a href="http://e27.co/2013/04/03/importance-of-mobile-strategy-30-of-viki-video-views-now-mobile/" title="Importance of Mobile Strategy: 30% of Viki Video Views Now Mobile" target="_blank">
          Importance of Mobile Strategy: 30% of Viki Video Views Now Mobile
        </a>
      </li>
      <li class="media">
        <cite class="country">Variety</cite>
        <a href="http://www.variety.com/article/VR1118065509/" title="Viki Cozies Up to NBCU to Bring Hollywood Content to SEA" target="_blank">
          Viki Cozies Up to NBCU to Bring Hollywood Content to SEA
        </a>
      </li>
      <li class="media">
        <cite class="country">GigaOM</cite>
        <a href="http://paidcontent.org/2013/01/24/viki-amazon-instant/" title="Global TV Site Viki Widens Reach with Amazon Instant" target="_blank">
          Global TV Site Viki Widens Reach with Amazon Instant
        </a>
      </li>
      <li class="media">
        <cite class="country">Chosun Ilbo</cite>
        <a href="http://biz.chosun.com/site/data/html_dir/2012/12/14/2012121400935.html" title="싸이 신화 뒤에 100만명의 그들이 있었다" target="_blank">
          싸이 신화 뒤에 100만명의 그들이 있었다
        </a>
      </li>
      <li class="media">
        <cite class="country">The Wall Street Journal</cite>
        <a href="http://online.wsj.com/article/SB10000872396390443921504577643773810338032.html?KEYWORDS=viki" title="Breaking Down Communication Barriers" target="_blank">
          Breaking Down Communication Barriers
        </a>
      </li>
      <li class="media">
        <cite class="country">TechCrunch</cite>
        <a href="http://techcrunch.com/2012/07/12/viki-climbs-the-great-firewall-signs-with-chinas-facebook-renren-for-its-first-video-distribution-deal-in-the-country/" title="Viki Climbs The Great Firewall, Signs with ‘China’s Facebook’ Renren" target="_blank">
          Viki Climbs The Great Firewall, Signs with ‘China’s Facebook’ Renren
        </a>
      </li>
      <li class="media">
        <cite class="country">Bloomberg</cite>
        <a href="http://www.bloomberg.com/video/viki-ceo-hovaghimian-on-video-translation-site-6bELOpN7TRKqVuY9fxgSFA.html" title="Viki CEO Hovaghimian on Launching in China" target="_blank">
          Viki CEO Hovaghimian on Launching in China
        </a>
      </li>
      <li class="media">
        <cite class="country">Reuters</cite>
        <a href="http://www.reuters.com/article/2012/05/24/us-viki-streaming-idUSBRE84N05B20120524" title="Singapore startup Viki aims to take local TV global" target="_blank">
          Singapore startup Viki aims to take local TV global
        </a>
      </li>
      <li class="media">
        <cite class="country">MTV Geek</cite>
        <a href="http://geek-news.mtv.com/2012/09/12/the-rose-of-versailles-licensed-by-nozomi-viki/" title="Classic Anime 'The Rose of Versailles' To Begin Streaming via Viki" target="_blank">
          Classic Anime 'The Rose of Versailles' To Begin Streaming via Viki
        </a>
      </li>
      <li class="media">
        <cite class="country">The Next Web</cite>
        <a href="http://thenextweb.com/asia/2012/09/12/viki-pushes-anime-content-youtube-channel-launch-hulu-deal/" title="Otaku Rejoice! Viki is Taking Its Anime Worldwide on YouTube and Hulu" target="_blank">
          Otaku Rejoice! Viki is Taking Its Anime Worldwide on YouTube and Hulu
        </a>
      </li>
      <li class="media">
        <cite class="country">Business Insider</cite>
        <a href="http://www.businessinsider.com/gangnam-style-k-pop-google-youtube-twitter-2012-8" title="Gangnam Style Big in Silicon Valley Right Now" target="_blank">
          Gangnam Style Big in Silicon Valley Right Now
        </a>
      </li>
      <li class="media">
        <cite class="country">Yahoo! Finance</cite>
        <a href="http://finance.yahoo.com/news/first-person-cutting-cable-actually-expanded-entertainment-options-202000244--finance.html;_ylt=A2KJjalvVjVQpFkAUaXQtDMD" title="First Person: Cutting Out Cable Has Actually Expanded Our Entertainment Options" target="_blank">
          First Person: Cutting Out Cable Has Actually Expanded Our Entertainment Options
        </a>
      </li>
      <li class="media">
        <cite class="country">The Wall Street Journal</cite>
        <a href="http://online.wsj.com/article/SB10000872396390444246904577574422852969682.html" title="Asian Innovation Award Finalists Named" target="_blank">
          Asian Innovation Award Finalists Named
        </a>
      </li>
      <li class="media">
        <cite class="country">Anime News Network</cite>
        <a href="http://www.animenewsnetwork.com/feature/2012-10-30" title="Viki Feature: Making History, Rose of Versailles" target="_blank">
          Viki Feature: Making History, Rose of Versailles
        </a>
      </li>
      <li class="media">
        <cite class="country">Yahoo! Indonesia</cite>
        <a href="http://id.berita.yahoo.com/gandeng-microsoft-viki-tawarkan-konten-tv-premium-083000193.html" title="Gandeng Microsoft, Viki tawarkan konten TV Premium" target="_blank">
          Gandeng Microsoft, Viki tawarkan konten TV Premium
        </a>
      </li>
      <li class="media">
        <cite class="country">CNET</cite>
        <a href="http://asia.cnet.com/hands-on-samsung-smart-hub-62216075.htm" title="Hands-on: Samsung Smart Hub Featuring Viki" target="_blank">
          Hands-on: Samsung Smart Hub Featuring Viki
        </a>
      </li>
      <li class="media">
        <cite class="country">DongA</cite>
        <a href="http://news.donga.com/3/all/20120528/46578160/1http:/news.donga.com/3/all/20120528/46578160/1" title="Treasures Contents Translate into 150 Languages...Aims for Global Sharing" target="_blank">
          Treasures Contents Translate into 150 Languages...Aims for Global Sharing
        </a>
      </li>
      <li class="media">
        <cite class="country">Chosunilbo</cite>
        <a href="http://news.chosun.com/site/data/html_dir/2012/05/24/2012052403037.html" title="Global Video Site Viki Provides IU and Brown Eyed Girls Contents" target="_blank">
          Global Video Site Viki Provides IU and Brown Eyed Girls Contents
        </a>
      </li>
      <li class="media">
        <cite class="country">Billboard Magazine</cite>
        <a href="http://billboard.co.kr/v1/news_view.html?i=27857&t=461" title="K-Pop Panel at Music Matters" target="_blank">
          K-Pop Panel at Music Matters
        </a>
      </li>
      <li class="media">
        <cite class="country">TechCrunch</cite>
        <a href="http://techcrunch.com/2012/05/15/bbc-worldwide-extends-its-partnership-with-video-site-viki-to-cover-advertising/" title="BBC Worldwide Extends Its Partnership With Video Site Viki To Cover Advertising" target="_blank">
          BBC Worldwide Extends Its Partnership With Video Site Viki To Cover Advertising
        </a>
      </li>
      <li class="media">
        <cite class="country">Anime News Network</cite>
        <a href="http://www.animenewsnetwork.com/interview/2012-04-25/interview-razmig-hovaghimian-co-founder-and-ceo-of-viki.com" title="Interview: Razmig Hovaghimian CEO and Co-Founder Viki.com" target="_blank">
          Interview: Razmig Hovaghimian CEO and Co-Founder Viki.com
        </a>
      </li>
      <li class="media">
        <cite class="country">Business Insider</cite>
        <a href="http://articles.businessinsider.com/2012-04-19/tech/31366215_1_comments-hulu-social-circle" title="Is This Simple Feature the Future of Television?" target="_blank">
          Is This Simple Feature the Future of Television?
        </a>
      </li>
      <li class="media">
        <cite class="country">PaidContent</cite>
        <a href="http://paidcontent.org/2012/04/12/how-korean-tv-drama-playful-kiss-flopped-locally-but-hit-globally/" title="Korean Drama ‘Playful Kiss’ Flopped Globally But Hit Globally" target="_blank">
          Korean Drama ‘Playful Kiss’ Flopped Globally But Hit Globally
        </a>
      </li>
      <li class="media">
        <cite class="country">DailyTekk</cite>
        <a href="http://dailytekk.com/2012/03/26/video-revolution-100-ways-to-watch-and-create-tv-film-and-web-video/" title="Video Revolution: 100+ Ways to Watch and Create TV, Film and Web Video" target="_blank">
          Video Revolution: 100+ Ways to Watch and Create TV, Film and Web Video
        </a>
      </li>
      <li class="media">
        <cite class="country">CNET Asia</cite>
        <a href="http://asia.cnet.com/crave/samsungs-new-tv-app-targets-k-pop-fans-and-movie-buffs-62213988.htm" title="Samsung’s New TV App Targets K-Pop Fans and Movie Buffs " target="_blank">
          Samsung’s New TV App Targets K-Pop Fans and Movie Buffs
        </a>
      </li>
      <li class="media">
        <cite class="country">Straits Times</cite>
        <a href="http://www.nst.com.my/life-times/tech/innovations-for-smarter-living-1.62488" title="Innovations for Smarter Living" target="_blank">
          Innovations for Smarter Living
        </a>
      </li>
      <li class="media">
        <cite class="country">Anime News Network</cite>
        <a href="http://www.animenewsnetwork.com/news/2012-03-20/viki-streams-black-jack-21-oniisama-e-master-of-epic-waimo-kun" title="Viki Streams Black Jack 21, Oniisama E, Master of Epic, Waimo-kun" target="_blank">
          Viki Streams Black Jack 21, Oniisama E, Master of Epic, Waimo-kun
        </a>
      </li>
      <li class="media">
        <cite class="country">Anime News Network</cite>
        <a href="http://www.animenewsnetwork.com/news/2012-03-15/viki-site-streams-leiji-matsumoto-ozuma-anime-worldwide" title="Viki Site Streams Leiji Matsumoto’s Ozma Anime Worldwide " target="_blank">
          Viki Site Streams Leiji Matsumoto’s Ozma Anime Worldwide
        </a>
      </li>
      <li class="media">
        <cite class="country">China Business News Weekly</cite>
        <a href="http://www.infzm.com/content/64920" title="字幕组无国" target="_blank">
          字幕组无国
        </a>
      </li>
      <li class="media">
        <cite class="country">Southern Weekend- China</cite>
        <a href="http://www.infzm.com/content/64920" title="Viki：字幕版的维基百科" target="_blank">
          Viki：字幕版的维基百科
        </a>
      </li>
      <li class="media">
        <cite class="country">Wall Street Journal</cite>
        <a href="http://blogs.wsj.com/searealtime/2011/10/21/singapore-start-up-sees-gold-mine-in-foreign-language-tv/" title="Singapore Start-Up Sees Goldmine in Foreign-Language TV" target="_blank">
          Singapore Start-Up Sees Goldmine in Foreign-Language TV
        </a>
      </li>
      <li class="media">
        <cite class="country">TechCrunch</cite>
        <a href="http://techcrunch.com/2011/10/20/andreessen-horowitz-bbc-greylock-put-20m-in-international-video-site-viki/" title="#" target="_blank">
          Andreessen Horowitz, BBC, Greylock Put $20 Million in International Video Site Viki
        </a>
      </li>
      <li class="media">
        <cite class="country">TechCrunch</cite>
        <a href="http://techcrunch.com/2011/09/23/international-video-site-viki-debuts-iphone-app-will-partner-with-samsung-for-android-app/" title="International Video Site Viki Debuts iPhone App, Will Partner With Samsung for Android" target="_blank">
          International Video Site Viki Debuts iPhone App, Will Partner With Samsung for Android
        </a>
      </li>
      <li class="media">
        <cite class="country">C21Media </cite>
        <a href="http://www.c21media.net/news/detail.asp?area=1&article=62795" title="Splash Gives Viki Celeb Coverage" target="_blank">
          Splash Gives Viki Celeb Coverage
        </a>
      </li>
      <li class="media">
        <cite class="country">TechCrunch</cite>
        <a href="http://techcrunch.com/2011/09/16/approaching-10m-unique-visitors-international-video-site-viki-signs-deals-with-bbc-netflix/" title="Approaching 10M Unique Visitors, International Video Site Viki Signs Deals with BBC, Netflix" target="_blank">
          Approaching 10M Unique Visitors, International Video Site Viki Signs Deals with BBC, Netflix
        </a>
      </li>
      <li class="media">
        <cite class="country">The Korea Times</cite>
        <a href="http://www.koreatimes.co.kr/www/news/tech/2011/05/129_86778.html" title="Viki: The Future of TV" target="_blank">
          Viki: The Future of TV
        </a>
      </li>
      <li class="media">
        <cite class="country">Fortune</cite>
        <a href="http://tech.fortune.cnn.com/2011/09/13/singapore-startups/?section=magazines_fortune" title="Can Singapore Engineer Creativity?" target="_blank">
          Can Singapore Engineer Creativity?
        </a>
      </li>
      <li class="media">
        <cite class="country">SG Entrepreneurs</cite>
        <a href="http://sgentrepreneurs.com/marketing-branding/2011/07/14/singapores-top-30-business-brands-on-facebook/" title="Singapore’s top 30 business brands on Facebook: Viki at #1" target="_blank">
          Singapore’s top 30 business brands on Facebook: Viki at #1
        </a>
      </li>
      <li class="media">
        <cite class="country">METRO</cite>
        <a href="http://www.metroseoul.co.kr/news/articleView.html?idxno=22120" title="Viki: A Global Hub for Video Distribution" target="_blank">
          Viki: A Global Hub for Video Distribution
        </a>
      </li>
      <li class="media">
        <cite class="country">Scobelizer</cite>
        <a href="http://cinch.fm/scobleizer/133805" title="A Talk With CEO of Viki" target="_blank">
          A Talk With CEO of Viki
        </a>
      </li>
      <li class="media">
        <cite class="country">NPR</cite>
        <a href="http://www.npr.org/2010/12/09/131928982/startup-viki-uses-web-volunteers-to-subtitle-films" title="Startup Viki Users Web, Volunteers to Subtitle Films" target="_blank">
          Startup Viki Users Web, Volunteers to Subtitle Films
        </a>
      </li>
      <li class="media">
        <cite class="country">JoongAng Daily</cite>
        <a href="http://koreajoongangdaily.joinsmsn.com/news/article/article.aspx?aid=2930086" title="Viki Brings a Host of Subtitled Films to the Web" target="_blank">
          Viki Brings a Host of Subtitled Films to the Web
        </a>
      </li>
      <li class="media">
        <cite class="country">TechCrunch</cite>
        <a href="http://techcrunch.com/2010/12/08/viki-raises-4-3-million-from-vc-all-stars-to-translate-the-worlds-video/" title="Viki Raises $4.3 Million from VC All-Stars to Translate the World’s Video" target="_blank">
          Viki Raises $4.3 Million from VC All-Stars to Translate the World’s Video
        </a>
      </li>
      <li class="media">
        <cite class="country">AllThingsD</cite>
        <a href="http://allthingsd.com/20101208/ViKi-raises-millions-for-web-video-from-around-the-world/" title="Viki Raises Millions for Web Video From Around the World" target="_blank">
          Viki Raises Millions for Web Video From Around the World
        </a>
      </li>
    </ul>
  </div>
  <div class="unit size8">
    <aside class="mlx mtx ptx">
      <div class="mod">
        <div class="mod-hd">
          <h3 class="nekto">Quick Facts</h3>
        </div>
        <div class="mod-bd">
          <ol class="nav-tags">
            <li>
              <span class="pull-right align-right">Words translated</span>
              <span class="tag success">400 <span class="translation_missing" title="translation missing: en.press.million">Million</span></span>
            </li>
            <li>
              <span class="pull-right align-right">Languages translated</span>
              <span class="tag success">160+ (including Klingon!)</span>
            </li>
            <li>
              <span class="pull-right align-right">Monthly Active Users</span>
              <span class="tag success">22 <span class="translation_missing" title="translation missing: en.press.million">Million</span></span>
            </li>
            <li>
              <span class="pull-right align-right">Mobile/Connected TV Users</span>
              <span class="tag success">10.5 <span class="translation_missing" title="translation missing: en.press.million">Million</span></span>
            </li>
            <li>
              <span class="pull-right align-right">Funding</span>
              <span class="tag success">$22M</span>
            </li>
            <li>
              <span class="pull-right align-right">Team</span>
              <span class="tag success">47</span>
            </li>
            <li>
              <span class="pull-right align-right">Offices</span>
              <span class="tag success">San Francisco, Singapore, Seoul, Tokyo</span>
            </li>
          </ol>
        </div>
      </div>

      <div class="mod">
        <div class="mod-hd">
          <h3 class="nekto">Investors</h3>
        </div>
        <div class="mod-bd">
          <a href="http://greylock.com/" title="Greylock Partners" target="_blank">
            <img alt="Investor_greylock" height="60" src="//0.viki.io/a/static/press/investor_greylock-01f236424696ba9033a18f349bc348b5.png" width="242" />
          </a>
          <a href="http://a16z.com/" title="Andreessen Horowitz" target="_blank">
            <img alt="Investor_andreessen" height="50" src="//0.viki.io/a/static/press/investor_andreessen-3af2a76d9ac4546f4d0322d146ba0959.png" width="242" />
          </a>
          <a href="http://www.crv.com/" title="Charles River Ventures" target="_blank">
            <img alt="Investor_charlesriver" height="70" src="//1.viki.io/a/static/press/investor_charlesriver-fdc13e63cef770a9e4836bf20b7f8d89.png" width="234" />
          </a>
          <a href="http://neotenylabs.com/" title="Neoteny Labs" target="_blank">
            <img alt="Investor_neotenylabs" height="60" src="//1.viki.io/a/static/press/investor_neotenylabs-2375aa85021e5471505ca925193742b6.png" width="242" />
          </a>
          <a href="http://skplanet.co.kr/" title="SK Planet" target="_blank">
            <img alt="Investor_skplanet" height="70" src="//1.viki.io/a/static/press/investor_skplanet-feb16ac8b9e95cf8052eaf687850a7f5.png" width="242" />
          </a>
          <a href="http://www.bbcworldwide.com/" title="BBC Worldwide" target="_blank">
            <img alt="Investor_bbc" height="60" src="//1.viki.io/a/static/press/investor_bbc-196009fa79a2e89a785d35acdd2216c8.png" width="242" />
          </a>
        </div>
      </div>

      <div class="mod">
        <div class="mod-hd">
          <h3 class="nekto">Advisors and Angel Investors</h3>
        </div>
        <ul class="medias medias-noborder btz">
          <li class="media">
            <a href="http://www.crunchbase.com/person/chamath-palihapitiya" title="Chamath Palihapitiya | CrunchBase Profile" target="_blank">Chamath Palihapitiya</a>
          </li>
          <li class="media">
            <a href="http://www.crunchbase.com/person/david-goldberg-3" title="David Goldberg | CrunchBase Profile" target="_blank">David Goldberg</a>
          </li>
          <li class="media">
            <a href="http://www.crunchbase.com/person/dave-mcclure" title="Dave McClure | CrunchBase Profile" target="_blank">Dave McClure</a>
          </li>
        </ul>
      </div>

      <div class="mod">
        <div class="mod-hd">
          <h3 class="nekto">Awards</h3>
        </div>
        <ul class="medias medias-noborder">
          <li class="media">
            <img alt="Award_wef_tp" class="pull-right bas" height="27" src="//1.viki.io/a/static/press/award_wef_tp-1c13b1ff55874008ee6786101cd5e951.jpg" width="70" />
            <p class="media-body mtn">
              <a href="http://reports.weforum.org/technology-pioneers-2014/company-profiles/viki-inc/" title="Best International Start-Up" target="_blank">World Economic Forum Tech Pioneer 2014</a>
            </p>
          </li>
          <li class="media">
            <img alt="Award_tc" class="pull-right bas" height="32" src="//1.viki.io/a/static/press/award_tc-708d22e7cfbc387f5c3ec553f5577ed6.jpg" width="70" />
            <p class="media-body mtn">
              <a href="http://techcrunch.com/2011/01/21/congratulations-crunchies-winners-twitter-takes-best-startup-of-2010/" title="Best International Start-Up" target="_blank">Best International Start-Up</a>
            </p>
          </li>
          <li class="media">
            <img alt="Award_dld" class="pull-right bas" height="38" src="//1.viki.io/a/static/press/award_dld-fb53d6d12d7327878151824bf0563622.jpg" width="70" />
            <p class="media-body mtn">
              <a href="http://www.dld-conference.com/news/dld-events-related/dld-garage-presents-its-selection-of-20-internet-startups_aid_2148.html" title=" Top 20 Internet Start-Up" target="_blank">Top 20 Internet Start-Up</a>
            </p>
          </li>
          <li class="media">
            <img alt="Award_sxsw" class="pull-right bas" height="31" src="//1.viki.io/a/static/press/award_sxsw-fb54f5fd0a5ab4da761c3e2eb91d3357.jpg" width="70" />
            <p class="media-body mtn">
              <a href="http://sxsw.com/node/7128" title="SXSW Accelerator Finalist" target="_blank">SXSW Accelerator Finalist</a>
            </p>
          </li>
          <li class="media">
            <p class="media-body mtn">
              <a href="http://www.paleycenter.org/ic-2011-LA-convener-speaker-3/" title="Paley Center 2011 Next Big Thing" target="_blank">Paley Center 2011 Next Big Thing</a>
            </p>
          </li>
          <li class="media">
            <p class="media-body mtn">
              <a href="http://online.wsj.com/article/SB10000872396390444246904577574422852969682.html" title="WSJ Asia Most Innovative Companies 2012" target="_blank">WSJ Asia Most Innovative Companies 2012</a>
            </p>
          </li>
          <li class="media">
            <p class="media-body mtn">
              <a href="http://www.youtube.com/watch?v=eVZiNPgtXRg" title="WSJ Asia Most Innovative Companies 2012" target="_blank">Google TV Hackathon Winner 2012</a>
            </p>
          </li>
        </ul>
      </div>

      <div class="mod">
        <div class="mod-hd">
          <h3 class="nekto">Press Releases</h3>
        </div>
        <ul class="medias medias-noborder btz">
          <li class="media">
            <a href="https://docs.google.com/a/viki.com/document/d/19dXZTIetN3zheFcOwxDmZ9EE03yO1c8XDZJLUaEq9L8/" title="Global TV Site Viki Launches 'Brand Channels' for Top Broadcasters, Content Providers" target="_blank">
              Global TV Site Viki Launches 'Brand Channels' for Top Broadcasters, Content Providers
            </a>
          </li>
          <li class="media">
            <a href="https://docs.google.com/a/viki.com/document/d/10WayGC7Vcx3vpwiiC_wdpHPqxtexmuoPg8585CPfUOg/" title="Viki Signs Deal with Universal Music Group to Stream Full Music Catalog in Asia with Fan-Powered 'Subtitles'" target="_blank">
              Viki Signs Deal with Universal Music Group to Stream Full Music Catalog in Asia with
              Fan-Powered <quote>Subtitles</quote>
            </a>
          </li>
          <li class="media">
            <a href="http://www.prnewswire.com/news-releases/the-year-of-psy-how-gangnam-style-video-took-over-the-world-in-2012-183886701.html" title="The Year of Psy: How ‘Gangnam Style’ Took Over the World">
              The Year of Psy: How ‘Gangnam Style’ Took Over the World</a>
          </li>
          <li class="media">
            <a href="http://www.marketwatch.com/story/renren-and-viki-bring-subtitled-global-tv-to-renrens-160-million-users-on-56com-2012-07-13" title="Renren and Viki Bring Subtitled Global TV to Renren's 160 Million Users on 56.com">
              Renren and Viki Bring Subtitled Global TV to Renren's 160 Million Users on 56.com</a>
          </li>
          <li class="media">
            <a href="http://www.prnewswire.com/news-releases/viki-unlocks-music-lyrics-for-global-fans-signs-deal-with-warner-music-loen-seed-to-bring-music-to-new-audiences-153409255.html" title="Viki Unlocks Music Lyrics for Global Fans, Signs Deal with Warner Music, LOEN, SEED to Bring Music to New Audiences">
              Viki Unlocks Music Lyrics for Global Fans, Signs Deal with Warner Music, LOEN, SEED to Bring Music to New Audiences</a>
          </li>
          <li class="media">
            <a href="http://www.prnewswire.com/news-releases/english-releases/bbc-worldwide-and-viki-partner-to-bring-global-video-advertising-to-new-markets-151519305.html" title="BBC Worldwide and Viki Partner to Bring Global Video Advertising to New Markets">
              BBC Worldwide and Viki Partner to Bring Global Video Advertising to New Markets</a>
          </li>
          <li class="media">
            <a href="http://www.prnewswire.com/news-releases/viki-and-sbs-content-hub-sign-multi-year-agreement-to-deliver-popular-korean-shows-exclusively-to-european-audiences-145957365.html" title="Viki and SBS Content Hub Sign Multi-Year Agreement to Deliver Popular Korean Shows Exclusively to European Audiences">
              Viki and SBS Content Hub Sign Multi-Year Agreement to Deliver Popular Korean Shows Exclusively to European Audiences</a>
          </li>
          <li class="media">
            <a href="http://www.marketwatch.com/story/new-anime-series-from-legendary-manga-writer-leiji-matsumoto-to-be-released-worldwide-on-viki-2012-03-15" title="New Anime Series From Legendary Manga Writer Leiji Matsumoto to be Released Worldwide on Viki">
              New Anime Series From Legendary Manga Writer Leiji Matsumoto to be Released Worldwide on Viki</a>
          </li>
          <li class="media">
            <a href="http://techcrunch.com/2011/10/20/andreessen-horowitz-bbc-greylock-put-20m-in-international-video-site-viki/" title="Viki Secures $20 Million in Series B Financing">
              Viki Secures $20 Million in Series B Financing</a>
          </li>
          <li class="media">
            <a href="http://www.prnewswire.com/news-releases/viki-announces-43m-in-series-a-funding-and-launches-out-of-beta-111525579.html" title="Viki Announces $4.3M in Series A Funding and Launches Out of Beta">
              Viki Announces $4.3M in Series A Funding and Launches Out of Beta</a>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</div>

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
      <a href="/press?locale=en" class="first-child muted" rel="nofollow" title="English">
        <i class="img-flag-us"></i> English
</a>      <a href="/press?locale=es" class="muted" rel="nofollow" title="Español">
        <i class="img-flag-es"></i> Español
</a>    </div>
  </div>
</div>



  

  <form accept-charset="UTF-8" action="/auth_facebook" id="loginFbForm" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input id="facebook_token" name="facebook_token" type="hidden" />
</form>
  <div id="modal-backdrop" class="invisible"></div>
  

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
    window.cur_a = "static_pages_press";
    
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
    raynor.session.user_token = "cVZnsR-9eB19-l-1hd9h1ncHoRk_02";
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
