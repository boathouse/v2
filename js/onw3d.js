var Onw3dViewer=function(h){this.al=this.modc=null;this.options={params:{menu:!1,wmode:"direct",quality:"high",scale:"noScale",salign:"TL",bgcolor:"#000000",allowfullscreen:"true",allowScriptAccess:"always"},player_path:"http://git.on-web.com.ua/viewer.swf",logo_type:"0",container_id:"scene",vars:{add:"",view_mode:"0",version:"3",logo_type:"0",lang:"rus",models_path:"http://git.on-web.com.ua/models/",textures_path:"http://git.on-web.com.ua/textures/",xml_path:"http://git.on-web.com.ua/xml/",loc:window.location.href}};h.version&&(this.options.vars.version=h.version);h.container_id&&(this.options.container_id=h.container_id);h.logo_type&&(this.options.logo_type=h.logo_type);h.lang&&(this.options.vars.lang=h.lang);h.player_path&&(this.options.player_path=h.player_path);h.models_path&&(this.options.vars.models_path=h.models_path);h.textures_path&&(this.options.vars.textures_path=h.textures_path);h.xml_path&&(this.options.vars.xml_path=h.xml_path);this.swfobject=function(){function u(){if(!y){try{var a=d.getElementsByTagName("body")[0].appendChild(d.createElement("span"));a.parentNode.removeChild(a)}catch(c){return}y=!0;for(var a=C.length,b=0;a>b;b++)C[b]()}}function h(a){y?a():C[C.length]=a}function Q(a){if(typeof q.addEventListener!=l)q.addEventListener("load",a,!1);else if(typeof d.addEventListener!=l)d.addEventListener("load",a,!1);else if(typeof q.attachEvent!=l)Z(q,"onload",a);else if("function"==typeof q.onload){var b=q.onload;q.onload=function(){b();a()}}else q.onload=a}function aa(){var a=d.getElementsByTagName("body")[0],b=d.createElement(v);b.setAttribute("type",D);var c=a.appendChild(b);if(c){var f=0;!function(){if(typeof c.GetVariable!=l){var g=c.GetVariable("$version");g&&(g=g.split(" ")[1].split(","),e.pv=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)])}else if(10>f)return f++,void setTimeout(arguments.callee,10);a.removeChild(b);c=null;I()}()}else I()}function I(){var a=w.length;if(0<a)for(var b=0;a>b;b++){var c=w[b].id,f=w[b].callbackFn,g={success:!1,id:c};if(0<e.pv[0]){var d=r(c);if(d)if(!E(w[b].swfVersion)||e.wk&&312>e.wk)if(w[b].expressInstall&&J()){g={};g.data=w[b].expressInstall;g.width=d.getAttribute("width")||"0";g.height=d.getAttribute("height")||"0";d.getAttribute("class")&&(g.styleclass=d.getAttribute("class"));d.getAttribute("align")&&(g.align=d.getAttribute("align"));for(var k={},d=d.getElementsByTagName("param"),m=d.length,n=0;m>n;n++)"movie"!=d[n].getAttribute("name").toLowerCase()&&(k[d[n].getAttribute("name")]=d[n].getAttribute("value"));K(g,k,c,f)}else ba(d),f&&f(g);else z(c,!0),f&&(g.success=!0,g.ref=L(c),f(g))}else z(c,!0),f&&((c=L(c))&&typeof c.SetVariable!=l&&(g.success=!0,g.ref=c),f(g))}}function L(a){var b=null;return(a=r(a))&&"OBJECT"==a.nodeName&&(typeof a.SetVariable!=l?b=a:(a=a.getElementsByTagName(v)[0])&&(b=a)),b}function J(){return!F&&E("6.0.65")&&(e.win||e.mac)&&!(e.wk&&312>e.wk)}function K(a,b,c,f){F=!0;M=f||null;R={success:!1,id:c};var g=r(c);g&&("OBJECT"==g.nodeName?(B=N(g),G=null):(B=g,G=c),a.id=S,(typeof a.width==l||!/%$/.test(a.width)&&310>parseInt(a.width,10))&&(a.width="310"),(typeof a.height==l||!/%$/.test(a.height)&&137>parseInt(a.height,10))&&(a.height="137"),d.title=d.title.slice(0,47)+" - Flash Player Installation",f=e.ie&&e.win?"ActiveX":"PlugIn",f="MMredirectURL="+q.location.toString().replace(/&/g,"%26")+"&MMplayerType="+f+"&MMdoctitle="+d.title,b.flashvars=typeof b.flashvars!=l?b.flashvars+("&"+f):f,e.ie&&e.win&&4!=g.readyState&&(f=d.createElement("div"),c+="SWFObjectNew",f.setAttribute("id",c),g.parentNode.insertBefore(f,g),g.style.display="none",function(){4==g.readyState?g.parentNode.removeChild(g):setTimeout(arguments.callee,10)}()),O(a,b,c))}function ba(a){if(e.ie&&e.win&&4!=a.readyState){var b=d.createElement("div");a.parentNode.insertBefore(b,a);b.parentNode.replaceChild(N(a),b);a.style.display="none";(function(){4==a.readyState?a.parentNode.removeChild(a):setTimeout(arguments.callee,10)})()}else a.parentNode.replaceChild(N(a),a)}function N(a){var b=d.createElement("div");if(e.win&&e.ie)b.innerHTML=a.innerHTML;else if((a=a.getElementsByTagName(v)[0])&&(a=a.childNodes))for(var c=a.length,f=0;c>f;f++)1==a[f].nodeType&&"PARAM"==a[f].nodeName||8==a[f].nodeType||b.appendChild(a[f].cloneNode(!0));return b}function O(a,b,c){var f,g=r(c);if(e.wk&&312>e.wk)return f;if(g)if(typeof a.id==l&&(a.id=c),e.ie&&e.win){var p,k="";for(p in a)a[p]!=Object.prototype[p]&&("data"==p.toLowerCase()?b.movie=a[p]:"styleclass"==p.toLowerCase()?k+=' class="'+a[p]+'"':"classid"!=p.toLowerCase()&&(k+=" "+p+'="'+a[p]+'"'));p="";for(var m in b)b[m]!=Object.prototype[m]&&(p+='<param name="'+m+'" value="'+b[m]+'" />');g.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+k+">"+p+"</object>";H[H.length]=a.id;f=r(a.id)}else{m=d.createElement(v);m.setAttribute("type",D);for(var n in a)a[n]!=Object.prototype[n]&&("styleclass"==n.toLowerCase()?m.setAttribute("class",a[n]):"classid"!=n.toLowerCase()&&m.setAttribute(n,a[n]));for(k in b)b[k]!=Object.prototype[k]&&"movie"!=k.toLowerCase()&&(a=m,p=k,n=b[k],c=d.createElement("param"),c.setAttribute("name",p),c.setAttribute("value",n),a.appendChild(c));g.parentNode.replaceChild(m,g);f=m}return f}function T(a){var b=r(a);b&&"OBJECT"==b.nodeName&&(e.ie&&e.win?(b.style.display="none",function(){if(4==b.readyState){var c=r(a);if(c){for(var f in c)"function"==typeof c[f]&&(c[f]=null);c.parentNode.removeChild(c)}}else setTimeout(arguments.callee,10)}()):b.parentNode.removeChild(b))}function r(a){var b=null;try{b=d.getElementById(a)}catch(c){}return b}function Z(a,b,c){a.attachEvent(b,c);A[A.length]=[a,b,c]}function E(a){var b=e.pv;return a=a.split("."),a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10)||0,a[2]=parseInt(a[2],10)||0,b[0]>a[0]||b[0]==a[0]&&b[1]>a[1]||b[0]==a[0]&&b[1]==a[1]&&b[2]>=a[2]?!0:!1}function U(a,b,c,f){if(!e.ie||!e.mac){var g=d.getElementsByTagName("head")[0];g&&(c=c&&"string"==typeof c?c:"screen",f&&(P=t=null),t&&P==c||(f=d.createElement("style"),f.setAttribute("type","text/css"),f.setAttribute("media",c),t=g.appendChild(f),e.ie&&e.win&&typeof d.styleSheets!=l&&0<d.styleSheets.length&&(t=d.styleSheets[d.styleSheets.length-1]),P=c),e.ie&&e.win?t&&typeof t.addRule==v&&t.addRule(a,b):t&&typeof d.createTextNode!=l&&t.appendChild(d.createTextNode(a+" {"+b+"}")))}}function z(a,b){if(V){var c=b?"visible":"hidden";y&&r(a)?r(a).style.visibility=c:U("#"+a,"visibility:"+c)}}function W(a){return null!=/[\\\"<>\.;]/.exec(a)&&typeof encodeURIComponent!=l?encodeURIComponent(a):a}var B,G,M,R,t,P,l="undefined",v="object",D="application/x-shockwave-flash",S="SWFObjectExprInst",q=window,d=document,x=navigator,X=!1,C=[function(){X?aa():I()}],w=[],H=[],A=[],y=!1,F=!1,V=!0,e=function(){var a=typeof d.getElementById!=l&&typeof d.getElementsByTagName!=l&&typeof d.createElement!=l,b=x.userAgent.toLowerCase(),c=x.platform.toLowerCase(),f=/win/.test(c?c:b),c=/mac/.test(c?c:b),b=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,g=!1,e=[0,0,0],k=null;if(typeof x.plugins!=l&&typeof x.plugins["Shockwave Flash"]==v)!(k=x.plugins["Shockwave Flash"].description)||typeof x.mimeTypes!=l&&x.mimeTypes[D]&&!x.mimeTypes[D].enabledPlugin||(X=!0,g=!1,k=k.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),e[0]=parseInt(k.replace(/^(.*)\..*$/,"$1"),10),e[1]=parseInt(k.replace(/^.*\.(.*)\s.*$/,"$1"),10),e[2]=/[a-zA-Z]/.test(k)?parseInt(k.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof q.ActiveXObject!=l)try{var m=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");m&&(k=m.GetVariable("$version"))&&(g=!0,k=k.split(" ")[1].split(","),e=[parseInt(k[0],10),parseInt(k[1],10),parseInt(k[2],10)])}catch(n){}return{w3:a,pv:e,wk:b,ie:g,win:f,mac:c}}();return function(){e.w3&&((typeof d.readyState!=l&&"complete"==d.readyState||typeof d.readyState==l&&(d.getElementsByTagName("body")[0]||d.body))&&u(),y||(typeof d.addEventListener!=l&&d.addEventListener("DOMContentLoaded",u,!1),e.ie&&e.win&&(d.attachEvent("onreadystatechange",function(){"complete"==d.readyState&&(d.detachEvent("onreadystatechange",arguments.callee),u())}),q==top&&function(){if(!y){try{d.documentElement.doScroll("left")}catch(a){return void setTimeout(arguments.callee,0)}u()}}()),e.wk&&function(){y||(/loaded|complete/.test(d.readyState)?u():setTimeout(arguments.callee,0))}(),Q(u)))}(),function(){e.ie&&e.win&&window.attachEvent("onunload",function(){for(var a=A.length,b=0;a>b;b++)A[b][0].detachEvent(A[b][1],A[b][2]);a=H.length;for(b=0;a>b;b++)T(H[b]);for(var c in e)e[c]=null;e=null;for(var f in swfobject)swfobject[f]=null;swfobject=null})}(),{registerObject:function(a,b,c,f){if(e.w3&&a&&b){var d={};d.id=a;d.swfVersion=b;d.expressInstall=c;d.callbackFn=f;w[w.length]=d;z(a,!1)}else f&&f({success:!1,id:a})},getObjectById:function(a){return e.w3?L(a):void 0},embedSWF:function(a,b,c,d,g,p,k,m,n,u){var q={success:!1,id:b};e.w3&&!(e.wk&&312>e.wk)&&a&&b&&c&&d&&g?(z(b,!1),h(function(){c+="";d+="";var e={};if(n&&typeof n===v)for(var h in n)e[h]=n[h];if(e.data=a,e.width=c,e.height=d,h={},m&&typeof m===v)for(var r in m)h[r]=m[r];if(k&&typeof k===v)for(var t in k)h.flashvars=typeof h.flashvars!=l?h.flashvars+("&"+t+"="+k[t]):t+"="+k[t];if(E(g))r=O(e,h,b),e.id==b&&z(b,!0),q.success=!0,q.ref=r;else{if(p&&J())return e.data=p,void K(e,h,b,u);z(b,!0)}u&&u(q)})):u&&u(q)},switchOffAutoHideShow:function(){V=!1},ua:e,getFlashPlayerVersion:function(){return{major:e.pv[0],minor:e.pv[1],release:e.pv[2]}},hasFlashPlayerVersion:E,createSWF:function(a,b,c){return e.w3?O(a,b,c):void 0},showExpressInstall:function(a,b,c,d){e.w3&&J()&&K(a,b,c,d)},removeSWF:function(a){e.w3&&T(a)},createCSS:function(a,b,c,d){e.w3&&U(a,b,c,d)},addDomLoadEvent:h,addLoadEvent:Q,getQueryParamValue:function(a){var b=d.location.search||d.location.hash;if(b){if(/\?/.test(b)&&(b=b.split("?")[1]),null==a)return W(b);for(var b=b.split("&"),c=0;c<b.length;c++)if(b[c].substring(0,b[c].indexOf("="))==a)return W(b[c].substring(b[c].indexOf("=")+1))}return""},expressInstallCallback:function(){if(F){var a=r(S);a&&B&&(a.parentNode.replaceChild(B,a),G&&(z(G,!0),e.ie&&e.win&&(B.style.display="block")),M&&M(R));F=!1}}}}();this.init=function(h){this.options.vars.boat=h;this.options.vars.logo_type=this.options.logo_type;this.options.vars.view_mode="0";this.swfobject.embedSWF(this.options.player_path+"?v="+this.options.vars.version,this.options.container_id,"100%","100%","11.0.1.152","",this.options.vars,this.options.params,{})};this.cart=function(a,b){b&&b(a);};this.close=function(){document.body.style.overflowY="auto";document.body.removeChild(this.modc);window.detachEvent?window.detachEvent("onresize",this.al):window.removeEventListener&&window.removeEventListener("resize",this.al,!1)};this.reload=function(h,Y){this.options.vars.boat=h;this.options.vars.add=Y;this.modal(h)};this.modal=function(h){document.body.style.overflowY="hidden";this.options.vars.boat=h;this.options.vars.logo_type=this.options.logo_type;this.options.vars.view_mode="1";this.modc=document.createElement("div");this.modc.style.position="fixed";this.modc.style.left="0";this.modc.style.top="0";this.modc.style.zIndex="99999999";this.modc.style.width="100%";this.modc.style.height="100%";this.modc.id="modal";document.body.appendChild(this.modc);h=document.createElement("div");h.id="modal-cont";this.modc.appendChild(h);this.al=function(){var h=document.getElementById("modal-cont");h&&(h.style.height=window.innerHeight+"px")};this.swfobject.embedSWF(this.options.player_path+"?v="+this.options.vars.version,"modal-cont","100%","100%","11.0.1.152","",this.options.vars,this.options.params,{});window.attachEvent?window.attachEvent("onresize",this.al):window.addEventListener&&window.addEventListener("resize",this.al,!0);this.al()}};