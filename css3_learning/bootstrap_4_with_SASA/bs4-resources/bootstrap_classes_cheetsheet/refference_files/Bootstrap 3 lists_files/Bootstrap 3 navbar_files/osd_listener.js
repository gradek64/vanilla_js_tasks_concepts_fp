(function(){var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var ea={ya:!0},fa={};try{fa.__proto__=ea;ca=fa.ya;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}for(var ha=ba,ia="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,ja=function(){ja=function(){};m.Symbol||(m.Symbol=ka)},ka=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}(),ma=function(){ja();var a=m.Symbol.iterator;a||(a=m.Symbol.iterator=m.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ia(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return la(this)}});ma=function(){}},la=function(a){var b=0;return na(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},na=function(a){ma();a={next:a};a[m.Symbol.iterator]=function(){return this};return a},oa=function(a){ma();var b=a[Symbol.iterator];return b?b.call(a):la(a)},p=function(a){if(!(a instanceof Array)){a=oa(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},q=m,r=["Math","trunc"],pa=0;pa<r.length-1;pa++){var qa=r[pa];qa in q||(q[qa]={});q=q[qa]}var ra=r[r.length-1],sa=q[ra],ta=sa?sa:function(a){a=Number(a);if(isNaN(a)||Infinity===a||-Infinity===a||0===a)return a;var b=Math.floor(Math.abs(a));return 0>a?-b:b};ta!=sa&&null!=ta&&ia(q,ra,{configurable:!0,writable:!0,value:ta});var u=this,v=function(a){return"string"==typeof a},ua=function(){},va=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},wa=function(a,b,c){return a.call.apply(a.bind,arguments)},xa=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},ya=function(a,b,c){ya=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?wa:xa;return ya.apply(null,arguments)},za=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},w=Date.now||function(){return+new Date},x=function(a,b){a=a.split(".");var c=u;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};var Aa=function(a,b,c,d,f){if(f)c=a+("&"+b+"="+c);else{var e="&"+b+"=",g=a.indexOf(e);0>g?c=a+e+c:(g+=e.length,e=a.indexOf("&",g),c=0<=e?a.substring(0,g)+c+a.substring(e):a.substring(0,g)+c)}return 2E3<c.length?void 0!==d?Aa(a,b,d,void 0,f):a:c};var Ba=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ca=String.prototype.repeat?function(a,b){return a.repeat(b)}:function(a,b){return Array(b+1).join(a)},y=function(a,b){a=String(a);var c=a.indexOf(".");-1==c&&(c=a.length);Ca("0",Math.max(0,b-c))},Ea=function(a,b){var c=0;a=Ba(String(a)).split(".");b=Ba(String(b)).split(".");for(var d=Math.max(a.length,b.length),f=0;0==c&&f<d;f++){var e=a[f]||"",g=b[f]||"";do{e=/(\d*)(\D*)(.*)/.exec(e)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==e[0].length&&0==g[0].length)break;c=Da(0==e[1].length?0:parseInt(e[1],10),0==g[1].length?0:parseInt(g[1],10))||Da(0==e[2].length,0==g[2].length)||Da(e[2],g[2]);e=e[3];g=g[3]}while(0==c)}return c},Da=function(a,b){return a<b?-1:a>b?1:0};var Fa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(v(a))return v(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ha=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=v(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},Ia=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=[],e=0,g=v(a)?a.split(""):a,l=0;l<d;l++)if(l in g){var k=g[l];b.call(c,k,l,a)&&(f[e++]=k)}return f},Ja=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=Array(d),e=v(a)?a.split(""):a,g=0;g<d;g++)g in e&&(f[g]=b.call(c,e[g],g,a));return f},Ka=Array.prototype.reduce?function(a,b,c,d){d&&(b=ya(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var f=c;Ha(a,function(c,g){f=b.call(d,f,c,g,a)});return f},La=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,f=v(a)?a.split(""):a,e=0;e<d;e++)if(e in f&&b.call(c,f[e],e,a))return!0;return!1},Ma=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var z;a:{var Na=u.navigator;if(Na){var Oa=Na.userAgent;if(Oa){z=Oa;break a}}z=""}var A=function(a){return-1!=z.indexOf(a)},Pa=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};var Qa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Ra=function(a,b){return null!==a&&b in a};var Sa=function(){return A("Trident")||A("MSIE")},Ua=function(){function a(a){a:{var b=d;for(var f=a.length,l=v(a)?a.split(""):a,k=0;k<f;k++)if(k in l&&b.call(void 0,l[k],k,a)){b=k;break a}b=-1}return c[0>b?null:v(a)?a.charAt(b):a[b]]||""}var b=z;if(Sa())return Ta(b);b=Pa(b);var c={};Ha(b,function(a){c[a[0]]=a[1]});var d=za(Ra,c);return A("Opera")?a(["Version","Opera"]):A("Edge")?a(["Edge"]):!A("Chrome")&&!A("CriOS")||A("Edge")?(b=b[2])&&b[1]||"":a(["Chrome","CriOS"])},Ta=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};var Va=function(a){Va[" "](a);return a};Va[" "]=ua;var Xa=function(a,b){var c=Wa;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var Ya=A("Opera"),B=Sa(),Za=A("Edge"),$a=A("Gecko")&&!(-1!=z.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),ab=-1!=z.toLowerCase().indexOf("webkit")&&!A("Edge"),bb=function(){var a=u.document;return a?a.documentMode:void 0},cb;a:{var db="",eb=function(){var a=z;if($a)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Za)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ab)return/WebKit\/(\S+)/.exec(a);if(Ya)return/(?:Version)[ \/]?(\S+)/.exec(a)}();eb&&(db=eb?eb[1]:"");if(B){var fb=bb();if(null!=fb&&fb>parseFloat(db)){cb=String(fb);break a}}cb=db}var gb=cb,Wa={},hb=function(a){Xa(a,function(){return 0<=Ea(gb,a)})},ib;var jb=u.document;ib=jb&&B?bb()||("CSS1Compat"==jb.compatMode?parseInt(gb,10):5):void 0;var kb;if(!(kb=!$a&&!B)){var lb;if(lb=B)lb=9<=Number(ib);kb=lb}kb||$a&&hb("1.9.1");B&&hb("9");var C=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Va(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},mb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},ob=function(){var a=nb;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};var D=document,E=window;var pb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var qb={xa:"ud=1",wa:"ts=0",Wa:"sc=1",Xa:"efp=1",Ua:"dcl=1",Va:"mlc=1",Sa:"rafv=1",Ra:"rafx=1",va:"opp=1",Ta:"lom=1",Qa:"adf=1"};var F=function(){this.ja={};this.K=!0};F.prototype.disable=function(){this.K=!1};F.prototype.enable=function(){this.K=!0};F.prototype.isEnabled=function(){return this.K};F.prototype.reset=function(){this.ja={};this.K=!0};var rb=pb(function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});u.addEventListener("test",null,b)}catch(c){}return a});function sb(a){return a?a.passive&&rb()?a:a.capture||!1:a}var tb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,sb(d)):a.attachEvent&&a.attachEvent("on"+b,c)};var G=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");c&&(d.referrerPolicy="no-referrer");d.src=b;a.google_image_requests.push(d)},vb=function(a){if(ub())G(u.window,a,!0);else{var b=u.document;if(b.body){var c=b.getElementById("goog-srcless-iframe");c||(c=b.createElement("iframe"),c.style.display="none",c.id="goog-srcless-iframe",b.body.appendChild(c));b=c}else b=null;b&&b.contentWindow&&G(b.contentWindow,a,!1)}},ub=pb(function(){return"referrerPolicy"in u.document.createElement("img")});var wb=!!window.google_async_iframe_id,H=wb&&window.parent||window,xb=function(){if(wb&&!C(H)){var a="."+D.domain;try{for(;2<a.split(".").length&&!C(H);)D.domain=a=a.substr(a.indexOf(".")+1),H=window.parent}catch(b){}C(H)||(H=window)}return H};var J=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var yb=function(a,b,c){if("array"==va(b))for(var d=0;d<b.length;d++)yb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))},zb=function(a,b){var c=[];for(b=b||0;b<a.length;b+=2)yb(a[b],a[b+1],c);return c.join("&")},Ab=function(a,b){var c=2==arguments.length?zb(arguments[1],0):zb(arguments,1);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var f=a.indexOf("?");if(0>f||f>d){f=d;var e=""}else e=a.substring(f+1,d);d=[a.substr(0,f),e,a.substr(d)];f=d[1];d[1]=c?f?f+"&"+c:c:f;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c};var Bb=function(a,b){this.ra=a;this.sa=b},Cb=function(a,b){this.url=a;this.ka=!!b;this.depth=null};var Db=function(a,b,c,d,f){this.ma=c||4E3;this.G=a||"&";this.za=b||",$";this.P=void 0!==d?d:"trn";this.Pa=f||null;this.ea=!1;this.v={};this.Ka=0;this.l=[]},Eb=function(a,b){var c={};c[a]=b;return[c]},Gb=function(a,b,c,d,f){var e=[];mb(a,function(a,l){(a=Fb(a,b,c,d,f))&&e.push(l+"="+a)});return e.join(b)},Fb=function(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var e=[],g=0;g<a.length;g++)e.push(Fb(a[g],b,c,d+1,f));return e.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(Gb(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))},K=function(a,b,c,d){a.l.push(b);a.v[b]=Eb(c,d)},Ib=function(a,b,c,d){b=b+"//"+c+d;var f=Hb(a)-d.length-0;if(0>f)return"";a.l.sort(function(a,b){return a-b});d=null;c="";for(var e=0;e<a.l.length;e++)for(var g=a.l[e],l=a.v[g],k=0;k<l.length;k++){if(!f){d=null==d?g:d;break}var n=Gb(l[k],a.G,a.za);if(n){n=c+n;if(f>=n.length){f-=n.length;b+=n;c=a.G;break}else a.ea&&(c=f,n[c-1]==a.G&&--c,b+=n.substr(0,c),c=a.G,f=0);d=null==d?g:d}}e="";a.P&&null!=d&&(e=c+a.P+"="+(a.Pa||d));return b+e+""},Hb=function(a){if(!a.P)return a.ma;var b=1,c;for(c in a.v)b=c.length>b?c.length:b;return a.ma-a.P.length-b-a.G.length-1};var Jb=function(a,b,c,d,f){if((d?a.Oa:Math.random())<(f||a.Da))try{if(c instanceof Db)var e=c;else e=new Db,mb(c,function(a,b){var c=e,d=c.Ka++;a=Eb(b,a);c.l.push(d);c.v[d]=a});var g=Ib(e,a.Ma,a.Ea,a.La+b+"&");g&&G(u,g,!1)}catch(l){}};var Kb=null;var Lb=function(){var a=u.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):w()},Mb=function(){var a=u.performance;return a&&a.now?a.now():null};var Nb=function(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};var L=function(a,b){this.C=[];this.F=b||u;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.C=b.google_js_reporting_queue,c=b.google_measure_js_timing);if(null===Kb){Kb="";try{var d=u.top.location.hash;if(d){var f=d.match(/\bdeid=([\d,]+)/);Kb=f?f[1]:""}}catch(e){}}b=Kb;b=b.indexOf&&0<=b.indexOf("1337");this.i=(this.i=null!=c?c:Math.random()<a)||b;a=this.F.performance;this.O=!!(a&&a.mark&&a.clearMarks&&b)};L.prototype.disable=function(){this.C!=this.F.google_js_reporting_queue&&(this.C.length=0,this.O&&Ha(this.C,this.ga,this));this.i=!1};L.prototype.ga=function(a){if(a&&this.O){var b=this.F.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};L.prototype.start=function(a,b){if(!this.i)return null;var c=Mb()||Lb();a=new Nb(a,b,c);this.O&&this.F.performance.mark("goog_"+a.uniqueId+"_start");return a};L.prototype.end=function(a){if(this.i&&"number"==typeof a.value){var b=Mb()||Lb();a.duration=b-a.value;this.O&&this.F.performance.mark("goog_"+a.uniqueId+"_end");this.i&&this.C.push(a)}};var Ob=function(a,b,c,d){this.na=a;this.Ga=b;this.$=c;this.ca=null;this.Fa=this.U;this.u=void 0===d?null:d;this.ua=!1},Qb=function(a,b,c){try{if(a.u&&a.u.i){var d=a.u.start(b.toString(),3);var f=c();a.u.end(d)}else f=c()}catch(g){c=a.$;try{a.u&&d&&a.u.ga(d);var e=Pb(g);c=a.Fa.call(a,b,e,void 0,void 0)}catch(l){a.U(217,l)}if(!c)throw g;}return f},Sb=function(a,b){var c=Rb;return function(d){for(var f=[],e=0;e<arguments.length;++e)f[e-0]=arguments[e];return Qb(c,a,function(){return b.apply(void 0,f)})}};Ob.prototype.U=function(a,b,c,d,f){f=f||this.Ga;try{var e=new Db;e.ea=!0;K(e,1,"context",a);b.error&&b.meta&&b.id||(b=Pb(b));b.msg&&K(e,2,"msg",b.msg.substring(0,512));b.file&&K(e,3,"file",b.file);0<b.line&&K(e,4,"line",b.line);var g=b.meta||{};if(this.ca)try{this.ca(g)}catch(da){}if(d)try{d(g)}catch(da){}b=[g];e.l.push(5);e.v[5]=b;g=u;b=[];var l=null;do{d=g;if(C(d)){var k=d.location.href;l=d.document&&d.document.referrer||null}else k=l,l=null;b.push(new Cb(k||""));try{g=d.parent}catch(da){g=null}}while(g&&d!=g);k=0;for(var n=b.length-1;k<=n;++k)b[k].depth=n-k;d=u;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(k=1;k<b.length;++k){var h=b[k];h.url||(h.url=d.location.ancestorOrigins[k-1]||"",h.ka=!0)}var t=new Cb(u.location.href,!1),Ga=b.length-1;for(n=Ga;0<=n;--n){var I=b[n];if(I.url&&!I.ka){t=I;break}}I=null;var oc=b.length&&b[Ga].url;0!=t.depth&&oc&&(I=b[Ga]);var O=new Bb(t,I);O.sa&&K(e,6,"top",O.sa.url||"");K(e,7,"url",O.ra.url||"");Jb(this.na,f,e,this.ua,c)}catch(da){try{Jb(this.na,f,{context:"ecmserr",rctx:a,msg:Tb(da),url:O.ra.url},this.ua,c)}catch(Cc){}}return this.$};var Pb=function(a){return new Ub(Tb(a),a.fileName,a.lineNumber)},Tb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(f){b=c}}return b},Ub=function(a,b,c){J.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})},M=Ub;M.prototype=aa(J.prototype);M.prototype.constructor=M;if(ha)ha(M,J);else for(var N in J)if("prototype"!=N)if(Object.defineProperties){var Vb=Object.getOwnPropertyDescriptor(J,N);Vb&&Object.defineProperty(M,N,Vb)}else M[N]=J[N];M.$a=J.prototype;var Rb,P=xb(),Wb=new L(1,P);Rb=new Ob(new function(){var a=void 0===a?E:a;this.Ma="http:"===a.location.protocol?"http:":"https:";this.Ea="pagead2.googlesyndication.com";this.La="/pagead/gen_204?id=";this.Da=.01;this.Oa=Math.random()},"jserror",!0,Wb);"complete"==P.document.readyState?P.google_measure_js_timing||Wb.disable():Wb.i&&tb(P,"load",function(){P.google_measure_js_timing||Wb.disable()});var Q=function(a,b){return Sb(a,b)};if(D&&D.URL){var nb=D.URL,Xb=!(nb&&0<ob().length);Rb.$=Xb}var R=function(a,b,c,d){tb(a,b,Sb(d,c),{capture:!1})},Yb=function(a){var b=["IMG","FRAME","IFRAME"];return La(b,function(b){return a.nodeName==String(b)})?[a]:Ka(b,function(b,d){return b.concat(Ma((a||document).getElementsByTagName(String(d))))},[])},Zb=function(a,b){if(a){var c=0,d=null;a=Yb(a);for(var f=0;f<a.length;f++){var e=!1;d=a[f];switch(d.nodeName){case "IMG":if(d.complete||d.naturalWidth)e=!0;break;case "FRAME":case "IFRAME":"complete"==d.readyState&&(e=!0)}e||(c++,R(d,"load",function(){c--;c||b(null)},116))}a=d=null;c||b(null)}},$b=function(a,b){var c=0,d=function(){a();c++;10>c&&E.setTimeout(Sb(b,d),100)};d()};var ac=function(a,b){this.g=a||0;this.f=b||""},bc=function(a){return!!a.g||!!a.f},S=function(a,b){a.g&&(b[4]=a.g);a.f&&(b[12]=a.f)};ac.prototype.match=function(a){return bc(this)&&bc(a)?this.f||a.f?this.f==a.f:this.g||a.g?this.g==a.g:!1:!1};ac.prototype.toString=function(){var a=""+this.g;this.f&&(a+="-"+this.f);return a};var cc=function(a){var b=[];a.g&&b.push("adk="+a.g);a.f&&b.push("exk="+a.f);return b},dc=function(a){var b=[];Qa(a,function(a,d){d=encodeURIComponent(d);v(a)&&(a=encodeURIComponent(a));b.push(d+"="+a)});b.push("24="+w());return b.join("\n")},T=0,ec=0,fc=function(a){var b=0,c=E;try{if(c&&c.Goog_AdSense_getAdAdapterInstance)return c}catch(d){}for(;c&&5>b;){try{if(c.google_osd_static_frame)return c}catch(d){}try{if(c.aswift_0&&(!a||c.aswift_0.google_osd_static_frame))return c.aswift_0}catch(d){}b++;c=c!=c.parent?c.parent:null}return null},gc=function(a,b,c,d,f,e,g){g=g||ua;if(10<ec)E.clearInterval(T),g();else if(++ec,E.postMessage&&bc(b)){if(g=fc(!0)){var l={};S(b,l);l[0]="goog_request_monitoring";l[6]=a;c&&(l[27]=c);l[16]=!!d;f&&f.length&&(l[17]=f.join(","));e&&(l[19]=e);try{var k=dc(l);g.postMessage(k,"*")}catch(n){}}}else E.clearInterval(T),g()};var U=new Date(0);y(U.getUTCFullYear(),4);y(U.getUTCMonth()+1,2);y(U.getUTCDate(),2);y(U.getUTCHours(),2);y(U.getUTCMinutes(),2);var hc=function(a){var b=xb()||E;a=a.toString();G(b,a,!1)};var ic=function(){this.c=null;this.M=this.da=this.B=0},jc=function(a){return Ia(a,function(a){return 15<a.clientHeight&&15<a.clientWidth})},kc=function(a){if(!a.length)return null;var b=jc(a);return 0<b.length?b[0]:a[0]},mc=function(a){var b=null,c=(E.document||document).getElementsByTagName("SCRIPT");0<c.length&&(c=c[c.length-1])&&c.parentElement&&(b=c.parentElement);b||(b=E.document.body);c=new ic;if(b){a=String(a);var d=b||document;if(d.querySelectorAll&&d.querySelector)d=d.querySelectorAll(".GoogleActiveViewClass");else{var f,e;d=document;d=b||d;if(d.querySelectorAll&&d.querySelector)d=d.querySelectorAll(".GoogleActiveViewClass");else if(d.getElementsByClassName){var g=d.getElementsByClassName("GoogleActiveViewClass");d=g}else{g=d.getElementsByTagName("*");var l={};for(f=e=0;d=g[f];f++){var k=d.className,n;if(n="function"==typeof k.split)n=0<=Fa(k.split(/\s+/),"GoogleActiveViewClass");n&&(l[e++]=d)}l.length=e;d=l}}d=Ma(d);f=lc("googleAvAdk");e=[];l=[];g=oa(d);for(k=g.next();!k.done;k=g.next())k=k.value,k.hasAttribute(f)?k.getAttribute(f)==a&&e.push(k):l.push(k);c.B=d.length;c.da=e.length;c.M=e.length+l.length;c.c=kc(e);c.c||(c.c=kc(l));!c.c&&b.children&&(a=jc(Ma(b.children)),c.B=b.children.length,c.M=a.length,1==c.B?c.c=b.children[0]:1==c.M?c.c=a[0]:1<c.B&&(c.c=b))}return c},lc=function(a){return"data-"+String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};var nc=function(){var a=/[&\?#]exk=([^& ]+)/.exec(E.location.href);return a&&2==a.length?a[1]:null};var V=function(){this.s=0;this.w="";this.A=[];this.H=this.h=this.j=!1;this.oa=!0;this.la=this.aa=!1;this.Ha=new F;this.L=this.ba=this.X=!1;this.qa=this.pa=0;this.ia=[];this.a=null;this.T="";this.R=[];this.fa=null;this.V=[];this.J=!1;this.I=this.N="";this.Na=w();this.D=null;this.ha=!1;this.ta=this.b=this.m=0;this.W="";this.Z=!1},W=function(a){return(a=a.D)?a.c:null},X=function(a){return W(a)?(a=W(a))?a.hasAttribute(lc("googleAvDm"))?1:2:0:0};V.prototype.Ja=function(a){var b=/^(http[s]?:)?\/\//.test(a)?a:pc(a);if(this.L&&0<=Fa(this.A,b))return!0;(a=!a)||(a=!(null!==E&&E!=E.top));if(a||this.J||this.ba&&!this.X)return!1;this.L=!0;this.X&&(a=qc(this,b,this.T,!0),a=Ab(a,"tsvp",w()-this.qa),hc(a));this.A.push(b);this.pa=w();return!0};V.prototype.Y=function(a,b,c){this.j&&(this.oa||3!=(void 0===c?3:c)||this.la)&&Y(this,b,!0);if(this.H||this.h&&this.aa)Y(this,b),this.h=this.H=!1};var rc=function(a){return(a=a.fa)?2!=a():!0},Y=function(a,b,c){b=void 0===b?a.T:b;c=void 0===c?!1:c;if(b&&!a.J&&(2==a.b||c)&&rc(a)){for(var d=0;d<a.A.length;++d){var f=qc(a,a.A[d],b,c);hc(f)}a.ba=!0;c?a.j=!1:a.J=!0}},pc=function(a,b){var c=[];a&&c.push("avi="+a);b&&c.push("cid="+b);return c.length?"//pagead2.googlesyndication.com/activeview?"+c.join("&"):"//pagead2.googlesyndication.com/activeview"},qc=function(a,b,c,d){d=(void 0===d?0:d)?"osdim":a.H?"osd2":"osdtos";b=[b,-1<b.indexOf("?")?"&id=":"?id=",d];"osd2"==d&&a.h&&a.aa&&b.push("&tsf=1");b.push("&ti=1");b.push("&",c);b.push("&uc="+a.ta);W(a)?b.push("&tgt="+(W(a)?a.D.c.tagName:"")):b.push("&tgt=nf");b.push("&cl="+(a.ha?1:0));a.L&&(b.push("&lop=1"),b.push("&tslp="+(w()-a.pa)));if(c=a.D)b.push("&cec="+c.B),b.push("&clc="+c.M),b.push("&cac="+c.da),c.c?b.push("&cd="+c.c.clientWidth+"x"+c.c.clientHeight):b.push("&cd=nf");c=b.join("");for(b=0;b<a.R.length;b++){d="";try{d=a.R[b]()}catch(e){}var f="max_length";2<=d.length&&(3==d.length&&(f=d[2]),c=Aa(c,encodeURIComponent(d[0]),encodeURIComponent(d[1]),f))}2E3<c.length&&(c=c.substring(0,2E3));return c},Z=function(a,b){if(a.N){try{vb(Aa(a.N,"vi",b))}catch(c){}0<=Fa(sc,b)&&(a.N="")}};V.prototype.Aa=function(a){this.R.push(a)};V.prototype.Ca=function(a){this.V.push(a)};V.prototype.Ba=function(a){this.fa=a};var tc=function(a){if(a.a&&bc(a.a)){var b=document.domain;a.m=1;T=E.setInterval(Sb(197,za(gc,a.b,a.a,b,a.h,a.ia,a.W,void 0)),500)}},uc=function(a,b){var c=dc(a);try{$b(function(){var a=fc(!1),b=!a;!a&&E&&(a=E.parent);if(a&&a.postMessage)try{a.postMessage(c,"*"),b&&E.postMessage(c,"*")}catch(e){}},b)}catch(d){}},vc=function(a,b){switch(b){case 1:a[26]=!0;break;case 2:a[26]=!1}},wc=function(a,b){if(0!=b){var c={};a.a&&S(a.a,c);c[0]="goog_av_measurement_hold_update";vc(c,b);uc(c,282)}},yc=function(a){1==X(a)&&xc(a);var b={};a.a&&S(a.a,b);b[0]="goog_dom_content_loaded";a=X(a);vc(b,a);uc(b,114)},xc=function(a){var b=W(a);if(u.MutationObserver&&b){var c={attributes:!0};c.attributeFilter=[lc("googleAvDm")];(new u.MutationObserver(Q(283,function(){wc(a,X(a))}))).observe(b,c)}else b&&b.addEventListener?b.addEventListener("DOMAttrModified",Q(283,function(){wc(a,X(a))})):Rb.U(286,Error(),void 0,void 0)},zc=function(a,b){if(v(b)){var c=a.Ha;b=b.split("&");for(var d=b.length-1;0<=d;d--){var f=b[d].split("="),e=f[1];(f=c.ja[f[0]])&&f.Za(parseInt(e,10))&&f.Ya()&&b.splice(d,1)}c=b.join("&").split("&");for(b=c.length-1;0<=b;b--)d=c[b],e=qb,d==e.xa?(a.oa=!1,c.splice(b,1)):d==e.wa?(a.h=!1,c.splice(b,1)):d==e.va&&(a.Z=!0,c.splice(b,1));a.W=c.join("&")}},Ac=function(a,b){W(a)||(a.D=mc(b),W(a)&&Zb(a.D.c,function(){var b={};a.a&&S(a.a,b);b[0]="goog_creative_loaded";var d=X(a);vc(b,d);uc(b,115);a.ha=!0}))};V.prototype.Ia=function(a,b,c,d,f,e,g,l,k,n){var h=this;this.s=a;this.N=b;this.I=d;this.j=e;g&&zc(this,g);this.h=e;this.ia.push(947190542);this.a=new ac(f,nc());R(E,"load",function(){Z(h,"-1")},117);R(E,"message",function(a){if(a&&a.data&&v(a.data)){var b=a.data;if(v(b)){var c={};b=b.split("\n");for(var d=0;d<b.length;d++){var e=b[d].indexOf("=");if(!(0>=e)){var f=Number(b[d].substr(0,e));e=b[d].substr(e+1);switch(f){case 5:case 8:case 11:case 15:case 16:case 18:case 26:e="true"==e;break;case 4:case 7:case 6:case 20:case 21:case 22:case 23:case 24:case 25:e=Number(e);break;case 3:case 19:if("function"==va(decodeURIComponent))try{e=decodeURIComponent(e)}catch(Bc){throw Error("Error: URI malformed: "+e);}break;case 17:e=Ja(decodeURIComponent(e).split(","),Number)}c[f]=e}}c=c[0]?c:null}else c=null;if(c&&(b=new ac(c[4],c[12]),h.a&&h.a.match(b))){for(b=0;b<h.V.length;b++)h.V[b](c);c&&(b=100*c[25],"number"==typeof b&&!isNaN(b)&&(window.document["4CGeArbVQ"]=b|0));void 0!=c[18]&&(h.la=c[18]);h.Z&&void 0!=c[7]&&0<c[7]&&(b="//pagead2.googlesyndication.com/pagead/gen_204?id=ac_opp&vsblt="+c[7],h.w&&(b+="&avi="+h.w),hc(b),h.Z=!1);b=c[0];if("goog_acknowledge_monitoring"==b)E.clearInterval(T),h.m=2;else if("goog_get_mode"==b){h.m=1;d={};h.a&&S(h.a,d);d[0]="goog_provide_mode";d[6]=h.b;d[19]=h.W;d[16]=h.h;try{var g=dc(d);a.source.postMessage(g,a.origin)}catch(Bc){}E.clearInterval(T);h.m=2}else"goog_update_data"==b?c&&(h.T=c[3],++h.ta):"goog_image_request"==b&&(h.Y(0,c[3]),c[5]||c[11]||Z(h,"0"));if("goog_update_data"==b||"goog_image_request"==b)(1==h.b||2==h.b||h.j)&&c[5]&&(a=1==c[15]&&"goog_update_data"==b,h.aa=!0,Z(h,"1"),h.I&&rc(h)&&(vb(h.I),h.I=""),h.j&&!a&&(Y(h,void 0,!0),h.X=!0,h.qa=w()),h.j||1!=h.b||(h.J=!0)),(1==h.b||2==h.b||h.j)&&c[11]&&(h.h=!1,Z(h,"3"),h.j&&Y(h,void 0,!0))}}},118);this.w=c||"";this.A=[n||pc(c,k)];R(E,"unload",function(){h.Y();Z(h,"0");if(2>h.m&&!h.h){var a=void 0===a?E:a;if(2==h.b){var b="hs="+h.m,c=[];h.w&&c.push("avi="+h.w);c.push("id=osd2");c.push("ovr_value="+h.s);h.L&&c.push("lop=1");h.a&&(c=c.concat(cc(h.a)));c.push("tt="+(w()-h.Na));c.push(b);a.document&&a.document.referrer&&c.push("ref="+encodeURIComponent(a.document.referrer));try{hc("//pagead2.googlesyndication.com/pagead/gen_204?"+c.join("&"))}catch(O){}}}},119);var t=E.document;0==({visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[t.webkitVisibilityState||t.mozVisibilityState||t.visibilityState||""]||0)?(Y(this,"r=pv",!0),this.b=5,tc(this)):(!t.readyState||"complete"!=t.readyState&&"loaded"!=t.readyState?!Sa()||0<=Ea(Ua(),11)?R(t,"DOMContentLoaded",function(){yc(h)},121):R(t,"readystatechange",function(){"complete"!=t.readyState&&"loaded"!=t.readyState||yc(h)},120):yc(this),-1==this.s?this.b=e?3:1:-2==this.s?this.b=3:0<this.s&&(this.b=2,this.H=!0),this.h&&!this.H&&-1==this.s&&(this.b=2),tc(this),$b(function(a){Ac(h,a)},122))};V.S=void 0;V.o=function(){return V.S?V.S:V.S=new V};var sc=["1","0","3"];x("osdlfm",Q(123,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Ia.apply(d,[].concat(p(b)))}));x("osdlac",Q(124,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Aa.apply(d,[].concat(p(b)))}));x("osdlamrc",Q(125,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Ca.apply(d,[].concat(p(b)))}));x("osdsir",Q(126,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Y.apply(d,[].concat(p(b)))}));x("osdacrc",Q(127,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Ba.apply(d,[].concat(p(b)))}));x("osdpcls",Q(128,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=V.o()).Ja.apply(d,[].concat(p(b)))}));}).call(this);