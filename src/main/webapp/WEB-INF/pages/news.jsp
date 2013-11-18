
<!DOCTYPE html>
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"  data-cast-api-enabled="true"> <!--<![endif]-->

<head>
  <title>Entertainment news from Korea and Hollywood with subtitles - Viki</title>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta http-equiv="Content-Language" content="en"/>
  <meta name="description" content="Get breaking Entertainment, Celebrity and Music news subtitled in English, Spanish, Korean and many more languages."/>
  
  <link rel='canonical' href='http://www.viki.com/news'/>
  <link rel="alternate" media="handheld" href="http://www.viki.com/m/news"/>

  <link rel='alternate' href='http://www.viki.mx/news' hreflang='es' /><link rel='alternate' href='http://www.viki.com/news' hreflang='en' /><link rel='alternate' href='http://www.viki.com/news' hreflang='x-default' />
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
    _gaq.push(['_setCustomVar', 1, 'rails_action', 'news_landing_index']);

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
  
      <script type='text/javascript'>
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        (function () {
          var gads = document.createElement('script');
          gads.async = true;
          gads.type = 'text/javascript';
          var useSSL = 'https:' == document.location.protocol;
          gads.src = (useSSL ? 'https:' : 'http:') +
            '//www.googletagservices.com/tag/js/gpt.js';
          var node = document.getElementsByTagName('script')[0];
          node.parentNode.insertBefore(gads, node);
        })();
      </script>

      <script type='text/javascript'>
        googletag.cmd.push(function () {
          googletag.defineSlot('/50449293/Display.News.Landing.1.300x250', [300, 250], 'div-gpt-ad-1374619953643-0').addService(googletag.pubads());
          googletag.pubads().enableSingleRequest();
          googletag.pubads().collapseEmptyDivs();
          googletag.enableServices();
        });
      </script>

</head>
<body class="theme-news">
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


        



<h1 class='semantic'>Browse Entertainment News Online</h1>

<ul class="breadcrumb">
  <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
    <a itemprop='url' href="/"><i class="icon-home" itemprop="title"></i></a>
  </li>
    <li itemscope itemtype="http://data-vocabulary.org/Breadcrumb">
      <span itemprop="title">News</span>
    </li>
</ul>

<section class="row">
  <div class="unit size15">
      <div class="mod mbm">
        <div class="mod-hd">
          <h3 class="nekto">Trending</h3>
        </div>
        <div class="mod-bd">
          <ul class="thumb-grid">
            <li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip" data-tooltip="video_tooltip" data-tooltip-src="/tooltips/videos/195834.json">
    <a href="/videos/195834v-m-boa-yu-ah-in-becomes-a-couple-in-her-new-mv" class="thumbnail-large">
      <img alt="[M] Boa &amp; Yu Ah In Becomes a Couple in Her New M/V" height="225" src="http://1.viki.io/v/195834/d9ac5065d59c9e5f322caa05b5f9af502ab89a19.png?x=b&amp;s=390x225&amp;e=t&amp;f=t&amp;cb=1" width="390" />
        <i class="thumb-play-large"></i>
      <div class="thumb-desc">
        <div class="thumb-country">Korea</div>
        <div class="thumb-title">[M] Boa &amp; Yu Ah In Becomes a Couple in Her New M/V</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/195834v-m-boa-yu-ah-in-becomes-a-couple-in-her-new-mv" class="info-tooltip-title">[M] Boa &amp; Yu Ah In Becomes a Couple in Her New M/V</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
       </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/195834v.json">
    <i class="icon-viki-symbol">
      <span>5</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            5
            languages
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li>
            <li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/192323.json">
    <a href="/videos/192323v-hollywoods-most-expensive-divorces" class="thumbnail">
      <img alt="Hollywood&#x27;s Most Expensive Divorces" height="107" src="http://0.viki.io/v/192323/d13f30ae2cc5a2bf21cba94a26a52dde915f5086.jpg?s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Hollywood&#x27;s Most Expensive Divorces</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/192323v-hollywoods-most-expensive-divorces" class="info-tooltip-title">Hollywood&#x27;s Most Expensive Divorces</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/192323v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/157849.json">
    <a href="/videos/157849v-m-moon-geun-young-returned-to-korea" class="thumbnail">
      <img alt="[M] Moon Geun Young returned to Korea." height="107" src="http://1.viki.io/v/157849/d34d3d5eaa63da4eb696239ee3698f678ec664cb.png?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">Korea</div>
        <div class="thumb-title">[M] Moon Geun Young returned to Korea.</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/157849v-m-moon-geun-young-returned-to-korea" class="info-tooltip-title">[M] Moon Geun Young returned to Korea.</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/157849v.json">
    <i class="icon-viki-symbol">
      <span>6</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            6
            languages
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li>
          </ul>
        </div>
      </div>
  </div>
  <div class="unit size9">
    <aside class="mlm">
          <div class="mod mod-news-related">
            <div class="mod-hd">
              <h3 class="nekto">Popular news this week</h3>
            </div>
            <div class="mod-bd">
                <div class="slides-scrollbar">
    <div class="slides-vertical" data-slider="videos">
      <div class="slides-wrapper">
        <ul class="medias medias-block medias-noborder" data-slider-items="1">
          <li class="media" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1020452v.json">
  <a href="/videos/1020452v-miranda-kerr-is-a-belieber" class="pos_1 miranda-kerr-is-a-belieber">
    <div class="thumbnail-small pull-left">
      <img alt="Miranda Kerr Is A &#x27;Belieber&#x27;" class="media-object" height="63" src="http://0.viki.io/videos/1020452v/1020452v_1310282201_1.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
        <i class="thumb-play"></i>
    </div>
    <div class="media-body">
      <h4 class="epsilon slide-title">Miranda Kerr Is A &#x27;Belieber&#x27;</h4>
      <div class="slide-desc">
          After last year&#x27;s Victoria&#x27;s Secret Fashion show, Miranda and Biebe...
      </div>
    </div>
  </a>
  <div class="info-tooltip-wrapper pos-left invisible" data-tooltip-wrapper='1'>
    <div class="info-tooltip">
      <div class="info-tooltip-title">
          2
          languages
      </div>
      <div class="spinner-wrapper"><i class="spinner"></i></div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</li>
<li class="media" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022001v.json">
  <a href="/videos/1022001v-selena-gomez-bares-cleavage-and-midriff-in-little-black-dress" class="pos_2 selena-gomez-bares-cleavage-and-midriff-in-litt">
    <div class="thumbnail-small pull-left">
      <img alt="Selena Gomez Bares Cleavage And Midriff In Little Black Dress" class="media-object" height="63" src="http://0.viki.io/videos/1022001v/1022001v_1311082002_1.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
        <i class="thumb-play"></i>
    </div>
    <div class="media-body">
      <h4 class="epsilon slide-title">Selena Gomez Bares Cleavage And Midriff In Litt...</h4>
      <div class="slide-desc">
          Selena Gomez recently said she wants guys to know that she&#x27;s the ty...
      </div>
    </div>
  </a>
  <div class="info-tooltip-wrapper pos-left invisible" data-tooltip-wrapper='1'>
    <div class="info-tooltip">
      <div class="info-tooltip-title">
          7
          languages
      </div>
      <div class="spinner-wrapper"><i class="spinner"></i></div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</li>
<li class="media" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022002v.json">
  <a href="/videos/1022002v-katie-holmes-left-tom-cruise-to-protect-suri-from-scientology" class="pos_3 katie-holmes-left-tom-cruise-to-protect-suri-fr">
    <div class="thumbnail-small pull-left">
      <img alt="Katie Holmes Left Tom Cruise To Protect Suri From Scientology" class="media-object" height="63" src="http://0.viki.io/videos/1022002v/1022002v_1311082003_1.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
        <i class="thumb-play"></i>
    </div>
    <div class="media-body">
      <h4 class="epsilon slide-title">Katie Holmes Left Tom Cruise To Protect Suri Fr...</h4>
      <div class="slide-desc">
          Tom Cruise admitted during his deposition hearing that Katie Holmes...
      </div>
    </div>
  </a>
  <div class="info-tooltip-wrapper pos-left invisible" data-tooltip-wrapper='1'>
    <div class="info-tooltip">
      <div class="info-tooltip-title">
          4
          languages
      </div>
      <div class="spinner-wrapper"><i class="spinner"></i></div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</li>
<li class="media" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022004v.json">
  <a href="/videos/1022004v-chris-hemsworths-daughter-changed-his-outlook-on-life" class="pos_4 chris-hemsworth-s-daughter-changed-his-outlook">
    <div class="thumbnail-small pull-left">
      <img alt="Chris Hemsworth&#x27;s Daughter Changed His Outlook On Life" class="media-object" height="63" src="http://0.viki.io/videos/1022004v/1022004v_1311082201_1.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
        <i class="thumb-play"></i>
    </div>
    <div class="media-body">
      <h4 class="epsilon slide-title">Chris Hemsworth&#x27;s Daughter Changed His Outlook ...</h4>
      <div class="slide-desc">
          Chris Hemsworth says being a dad certainly isn&#x27;t easy, but it&#x27;s the...
      </div>
    </div>
  </a>
  <div class="info-tooltip-wrapper pos-left invisible" data-tooltip-wrapper='1'>
    <div class="info-tooltip">
      <div class="info-tooltip-title">
          1
          language
      </div>
      <div class="spinner-wrapper"><i class="spinner"></i></div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</li>
<li class="media" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022000v.json">
  <a href="/videos/1022000v-lady-gaga-admits-to-habitual-marijuana-use-during-injury" class="pos_5 lady-gaga-admits-to-habitual-marijuana-use-duri">
    <div class="thumbnail-small pull-left">
      <img alt="Lady Gaga Admits to Habitual Marijuana Use During Injury" class="media-object" height="63" src="http://0.viki.io/videos/1022000v/1022000v_1311082001_1.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
        <i class="thumb-play"></i>
    </div>
    <div class="media-body">
      <h4 class="epsilon slide-title">Lady Gaga Admits to Habitual Marijuana Use Duri...</h4>
      <div class="slide-desc">
          Lady Gaga admitted that her marijuana use turned into habitual depe...
      </div>
    </div>
  </a>
  <div class="info-tooltip-wrapper pos-left invisible" data-tooltip-wrapper='1'>
    <div class="info-tooltip">
      <div class="info-tooltip-title">
          2
          languages
      </div>
      <div class="spinner-wrapper"><i class="spinner"></i></div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</li>
<li class="media" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1021995v.json">
  <a href="/videos/1021995v-why-cameron-diaz-re-recorded-her-lines-from-the-counselor" class="pos_6 why-cameron-diaz-re-recorded-her-lines-from-the">
    <div class="thumbnail-small pull-left">
      <img alt="Why Cameron Diaz Re-Recorded Her Lines from The Counselor" class="media-object" height="63" src="http://0.viki.io/videos/1021995v/1021995v_1311081802_1.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
        <i class="thumb-play"></i>
    </div>
    <div class="media-body">
      <h4 class="epsilon slide-title">Why Cameron Diaz Re-Recorded Her Lines from The...</h4>
      <div class="slide-desc">
          Cameron Diaz reportedly had to re-record her lines from The Counsel...
      </div>
    </div>
  </a>
  <div class="info-tooltip-wrapper pos-left invisible" data-tooltip-wrapper='1'>
    <div class="info-tooltip">
      <div class="info-tooltip-title">
          2
          languages
      </div>
      <div class="spinner-wrapper"><i class="spinner"></i></div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</li>
<li class="media" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1021803v.json">
  <a href="/videos/1021803v-heirs-cast-cheer-up-college-entrance-examinees" class="pos_7 heirs-cast-cheer-up-college-entrance-examinees">
    <div class="thumbnail-small pull-left">
      <img alt="&#x27;Heirs&#x27; Cast Cheer up College Entrance Examinees" class="media-object" height="63" src="http://0.viki.io/videos/1021803v/1021803v_1311071020_1.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
        <i class="thumb-play"></i>
    </div>
    <div class="media-body">
      <h4 class="epsilon slide-title">&#x27;Heirs&#x27; Cast Cheer up College Entrance Examinees</h4>
      <div class="slide-desc">
          
      </div>
    </div>
  </a>
  <div class="info-tooltip-wrapper pos-left invisible" data-tooltip-wrapper='1'>
    <div class="info-tooltip">
      <div class="info-tooltip-title">
          11
          languages
      </div>
      <div class="spinner-wrapper"><i class="spinner"></i></div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</li>
<li class="media" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022295v.json">
  <a href="/videos/1022295v-miley-cyrus-lights-up-onstage-at-the-mtv-emas" class="pos_8 miley-cyrus-lights-up-onstage-at-the-mtv-emas">
    <div class="thumbnail-small pull-left">
      <img alt="Miley Cyrus Lights Up Onstage at the MTV EMAs" class="media-object" height="63" src="http://0.viki.io/videos/1022295v/1022295v_1311111201_1.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
        <i class="thumb-play"></i>
    </div>
    <div class="media-body">
      <h4 class="epsilon slide-title">Miley Cyrus Lights Up Onstage at the MTV EMAs</h4>
      <div class="slide-desc">
          Miley Cyrus smokes a suspicious cigarette while accepting the Best ...
      </div>
    </div>
  </a>
  <div class="info-tooltip-wrapper pos-left invisible" data-tooltip-wrapper='1'>
    <div class="info-tooltip">
      <div class="info-tooltip-title">
          2
          languages
      </div>
      <div class="spinner-wrapper"><i class="spinner"></i></div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</li>
<li class="media" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1021994v.json">
  <a href="/videos/1021994v-taylor-swifts-fans-are-what-makes-her-different" class="pos_9 taylor-swift-s-fans-are-what-makes-her-different">
    <div class="thumbnail-small pull-left">
      <img alt="Taylor Swift&#x27;s Fans Are What Makes Her Different" class="media-object" data-real="http://0.viki.io/videos/1021994v/1021994v_1311081802_1.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" height="63" src="//1.viki.io/a/pixel-ffc07b3e7e8c5f18d20c9046df3b22d9.gif" width="110" />
        <i class="thumb-play"></i>
    </div>
    <div class="media-body">
      <h4 class="epsilon slide-title">Taylor Swift&#x27;s Fans Are What Makes Her Different</h4>
      <div class="slide-desc">
          Taylor Swift&#x27;s fans are different than other fan groups she says.
      </div>
    </div>
  </a>
  <div class="info-tooltip-wrapper pos-left invisible" data-tooltip-wrapper='1'>
    <div class="info-tooltip">
      <div class="info-tooltip-title">
          2
          languages
      </div>
      <div class="spinner-wrapper"><i class="spinner"></i></div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</li>
<li class="media" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1021993v.json">
  <a href="/videos/1021993v-will-smith-wrote-about-wanting-to-get-jada-pregnant" class="pos_10 will-smith-wrote-about-wanting-to-get-jada-preg">
    <div class="thumbnail-small pull-left">
      <img alt="Will Smith Wrote About Wanting to Get Jada Pregnant" class="media-object" data-real="http://0.viki.io/videos/1021993v/1021993v_1311081801_1.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" height="63" src="//1.viki.io/a/pixel-ffc07b3e7e8c5f18d20c9046df3b22d9.gif" width="110" />
        <i class="thumb-play"></i>
    </div>
    <div class="media-body">
      <h4 class="epsilon slide-title">Will Smith Wrote About Wanting to Get Jada Preg...</h4>
      <div class="slide-desc">
          Days before claims he allegedly cheated, Will Smith wrote on his Fa...
      </div>
    </div>
  </a>
  <div class="info-tooltip-wrapper pos-left invisible" data-tooltip-wrapper='1'>
    <div class="info-tooltip">
      <div class="info-tooltip-title">
          3
          languages
      </div>
      <div class="spinner-wrapper"><i class="spinner"></i></div>
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</li>

        </ul>
      </div>
    </div>
  </div>

            </div>
          </div>
    </aside>
  </div>
</section>

<!-- Viki Pass Banner Display.Home.950x92 -->
<div class="hidden" data-viewable='non-ps'>
  <a href="https://www.viki.com/pass?origin=leaderboard" class="vikipass-banner vikipass-leaderboard-v3 mbx" title="Upgrade to Viki Pass">Upgrade to Viki Pass</a>
</div>


<section class="row">
  <div class="unit size15">

    <ul class="tabs-flat mbm">
      <li>
        <a  class="active"
           href="/news?page=1&amp;sort=latest">
          Recently Added
        </a>
      </li>
      <li>
        <a 
           href="/news?page=1&amp;sort=viewed">
          Most Viewed
        </a>
      </li>
    </ul>
    <div class="tab-content">
        <ul class="thumb-grid mbl">
          <li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022528.json">
    <a href="/videos/1022528v-bradley-cooper-attends-his-20-year-high-school-reunion" class="thumbnail">
      <img alt="Bradley Cooper Attends His 20 Year High School Reunion" height="107" src="http://0.viki.io/videos/1022528v/1022528v_1311131000_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Bradley Cooper Attends His 20 Year High School Reunion</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022528v-bradley-cooper-attends-his-20-year-high-school-reunion" class="info-tooltip-title">Bradley Cooper Attends His 20 Year High School Reunion</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022528v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022497.json">
    <a href="/videos/1022497v-kate-upton-rumored-for-entourage-movie-role" class="thumbnail">
      <img alt="Kate Upton Rumored for &#x27;Entourage&#x27; Movie Role" height="107" src="http://0.viki.io/videos/1022497v/1022497v_1311122203_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Kate Upton Rumored for &#x27;Entourage&#x27; Movie Role</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022497v-kate-upton-rumored-for-entourage-movie-role" class="info-tooltip-title">Kate Upton Rumored for &#x27;Entourage&#x27; Movie Role</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022497v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022496.json">
    <a href="/videos/1022496v-mark-wahlberg-and-bros-to-have-wahlburger-reality-tv-show" class="thumbnail">
      <img alt="Mark Wahlberg and Bros to Have Wahlburger Reality TV Show" height="107" src="http://0.viki.io/videos/1022496v/1022496v_1311122202_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Mark Wahlberg and Bros to Have Wahlburger Reality TV Show</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022496v-mark-wahlberg-and-bros-to-have-wahlburger-reality-tv-show" class="info-tooltip-title">Mark Wahlberg and Bros to Have Wahlburger Reality TV Show</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022496v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022495.json">
    <a href="/videos/1022495v-alec-baldwin-loses-his-cool-outside-courthouse" class="thumbnail">
      <img alt="Alec Baldwin Loses His Cool Outside Courthouse" height="107" src="http://0.viki.io/videos/1022495v/1022495v_1311122201_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Alec Baldwin Loses His Cool Outside Courthouse</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022495v-alec-baldwin-loses-his-cool-outside-courthouse" class="info-tooltip-title">Alec Baldwin Loses His Cool Outside Courthouse</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022495v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022494.json">
    <a href="/videos/1022494v-kate-hudson-cant-afford-red-carpet-gowns" class="thumbnail">
      <img alt="Kate Hudson Can&#x27;t Afford Red Carpet Gowns" height="107" src="http://0.viki.io/videos/1022494v/1022494v_1311122201_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Kate Hudson Can&#x27;t Afford Red Carpet Gowns</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022494v-kate-hudson-cant-afford-red-carpet-gowns" class="info-tooltip-title">Kate Hudson Can&#x27;t Afford Red Carpet Gowns</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022494v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022493.json">
    <a href="/videos/1022493v-kelly-clarkson-hints-she-might-be-pregnant" class="thumbnail">
      <img alt="Kelly Clarkson Hints She Might Be Pregnant" height="107" src="http://0.viki.io/videos/1022493v/1022493v_1311122003_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Kelly Clarkson Hints She Might Be Pregnant</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022493v-kelly-clarkson-hints-she-might-be-pregnant" class="info-tooltip-title">Kelly Clarkson Hints She Might Be Pregnant</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022493v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022492.json">
    <a href="/videos/1022492v-jennifer-lawrence-finds-it-disgusting-miley-cyrus-and-young-sex-sells" class="thumbnail">
      <img alt="Jennifer Lawrence Finds it &#x27;Disgusting&#x27; Miley Cyrus and Young Sex Sells" height="107" src="http://0.viki.io/videos/1022492v/1022492v_1311122002_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Jennifer Lawrence Finds it &#x27;Disgusting&#x27; Miley Cyrus and Young Sex Sells</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022492v-jennifer-lawrence-finds-it-disgusting-miley-cyrus-and-young-sex-sells" class="info-tooltip-title">Jennifer Lawrence Finds it &#x27;Disgusting&#x27; Miley Cyrus and Young Sex Sells</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022492v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022491.json">
    <a href="/videos/1022491v-leann-rimes-and-eddie-cibrian-fall-in-love-skydiving" class="thumbnail">
      <img alt="LeAnn Rimes and Eddie Cibrian Fall in Love Skydiving" height="107" src="http://0.viki.io/videos/1022491v/1022491v_1311122001_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">LeAnn Rimes and Eddie Cibrian Fall in Love Skydiving</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022491v-leann-rimes-and-eddie-cibrian-fall-in-love-skydiving" class="info-tooltip-title">LeAnn Rimes and Eddie Cibrian Fall in Love Skydiving</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022491v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022478.json">
    <a href="/videos/1022478v-justin-timberlake-is-not-cool" class="thumbnail">
      <img alt="Justin Timberlake is Not Cool" height="107" src="http://0.viki.io/videos/1022478v/1022478v_1311121804_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Justin Timberlake is Not Cool</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022478v-justin-timberlake-is-not-cool" class="info-tooltip-title">Justin Timberlake is Not Cool</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022478v.json">
    <i class="icon-viki-symbol">
      <span>2</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            2
            languages
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022477.json">
    <a href="/videos/1022477v-ryan-reynolds-talks-friendship-with-michael-j-fox" class="thumbnail">
      <img alt="Ryan Reynolds Talks Friendship With Michael J. Fox" height="107" src="http://0.viki.io/videos/1022477v/1022477v_1311121803_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Ryan Reynolds Talks Friendship With Michael J. Fox</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022477v-ryan-reynolds-talks-friendship-with-michael-j-fox" class="info-tooltip-title">Ryan Reynolds Talks Friendship With Michael J. Fox</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022477v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022476.json">
    <a href="/videos/1022476v-taylor-swift-teaming-up-with-victorias-secret" class="thumbnail">
      <img alt="Taylor Swift Teaming Up with Victoria&#x27;s Secret" height="107" src="http://0.viki.io/videos/1022476v/1022476v_1311121802_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Taylor Swift Teaming Up with Victoria&#x27;s Secret</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022476v-taylor-swift-teaming-up-with-victorias-secret" class="info-tooltip-title">Taylor Swift Teaming Up with Victoria&#x27;s Secret</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022476v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022475.json">
    <a href="/videos/1022475v-bruce-and-kris-jenner-are-great-despite-split" class="thumbnail">
      <img alt="Bruce and Kris Jenner Are &#x27;Great&#x27; Despite Split" height="107" src="http://0.viki.io/videos/1022475v/1022475v_1311121801_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Bruce and Kris Jenner Are &#x27;Great&#x27; Despite Split</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022475v-bruce-and-kris-jenner-are-great-despite-split" class="info-tooltip-title">Bruce and Kris Jenner Are &#x27;Great&#x27; Despite Split</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022475v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022473.json">
    <a href="/videos/1022473v-kylie-jenner-cuddles-up-as-bruce-is-honoured-with-athlete-award" class="thumbnail">
      <img alt="Kylie Jenner Cuddles Up As Bruce Is Honoured With Athlete Award" height="107" src="http://0.viki.io/videos/1022473v/1022473v_1311121601_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Kylie Jenner Cuddles Up As Bruce Is Honoured With Athlete Award</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022473v-kylie-jenner-cuddles-up-as-bruce-is-honoured-with-athlete-award" class="info-tooltip-title">Kylie Jenner Cuddles Up As Bruce Is Honoured With Athlete Award</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022473v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022459.json">
    <a href="/videos/1022459v-lady-gaga-looks-spooky-at-the-glamour-awards" class="thumbnail">
      <img alt="Lady Gaga Looks Spooky at the Glamour Awards" height="107" src="http://0.viki.io/videos/1022459v/1022459v_1311121202_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Lady Gaga Looks Spooky at the Glamour Awards</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022459v-lady-gaga-looks-spooky-at-the-glamour-awards" class="info-tooltip-title">Lady Gaga Looks Spooky at the Glamour Awards</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022459v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022458.json">
    <a href="/videos/1022458v-alessandra-ambrosio-tucks-into-fries-just-days-ahead-of-victorias-secret-show" class="thumbnail">
      <img alt="Alessandra Ambrosio Tucks into Fries Just Days Ahead of Victoria&#x27;s Secret Show" height="107" src="http://0.viki.io/videos/1022458v/1022458v_1311121201_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Alessandra Ambrosio Tucks into Fries Just Days Ahead of Victoria&#x27;s Secret Show</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022458v-alessandra-ambrosio-tucks-into-fries-just-days-ahead-of-victorias-secret-show" class="info-tooltip-title">Alessandra Ambrosio Tucks into Fries Just Days Ahead of Victoria&#x27;s Secret Show</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022458v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022457.json">
    <a href="/videos/1022457v-jennifer-lawrence-wows-in-white-at-the-hunger-games-premiere" class="thumbnail">
      <img alt="Jennifer Lawrence Wows in White at the Hunger Games Premiere" height="107" src="http://0.viki.io/videos/1022457v/1022457v_1311121001_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Jennifer Lawrence Wows in White at the Hunger Games Premiere</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022457v-jennifer-lawrence-wows-in-white-at-the-hunger-games-premiere" class="info-tooltip-title">Jennifer Lawrence Wows in White at the Hunger Games Premiere</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022457v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022431.json">
    <a href="/videos/1022431v-beyonc-sings-along-with-young-blind-fan-at-concert" class="thumbnail">
      <img alt="Beyoncé Sings Along With Young Blind Fan At Concert" height="107" src="http://0.viki.io/videos/1022431v/1022431v_1311120001_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Beyoncé Sings Along With Young Blind Fan At Concert</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022431v-beyonc-sings-along-with-young-blind-fan-at-concert" class="info-tooltip-title">Beyoncé Sings Along With Young Blind Fan At Concert</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022431v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022410.json">
    <a href="/videos/1022410v-joanna-krupa-wears-another-bikini-for-your-viewing-pleasure" class="thumbnail">
      <img alt="Joanna Krupa Wears Another Bikini for Your Viewing Pleasure" height="107" src="http://0.viki.io/videos/1022410v/1022410v_1311112203_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Joanna Krupa Wears Another Bikini for Your Viewing Pleasure</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022410v-joanna-krupa-wears-another-bikini-for-your-viewing-pleasure" class="info-tooltip-title">Joanna Krupa Wears Another Bikini for Your Viewing Pleasure</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022410v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022409.json">
    <a href="/videos/1022409v-kaley-cuoco-slams-pregnancy-rumor" class="thumbnail">
      <img alt="Kaley Cuoco Slams Pregnancy Rumor" height="107" src="http://0.viki.io/videos/1022409v/1022409v_1311112202_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Kaley Cuoco Slams Pregnancy Rumor</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022409v-kaley-cuoco-slams-pregnancy-rumor" class="info-tooltip-title">Kaley Cuoco Slams Pregnancy Rumor</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022409v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022408.json">
    <a href="/videos/1022408v-sacha-baron-cohen-pranks-audience-at-britannia-awards" class="thumbnail">
      <img alt="Sacha Baron Cohen Pranks Audience at Britannia Awards" height="107" src="http://0.viki.io/videos/1022408v/1022408v_1311112201_5.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Sacha Baron Cohen Pranks Audience at Britannia Awards</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022408v-sacha-baron-cohen-pranks-audience-at-britannia-awards" class="info-tooltip-title">Sacha Baron Cohen Pranks Audience at Britannia Awards</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022408v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022366.json">
    <a href="/videos/1022366v-leonardo-dicaprio-celebrates-birthday-with-kanye-west" class="thumbnail">
      <img alt="Leonardo DiCaprio Celebrates Birthday With Kanye West" height="107" src="http://0.viki.io/videos/1022366v/1022366v_1311112002_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Leonardo DiCaprio Celebrates Birthday With Kanye West</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022366v-leonardo-dicaprio-celebrates-birthday-with-kanye-west" class="info-tooltip-title">Leonardo DiCaprio Celebrates Birthday With Kanye West</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022366v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022338.json">
    <a href="/videos/1022338v-david-beckham-may-receive-a-knighthood-in-new-years-honors-list" class="thumbnail">
      <img alt="David Beckham May Receive a Knighthood in New Years Honors List" height="107" src="http://0.viki.io/videos/1022338v/1022338v_1311111806_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">David Beckham May Receive a Knighthood in New Years Honors List</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022338v-david-beckham-may-receive-a-knighthood-in-new-years-honors-list" class="info-tooltip-title">David Beckham May Receive a Knighthood in New Years Honors List</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022338v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022337.json">
    <a href="/videos/1022337v-charlie-sheen-trying-to-make-amends-with-chuck-lorre" class="thumbnail">
      <img alt="Charlie Sheen Trying to Make Amends with Chuck Lorre" height="107" src="http://0.viki.io/videos/1022337v/1022337v_1311111805_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Charlie Sheen Trying to Make Amends with Chuck Lorre</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022337v-charlie-sheen-trying-to-make-amends-with-chuck-lorre" class="info-tooltip-title">Charlie Sheen Trying to Make Amends with Chuck Lorre</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022337v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li><li><div class="thumbnail-wrapper">
  <div class="thumbnail-tooltip"
       data-tooltip="video_tooltip"
       data-tooltip-src="/tooltips/videos/1022336.json">
    <a href="/videos/1022336v-simon-cowell-wants-a-smoking-room-when-baby-comes" class="thumbnail">
      <img alt="Simon Cowell Wants a Smoking Room When Baby Comes" height="107" src="http://0.viki.io/videos/1022336v/1022336v_1311111804_1.jpg?x=b&amp;s=190x107&amp;e=t&amp;f=t&amp;cb=1" width="190" />
        <i class="thumb-play"></i>
      <div class="thumb-desc">
        <div class="thumb-country">United States</div>
        <div class="thumb-title">Simon Cowell Wants a Smoking Room When Baby Comes</div>
      </div>
    </a>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <a href="/videos/1022336v-simon-cowell-wants-a-smoking-room-when-baby-comes" class="info-tooltip-title">Simon Cowell Wants a Smoking Room When Baby Comes</a>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <div class="thumbnail-tooltip-lang" data-tooltip="languages_tooltip" data-tooltip-src="/video_languages_tooltips/1022336v.json">
    <i class="icon-viki-symbol">
      <span>V</span>
    </i>
    <div class="info-tooltip-wrapper pos-right invisible" data-tooltip-wrapper='1'>
      <div class="info-tooltip">
        <div class="info-tooltip-title">
            Viki subtitles are written by fans just like you!
        </div>
        <div class="spinner-wrapper"><i class="spinner"></i></div>
        <div class="tooltip-arrow"></div>
      </div>
    </div>
  </div>
</div>
</li>
        </ul>
        <div class="pagination"><span class='page-link-current'>1</span><a class='page-link' href='/news?page=2'>2</a><a class='page-link' href='/news?page=3'>3</a><a class='page-link' href='/news?page=4'>4</a><a class='page-link' href='/news?page=5'>5</a><span class="page-ellipsis">&hellip;</span><a class='page-link' rel='next' href='/news?page=2'>Next &rarr;</a><a class='page-link' href='/news?page=42'>Last</a></div>
    </div>
  </div>

  <div class="unit size9">
    <aside class="mlm">
      <div class="mod">
        <div class="mod-hd bbs">
          <h3 class="nekto pbm"><span class="translation_missing" title="translation missing: en.core.browse">Browse</span></h3>
        </div>
        <div class="mod-bd">
          <ul class="nav-pills">
            <li>
              <a href="/news?page=1" class="active">All countries</a>
            </li>
              <li>
                <a href="/news?country=kr">Korea</a>
              </li>
              <li>
                <a href="/news?country=us">United States</a>
              </li>
              <li>
                <a href="/news?country=id">Indonesia</a>
              </li>
          </ul>
        </div>
      </div>
          <!-- Viki/ROS_MPU -->
  <div class="googleads mod mod-ads">
    <div id='div-gpt-ad-1374619953643-0' class="mod-bd">
      <script type='text/javascript'>
        googletag.cmd.push(function () {
          googletag.display('div-gpt-ad-1374619953643-0');
        });
      </script>
    </div>
    <div class="mod-ft">Sponsored</div>
  </div>

      <div class="mod" data-block-track="friendsWatching">
  <div class="mod-hd">
    <h3 class="nekto">Your friends are watching</h3>
  </div>
  <div class="mod-bd spinner-absolute">
    <ul id="fb_videos" class="medias mbn"></ul>
    <div class="fb-invite-wrapper">
      <div id="fb_spinner" class="spinner-wrapper">
        <i class="spinner"></i>
      </div>
      <div id="fb_invite" class="fb-invite"></div>
    </div>
  </div>
</div>

      <div class="hidden" data-viewable='non-ps'>
  <a href="https://www.viki.com/pass?origin=sidekick" class="vikipass-banner vikipass-sidekick mbl" title="Upgrade to Viki Pass">Upgrade to Viki Pass</a>
</div>

    </aside>
  </div>
</section>

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
      <a href="/news?locale=en" class="first-child muted" rel="nofollow" title="English">
        <i class="img-flag-us"></i> English
</a>      <a href="/news?locale=es" class="muted" rel="nofollow" title="Español">
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

    
<a href="#" data-modal="data-modal-journey" class="hidden"></a>
<div id="data-modal-journey" class="modal modal-journey first-step invisible">
  <div class="modal-body align-center">
    <h3 class="modal-title">Welcome to Viki!</h3>
    <p class="modal-desc">Bringing you the best global primetime TV, movies and more. Let us help you find a show to watch!</p>
    <div class="modal-action">
      <a href="#" class="btn-facebook btn-large track-ga-event" data-fb-login="1" data-category="onboarding-v2" data-action="facebook" data-modal-action="close">
        <i class="icon-facebook-square"></i> Login with Facebook
      </a>
      <p id="welcome_email_signup">
        <a href="/sign_up" class="track-ga-event" data-category="onboarding-v2" data-action="signup">Sign Up</a>
        with your email address or
        <a href="#" class="lowercase track-ga-event showContentModal" data-category="onboarding-v2" data-action="closePage1" data-modal-action="close">Skip</a>
        this step
      </p>
    </div>
  </div>
  <a href="#" title="Close" class="close-onboarding track-ga-event" data-category="onboarding-v2" data-action="closeButton1" data-modal-action="close"><i class="icon-x-alt"></i></a>
</div>

<a href="#" data-modal="data-modal-journey-two" class="hidden"></a>
<div id="data-modal-journey-two" class="modal modal-journey second-step invisible">
  <div class="modal-header">
    <h3>We recommend these shows!</h3>
  </div>
  <div class="modal-body">
    <div class="slides-scrollbar">
      <div class="slides-vertical">
        <div class="slides-wrapper">
          <ul class="medias medias-block medias-noborder" data-slider-items="1">
            <li class="media">
              <a href="/videos/44699v-boys-over-flowers-episode-1" target="_blank" class="track-ga-event" data-category="onboarding-v2" data-action="clickContent">
                <div class="thumbnail-small pull-left">
                  <img alt="Boys Over Flowers" height="63" src="http://0.viki.io/c/ed0/16e/06d/boys-over-flowers_590x330.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
                  <i class="thumb-play"></i>
                </div>
                <div class="media-body">
                  <span class="btn btn-secondary btn-small pull-right mhm">Watch Now</span>
                  <h4 class="epsilon slide-title">Boys Over Flowers</h4>
                  <div class="slide-desc">Boys Over Flowers is one of the biggest Korean drama hits of our time, sweeping ratings and awards across Asia in 2009 and 2010.

Jan Di is an average girl whose family owns a dry cleaning store located near the luxurious and well known Shin Hwa High School. After saving a boy from jumping off the roof of Shin Hwa High School, Jan Di is admitted into the school on a swimming scholarship. At school, Jan Di tries to avoid confrontation with the four richest and most spoiled boys known as the F4, because she knows what happens to those that stand against them. However, when Jan Di&#x27;s friend, Oh Min Ji, accidentally gets ice cream on the leader of the F4&#x27;s shoes, she&#x27;s forced to declare war on the leader of the F4, Goo Joon Pyo. What will happen though, when she falls in love with someone from the F4 and Goo Joon Pyo starts feeling something for her too? Will the love triangle disrupt F4 and change their lives forever? Get ready for addictive drama, romance and comedy at it best.</div>
                </div>
              </a>
            </li>
            <li class="media">
              <a href="/videos/67918v-playful-kiss-episode-1" target="_blank" class="track-ga-event" data-category="onboarding-v2" data-action="clickContent">
                <div class="thumbnail-small pull-left">
                  <img alt="Playful Kiss" height="63" src="http://1.viki.io/c/af6/1ad/c2a/playful_kiss_590x330.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
                  <i class="thumb-play"></i>
                </div>
                <div class="media-body">
                  <span class="btn btn-secondary btn-small pull-right mhm">Watch Now</span>
                  <h4 class="epsilon slide-title">Playful Kiss</h4>
                  <div class="slide-desc">How can a girl at the bottom of her high school class ever hope to capture the attention of the smartest, most popular boy? Ha Ni (Jung So Min) is smitten with Seung Jo (Kim Hyun Joong) from the moment she lays eyes on him on the first day of school. He is the total package – tall, athletic, good-looking, and the envy of all the students because he always gets a perfect score on all his exams. But Ha Ni’s affections are not returned, despite her energetic efforts to get his attention. Fate throws them under one roof when an earthquake destroys Ha Ni’s family home, and they live temporarily in the home of her father’s childhood friend, who turns out to be Seung Jo’s father. Will Ha Ni ever be able to get Seung Jo to think of her as anything more than a nuisance? “Playful Kiss” is a 2010 South Korean drama, that is based on the Japanese manga “Itazura Na Kiss” (“Mischievous Kiss”), which also has been adapted in Taiwan as “It Started With a Kiss” and its sequel “They Kiss Again.”</div>
                </div>
              </a>
            </li>
            <li class="media">
              <a href="/videos/91620v-my-princess-episode-1" target="_blank" class="track-ga-event" data-category="onboarding-v2" data-action="clickContent">
                <div class="thumbnail-small pull-left">
                  <img alt="My Princess" height="63" src="http://0.viki.io/c/166/4ac/032/my-princess_590x330.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
                  <i class="thumb-play"></i>
                </div>
                <div class="media-body">
                  <span class="btn btn-secondary btn-small pull-right mhm">Watch Now</span>
                  <h4 class="epsilon slide-title">My Princess</h4>
                  <div class="slide-desc">The life of Lee Seol, an average college co-ed, turns upside down when she discovers that she is the direct descendent of the last emperor of the Chosun Dynasty. Officials eager to reinstate a Korean monarchy want Seol to be properly trained to assume the role of a real princess. Her teacher is the serious young heir of the largest Korean conglomerate, who stands to lose everything if the monarchy succeeds. Will Seol ascend the throne or will the monarchy fail?

 “My Princess” is a 2011 South Korean drama series directed by Kwon Suk Jang.</div>
                </div>
              </a>
            </li>
            <li class="media">
              <a href="/videos/201161v-virgin" target="_blank" class="track-ga-event" data-category="onboarding-v2" data-action="clickContent">
                <div class="thumbnail-small pull-left">
                  <img alt="Virgin" height="63" src="http://1.viki.io/c/9422c/c23395858b.png?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
                  <i class="thumb-play"></i>
                </div>
                <div class="media-body">
                  <span class="btn btn-secondary btn-small pull-right mhm">Watch Now</span>
                  <h4 class="epsilon slide-title">Virgin</h4>
                  <div class="slide-desc">Biyan is a girl of 16 determined to stay a virgin until marriage. Her father is known to be a womanizer. This affects her mother emotionally and made Biyan even more determined to stay a virgin. Biyan has two good friends, Stella and Ketie. They belong to a popular community where teenagers often gather to just hang out. This is the community where freedom and courage have become the criteria of existence. Can Biyan keep her virginity despite the extreme ways of the people in this community?</div>
                </div>
              </a>
            </li>
            <li class="media">
              <a href="/videos/156534v-sex-is-zero" target="_blank" class="track-ga-event" data-category="onboarding-v2" data-action="clickContent">
                <div class="thumbnail-small pull-left">
                  <img alt="Sex Is Zero" height="63" src="http://0.viki.io/c/d7b/8ac/c08/Sex-is-Zero_2.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
                  <i class="thumb-play"></i>
                </div>
                <div class="media-body">
                  <span class="btn btn-secondary btn-small pull-right mhm">Watch Now</span>
                  <h4 class="epsilon slide-title">Sex Is Zero</h4>
                  <div class="slide-desc">Sex Is Zero (색즉시공, Saekjeuk Shigong) is a 2002 South Korean film written and directed by Yoon Je-kyoon, starring Lim Chang-jung, Ha Ji-won (from &quot;Secret Garden&quot;) and Yoo Chae-yeong. In the style of American gross-out comedies like American Pie, it follows the exploits of a group of college students, which eventually takes a serious turn. Sex Is Zero sold over 4 million tickets in South Korea, making it the fifth most popular film of 2002.</div>
                </div>
              </a>
            </li>
            <li class="media">
              <a href="/videos/51409v-five-senses-of-eros" target="_blank" class="track-ga-event" data-category="onboarding-v2" data-action="clickContent">
                <div class="thumbnail-small pull-left">
                  <img alt="Five Senses of Eros" height="63" src="http://1.viki.io/c/0f1/150/1d6/Five_Senses_of_Eros_590x330.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
                  <i class="thumb-play"></i>
                </div>
                <div class="media-body">
                  <span class="btn btn-secondary btn-small pull-right mhm">Watch Now</span>
                  <h4 class="epsilon slide-title">Five Senses of Eros</h4>
                  <div class="slide-desc">A man falls in love with a woman sitting across from him on a train to Pusan. A husband and wife who are deeply in love must deal with loss. A veteran actress coaches a young new actress on the art of seduction. A new widow discovers her deceased husband’s infidelity and decides to take in his mistress. Three young couples in high school decide to test their commitment by swapping partners for 24 hours. All of these stories about love intersect in unexpected ways.</div>
                </div>
              </a>
            </li>
            <li class="media">
              <a href="/videos/191167v-astro-boy-the-birth-of-astro-boy-episode-1" target="_blank" class="track-ga-event" data-category="onboarding-v2" data-action="clickContent">
                <div class="thumbnail-small pull-left">
                  <img alt="Astro Boy" height="63" src="http://1.viki.io/c/5840c/2e884403c3.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
                  <i class="thumb-play"></i>
                </div>
                <div class="media-body">
                  <span class="btn btn-secondary btn-small pull-right mhm">Watch Now</span>
                  <h4 class="epsilon slide-title">Astro Boy</h4>
                  <div class="slide-desc">Astro Boy is a science fiction series set in a futuristic world where robots co-exist with humans. Astro is a powerful robot created by the head of the Ministry of Science to replace his son , who died in a car accident. Astro is shown fighting crime, evil, and injustice. Most of his enemies were robot-hating humans, robots gone berserk, or alien invaders. Almost every story included a battle involing Astro and other robots.</div>
                </div>
              </a>
            </li>
            <li class="media">
              <a href="/videos/183964v-black-jack-original-video-animation-series-black-jack-karte-1st-iceberg-man-with-kimaira-episode-1" target="_blank" class="track-ga-event" data-category="onboarding-v2" data-action="clickContent">
                <div class="thumbnail-small pull-left">
                  <img alt="Black Jack (Original Video Animation Series)" height="63" src="http://1.viki.io/c/5851c/af0c95e374.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
                  <i class="thumb-play"></i>
                </div>
                <div class="media-body">
                  <span class="btn btn-secondary btn-small pull-right mhm">Watch Now</span>
                  <h4 class="epsilon slide-title">Black Jack (Original Video Animation Series)</h4>
                  <div class="slide-desc">In a world where the grim reaper can strike at any time, a brilliant renegade surgeon known only as Black Jack operates outside the law. For the rich and dying, he performs miracles of a macabre medical nature. Unafraid of mysteries that verge on the paranormal, Black Jack is the one man with the power to cheat death…for a terrible price!</div>
                </div>
              </a>
            </li>
            <li class="media">
              <a href="/videos/175902v-black-jack-tv-karte00-the-order-of-operations-episode-1" target="_blank" class="track-ga-event" data-category="onboarding-v2" data-action="clickContent">
                <div class="thumbnail-small pull-left">
                  <img alt="Black Jack TV" height="63" src="http://1.viki.io/c/5843c/e2e6c74a11.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
                  <i class="thumb-play"></i>
                </div>
                <div class="media-body">
                  <span class="btn btn-secondary btn-small pull-right mhm">Watch Now</span>
                  <h4 class="epsilon slide-title">Black Jack TV</h4>
                  <div class="slide-desc">Black Jack is an unlicensed doctor with a clouded, mysterious past. He works with his little assistant Pinoko, dealing with strange, dangerous medical cases. But he is a genius, and can save almost any of his patients&#x27; life, and is known to many around the world, especially to those of medicine and science. He&#x27;s a man of science himself, and does not believe much until he has seen it, yet it is many times he is surprised by love and nature often overpowering the science he bases his life in.</div>
                </div>
              </a>
            </li>
            <li class="media">
              <a href="/videos/157995v-black-jack-21-the-day-his-medical-license-is-returned-episode-1" target="_blank" class="track-ga-event" data-category="onboarding-v2" data-action="clickContent">
                <div class="thumbnail-small pull-left">
                  <img alt="Black Jack 21" height="63" src="http://0.viki.io/c/5844c/7b7debb2ba.jpg?x=b&amp;s=110x63&amp;e=t&amp;f=t&amp;cb=1" width="110" />
                  <i class="thumb-play"></i>
                </div>
                <div class="media-body">
                  <span class="btn btn-secondary btn-small pull-right mhm">Watch Now</span>
                  <h4 class="epsilon slide-title">Black Jack 21</h4>
                  <div class="slide-desc">This is a new animated TV series created by the same staff as Black Jack. While each episode of the previous series was conclusive, in this renewed series the story continues from episode to episode and some new characters are added. Black Jack, together with Pinoko, circles the globe in search of clues to reveal a plot by a mysterious group trying to kill him.</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-footer align-left">
    <div class="btn-group pull-right">
      <a href="#" class="btn btn-link muted track-ga-event" data-category="onboarding-v2" data-action="closePage2" data-modal-action="close">Close</a>
      <a href="/explore" class="btn btn-secondary btn-flat track-ga-event" data-category="onboarding-v2" data-action="clickExplore">Explore More</a>
    </div>
  </div>
  <a href="#" title="Close" class="close-onboarding track-ga-event" data-category="onboarding-v2" data-action="closeButton2" data-modal-action="close"><i class="icon-x-alt"></i></a>
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
    window.cur_a = "news_landing_index";
    
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
