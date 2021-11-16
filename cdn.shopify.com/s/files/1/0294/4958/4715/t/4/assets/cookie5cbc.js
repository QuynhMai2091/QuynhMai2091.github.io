/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}((function(e){var n=/\+/g;function o(e){return u.raw?e:encodeURIComponent(e)}function i(e){return u.raw?e:decodeURIComponent(e)}function r(e){return o(u.json?JSON.stringify(e):String(e))}function t(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),u.json?JSON.parse(e):e}catch(e){}}function c(n,o){var i=u.raw?n:t(n);return e.isFunction(o)?o(i):i}var u=e.cookie=function(n,t,s){if(arguments.length>1&&!e.isFunction(t)){if("number"==typeof(s=e.extend({},u.defaults,s)).expires){var a=s.expires,d=s.expires=new Date;d.setMilliseconds(d.getMilliseconds()+864e5*a)}return document.cookie=[o(n),"=",r(t),s.expires?"; expires="+s.expires.toUTCString():"",s.path?"; path="+s.path:"",s.domain?"; domain="+s.domain:"",s.secure?"; secure":""].join("")}var f=n?void 0:{},p=document.cookie?document.cookie.split("; "):[],l=0,m=p.length;for(;l<m;l++){var x=p[l].split("="),g=i(x.shift()),v=x.join("=");if(n===g){f=c(v,t);break}n||void 0===(v=c(v))||(f[g]=v)}return f};u.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}}));
//# sourceMappingURL=/s/files/1/0294/4958/4715/t/4/assets/cookie.js.map?v=1493580728690501788
