
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
    _gaq.push(['_setCustomVar', 1, 'rails_action', 'static_pages_terms_of_use']);

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


        <header class="page-header pbn">
  <h1 class="capitalize pull-left"><a href="/terms_of_use">Terms of Use</a></h1>
  <p class="note ptm pull-right">Last updated: August 1, 2013</p>
</header>

<article>
  <p>Welcome to Viki.com, the official website of Viki, Inc. (<q>Viki</q>). Viki provides a unique interactive website (the <q>Site</q>) that provides users with an interactive platform to stream and watch television shows, movies, music videos or other premium content (<q>Content</q>) provided under license from third party content providers and distributors (<q>Content Providers</q>), interact with each other users and with Content and post comments, contribute to an online community where you can provide subtitles and translations for Content (<q>Subtitles</q>).</p>
  <p>These Terms of Use (<q>Terms</q>) govern your use of the Site, (collectively, any use of the Site or any Content or Subtitles on the Site or any of the interactive functionality or features provided by the Site, regardless of how you access them, are referred to as the <q>Viki Services</q>). <strong>BY REGISTERING FOR, ACCESSING, BROWSING, OR USING THE VIKI SERVICES, YOU ATTEST THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. If you do not agree to the terms and conditions of the Agreement, you may NOT use the Viki Services.</strong></p>
</article>

<section id="toc-top">
  <h2 class="bbm mbm pbm">Contents</h2>
  <div class="row pbm">
    <div class="unit size8">
      <ol class="nav-toc">
        <li><a href="#toc-binding-contract" data-scroll="1">Binding Contract</a></li>
        <li><a href="#toc-other-agreement" data-scroll="1">Other Agreements</a></li>
        <li><a href="#toc-viki-services" data-scroll="1">The Viki Services</a></li>
        <li><a href="#toc-billing-payments" data-scroll="1">Billing and Payments</a></li>
        <li><a href="#toc-social-sharing" data-scroll="1">Social Sharing</a></li>
        <li><a href="#toc-ipr" data-scroll="1">Intellectual Property Ownership</a></li>
        <li><a href="#toc-submissions" data-scroll="1">Submissions</a></li>
        <li><a href="#toc-dmca" data-scroll="1">Digital Millennium Copyright Act</a></li>
      </ol>
    </div>
    <div class="unit size8">
      <ol start="9" class="unit size8 nav-toc">
        <li><a href="#toc-prohibited-conduct" data-scroll="1">Prohibited Conduct</a></li>
        <li><a href="#toc-account" data-scroll="1">Account</a></li>
        <li><a href="#toc-cecs" data-scroll="1">Consent to Electronic Communication and Service</a></li>
        <li><a href="#toc-ext-links" data-scroll="1">External Links</a></li>
        <li><a href="#toc-termination" data-scroll="1">Termination; Terms of Service Violations</a></li>
        <li><a href="#toc-indemnification" data-scroll="1">Indemnification</a></li>
        <li><a href="#toc-disclaimers" data-scroll="1">Disclaimers; No Warranties</a></li>
        <li><a href="#toc-liability" data-scroll="1">Limitation of Liability and Damages</a></li>
      </ol>
    </div>
    <div class="unit size8">
      <ol start="17" class="nav-toc">
        <li><a href="#toc-accept-terms" data-scroll="1">Ability to Accept Terms of Use</a></li>
        <li><a href="#toc-assigment" data-scroll="1">Assignment</a></li>
        <li><a href="#toc-miscellaneous" data-scroll="1">Miscellaneous</a></li>
        <li><a href="#toc-no-archive" data-scroll="1">No Achive</a></li>
        <li><a href="#toc-us-only" data-scroll="1">United States Only</a></li>
        <li><a href="#toc-update-terms" data-scroll="1">Changes and Updates to These Terms</a></li>
      </ol>
    </div>
  </div>
</section>

<div class="row">
  <div class="unit size16">
    <article>
      <section id="toc-binding-contract">
        <h2 class="bbs mbm mtx pvm">1. Binding Contract <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>By registering for or using the Viki Services, either through Viki or via Facebook, Inc ("Facebook"), you confirm that you are 18 years of age or more, that any information you submit to Viki is true, accurate and complete, and that you agree to the terms and conditions of these Terms, our Privacy Policy and our Intellectual Property Policy.</p>
        <p>We reserve the right to modify or discontinue the Site (or any portion of the Viki Services), temporarily or permanently, with or without notice to you, and are not obligated to support or update the Site. You agree that Viki shall not be liable to you or any third party in the event that we exercise our right to modify or discontinue the Site (or any portion of the Viki Services). Unless explicitly stated otherwise, any new features that augment or enhance the current Site shall be subject to these Terms.</p>
      </section>

      <section id="toc-other-agreement">
        <h2 class="bbs mbm mtx pvm">2. Other Agreements <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>Our Privacy Policy describes the information Viki collects when you use this Site, how we use it, and with whom we share with it. Our Intellectual Property Policy provides directions for submitting a notice of alleged copyright infringement as permitted by the Digital Millennium Copyright Act. Our Privacy Policy and Intellectual Property Policy are both part of these Terms. By agreeing to these Terms, you are also consenting to the terms of our Privacy Policy and our Intellectual Property Policy. Please <a href="/privacy" title="Privacy Policy">click here</a> to review our Privacy Policy and <a href="/copyright" title="Privacy Policy">here</a> to review our Intellectual Property Policy.</p>
      </section>

      <section id="toc-viki-services">
        <h2 class="bbs mbm mtx pvm">3. The Viki Services <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <ol class="bullet-alpha-lower indented-list">
          <li>Subject to these Terms and your payment of the applicable fee for a services (<q>Fees</q>), Viki grants to you a limited, non-exclusive right to use the Viki Services for noncommercial purposes to stream the specific content (<q>Content</q>) that you have purchased, which is provided by third parties (<q>Providers</q>) and to participate in a community of users to provide comments and posts and to submit subtitles for Content (<q>Subtitles</q>). You do not have a right to transfer or sublicense your rights under these Terms, including access to any Content that you have purchased. Use of Facebook is subject to any applicable terms of use, terms of service, policies, or user agreements published by Facebook from time to time.</li>
          <li>The quality of streaming Content may vary from computer to computer, and device to device, and may be affected by a variety of factors, such as your location, the bandwidth available through and/or speed of your Internet connection. In the event that streaming Content is impaired by the size of your cached memory files, you are responsible for clearing your cache periodically to resolve this issue. You are responsible for all Internet access charges. Viki makes no representations or warranties about the quality of your instant watching experience on your display. You must be connected to the Internet throughout your streaming experience. The Viki Services or specific Content may only be available in certain geographic locations and availability may vary by geographic location.</li>
          <li>The Viki Services uses software that is proprietary to Viki to enable the real-time streaming of Content (<q>Viki Software</q>). The Viki Software is licensed to you by Viki pursuant to these Terms solely for the purpose of using the Viki Services and for no other purpose whatsoever. You are expressly prohibited from copying, reproducing, decompiling, reverse engineering, disassembling, modifying or creating derivative works of the Viki Software or any portion thereof. Any unauthorized use of the Viki Software is strictly prohibited and we reserve the right to discontinue provision of the Viki Software at any time, without prior or any notice.</li>
          <li>In response to requests from Providers, or due to technical limitations, or for any reason in our sole and absolute discretion, and without prior notice to you, some or all Content may be removed from the Viki Services or may cease to be available for streaming.</li>
        </ol>
      </section>

      <section id="toc-billing-payments">
        <h2 class="bbs mbm mtx pvm">4. Billing and Payments <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <ol class="bullet-alpha-lower indented-list">
          <li>Unless otherwise specified on the Site, Viki's price for the Viki Services is set forth on the Site, however, such prices do not include, and you shall pay, any excise, sales, use or like taxes, and therefore such prices are subject to increase in the amount of any such tax (excluding tax on net income) that Viki may be required to collect or pay upon the sale or delivery of the service purchased hereunder. Prices are, and all payments shall be made, in U.S. dollars.</li>
          <li>
            <p>If a Viki Service is quoted at an incorrect price due to typographical error or error in pricing information:</p>
            <ol class="bullet-roman-lower">
              <li>Viki has the right to refuse or cancel any orders placed for the service quoted at the incorrect price, even if Viki has confirmed the receipt of your order and charged your credit or debit card; and</li>
              <li>if Viki has charged your credit or debit card but subsequently canceled your order, Viki will promptly issue a credit to your credit or debit card account for the amount charged via the method you paid.</li>
            </ol>
          </li>
          <li>You may pay fees using the methods available for the particular service and you agree to the terms and conditions applicable to each payment method you choose. Payment methods may vary by service, and may include credit or debit card, PayPal, mobile and/or other methods. When you provide credit card or other payment information to Viki, You can use a credit or debit card, PayPal or other similar accounts (each referred to as "Payment Method") to pay for Viki Services. Your Payment Method will be billed for the full amount at the time you request the applicable Viki Service. You expressly authorize us to charge this amount to the Payment Method you provided during registration or to a different Payment Method if you so designate at the time you make your request. Please note that prices and charges are subject to change with notice. EXCEPT AS DESCRIBED ABOVE, PAYMENTS ARE NONREFUNDABLE AND THERE ARE NO REFUNDS OR CREDITS FOR PARTIALLY USED PERIODS. At any time, and for any reason, we may provide a refund, discount, or other consideration to some or all of our members ("credits"). The amount and form of such credits, and the decision to provide them, are at our sole and absolute discretion. The provision of credits in one instance does not entitle you to credits in the future for similar instances, nor does it obligate us to provide credits in the future, under any circumstance. Charges to a PayPal account are subject to any terms and conditions that may be imposed by PayPal, Inc. For more information about PayPal's terms and conditions visit www.paypal.com. If a Provider allows you to use a credit card as a Payment Method, the Viki Services will automatically connect and redirect you to a third party payment processing portal hosted by a third party payment processor. <strong>VIKI DOES NOT COLLECT, ACCESS, STORE OR PROCESS ANY CREDIT CARD INFORMATION. PLEASE READ THE PRIVACY POLICY ON OUR PAYMENT PROCESSOR'S WEBSITE REGARDING THE USE, STORAGE AND PROTECTION OF YOUR CREDIT CARD INFORMATION BEFORE SUBMITTING ANY CREDIT CARD INFORMATION.</strong></li>
        </ol>
      </section>

      <section id="toc-social-sharing">
        <h2 class="bbs mbm mtx pvm">5. Social Sharing <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <ol class="bullet-alpha-lower indented-list">
          <li>When you use the Viki Services, you will share certain information with other users of Facebook and the Viki Services, specifically, information about Content that you view or access via the Viki Services. The way in which your personal viewing information is disclosed and shared with other users of the Viki Services or other Facebook users is described in detail in our Privacy Policy. <strong>BY USING THE SITE AND/OR CONNECTING VIA YOUR FACEBOOK ACCOUNT, YOU ARE EXPRESSLY CONSENTING TO THE DISCLOSURE BY VIKI OF THIS INFORMATION IN ACCORDANCE WITH THE TERMS OF OUR PRIVACY POLICY.</strong> Viki will renew the consent you provided above at least once every twenty-four (24) months by a means selected by Viki, which may include one of more of the following methods: email notice, disabling your access or suspending your account until you click "I agree" to the then current version of these Terms and our Privacy Policy (which is always incorporated within these Terms by reference) or requiring you to click a link in an email sent to your address on file before being permitted to access your Account. <strong>You expressly agree that it is your responsibility to ensure that Viki has current and accurate contact information for you and any continued use by you of the Site after twenty-four (24) months constitutes your continued express consent to the disclosure and sharing of your Content Information as described in this Section.</strong></li>
        </ol>
      </section>

      <section id="toc-ipr">
        <h2 class="bbs mbm mtx pvm">6. Intellectual Property Ownership <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <ol class="bullet-alpha-lower indented-list">
          <li>Unless otherwise noted, the Viki Services, and all Content available via the Viki Services (excluding Submissions, as defined below), including, but not limited to, Movies or Events you can watch instantly, text, graphics, logos, designs, photographs, button icons, images, audio/video clips, digital downloads, data compilations, names, logos, trademarks, service marks, brand identities, characters, trade names, graphics, designs, copyrights, trade dress, or other intellectual property, and the organization, compilation, look and feel, of the Viki Services (collectively, the "Materials") are owned by Viki or the applicable Provider and are protected under copyright, trademark and other intellectual property and proprietary rights laws. As between Viki and you, all right, title and interest in and to the Materials (including all Content) will at all times remain with Viki and/or its Providers. You agree not to decompile, reverse engineer or disassemble any software or other products or processes accessible through the Viki Services, not to copy, reproduce, distribute, insert any code or product into, or manipulate the Content or the Viki Services in any way, and not to use any data mining, data gathering or extraction method. Viki reserves the right to terminate your access to the Viki Services if it, in its sole and absolute discretion, believes that you are in violation of any restriction contained in these Terms or are engaged or assisting in violating the copyrights of Viki or any Provider. Viki does not promote, foster or condone, and expressly prohibits any and all infringing activity. The use of the Viki Services is solely for your personal and non-commercial use. Please see our Intellectual Property Policy for more information about notifying us of the presence of any allegedly infringing Materials or Content on the Viki Services.</li>
          <li>Viki and V.SCOOP are trademarks of Viki. The Viki logo and the V.SCOOP logo are trademarks of Viki. The Viki Services and user interfaces, including but not limited to its graphics, logos, page headers, button icons, scripts and service names constitute trade dress of Viki, Inc. The Facebook website, including but not limited to its graphics, logos, page headers, button icons, scripts and service names constitute trade dress of Facebook, Inc. Other trademarks, logos, movie or program names, images, personal likenesses, and celebrity names that are available in connection with any Content are the property of the respective Provider, which may or may not be affiliated with, connected to, or sponsored by Viki. Any images of persons or personalities contained on the Site and user interfaces are not an indication or endorsement of Viki or any particular product or our service unless otherwise indicated. The trademarks, service marks and trade dress of Viki, Facebook, or any Provider may not be used or reproduced without prior written approval from Viki, Facebook or the respective Provider.</li>
          <li>
            <p>You are permitted to use the Viki Services and the Content for lawful purposes as provided in these Terms; any other use, misuse, distribution, reproduction, or copying of any Content is strictly prohibited. Viki grants you a non-exclusive, limited, personal, non-transferable, revocable, license to use the Viki Services to access and watch the Content, without right to sublicense, under the following conditions: you shall not:</p>
            <ol class="bullet-roman-lower">
              <li>copy, retransmit, modify, disseminate, display, perform, reuse, re-post, broadcast, circulate, or otherwise distribute the Content, or modify or re-use all or part of the Content,</li>
              <li>use any tradename, trademark, or brand name of Viki in metatags, keywords and/or hidden text,</li>
              <li>create derivative works from the Content or commercially exploit Viki Services or the Content, in whole or in part, in any way,</li>
              <li>use the Viki Services, the Materials, any Content, and/or any portion thereof, in any manner that may give a false or misleading impression, attribution or statement as to Viki, a Provider, or any third party associated with or appearing in any Content;</li>
              <li>use web crawlers, web robots, web scutters, ants, automatic indexers, bots, worms, and other such devices in connection with the Site; provided, however, that general purpose internet search engines and non-commercial public archives that use tools to gather information for the sole purpose of displaying hyperlinks to the Site are granted a limited exception from the foregoing exclusion, provided that they do so from a stable IP address or range of IP addresses using an easily-identifiable agent;</li>
              <li>post, transmit or submit any confidential, false, misleading, unlawful, infringing, threatening, abusive, harassing, libelous, defamatory, discriminatory, obscene, inflammatory, scandalous, pornographic or profane material or any material that could constitute or encourage conduct that would be considered a criminal offense, give rise to civil liability, or would otherwise violate the law; </li>
              <li>use the Site in any manner that could damage, disable, overburden, or impair the Site or interfere with any other party’s use of the Site;</li>
              <li>obtain or attempt to obtain any content through any means not intentionally made available or provided for through the Site;</li>
              <li>impersonate or misrepresent your affiliation with someone else;</li>
              <li>remove, modify, disable, block, obscure or otherwise impair any advertising in connection with the Site;</li>
              <li>collect personally identifiable information in violation of Viki’s privacy policy;</li>
              <li>harvest information about users for the purpose of sending, or to facilitate or encourage the sending of, unsolicited bulk or other communications;</li>
              <li>post or transmit any worms, viruses, Trojans, or other harmful, disruptive, or destructive files, code, or programs to the Site; or</li>
              <li>use the Site to advertise or perform any commercial solicitation.</li>
            </ol>
          </li>
        </ol>
      </section>

      <section id="toc-submissions">
        <h2 class="bbs mbm mtx pvm">7. Submissions <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <ol class="bullet-alpha-lower indented-list">
          <li>The Site may now or in the future permit the submission of text, subtitles, dubs or other communications submitted by you and other users (“Submissions”) and the hosting, sharing, and/ or publishing of such Submissions. Any opinions, advice, statements, services, offers, or other information contained in any Submission expressed are those of the respective authors and not of Viki, or its shareholders, directors, officers, or employees or licensors. Under no circumstances shall Viki, or its shareholders, directors, officers, directors, or employees or licensors be held liable for any loss or damage caused by your reliance on information obtained through the Viki Services. It is your responsibility to evaluate the information, opinion, advice, or other content available through the Viki Services.</li>
          <li>
            <p>In addition, you agree that the following restrictions shall apply with respect to any Submission:</p>
            <ol class="bullet-roman-lower">
              <li>Viki does not guarantee any confidentiality with respect to any Submissions and shall have no liability to you for any content posted in a Submission.</li>
              <li>
                <p>Viki shall have the right, but not the obligation, to review Submissions and delete any Submission that violates these Terms or contains any of the following types of content (each a "Prohibited Submissions"):</p>
                <ul>
                  <li>Any Submission that is unlawful, libelous, defamatory, obscene, pornographic, indecent, lewd, racially offensive, suggestive, harassing, threatening, invasive of privacy or publicity rights, abusive, inflammatory, fraudulent or otherwise objectionable;</li>
                  <li>Any Submission that would constitute, encourage or provide instructions for a criminal offense, violate the rights of any party, or that would otherwise create liability or violate any local, state, national or international law;</li>
                  <li>Any Submission that may infringe any patent, trademark, trade secret, copyright or other intellectual or proprietary right of any party;</li>
                  <li>Any Submission that impersonates any person or entity or otherwise misrepresents your affiliation with a person or entity;</li>
                  <li>Any Submission that violates the Facebook Terms of Service agreement;</li>
                  <li>Unsolicited promotions, political campaigning, advertising or solicitations;</li>
                  <li>Private information of any third party, including, without limitation, addresses, phone numbers, email addresses, Social Security numbers and credit card numbers;</li>
                  <li>Viruses, spyware, Trojans, corrupted data or any other harmful, disruptive or destructive files; or</li>
                  <li>Any Submission that in our sole judgment is inappropriate or objectionable or which restricts or inhibits any other person from using or enjoying the Site, or which may expose Viki or any Provider to any harm or liability of any type.</li>
                </ul>
              </li>
            </ol>
          </li>
          <li>You shall be solely responsible for your own Submissions (including text, subtitles, dubs or other communications or graphics submitted by you and other users and the consequences of posting or publishing them). You retain all of your ownership rights in your Submissions. However, by submitting the Submissions to Viki, you hereby grant Viki and its successors and assigns a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, sublicenseable and transferable license to use, reproduce, distribute, prepare derivative works of, display, publish, broadcast, perform, make, use, import, offer to sell, sell, and otherwise transfer all copyrights, inventions, and other intellectual property rights in the Submissions in connection with the Site and Viki's (and its successor's and assign's) business, including without limitation for promoting and redistributing part or all of the Site (and derivative works thereof) in any form and media formats and through any media channels. You also hereby grant each user of the Site a worldwide, non-exclusive, royalty-free license to access your Submissions through the Site, and to use, reproduce, distribute, prepare derivative works of, display and perform such Submissions as permitted through the functionality of the Site and under these Terms of Service. The foregoing license granted by you to users of the Site terminates once you remove or delete a Submission from the Site.</li>
          <li>By using this site, you: (i) direct Viki to store your Submissions on our servers and systems solely at your instruction, and (ii) grant Viki an unlimited, perpetual, royalty-free, sub-licensable, transferable and irrevocable license to use, modify, or adapt the Submissions for any purpose whatsoever, including but not limited to use that may be commercial in nature.</li>
          <li>You acknowledge and agree that the Viki Services is not and shall not function as an archive. Viki shall have no liability to you or any other person for loss, damage, or destruction to your Submission. You shall be solely responsible for maintaining independent archival and backup copies of any Submission</li>
          <li>If notified of an allegedly Prohibited Submission, Viki may investigate the allegation and determine in its sole discretion whether to remove the Submission, which it reserves the right to do at any time and without notice.</li>
          <li>For clarity, Viki does not permit use of the Viki Services for copyright infringing activities. VIOLATORS OF THIRD-PARTY RIGHTS MAY BE SUBJECT TO CRIMINAL AND CIVIL LIABILITY. VIKI RESERVES ALL RIGHTS AND REMEDIES AGAINST ANY USER WHO VIOLATES THESE TERMS.</li>
        </ol>
      </section>

      <section id="toc-dmca">
        <h2 class="bbs mbm mtx pvm">8. Digital Millennium Copyright Act <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <ol class="bullet-alpha-lower indented-list">
          <li>Viki is committed to respecting and protecting the legal rights of copyright owners. As such, Viki complies with Section 512(c)(3) of the DMCA (17 U.S.C. § 512 et seq.). If you believe any of the Content infringes upon your intellectual property rights, please submit a notification alleging such infringement in accordance with our <a href="/copyright" title="Intellectual Property Policy">Intellectual Property Policy</a>.</li>
        </ol>
      </section>

      <section id="toc-prohibited-conduct">
        <h2 class="bbs mbm mtx pvm">9. Prohibited Conduct <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <ol class="bullet-alpha-lower indented-list">
          <li>
            <p>By using the Viki Services, you agree not to:</p>
            <ol class="bullet-roman-lower">
              <li>use the Viki Services for any purposes other than to view Content via the Viki Services or share Submissions using methods provided by Viki;</li>
              <li>rent, lease, loan, sell, resell, sublicense, distribute or otherwise transfer the licenses granted herein or any Materials (including Content);</li>
              <li>impersonate any person or entity, falsely claim an affiliation with any person or entity, or access the Viki Services accounts of others without permission, forge another person's digital signature, misrepresent the source, identity, or content of information transmitted via the Viki Services, or perform any other similar fraudulent activity;</li>
              <li>delete the copyright notices or other proprietary rights on the Viki Services or Content;</li>
              <li>use the Viki Services for any illegal purpose, or in violation of any local, state, national, or international law, including, without limitation, laws governing intellectual property and other proprietary rights, and data protection and privacy;</li>
              <li>use the Viki Services for any commercial use, it being understood that the Viki Services is for personal, non-commercial use only;</li>
              <li>use the Viki Services if you are under the age of 13 years old, or access portions of the Viki Services which are for users over 17 years old if you are under the age of 17;</li>
              <li>remove, circumvent, disable, damage or otherwise interfere with security-related features of the Viki Services, features that prevent or restrict use or copying of any content accessible through the Viki Services or Content, or features that enforce limitations on the use of the Viki Services or Content; </li>
              <li>reverse engineer, decompile, disassemble or otherwise attempt to discover the source code of the Viki Services or any part thereof, except and only to the extent that such activity is expressly permitted by applicable law notwithstanding this limitation; </li>
              <li>modify, adapt, translate or create derivative works based upon the Viki Services or any part thereof, except and only to the extent foregoing restriction is expressly prohibited by applicable law; or</li>
              <li>intentionally interfere with or damage operation of the Viki Services or any user’s enjoyment of them, by any means, including uploading or otherwise disseminating viruses, adware, spyware, worms, or other malicious code.</li>
            </ol>
          </li>
        </ol>
      </section>

      <section id="toc-account">
        <h2 class="bbs mbm mtx pvm">10. Account <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>If you register an account with Viki, you are solely responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password. You agree that the information you provide to Viki on registration and at all other times will be true, accurate, current, and complete. You also agree that you will ensure that this information is kept accurate and up-to-date at all times. If you have reason to believe that your account is no longer secure (e.g., in the event of a loss, theft or unauthorized disclosure or use of your account ID, password, or any Payment Method account number if applicable), then you agree to immediately notify Viki. You may be liable for the losses incurred by Viki or others due to any unauthorized use of your Account.</p>
      </section>

      <section id="toc-cecs">
        <h2 class="bbs mbm mtx pvm">11. Consent to Electronic Communication and Service <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>By using the Viki Services, you are consenting to receive certain communications from Viki via email communication or via electronic messaging within your Account. These communications may include notices about your account (e.g., change in password or Payment Method, confirmation e-mails and other transactional information) and information concerning or related to the Viki Services. We may also send you marketing communications in accordance with our Privacy Policy. You may opt-out of receiving marketing communications via email by clicking on the unsubscribe link in the bottom of the email. However, you agree that any notice, agreements, disclosure or other communications relating to your Account or the Viki Services are part of the Viki Services (including any legal service of process or similar document related to any claim that you have used the Service to engage in any Prohibited Conduct, as defined above) that we send to you electronically will satisfy any legal communication requirements, including that such communications be in writing.</p>
      </section>

      <section id="toc-ext-links">
        <h2 class="bbs mbm mtx pvm">12. External Links <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>These Terms apply to all users of the Site, including users who are also contributors of Content or Submissions. The Site may contain links to third party websites that are not owned or controlled by Viki. Viki has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party websites, and you access and use these websites solely at your own risk. These links are provided for your reference and convenience only, and do not necessarily imply any endorsement, sponsorship or recommendation of the material on these third-party websites or any association with their operators. In addition, Viki will not and cannot control or edit the content of any third-party site. By using the Site, you expressly relieve Viki from any and all liability arising from your use of any third-party website and from any loss or damage of any sort you may incur from dealing with any third party. Accordingly, we encourage you to be aware when you leave the Site and to read the terms and conditions of each other website that you visit. <strong>If you do not have another agreement with Viki, you may link to the home page (and no other page) of the Site from your website, subject to the following</strong>:</p>
        <ol class="bullet-alpha-lower indented-list">
          <li>you may not frame the Site or any portion of the Site;</li>
          <li>you are authorized to link only to the home page, and not to any other page in the Site;</li>
          <li>you will not override or hinder the functionality of an end-user's Web browser's <q>back</q> function;</li>
          <li>the link must be identified using a plain text rendering of the Viki name and not any Viki logo;</li>
          <li>you may not use the link in any way that suggests that Viki is associated with or endorses you or your website, without Viki's prior written consent;</li>
          <li>the link may not appear on any website that a reasonable person may consider obscene, defamatory, harassing, offensive or malicious, and may not be presented in any way that disparages Viki or damages its reputation and goodwill; and</li>
          <li>we may terminate your right to link to the Site at any time for any reason or no reason</li>
        </ol>
      </section>

      <section id="toc-termination">
        <h2 class="bbs mbm mtx pvm">13. Termination; Terms of Service Violations <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <ol class="bullet-alpha-lower indented-list">
          <li>You agree that Viki, in its sole discretion, for any or no reason, and without penalty, may terminate any account (or any part thereof) you may have with Viki or your use of the Viki Services and remove and discard all or any part of your account, and any Submissions, at any time.</li>
          <li>Viki may also in its sole discretion and at any time discontinue providing access to the Viki Services, or any part thereof, with or without notice. You agree that any termination of your access to the Viki Services or any account you may have or portion thereof may be effected without prior notice, and you agree that Viki will not be liable to you or any third party for any such termination. Any suspected fraudulent, abusive or illegal activity may be referred to appropriate law enforcement authorities. These remedies are in addition to any other remedies Viki may have at law or in equity. As discussed herein, Viki does not permit copyright infringing activities on the Viki Services, and will terminate access to the Viki Services, and remove all Submissions or other content submitted by any users who are found to be repeat infringers.</li>
          <li>Your only remedy with respect to any dissatisfaction with (i) the Viki Services, (ii) any term of these Terms, (iii) any policy or practice of Viki in operating the Viki Services, or (iv) any Content or Submission, is to delete your account with the Viki Services and discontinue use of any and all parts of the Viki Services.</li>
        </ol>
      </section>

      <section id="toc-indemnification">
        <h2 class="bbs mbm mtx pvm">14. Indemnification <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>You agree to indemnify, save, and hold Viki, its affiliated companies, contractors, employees, agents and its third-party suppliers, licensors, and partners harmless from any claims, losses, damages, liabilities, including legal fees and expenses, arising out of your use or misuse of the Viki Services, any violation by you of these Terms, or any breach of the representations, warranties, and covenants made by you herein. Viki reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify Viki, and you agree to cooperate with Viki's defense of these claims. Viki will use reasonable efforts to notify you of any such claim, action, or proceeding upon becoming aware of it.</p>
      </section>

      <section id="toc-disclaimers">
        <h2 class="bbs mbm mtx pvm">15. Disclaimers; No Warranties <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <ol class="bullet-alpha-lower indented-list">
          <li>TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, VIKI, AND ITS AFFILIATES, PARTNERS, LICENSORS AND SUPPLIERS, INCLUDING THE PROVIDERS, DISCLAIM ALL WARRANTIES, STATUTORY, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT OF PROPRIETARY RIGHTS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM VIKI OR THROUGH THE VIKI SERVICES WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED HEREIN. YOU EXPRESSLY ACKNOWLEDGE THAT AS USED IN THIS SECTION 13 THE TERM VIKI INCLUDES VIKI' OFFICERS, DIRECTORS, EMPLOYEES, SHAREHOLDERS, AGENTS, LICENSORS AND SUBCONTRACTORS.</li>
          <li>YOU EXPRESSLY AGREE THAT USE OF THE VIKI SERVICES IS AT YOUR SOLE RISK. THE VIKI SERVICES AND ANY materials, content, DATA, INFORMATION, THIRD-PARTY SOFTWARE, SUBMISSIONS, REFERENCE SITES, SERVICES, OR APPLICATIONS MADE AVAILABLE IN CONJUNCTION WITH OR THROUGH THE VIKI SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE", "WITH ALL FAULTS" BASIS AND WITHOUT WARRANTIES OR REPRESENTATIONS OF ANY KIND EITHER EXPRESS OR IMPLIED.</li>
          <li>VIKI, ITS SUPPLIERS, LICENSORS, AFFILIATES, AND ProviderS DO NOT WARRANT THAT THE materials, content, DATA, SUBMISSIONS, FUNCTIONS, OR ANY OTHER INFORMATION OFFERED ON OR THROUGH THE VIKI SERVICES OR ANY REFERENCE SITES WILL BE UNINTERRUPTED, OR FREE OF ERRORS, VIRUSES, OR OTHER HARMFUL COMPONENTS AND DO NOT WARRANT THAT ANY OF THE FOREGOING WILL BE CORRECTED.</li>
          <li>VIKI, ITS SUPPLIERS, LICENSORS, AFFILIATES, AND PARTNERS DO NOT WARRANT OR MAKE ANY REPRESENTATIONS REGARDING THE USE OR THE RESULTS OF THE USE OF THE VIKI SERVICES OR ANY CONTENT IN TERMS OF CORRECTNESS, ACCURACY, RELIABILITY, OR OTHERWISE.</li>
          <li>YOU UNDERSTAND AND AGREE THAT YOU USE, ACCESS, DOWNLOAD, OR OTHERWISE OBTAIN INFORMATION, content, MATERIALS, OR DATA THROUGH THE VIKI SERVICES SOLELY AT YOUR OWN DISCRETION AND RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING YOUR COMPUTER SYSTEM) OR LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OR USE OF SUCH MATERIAL OR DATA.</li>
        </ol>
      </section>

      <section id="toc-liability">
        <h2 class="bbs mbm mtx pvm">16. Limitation of Liability and Damages <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <ol class="bullet-alpha-lower indented-list">
          <li>UNDER NO CIRCUMSTANCES, INCLUDING, BUT NOT LIMITED TO, NEGLIGENCE, WILL VIKI, Facebook, or the providers, OR ITS or their AFFILIATES, CONTRACTORS, EMPLOYEES, AGENTS, OR THIRD-PARTY PARTNERS, LICENSORS, OR SUPPLIERS BE LIABLE FOR ANY SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, RELIANCE, OR EXEMPLARY DAMAGES (INCLUDING WITHOUT LIMITATION DAMAGES ARISING FROM ANY UNSUCCESSFUL COURT ACTION OR LEGAL DISPUTE, LOST BUSINESS, LOST REVENUES, OR LOSS OF ANTICIPATED PROFITS OR ANY OTHER PECUNIARY OR NON-PECUNIARY LOSS OR DAMAGE OF ANY NATURE WHATSOEVER) ARISING OUT OF OR RELATING TO THESE TERMS OR THAT RESULT FROM YOUR USE OF OR YOUR INABILITY TO USE THE VIKI SERVICES OR the facebook SITES, OR ANY OTHER INTERACTIONS WITH VIKI, EVEN IF VIKI OR A VIKI AUTHORIZED REPRESENTATIVE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY OR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU. IN SUCH CASES, VIKI' LIABILITY WILL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.</li>
          <li>IN NO EVENT WILL VIKI, Facebook, the providers, OR ITS AFFILIATES, CONTRACTORS, EMPLOYEES, AGENTS, OR THIRD-PARTY PARTNERS, LICENSORS, OR SUPPLIERS TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE VIKI SERVICES OR YOUR INTERACTION WITH OTHER VIKI SERVICES USERS (WHETHER IN CONTRACT, TORT INCLUDING NEGLIGENCE, WARRANTY, OR OTHERWISE), EXCEED THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING THE VIKI SERVICES DURING THE TWELVE MONTHS IMMEDIATELY PRECEDING THE DATE OF THE CLAIM OR ONE HUNDRED DOLLARS, WHICHEVER IS GREATER.</li>
          <li>THESE LIMITATIONS OF LIABILITY ALSO APPLY WITH RESPECT TO DAMAGES INCURRED BY YOU BY REASON OF ANY PRODUCTS OR SERVICES SOLD OR PROVIDED ON THE FACEBOOK SITE OR OTHERWISE BY THIRD PARTIES OTHER THAN VIKI AND RECEIVED THROUGH OR ADVERTISED ON THE FACEBOOK SITE OR RECEIVED THROUGH THE VIKI SERVICES.</li>
          <li>YOU ACKNOWLEDGE AND AGREE THAT VIKI HAS OFFERED ITS PRODUCTS AND SERVICES, SET ITS PRICES, AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND THE LIMITATIONS OF LIABILITY SET FORTH HEREIN, THAT THE WARRANTY DISCLAIMERS AND THE LIMITATIONS OF LIABILITY SET FORTH HEREIN REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN YOU AND VIKI, AND THAT THE WARRANTY DISCLAIMERS AND THE LIMITATIONS OF LIABILITY SET FORTH HEREIN FORM AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN YOU AND VIKI. VIKI WOULD NOT BE ABLE TO PROVIDE THE VIKI SERVICES TO YOU ON AN ECONOMICALLY REASONABLE BASIS WITHOUT THESE LIMITATIONS.</li>
        </ol>
      </section>

      <section id="toc-accept-terms">
        <h2 class="bbs mbm mtx pvm">17. Ability to Accept Terms of Use <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>You affirm that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms, and to abide by and comply with these Terms.</p>
      </section>

      <section id="toc-assigment">
        <h2 class="bbs mbm mtx pvm">18. Assignment <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>These Terms, and any rights and licenses granted hereunder, may not be transferred or assigned by you, but may be assigned by Viki without restriction.</p>
      </section>

      <section id="toc-miscellaneous">
        <h2 class="bbs mbm mtx pvm">19. Miscellaneous <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>Viki's failure to enforce any provision of these Terms shall not be deemed a waiver of such provision nor of the right to enforce such provision. If any part of these Terms is determined to be invalid or unenforceable pursuant to applicable law, including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of these Terms shall continue in effect. A printed version of these Terms and of any notice given in electronic form shall be admissible in judicial or administrative proceedings based upon or relating to these Terms to the same extent and subject to the same conditions as other business documents and records originally generated and maintained in printed form.</p>
      </section>

      <section id="toc-no-archive">
        <h2 class="bbs mbm mtx pvm">20. No Archive <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>The Site is not and shall not function as an archive. Viki shall have no liability to you or any other person for loss, damage, or destruction to your information. You shall be solely responsible for maintaining independent archival and backup copies of your information.</p>
      </section>

      <section id="toc-us-only">
        <h2 class="bbs mbm mtx pvm">21. United States Only <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>By using the Viki Services, you agree and acknowledge that the Viki Services is hosted in the United States. If you are attempting to access the Viki Services from a physical location within the European Union, Asia, or any other region with laws or regulations governing personal data collection, use, and disclosure that differ from United States laws, please be advised that through your continued use of this Viki Services, which is governed by U.S. law, these Terms, and our Privacy Policy, you are transferring your personal information to the United States and you consent to (a) such transfer, (b) the application of the laws of the United States and/or the State of California with respect to any dispute arising from or related to our Privacy Policy and/or your use of the Viki Services, other than such rules, regulations, case law, and/or international treaties that would result in the application of the laws of a jurisdiction other than the United States or the State of California, and (c) the exclusive jurisdiction of the courts of the United States and the State of California. While the Site may be accessed from any location via the Internet, however, the Service is only available to users located within the United States. Attempting to access the Service from outside the United States is unauthorized and expressly prohibited.</p>
      </section>

      <section id="toc-update-terms">
        <h2 class="bbs mbm mtx pvm">22. Changes and Updates to These Terms <a href="#toc-top" class="f-zeta pull-right mtm" data-scroll="1">Top</a></h2>
        <p>From time to time, Viki may revise these Terms. To help you stay current of any changes, Viki notes the date these Terms were last updated above. Your use of the Viki Services following the posting of any revised Terms shall be deemed acceptance of the revised Terms. Viki strongly recommends checking these Terms periodically. If, and only if, Viki makes revisions to these Terms that result in a material lessening of the restrictions on Viki’s use or disclosure of your Personal Information (as defined in our <a href="/privacy" title="Privacy Policy">Privacy Policy</a>), Viki will make a commercially reasonable attempt to obtain your consent before implementing such revisions with respect to such Personal Information. If you disagree with the provisions of these Terms at any time, your sole remedy is to terminate your use of the Viki Services and inform us of such termination as described in these Terms.</p>
      </section>
    </article>
  </div>

  <div class="unit size7 offset1">
    <aside class="mlm mtx ptl">
      <div class="mod mod-well">
        <h3 class="mtn">Questions?</h3>
        <p>If you have questions, please contact Viki, Inc. by emailing us at
          <a href="mailto:info@viki.com">info@viki.com</a>.</p>
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
      <a href="/terms_of_use?locale=en" class="first-child muted" rel="nofollow" title="English">
        <i class="img-flag-us"></i> English
</a>      <a href="/terms_of_use?locale=es" class="muted" rel="nofollow" title="Español">
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
    window.cur_a = "static_pages_terms_of_use";
    
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
