
<!DOCTYPE html>
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->

<head>
  <title>Viki Pass</title>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta http-equiv="Content-Language" content="en"/>
  <meta name="description" content="Enjoy Viki Pass. Watch Ad-Free and HD"/>
  <link rel='canonical' href='https://www.viki.com/pass'/>
  
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
  <link href="//s0.viki.io/a/favicon-ccba0ff4bb7ea075ceb183324859a599.ico" rel="shortcut icon" type="image/vnd.microsoft.icon" />
  <link href="//s0.viki.io/a/application-d7e4dd648bc8ed67cf64f971b318b24c.css" media="all" rel="stylesheet" type="text/css" />
  <link href="//s0.viki.io/a/sessions-5ecafaadcf7e82ced0d47bf633005a1f.css" media="all" rel="stylesheet" type="text/css" />

  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
  <script type="text/javascript">
    if (typeof jQuery === 'undefined') {
      document.write('<script src=\"//s0.viki.io/a/jquery-7774e5317ed764b749bb337a0917164d.js\" type=\"text/javascript\"><\/script>');
    }
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-1670373-2']);
    _gaq.push(['_trackPageview']);
    _gaq.push(['_setCustomVar', 1, 'rails_action', 'plans_index']);

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

<script src="//s0.viki.io/a/utility-0c2f623e30c1d6fea35e9fc15b9e3a72.js" type="text/javascript"></script>
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
<body class="plans-index">
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

    <div id="header-actions" class="hidden pull-right">
      <div id="user-dash" class="menus-on">
        <div class="menu menu-profile">
          <a href="#">
            <img class="thumbnail-avatar" height="30" src="//s0.viki.io/a/ph/avatar_regular-cdc2bd2e0595b0a3f90ec80de219c279.png" height="30" width="30">
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
              <a href="/settings">Edit Profile</a>
            </li>
            <li class="reg-menu-item">
              <a id="acc_settings" href="/settings#account-settings">Account Settings</a>
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

      <div id="signup" class="menus pull-right mtm hidden">
        <div class="signin-action">
          Already have an account? <a href="/sign_in" title="Login here" class="strong">Login here</a>
        </div>
        <div class="signup-action">
          Not a member? <a href="/sign_up" class="strong">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</nav>


  <div class="page-wrapper">
    <div class="page-body page-body-scrollable">
      <div class="page-container container">
        <div id="flash_messages"></div>
      </div>
      




<div class="page-container container pos-relative align-center">
  <h1 class="semantic">Introducing Viki Pass</h1>
  <h2 class="semantic">Your passport to awesomeness</h2>
  <p class="summary semantic">NO ADS • HD • ON THE GO</p>
  <p class="semantic">Try it for free!</p>
  <figure class="salespitch-hero"></figure>
    <a href="https://www.viki.com/plans/5p" class="hotspot-balloon"></a>
    <a href="https://www.viki.com/plans/5p" class="hotspot-headline"></a>
    <a href="https://www.viki.com/plans/5p" class="hotspot-illustration"></a>
    <a href="https://www.viki.com/plans/5p" class="btn btn-firm btn-pitch-upgrade" title="Upgrade Now">Upgrade Now</a>
    <p class="start-trial">Start your 7-day free trial now. US$ 3.99/month. Cancel anytime.</p>

  <div class="vikipass-aside align-center mbx ptx">
  <p class="f-quekto muted mbl">HD videos where available, 'without ads' applies to video ads only; 'fan channels' excluded.</p>
  <p class="strong mbs">Get <i class='sprite-vikipass sprite-logo-small'>Viki Pass</i> for FREE. <a href='http://blog.viki.com/2013/08/viki-u-how-to-become-qc.html' target='_blank' class='strong'>Learn how to become a QC</a>.</p>
  <p class="strong">Questions? Visit our <a href='https://viki.zendesk.com/hc/en-us/categories/200011340-Viki-Pass' target='_blank'>Viki Pass FAQ</a>.</p>
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
      <a href="/pass?locale=en&amp;origin=header" class="first-child muted" rel="nofollow" title="English">
        <i class="img-flag-us"></i> English
</a>      <a href="/pass?locale=es&amp;origin=header" class="muted" rel="nofollow" title="Español">
        <i class="img-flag-es"></i> Español
</a>    </div>
  </div>
</div>



  

  <form accept-charset="UTF-8" action="/auth_facebook" id="loginFbForm" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input id="facebook_token" name="facebook_token" type="hidden" />
</form>
  <div id="fb-root"></div>

  <script type="text/javascript">window.vikiDomain = "www.viki.com";</script>
  <script src="//s0.viki.io/a/application-8e8391dc189721ffda2a4f1b570960c9.js" type="text/javascript"></script>
  <script type="text/javascript">
    window.rootUrl = 'http://www.viki.com/';
    window.subscriptionsPath = '/subscriptions.json';
    window.user_locale = 'en';

    window.appVersion = '5194.5c4f0264e5368971e401d5ec0d7b26a80fdd985d';
    window.appId = '100000a';
    window.cur_a = "plans_index";
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

  
  <script src="//platform.twitter.com/oct.js" type="text/javascript"></script>
  <script type="text/javascript">
    twttr.conversion.trackPid('l4702');
  </script>
  <noscript>
    <img height="1" width="1" style="display:none;" alt="" src="https://analytics.twitter.com/i/adsct?txn_id=l4702&p_id=Twitter"/>
  </noscript>

    <!-- Begin Inspectlet Embed Code -->
  <script type="text/javascript" id="inspectletjs">
    window.__insp = window.__insp || [];
    __insp.push(['wid', 1278215992]);
    (function() {
      function __ldinsp(){var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://www.inspectlet.com/inspectlet.js'; var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); }
      if (window.attachEvent){
        window.attachEvent('onload', __ldinsp);
      }else{
        window.addEventListener('load', __ldinsp, false);
      }
    })();
  </script>
  <!-- End Inspectlet Embed Code -->


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
