/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.4 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

var requirejs,require,define;(function(global){function isFunction(e){return ostring.call(e)==="[object Function]"}function isArray(e){return ostring.call(e)==="[object Array]"}function each(e,t){if(e){var n;for(n=0;n<e.length;n+=1)if(e[n]&&t(e[n],n,e))break}}function eachReverse(e,t){if(e){var n;for(n=e.length-1;n>-1;n-=1)if(e[n]&&t(e[n],n,e))break}}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var n;for(n in e)if(hasProp(e,n)&&t(e[n],n))break}function mixin(e,t,n,r){return t&&eachProp(t,function(t,i){if(n||!hasProp(e,i))r&&typeof t!="string"?(e[i]||(e[i]={}),mixin(e[i],t,n,r)):e[i]=t}),e}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,n,r){var i=new Error(t+"\nhttp://requirejs.org/docs/errors.html#"+e);return i.requireType=e,i.requireModules=r,n&&(i.originalError=n),i}function newContext(e){function d(e){var t,n;for(t=0;e[t];t+=1){n=e[t];if(n===".")e.splice(t,1),t-=1;else if(n===".."){if(t===1&&(e[2]===".."||e[0]===".."))break;t>0&&(e.splice(t-1,2),t-=2)}}}function v(e,t,n){var r,i,s,u,a,f,l,c,h,p,v,m=t&&t.split("/"),g=m,y=o.map,b=y&&y["*"];e&&e.charAt(0)==="."&&(t?(getOwn(o.pkgs,t)?g=m=[t]:g=m.slice(0,m.length-1),e=g.concat(e.split("/")),d(e),i=getOwn(o.pkgs,r=e[0]),e=e.join("/"),i&&e===r+"/"+i.main&&(e=r)):e.indexOf("./")===0&&(e=e.substring(2)));if(n&&(m||b)&&y){u=e.split("/");for(a=u.length;a>0;a-=1){l=u.slice(0,a).join("/");if(m)for(f=m.length;f>0;f-=1){s=getOwn(y,m.slice(0,f).join("/"));if(s){s=getOwn(s,l);if(s){c=s,h=a;break}}}if(c)break;!p&&b&&getOwn(b,l)&&(p=getOwn(b,l),v=a)}!c&&p&&(c=p,h=v),c&&(u.splice(0,h,c),e=u.join("/"))}return e}function m(e){isBrowser&&each(scripts(),function(t){if(t.getAttribute("data-requiremodule")===e&&t.getAttribute("data-requirecontext")===r.contextName)return t.parentNode.removeChild(t),!0})}function g(e){var t=getOwn(o.paths,e);if(t&&isArray(t)&&t.length>1)return m(e),t.shift(),r.require.undef(e),r.require([e]),!0}function y(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function b(e,t,n,i){var s,o,u,a,f=null,c=t?t.name:null,d=e,m=!0,g="";return e||(m=!1,e="_@r"+(h+=1)),a=y(e),f=a[0],e=a[1],f&&(f=v(f,c,i),o=getOwn(l,f)),e&&(f?o&&o.normalize?g=o.normalize(e,function(e){return v(e,c,i)}):g=v(e,c,i):(g=v(e,c,i),a=y(g),f=a[0],g=a[1],n=!0,s=r.nameToUrl(g))),u=f&&!o&&!n?"_unnormalized"+(p+=1):"",{prefix:f,name:g,parentMap:t,unnormalized:!!u,url:s,originalName:d,isDefine:m,id:(f?f+"!"+g:g)+u}}function w(e){var t=e.id,n=getOwn(u,t);return n||(n=u[t]=new r.Module(e)),n}function E(e,t,n){var r=e.id,i=getOwn(u,r);hasProp(l,r)&&(!i||i.defineEmitComplete)?t==="defined"&&n(l[r]):w(e).on(t,n)}function S(e,t){var n=e.requireModules,r=!1;t?t(e):(each(n,function(t){var n=getOwn(u,t);n&&(n.error=e,n.events.error&&(r=!0,n.emit("error",e)))}),r||req.onError(e))}function x(){globalDefQueue.length&&(apsp.apply(f,[f.length-1,0].concat(globalDefQueue)),globalDefQueue=[])}function T(e){delete u[e]}function N(e,t,n){var r=e.map.id;e.error?e.emit("error",e.error):(t[r]=!0,each(e.depMaps,function(r,i){var s=r.id,o=getOwn(u,s);o&&!e.depMatched[i]&&!n[s]&&(getOwn(t,s)?(e.defineDep(i,l[s]),e.check()):N(o,t,n))}),n[r]=!0)}function C(){var e,n,i,a,f=o.waitSeconds*1e3,l=f&&r.startTime+f<(new Date).getTime(),c=[],h=[],p=!1,d=!0;if(t)return;t=!0,eachProp(u,function(t){e=t.map,n=e.id;if(!t.enabled)return;e.isDefine||h.push(t);if(!t.error)if(!t.inited&&l)g(n)?(a=!0,p=!0):(c.push(n),m(n));else if(!t.inited&&t.fetched&&e.isDefine){p=!0;if(!e.prefix)return d=!1}});if(l&&c.length)return i=makeError("timeout","Load timeout for modules: "+c,null,c),i.contextName=r.contextName,S(i);d&&each(h,function(e){N(e,{},{})}),(!l||a)&&p&&(isBrowser||isWebWorker)&&!s&&(s=setTimeout(function(){s=0,C()},50)),t=!1}function k(e){hasProp(l,e[0])||w(b(e[0],null,!0)).init(e[1],e[2])}function L(e,t,n,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(n,t,!1)}function A(e){var t=e.currentTarget||e.srcElement;return L(t,r.onScriptLoad,"load","onreadystatechange"),L(t,r.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function O(){var e;x();while(f.length){e=f.shift();if(e[0]===null)return S(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));k(e)}}var t,n,r,i,s,o={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},map:{},config:{}},u={},a={},f=[],l={},c={},h=1,p=1;return i={require:function(e){return e.require?e.require:e.require=r.makeRequire(e.map)},exports:function(e){e.usingExports=!0;if(e.map.isDefine)return e.exports?e.exports:e.exports=l[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return o.config&&getOwn(o.config,e.map.id)||{}},exports:l[e.map.id]}}},n=function(e){this.events=getOwn(a,e.id)||{},this.map=e,this.shim=getOwn(o.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},n.prototype={init:function(e,t,n,r){r=r||{};if(this.inited)return;this.factory=t,n?this.on("error",n):this.events.error&&(n=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=n,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check()},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(this.fetched)return;this.fetched=!0,r.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();r.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))},load:function(){var e=this.map.url;c[e]||(c[e]=!0,r.load(this.map.id,e))},check:function(){if(!this.enabled||this.enabling)return;var e,t,n=this.map.id,i=this.depExports,s=this.exports,o=this.factory;if(!this.inited)this.fetch();else if(this.error)this.emit("error",this.error);else if(!this.defining){this.defining=!0;if(this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error)try{s=r.execCb(n,o,i,s)}catch(a){e=a}else s=r.execCb(n,o,i,s);this.map.isDefine&&(t=this.module,t&&t.exports!==undefined&&t.exports!==this.exports?s=t.exports:s===undefined&&this.usingExports&&(s=this.exports));if(e)return e.requireMap=this.map,e.requireModules=[this.map.id],e.requireType="define",S(this.error=e)}else s=o;this.exports=s,this.map.isDefine&&!this.ignore&&(l[n]=s,req.onResourceLoad&&req.onResourceLoad(r,this.map,this.depMaps)),delete u[n],this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}},callPlugin:function(){var e=this.map,t=e.id,n=b(e.prefix);this.depMaps.push(n),E(n,"defined",bind(this,function(n){var i,s,a,f=this.map.name,l=this.map.parentMap?this.map.parentMap.name:null,c=r.makeRequire(e.parentMap,{enableBuildCallback:!0});if(this.map.unnormalized){n.normalize&&(f=n.normalize(f,function(e){return v(e,l,!0)})||""),s=b(e.prefix+"!"+f,this.map.parentMap),E(s,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),a=getOwn(u,s.id),a&&(this.depMaps.push(s),this.events.error&&a.on("error",bind(this,function(e){this.emit("error",e)})),a.enable());return}i=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})}),i.error=bind(this,function(e){this.inited=!0,this.error=e,e.requireModules=[t],eachProp(u,function(e){e.map.id.indexOf(t+"_unnormalized")===0&&T(e.map.id)}),S(e)}),i.fromText=bind(this,function(n,s){var u=e.name,a=b(u),f=useInteractive;s&&(n=s),f&&(useInteractive=!1),w(a),hasProp(o.config,t)&&(o.config[u]=o.config[t]);try{req.exec(n)}catch(l){return S(makeError("fromtexteval","fromText eval for "+t+" failed: "+l,l,[t]))}f&&(useInteractive=!0),this.depMaps.push(a),r.completeLoad(u),c([u],i)}),n.load(e.name,c,i,o)})),r.enable(n,this),this.pluginMaps[n.id]=n},enable:function(){this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var n,s,o;if(typeof e=="string"){e=b(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,o=getOwn(i,e.id);if(o){this.depExports[t]=o(this);return}this.depCount+=1,E(e,"defined",bind(this,function(e){this.defineDep(t,e),this.check()})),this.errback&&E(e,"error",this.errback)}n=e.id,s=u[n],!hasProp(i,n)&&s&&!s.enabled&&r.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(u,e.id);t&&!t.enabled&&r.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var n=this.events[e];n||(n=this.events[e]=[]),n.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),e==="error"&&delete this.events[e]}},r={config:o,contextName:e,registry:u,defined:l,urlFetched:c,defQueue:f,Module:n,makeModuleMap:b,nextTick:req.nextTick,configure:function(e){e.baseUrl&&e.baseUrl.charAt(e.baseUrl.length-1)!=="/"&&(e.baseUrl+="/");var t=o.pkgs,n=o.shim,i={paths:!0,config:!0,map:!0};eachProp(e,function(e,t){i[t]?t==="map"?mixin(o[t],e,!0,!0):mixin(o[t],e,!0):o[t]=e}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),(e.exports||e.init)&&!e.exportsFn&&(e.exportsFn=r.makeShimExports(e)),n[t]=e}),o.shim=n),e.packages&&(each(e.packages,function(e){var n;e=typeof e=="string"?{name:e}:e,n=e.location,t[e.name]={name:e.name,location:n||e.name,main:(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}}),o.pkgs=t),eachProp(u,function(e,t){!e.inited&&!e.map.unnormalized&&(e.map=b(t))}),(e.deps||e.callback)&&r.require(e.deps||[],e.callback)},makeShimExports:function(e){function t(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}return t},makeRequire:function(t,n){function s(o,a,f){var c,h,p;return n.enableBuildCallback&&a&&isFunction(a)&&(a.__requireJsBuild=!0),typeof o=="string"?isFunction(a)?S(makeError("requireargs","Invalid require call"),f):t&&hasProp(i,o)?i[o](u[t.id]):req.get?req.get(r,o,t):(h=b(o,t,!1,!0),c=h.id,hasProp(l,c)?l[c]:S(makeError("notloaded",'Module name "'+c+'" has not been loaded yet for context: '+e+(t?"":". Use require([])")))):(O(),r.nextTick(function(){O(),p=w(b(null,t)),p.skipMap=n.skipMap,p.init(o,a,f,{enabled:!0}),C()}),s)}return n=n||{},mixin(s,{isBrowser:isBrowser,toUrl:function(e){var n,i,s=e.lastIndexOf("."),o=e.split("/")[0],u=o==="."||o==="..";return s!==-1&&(!u||s>1)&&(n=e.substring(s,e.length),e=e.substring(0,s)),i=r.nameToUrl(v(e,t&&t.id,!0),n||".fake"),n?i:i.substring(0,i.length-5)},defined:function(e){return hasProp(l,b(e,t,!1,!0).id)},specified:function(e){return e=b(e,t,!1,!0).id,hasProp(l,e)||hasProp(u,e)}}),t||(s.undef=function(e){x();var n=b(e,t,!0),r=getOwn(u,e);delete l[e],delete c[n.url],delete a[e],r&&(r.events.defined&&(a[e]=r.events),T(e))}),s},enable:function(e){var t=getOwn(u,e.id);t&&w(e).enable()},completeLoad:function(e){var t,n,r,i=getOwn(o.shim,e)||{},s=i.exports;x();while(f.length){n=f.shift();if(n[0]===null){n[0]=e;if(t)break;t=!0}else n[0]===e&&(t=!0);k(n)}r=getOwn(u,e);if(!t&&!hasProp(l,e)&&r&&!r.inited){if(o.enforceDefine&&(!s||!getGlobal(s))){if(g(e))return;return S(makeError("nodefine","No define call for "+e,null,[e]))}k([e,i.deps||[],i.exportsFn])}C()},nameToUrl:function(e,t){var n,r,i,s,u,a,f,l,c;if(req.jsExtRegExp.test(e))l=e+(t||"");else{n=o.paths,r=o.pkgs,u=e.split("/");for(a=u.length;a>0;a-=1){f=u.slice(0,a).join("/"),i=getOwn(r,f),c=getOwn(n,f);if(c){isArray(c)&&(c=c[0]),u.splice(0,a,c);break}if(i){e===i.name?s=i.location+"/"+i.main:s=i.location,u.splice(0,a,s);break}}l=u.join("/"),l+=t||(/\?/.test(l)?"":".js"),l=(l.charAt(0)==="/"||l.match(/^[\w\+\.\-]+:/)?"":o.baseUrl)+l}return o.urlArgs?l+((l.indexOf("?")===-1?"?":"&")+o.urlArgs):l},load:function(e,t){req.load(r,e,t)},execCb:function(e,t,n,r){return t.apply(r,n)},onScriptLoad:function(e){if(e.type==="load"||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=A(e);r.completeLoad(t.id)}},onScriptError:function(e){var t=A(e);if(!g(t.id))return S(makeError("scripterror","Script error",e,[t.id]))}},r.require=r.makeRequire(),r}function getInteractiveScript(){return interactiveScript&&interactiveScript.readyState==="interactive"?interactiveScript:(eachReverse(scripts(),function(e){if(e.readyState==="interactive")return interactiveScript=e}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.4",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=typeof window!="undefined"&&!!navigator&&!!document,isWebWorker=!isBrowser&&typeof importScripts!="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!="undefined"&&opera.toString()==="[object Opera]",contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if(typeof define!="undefined")return;if(typeof requirejs!="undefined"){if(isFunction(requirejs))return;cfg=requirejs,requirejs=undefined}typeof require!="undefined"&&!isFunction(require)&&(cfg=require,require=undefined),req=requirejs=function(e,t,n,r){var i,s,o=defContextName;return!isArray(e)&&typeof e!="string"&&(s=e,isArray(t)?(e=t,t=n,n=r):e=[]),s&&s.context&&(o=s.context),i=getOwn(contexts,o),i||(i=contexts[o]=req.s.newContext(o)),s&&i.configure(s),i.require(e,t,n)},req.config=function(e){return req(e)},req.nextTick=typeof setTimeout!="undefined"?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var t=contexts[defContextName];return t.require[e].apply(t,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=function(e){throw e},req.load=function(e,t,n){var r=e&&e.config||{},i;if(isBrowser)return i=r.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script"),i.type=r.scriptType||"text/javascript",i.charset="utf-8",i.async=!0,i.setAttribute("data-requirecontext",e.contextName),i.setAttribute("data-requiremodule",t),i.attachEvent&&!(i.attachEvent.toString&&i.attachEvent.toString().indexOf("[native code")<0)&&!isOpera?(useInteractive=!0,i.attachEvent("onreadystatechange",e.onScriptLoad)):(i.addEventListener("load",e.onScriptLoad,!1),i.addEventListener("error",e.onScriptError,!1)),i.src=n,currentlyAddingScript=i,baseElement?head.insertBefore(i,baseElement):head.appendChild(i),currentlyAddingScript=null,i;isWebWorker&&(importScripts(n),e.completeLoad(t))},isBrowser&&eachReverse(scripts(),function(e){head||(head=e.parentNode),dataMain=e.getAttribute("data-main");if(dataMain)return cfg.baseUrl||(src=dataMain.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath,dataMain=mainScript),dataMain=dataMain.replace(jsSuffixRegExp,""),cfg.deps=cfg.deps?cfg.deps.concat(dataMain):[dataMain],!0}),define=function(e,t,n){var r,i;typeof e!="string"&&(n=t,t=e,e=null),isArray(t)||(n=t,t=[]),!t.length&&isFunction(n)&&n.length&&(n.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,n){t.push(n)}),t=(n.length===1?["require"]:["require","exports","module"]).concat(t)),useInteractive&&(r=currentlyAddingScript||getInteractiveScript(),r&&(e||(e=r.getAttribute("data-requiremodule")),i=contexts[r.getAttribute("data-requirecontext")])),(i?i.defQueue:globalDefQueue).push([e,t,n])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)})(this);
/**
 * # wrap/jquery
 *
 * Wrap global instance for use in RequireJS modules
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # wrap/modernizr
 *
 * Wrap global instance for use in RequireJS modules
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/* Copyright (c) 2010-2012 Marcus Westin */

/**
 * # util/util
 *
 * This is the home for wayward methods who have lost their way.
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * Adapted from the official plugin text.js
 *
 * Uses UnderscoreJS micro-templates : http://documentcloud.github.com/underscore/#template
 * @author Julien Cabanès <julien@zeeagency.com>
 * @version 0.2
 *
 * @license RequireJS text 0.24.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

/**
 * # util/templates
 *
 * Utility methods for referencing js templates
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # manager/file
 *
 * Methods for loading files to the canvas and giving updates on their
 * progress
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # layout/base
 *
 * Base constructor for the canvas layout managers. Used to determine
 * canvas dimensions and to place sprites without intersections (overlap)
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # layout/compact
 *
 * Constructor for the compact canvas layout manager. Used to determine
 * canvas dimensions and to place sprites without intersections (overlap).
 * Places sprites in the most compact rectangle possible
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # layout/vertical
 *
 * Constructor for the vertical canvas layout manager. Used to determine
 * canvas dimensions and to place sprites without intersections (overlap).
 * Places sprites in a vertical column
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # layout/horizontal
 *
 * Constructor for the horizontal canvas layout manager. Used to determine
 * canvas dimensions and to place sprites without intersections (overlap).
 * Places sprites in a horizontal row
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # manager/layout
 *
 * Methods for setting the canvas layout and stitching the sprites together
 * (i.e. placing them on the canvas)
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # stylesheet/base
 *
 * Base constructor for the stylesheet managers
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # stylesheet/css
 *
 * Base constructor for the CSS stylesheet manager
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # stylesheet/less
 *
 * Base constructor for the LESS stylesheet manager
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # manager/stylesheet
 *
 * Methods for setting the canvas stylesheet type and making the stylesheets
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # module/drop-box
 *
 * Constructor for the drag and drop element. Used to allow users to drag
 * files onto a DOM element to initiate processing
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # util/array
 *
 * Utility methods for working with arrays
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # module/sprite
 *
 * Constructor for the sprite element, which holds sprite dimensions,
 * position, and display info. Used for manipulation of a single
 * sprite on the canvas
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # module/canvas
 *
 * Constructor for the sprite sheet canvas element, which holds and displays
 * all placed sprites. Used for manipulating sprite placement and
 * state
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # module/toolbar
 *
 * Constructor for UI toolbars
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # module/palette
 *
 * Constructor for UI palettes (i.e. dialogs). Inherits from `Toolbar`
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # module/stitches
 *
 * Constructor for the stitches module, which encapsulates all of the UI
 * functionality. Instantiated with a DOM element, into which all of the
 * markup is injected and to which the behaviors are attached. Typically
 * used in a DOM ready callback
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 */

/**
 * # Stitches
 *
 * ### _An HTML5 Sprite Sheet Generator_
 *
 * > http://draeton.github.io/stitches<br/>
 * > Copyright 2013 Matthew Cobbs<br/>
 * > Licensed under the MIT license.
 *
 * Stitches is an HTML5 sprite sheet generator.
 *
 * Stitches is developed by Matthew Cobbs in concert with the lovely open-source
 * community at Github. Thanks are owed to the developers at Twitter for
 * [Bootstrap](http://twitter.github.io/bootstrap), and
 * [Glyphicons](http://glyphicons.com/) for some cool little icons.
 *
 * Addtionally, I want to thank [James Taylor](https://github.io/jbt)
 * for the [Docker](https://github.io/jbt/docker) documentation tool, and most
 * of all the good folks who develop [RequireJS](http://requirejs.org/) and
 * [GruntJS](http://gruntjs.com/), for helping this all make sense.
 */

 define("wrap/jquery", [], function() {
         return jQuery
     }), define("wrap/modernizr", [], function() {
         return Modernizr
     }),
     function() {
         function o() {
             try {
                 return r in t && t[r]
             } catch (e) {
                 return !1
             }
         }
         var e = {},
             t = window,
             n = t.document,
             r = "localStorage",
             i = "__storejs__",
             s;
         e.disabled = !1, e.set = function(e, t) {}, e.get = function(e) {}, e.remove = function(e) {}, e.clear = function() {}, e.transact = function(t, n, r) {
             var i = e.get(t);
             r == null && (r = n, n = null), typeof i == "undefined" && (i = n || {}), r(i), e.set(t, i)
         }, e.setAll = function() {}, e.getAll = function() {}, e.serialize = function(e) {
             return JSON.stringify(e)
         }, e.deserialize = function(e) {
             if (typeof e != "string") return undefined;
             try {
                 return JSON.parse(e)
             } catch (t) {
                 return e || undefined
             }
         };
         if (o()) s = t[r], e.set = function(t, n) {
             return typeof t == "object" ? e.setAll(t) : n === undefined ? e.remove(t) : (s.setItem(t, e.serialize(n)), n)
         }, e.get = function(t) {
             return t === undefined ? e.getAll() : e.deserialize(s.getItem(t))
         }, e.remove = function(e) {
             s.removeItem(e)
         }, e.clear = function() {
             s.clear()
         }, e.setAll = function(t) {
             for (var n in t) t[n] = e.set(n, t[n])
         }, e.getAll = function() {
             var t = {};
             for (var n = 0; n < s.length; ++n) {
                 var r = s.key(n);
                 t[r] = e.get(r)
             }
             return t
         };
         else if (n.documentElement.addBehavior) {
             var u, a;
             try {
                 a = new ActiveXObject("htmlfile"), a.open(), a.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>'), a.close(), u = a.w.frames[0].document, s = u.createElement("div")
             } catch (f) {
                 s = n.createElement("div"), u = n.body
             }

             function l(t) {
                 return function() {
                     var n = Array.prototype.slice.call(arguments, 0);
                     n.unshift(s), u.appendChild(s), s.addBehavior("#default#userData"), s.load(r);
                     var i = t.apply(e, n);
                     return u.removeChild(s), i
                 }
             }
             var c = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");

             function h(e) {
                 return e.replace(c, "___")
             }
             e.set = l(function(t, n, i) {
                 return typeof n == "object" ? e.setAll(n) : (n = h(n), i === undefined ? e.remove(n) : (t.setAttribute(n, e.serialize(i)), t.save(r), i))
             }), e.get = l(function(t, n) {
                 return n === undefined ? e.getAll() : (n = h(n), e.deserialize(t.getAttribute(n)))
             }), e.remove = l(function(e, t) {
                 t = h(t), e.removeAttribute(t), e.save(r)
             }), e.clear = l(function(e) {
                 var t = e.XMLDocument.documentElement.attributes;
                 e.load(r);
                 for (var n = 0, i; i = t[n]; n++) e.removeAttribute(i.name);
                 e.save(r)
             }), e.setAll = l(function(t, n) {
                 for (var r in n) n[r] = e.set(r, n[r]);
                 return n
             }), e.getAll = l(function(t) {
                 var n = t.XMLDocument.documentElement.attributes;
                 t.load(r);
                 var i = {};
                 for (var s = 0, o; o = n[s]; ++s) i[o] = e.get(o);
                 return i
             })
         }
         try {
             e.set(i, i), e.get(i) != i && (e.disabled = !0), e.remove(i)
         } catch (f) {
             e.disabled = !0
         }
         e.enabled = !e.disabled, typeof module != "undefined" && typeof module != "function" ? module.exports = e : typeof define == "function" && define.amd ? define("module/../../../libs/store/store", e) : this.store = e
     }(), define("util/util", ["wrap/jquery"], function(e) {
         return {
             inherit: function(t, n, r) {
                 t.prototype = new n, t.prototype.constructor = n, e.each(r, function(e, n) {
                     t.prototype[e] = n
                 }), t.prototype._super = function(e, t, r) {
                     var i = n.prototype[e];
                     return i.apply(t, r)
                 }
             },
             debounce: function(e, t, n) {
                 var r;
                 return function() {
                     var i = this,
                         s = arguments,
                         o = function() {
                             n || e.apply(i, s), r = null
                         };
                     r ? window.clearTimeout(r) : n && e.apply(i, s), r = setTimeout(o, t || 50)
                 }
             },
             noop: function(e) {
                 e && (e.preventDefault(), e.stopPropagation())
             },
             toPx: function(e) {
                 return e ? e + "px" : "0"
             }
         }
     }),
     function() {
         var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
             t = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
             n = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
             r = [],
             i = {
                 evaluate: /<%([\s\S]+?)%>/g,
                 interpolate: /<%=([\s\S]+?)%>/g
             },
             s = function(e, t) {
                 var n = i,
                     r = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(n.interpolate, function(e, t) {
                         return "'," + t.replace(/\\'/g, "'") + ",'"
                     }).replace(n.evaluate || null, function(e, t) {
                         return "');" + t.replace(/\\'/g, "'").replace(/[\r\n\t]/g, " ") + "; __p.push('"
                     }).replace(/\r/g, "").replace(/\n/g, "").replace(/\t/g, "") + "');}return __p.join('');";
                 return r
             };
         define("tpl", [], function() {
             var i, o, u;
             return typeof window != "undefined" && window.navigator && window.document ? o = function(e, t) {
                 var n = i.createXhr();
                 n.open("GET", e, !0), n.onreadystatechange = function(e) {
                     n.readyState === 4 && t(n.responseText)
                 }, n.send(null)
             } : typeof process != "undefined" && process.versions && !!process.versions.node && (u = require.nodeRequire("fs"), o = function(e, t) {
                 t(u.readFileSync(e, "utf8"))
             }), i = {
                 version: "0.24.0",
                 strip: function(e) {
                     if (e) {
                         e = e.replace(t, "");
                         var r = e.match(n);
                         r && (e = r[1])
                     } else e = "";
                     return e
                 },
                 jsEscape: function(e) {
                     return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "").replace(/[\t]/g, "").replace(/[\r]/g, "")
                 },
                 createXhr: function() {
                     var t, n, r;
                     if (typeof XMLHttpRequest != "undefined") return new XMLHttpRequest;
                     for (n = 0; n < 3; n++) {
                         r = e[n];
                         try {
                             t = new ActiveXObject(r)
                         } catch (i) {}
                         if (t) {
                             e = [r];
                             break
                         }
                     }
                     if (!t) throw new Error("require.getXhr(): XMLHttpRequest not available");
                     return t
                 },
                 get: o,
                 load: function(e, t, n, o) {
                     var u = !1,
                         a, f = e.indexOf("."),
                         l = e.substring(0, f),
                         c = e.substring(f + 1, e.length);
                     f = c.indexOf("!"), f !== -1 && (u = c.substring(f + 1, c.length), u = u === "strip", c = c.substring(0, f)), a = "nameToUrl" in t ? t.nameToUrl(l, "." + c) : t.toUrl(l + "." + c), i.get(a, function(t) {
                         t = s(t), o.isBuild || (t = new Function("obj", t)), t = u ? i.strip(t) : t, o.isBuild && o.inlineText && (r[e] = t), n(t)
                     })
                 },
                 write: function(e, t, n) {
                     if (t in r) {
                         var s = i.jsEscape(r[t]);
                         n("define('" + e + "!" + t + "', function() {return function(obj) { " + s.replace(/(\\')/g, "'").replace(/(\\\\)/g, "\\") + "}});\n")
                     }
                 }
             }
         })
     }(), define("tpl!util/../../templates/stitches.tpl", function() {
         return function(obj) {
             var __p = [],
                 print = function() {
                     __p.push.apply(__p, arguments)
                 };
             with(obj || {}) __p.push('<div class="stitches">    <!-- .stitches-toolbar -->    <div class="stitches-toolbar btn-toolbar">        <div class="btn-group">            <p href="#" class="btn btn-small">                <strong>Emotify</strong>            </p>       </div><div class="btn-group">     <button data-action="open" class="btn btn-small btn-info files" title="Open">                <i class="icon-folder-open icon-white"></i> <span class="hidden-phone">Open</span><input class="file" type="file" multiple="multiple">            </button>            <button data-action="settings" class="btn btn-small btn-info" title="Set layout, style prefix, padding, etc.">                <i class="icon-cog icon-white"></i> <span class="hidden-phone">Settings</span>            </button>            <button data-action="clear" class="btn btn-small btn-info disabled" title="Clear sprites from the canvas">                <i class="icon-remove icon-white"></i> <span class="hidden-phone">Clear</span>            </button>        </div>        <div class="btn-group">            <button data-action="downloads" class="btn btn-small btn-success disabled" title="Get the generated sprite sheet and stylesheet">                <i class="icon-download-alt icon-white"></i> <span class="hidden-phone">Downloads</span>            </button>        </div>        <div class="btn-group">            <button data-action="about" class="btn btn-small btn-info" title="About Emotify">                <i class="icon-info-sign icon-white"></i> <span class="hidden-phone">About</span>            </button>        </div>                       <div class="btn-group">            <button onclick="randomBtn()" data-action="about" class="btn btn-small btn-primary" title="Spritesheet Name">                <i class="icon-info-sign icon-white"></i> <span class="hidden-phone">%%', randomChar, '%%</span>            </button>        </div>    </div>    <!-- /.stitches-toolbar -->    <!-- .stitches-progress -->    <div class="stitches-progress collapse">        <div class="progress progress-warning">            <div class="bar" style="width: 0%;"></div>        </div>    </div>    <!-- /.stitches-progress -->    <!-- .stitches-drop-box -->    <div class="stitches-drop-box">        <div class="stitches-overlay"></div>        <div class="stitches-wrap">            <!-- .stitches-canvas -->            <div class="stitches-canvas"></div>            <!-- /.stitches-canvas -->        </div>        <!-- .stitches-palettes -->        <div class="stitches-palettes">            <!-- .stitches-settings -->            <div class="stitches-palette stitches-settings fade">                <div class="stitches-palette-header">                    <button type="button" class="close" data-action="close" title="Close">&times;</button>                    <h4>Settings</h4>                </div>                <div class="stitches-palette-body">                    <ul class="nav nav-tabs">                        <li class="nav-item"><a href="#general" class="nav-link active">General</a></li>                                         </ul>                    <form class="form-horizontal">                        <div class="tab-content">                            <div class="tab-pane active" id="general">                                <div class="control-group hide">                                    <label class="control-label">Position</label>                                    <div class="controls">                                        <label class="checkbox">                                            <input name="position" type="checkbox" value="auto"/> Auto                                        </label>                                    </div>                                </div>                                <div class="control-group">                                    <label class="control-label">Layout</label>                                    <div class="controls">                                        <label class="radio inline">                                            <input name="layout" type="radio" value="compact"/> Compact                                        </label>                                        <label class="radio inline">                                            <input name="layout" type="radio" value="vertical"/> Vertical                                        </label>                                        <label class="radio inline">                                            <input name="layout" type="radio" value="horizontal"/> Horizontal                                        </label>                                    </div>                                </div>                                                                                               <div class="control-group">                                    <label class="control-label">Padding</label>                                    <div class="controls">                                        <div class="input-append">                                            <input name="padding" type="number" min="0" required placeholder="Sprite padding&hellip;">                                            <span class="add-on">px</span>                                        </div>                                    </div>                                </div>                                 </div>                                                   </div>                    </form>                </div>                <div class="stitches-palette-footer">                    <div class="btn-toolbar">                        <div class="btn-group">                                                    </div>                        <div class="btn-group">                            <button class="btn btn-small btn-info" data-action="close" title="Save"><span>Save</span></button>                            <button class="btn btn-small btn-info" data-action="close" title="Close"><span>Close</span></button>                        </div>                    </div>                </div>            </div>            <!-- /.stitches-settings -->            <!-- .stitches-properties -->            <div class="stitches-palette stitches-properties fade">                <div class="stitches-palette-header">                    <button type="button" class="close" data-action="close" title="Close">&times;</button>                    <h4>Sprite Properties</h4>                </div>                <div class="stitches-palette-body">                    <form class="form-horizontal">                        <div class="control-group">                            <label class="control-label">Emote Name</label>                            <div class="controls">                                <input name="name" type="text" required placeholder="Sprite name&hellip;">                            </div>                        </div>                        <div class="control-group">                            <label class="control-label">Coordinates (x, y)</label>                            <div class="controls">                                <div class="input-append">                                    <input name="x" required disabled placeholder="From left&hellip;" class="input-mini">                                    <span class="add-on">px</span>                                </div>                                <div class="input-append">                                    <input name="y" required disabled placeholder="From top&hellip;" class="input-mini">                                    <span class="add-on">px</span>                                </div>                            </div>                        </div>                    </form>                </div>                <div class="stitches-palette-footer">                    <div class="btn-toolbar">                        <div class="btn-group">                            <button class="btn btn-small btn-danger" data-action="remove" title="Delete"><span>Delete</span></button>                            <button class="btn btn-small btn-info" data-action="close" title="Save"><span>Save</span></button>                            <button class="btn btn-small btn-info" data-action="close" title="Close"><span>Close</span></button>                        </div>                    </div>                </div>            </div>            <!-- /.stitches-properties -->            <!-- .stitches-about -->            <div class="stitches-palette stitches-about fade in">                <div class="stitches-palette-header">                    <button type="button" class="close" data-action="close" title="Close">&times;</button>                    <h4>Welcome to Emotify</h4>                </div>                <div class="stitches-palette-body">                    <p>Emotify is a web application that converts your PNGs into the resources needed for moderators of subreddits to add their own emotes. This is based on <a href="http://draeton.github.io/stitches/">Stitches<a/>, which does the same thing but for general-purpose CSS. </p>                    <p>Drag &amp; drop image files onto the space below, or use the &ldquo;Open&rdquo; link to load images using the file browser. Then, click &ldquo;Generate&rdquo; to create a sprite sheet to upload to Reddit, some CSS to put in your stylesheet, and a Markdown file to share your emotes! <em>If the web app does not work for you, try on a laptop/desktop computer or in a modern browser, such as Chrome.</em></p>                      <p class="text-right"><small>Emotify Modifications &copy; 2016 HeyItsShuga<br/>               Stitches Codebase &copy; 2013 Matthew Cobbs<br/>                        Licensed under the MIT license.</small></p>                </div>                <div class="stitches-palette-footer">                    <div class="btn-toolbar">                        <div class="btn-group">                            <button class="btn btn-small btn-info" data-action="close" title="Close"><span>Close</span></button>                        </div>                    </div>                </div>            </div>            <!-- /.stitches-about -->            <!-- .stitches-downloads -->            <div class="stitches-palette stitches-downloads fade">                <div class="stitches-palette-header">                    <button type="button" class="close" data-action="close" title="Close">&times;</button>                    <h4>Downloads</h4>                </div>                <div class="stitches-palette-body">                    <section></section>                </div>                <div class="stitches-palette-footer">                    <div class="btn-toolbar">                        <div class="btn-group">                            <a href="#" class="downloads-spritesheet btn btn-small btn-success" download="', randomChar, '"><i class="icon-download-alt icon-white"></i> Spritesheet</a>                            <a href="#" class="downloads-stylesheet btn btn-small btn-success" download="ADD_TO_REDDIT.css"><i class="icon-download-alt icon-white"></i> Stylesheet</a>                            <button class="btn btn-small btn-info" data-action="close" title="Close"><span>Close</span></button>                        </div>                    </div>                </div>            </div>            <!-- /.stitches-downloads -->        </div>        <!-- /.stitches-palettes -->    </div>    <!-- /.stitches-drop-box --></div>');
             return __p.join("")
         }
     }), define("tpl!util/../../templates/downloads.tpl", function() {
         return function(obj) {
             var __p = [],
                 print = function() {
                     __p.push.apply(__p, arguments)
                 };
             with(obj || {}) __p.push('<ul class="nav nav-tabs">    <li class="nav-item"><a href="#spritesheet" class="nav-link active" data-toggle="tab">Image</a></li>    <li class="nav-item"><a class="nav-link" href="#stylesheet" data-toggle="tab">CSS</a></li>    <li class="nav-item"><a class="nav-link" href="#markup" data-toggle="tab">Emote Codes</a></li>    <li></li></ul><div class="tab-content">    <div class="tab-pane active" id="spritesheet">        <p><img src="', spritesheet, '" class="thumbnail"/></p>    </div>    <div class="tab-pane" id="stylesheet">        <p><textarea rows="8">', stylesheet, '</textarea></p>    </div>    <div class="tab-pane" id="markup">        <p><textarea rows="', markupLines, '">', markup, '</textarea></p>    </div>    <div class="tab-pane stitches-example" id="example">        <style type="text/', stylesheetType, '">', stylesheetWithUri, "</style>        <div>", markupTooltip, '</div>        <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/1.3.3/less.min.js"></script>    </div></div>');
             return __p.join("")
         }
     }), define("tpl!util/../../templates/sprite.tpl", function() {
         return function(obj) {
             var __p = [],
                 print = function() {
                     __p.push.apply(__p, arguments)
                 };
             with(obj || {}) __p.push('<div class="stitches-sprite" style="top: ', y, "px; left: ", x, 'px;">    <img src="', image.src, '"/></div>');
             return __p.join("")
         }
     }), define("tpl!util/../../templates/css.tpl", function() {
         return function(obj) {
             var __p = [],
                 print = function() {
                     __p.push.apply(__p, arguments)
                 };
             //with(obj || {}) __p.push("a[href|='/", prefix, "'] {\\n    background-image: url(", backgroundImage, ");\\n    background-repeat: no-repeat;\\n    display: block;\\n}\\n"), $.map(sprites, function(e) {
             with(obj || {}) __p.push("/* Emote Sheet ", randomChar, " */ "), $.map(sprites, function(e) {
                 __p.push("a[href|='/", e.name, "']{background-image:url(", backgroundImage, ");background-repeat:no-repeat;clear:none;float:left;display:block;")
                 __p.push("width:", e.image.width, "px;height:", e.image.height, "px;background-position:", e.left(!0), " ", e.top(!0), "}")
             }), __p.push("");
             return __p.join("")
         }
     }), define("tpl!util/../../templates/css-markup.tpl", function() {
         return function(obj) {
             var __p = [],
                 print = function() {
                     __p.push.apply(__p, arguments)
                 };
             with(obj || {}) __p.push(""), $.map(sprites, function(e) {
                 __p.push(""), tooltip ? __p.push('<i class="', prefix, " ", prefix, "-", e.name, '" data-toggle="tooltip" title=".', prefix, ".", prefix, "-", e.name, '"></i>\\n') : __p.push('[](/', e.name, ') `[](/', e.name, ')` [](/sp)\\n\\n'), __p.push("")
             }), __p.push("");
             return __p.join("")
         }
     }), define("tpl!util/../../templates/less.tpl", function() {
         return function(obj) {
             var __p = [],
                 print = function() {
                     __p.push.apply(__p, arguments)
                 };
             with(obj || {}) __p.push(".stitches-", prefix, "(@x: 0, @y: 0, @width: 0, @height: 0) {\\n    background-position: @x @y;\\n    width: @width;\\n    height: @height;\\n}\\n\\n.", prefix, " {\\n    background-image: url(", backgroundImage, ");    background-repeat: no-repeat;\\n    display: block;\\n"), $.map(sprites, function(e) {
                 __p.push("\\n    &.", prefix, "-", e.name, " {\\n        .stitches-", prefix, "(", e.left(!0), ", ", e.top(!0), ", ", e.image.width, "px, ", e.image.height, "px);\\n    }\\n")
             }), __p.push("}\\n");
             return __p.join("")
         }
     }), define("tpl!util/../../templates/less-markup.tpl", function() {
         return function(obj) {
             var __p = [],
                 print = function() {
                     __p.push.apply(__p, arguments)
                 };
             with(obj || {}) __p.push(""), $.map(sprites, function(e) {
                 __p.push(""), tooltip ? __p.push('<i class="', prefix, " ", prefix, "-", e.name, '" data-toggle="tooltip" title=".', prefix, ".", prefix, "-", e.name, '"></i>') : __p.push('<i class="', prefix, " ", prefix, "-", e.name, '"></i>\\n'), __p.push("")
             }), __p.push("");
             return __p.join("")
         }
     }), define("util/templates", ["tpl!../../templates/stitches.tpl", "tpl!../../templates/downloads.tpl", "tpl!../../templates/sprite.tpl", "tpl!../../templates/css.tpl", "tpl!../../templates/css-markup.tpl", "tpl!../../templates/less.tpl", "tpl!../../templates/less-markup.tpl"], function(e, t, n, r, i, s, o) {
         return {
             stitches: function() {
                 return e.apply(this, arguments)
             },
             downloads: function() {
                 return t.apply(this, arguments)
             },
             sprite: function() {
                 return n.apply(this, arguments)
             },
             css: function() {
                 return r.apply(this, arguments)
             },
             cssMarkup: function() {
                 return i.apply(this, arguments)
             },
             less: function() {
                 return s.apply(this, arguments)
             },
             lessMarkup: function() {
                 return o.apply(this, arguments)
             }
         }
     }), define("manager/file", ["wrap/jquery", "util/util"], function(e, t) {
         return {
             total: 0,
             processed: 0,
             queue: [],
             set: function(e) {
                 e = e || {}, this.onload = e.onload || t.noop, this.onprogress = e.onprogress || t.noop, this.onerror = e.onerror || t.noop
             },
             processFiles: function(t) {
                 var n = this;
                 this.total = t.length, this.processed = 0, this.queue = [], e.map(t, function(e) {
                     /jpeg|png|gif/.test(e.type) && n.processFile(e)
                 }), this.onprogress(0, "info")
             },
             processFile: function(e) {
                 var t = this,
                     n;
                 try {
                     n = new FileReader, n.onloadend = function(n) {
                         var r = e.name,
                             i = n.target.result,
                             s = ++t.processed / t.total;
                         t.onprogress(s), t.queue.push([r, i]), t.queue.length === t.total && t.processQueue()
                     }, n.readAsDataURL(e)
                 } catch (r) {
                     this.onerror(r)
                 }
             },
             processQueue: function() {
                 var t = this;
                 e.map(this.queue, function(e) {
                     t.onload.apply(t, e)
                 })
             }
         }
     }), define("layout/base", ["wrap/jquery"], function(e) {
         var t = {
                 maxPass: 2
             },
             n = function(n) {
                 this.settings = e.extend({}, t, n)
             };
         return n.prototype = {
             constructor: n,
             getDimensions: function(e, t) {},
             placeSprite: function(e, t, n) {},
             intersection: function(t, n) {
                 var r, i, s, o, u = [],
                     a;
                 return e.map(n, function(e) {
                     r = e.x < t.x + t.width, s = e.y < t.y + t.height, i = e.x + e.width > t.x, o = e.y + e.height > t.y, r && i && s && o && u.push(e)
                 }), u.length && (a = u.pop()), a
             }
         }, n
     }), define("layout/compact", ["wrap/jquery", "util/util", "layout/base"], function(e, t, n) {
         var r = {
                 maxPass: 2
             },
             i = function(t) {
                 this.settings = e.extend({}, r, t)
             };
         return t.inherit(i, n, {
             getDimensions: function(t, n) {
                 var r = 0,
                     i = 0,
                     s = 0,
                     o = 0;
                 return e.map(t, function(e) {
                     r = e.width > r ? e.width : r, i = e.height > i ? e.height : i, s += e.area
                 }), o = Math.ceil(Math.sqrt(s)), r = r > o ? r : o, i = i > o ? i : o, {
                     width: r || n.width,
                     height: i || n.height
                 }
             },
             placeSprite: function(e, t, n) {
                 var r, i = 0,
                     s = 0,
                     o = 0;
                 while (i++ < this.settings.maxPass) {
                     for (o = 0; o <= n.height - e.height; o++) {
                         for (s = 0; s <= n.width - e.width; s++) {
                             e.x = s, e.y = o, r = this.intersection(e, t);
                             if (!r) return t.push(e), e.show(), !0;
                             s = r.x + r.width - 1
                         }
                         o = r.y + r.height - 1
                     }
                     n.width += e.width, n.height += e.height
                 }
             }
         }), i
     }), define("layout/vertical", ["wrap/jquery", "util/util", "layout/base"], function(e, t, n) {
         var r = {
                 maxPass: 2
             },
             i = function(t) {
                 this.settings = e.extend({}, r, t)
             };
         return t.inherit(i, n, {
             getDimensions: function(t, n) {
                 var r = 0,
                     i = 0;
                 return e.map(t, function(e) {
                     r = e.width > r ? e.width : r, i += e.height
                 }), {
                     width: r || n.width,
                     height: i || n.height
                 }
             },
             placeSprite: function(e, t, n) {
                 var r, i = 0,
                     s = 0,
                     o = 0;
                 while (i++ < this.settings.maxPass) {
                     for (o = 0; o <= n.height - e.height; o++) {
                         e.x = s, e.y = o, r = this.intersection(e, t);
                         if (!r) return t.push(e), e.show(), !0;
                         o = r.y + r.height - 1
                     }
                     n.width += e.width, n.height += e.height
                 }
                 return !1
             }
         }), i
     }), define("layout/horizontal", ["wrap/jquery", "util/util", "layout/base"], function(e, t, n) {
         var r = {
                 maxPass: 2
             },
             i = function(t) {
                 this.settings = e.extend({}, r, t)
             };
         return t.inherit(i, n, {
             getDimensions: function(t, n) {
                 var r = 0,
                     i = 0;
                 return e.map(t, function(e) {
                     i = e.height > i ? e.height : i, r += e.width
                 }), {
                     width: r || n.width,
                     height: i || n.height
                 }
             },
             placeSprite: function(e, t, n) {
                 var r, i = 0,
                     s = 0,
                     o = 0;
                 while (i++ < this.settings.maxPass) {
                     for (s = 0; s <= n.width - e.width; s++) {
                         e.x = s, e.y = o, r = this.intersection(e, t);
                         if (!r) return t.push(e), e.show(), !0;
                         s = r.x + r.width - 1
                     }
                     n.width += e.width, n.height += e.height
                 }
                 return !1
             }
         }), i
     }), define("manager/layout", ["wrap/jquery", "layout/compact", "layout/vertical", "layout/horizontal"], function(e, t, n, r) {
         var i = {
             compact: t,
             vertical: n,
             horizontal: r
         };
         return {
             set: function(e) {
                 var t = i[e] || i.compact;
                 this.manager = new t
             },
             getDimensions: function(e, t) {
                 return this.manager.getDimensions(e, t)
             },
             placeSprites: function(t, n, r, i) {
                 var s = this;
                 i(0, "info"), e.map(t, function(e) {
                     e.placed || (e.placed = s.manager.placeSprite(e, n, r)), i(n.length / t.length)
                 }), t = e.map(t, function(e) {
                     return e.placed ? null : e
                 })
             },
             trim: function(t, n) {
                 var r = 0,
                     i = 0;
                 e.map(t, function(e) {
                     r = r > e.x + e.width ? r : e.x + e.width, i = i > e.y + e.height ? i : e.y + e.height
                 }), n.width = r || n.width, n.height = i || n.height
             },
             getSpritesheet: function(t) {
                 var n = t.sprites,
                     r = t.dimensions,
                     i, s, o;
                 i = document.createElement("canvas"), i.width = r.width, i.height = r.height;
                 try {
                     s = i.getContext("2d"), e.map(n, function(e) {
                         var t = e.left(),
                             n = e.top();
                         s.drawImage(e.image, t, n)
                     }), o = i.toDataURL("image/png")
                 } catch (u) {
                     this.$element.trigger("error", [u])
                 }
                 return o
             }
         }
     }), define("stylesheet/base", ["wrap/jquery"], function(e) {
         var t = {
                 filename: "%%" + randomChar + "%%"
             },
             n = function(n) {
                 this.settings = e.extend({}, t, n)
             };
         return n.prototype = {
             constructor: n,
             template: null,
             get: function(e, t, n, r) {},
             markup: function(e, t, n) {
                 return this.template({
                     prefix: t,
                     sprites: e,
                     tooltip: n
                 })
             }
         }, n
     }), define("stylesheet/css", ["wrap/jquery", "util/util", "util/templates", "stylesheet/base"], function(e, t, n, r) {
         var i = {
                 filename: "%%" + randomChar + "%%"
             },
             s = function(t) {
                 this.settings = e.extend({}, i, t)
             };
         return t.inherit(s, r, {
             template: n.cssMarkup,
             get: function(e, t, r, i) {
                 var s = i ? t : this.settings.filename;
                 return n.css({
                     prefix: r,
                     backgroundImage: s,
                     sprites: e
                 })
             }
         }), s
     }), define("stylesheet/less", ["wrap/jquery", "util/util", "util/templates", "stylesheet/base"], function(e, t, n, r) {
         var i = {
                 filename: "%%" + (new Date%9e6).toString(36) + "%%"
             },
             s = function(t) {
                 this.settings = e.extend({}, i, t)
             };
         return t.inherit(s, r, {
             template: n.lessMarkup,
             get: function(e, t, r, i) {
                 var s = i ? t : this.settings.filename;
                 return n.less({
                     prefix: r,
                     backgroundImage: s,
                     sprites: e
                 })
             }
         }), s
     }), define("manager/stylesheet", ["wrap/jquery", "stylesheet/css", "stylesheet/less"], function(e, t, n) {
         var r = {
             css: t,
             less: n
         };
         return {
             set: function(e) {
                 var t;
                 this.type = e || "css", t = r[this.type], this.manager = new t
             },
             getStylesheet: function(e) {
                 var t = e.sprites,
                     n = e.spritesheet,
                     r = e.prefix,
                     i = e.uri,
                     s = this.manager.get(t, n, r, i);
                 return s = s.replace(/\\n/g, "\n"), s
             },
             getMarkup: function(e) {
                 var t = e.sprites,
                     n = e.prefix,
                     r = e.tooltip || !1,
                     i = this.manager.markup(t, n, r);
                 return i = i.replace(/\\n/g, "\n"), i
             }
         }
     }), define("module/drop-box", ["wrap/jquery", "util/util"], function(e, t) {
         var n = {},
             r = function(t, r) {
                 this.$element = e(t), this.$overlay = this.$element.find(".stitches-overlay"), this.settings = e.extend({}, n, r), this.init()
             };
         return r.classname = ".stitches-drop-box", r.prototype = {
             constructor: r,
             init: function() {
                 this.bind()
             },
             bind: function() {
                 var n = this.$element.get(0),
                     r = this.$overlay.get(0);
                 n.addEventListener("dragenter", e.proxy(this.dragStart, this), !1), r.addEventListener("dragleave", e.proxy(this.dragStop, this), !1), r.addEventListener("dragexit", e.proxy(this.dragStop, this), !1), r.addEventListener("dragover", t.noop, !1), r.addEventListener("drop", e.proxy(this.drop, this), !1)
             },
             dragStart: function(e) {
                 this.$element.trigger("close-palettes"), this.$element.trigger("show-overlay")
             },
             dragStop: function(t) {
                 e.contains(this.$element, t.target) && this.$element.trigger("hide-overlay")
             },
             drop: function(e) {
                 var t = e.files || e.dataTransfer.files;
                 e.stopPropagation(), e.preventDefault(), t.length ? this.$element.trigger("process-files", [t]) : this.$element.trigger("hide-overlay")
             }
         }, r
     }), define("util/array", ["wrap/jquery"], function(e) {
         return {
             remove: function(t, n) {
                 return e(t).filter(function() {
                     return this !== n
                 })
             }
         }
     }), define("module/sprite", ["wrap/jquery", "util/util", "util/templates"], function(e, t, n) {
         var r = {
                 name: "",
                 src: "",
                 padding: 0
             },
             i = function(n, i) {
                 this.settings = e.extend({}, r, n), this.$element = null, this.name = this.cleanName(this.settings.name), this.src = this.settings.src, this.padding = parseInt(this.settings.padding, 10), this.active = !1, this.placed = !1, this.onload = i.onload || t.noop, this.init()
             };
         return i.classname = ".stitches-sprite", i.prototype = {
             constructor: i,
             init: function() {
                 this.load()
             },
             load: function() {
                 var e = this;
                 this.image = new Image, this.image.onload = function() {
                     e.x = 0, e.y = 0, e.width = e.image.width + e.padding * 2, e.height = e.image.height + e.padding * 2, e.area = e.width * e.height, e.render(), e.bind(), e.toDataURL(), e.onload(e)
                 }, this.image.src = this.src
             },
             render: function() {
                 var t = n.sprite(this);
                 this.$element = e(t), this.$element.data("sprite", this)
             },
             bind: function() {
                 this.$element.on("click", e.proxy(this.click, this))
             },
             toDataURL: function() {
                 var e, t, n;
                 e = document.createElement("canvas"), e.width = this.image.width, e.height = this.image.height;
                 try {
                     t = e.getContext("2d"), t.drawImage(this.image, 0, 0), n = e.toDataURL("image/png")
                 } catch (r) {
                     this.$element.trigger("error", [r])
                 }
                 this.src = n
             },
             reset: function() {
                 this.x = 0, this.y = 0, this.placed = !1, this.$element.removeClass("placed")
             },
             show: function() {
                 this.$element.css({
                     left: this.x + "px",
                     top: this.y + "px",
                     padding: this.padding + "px"
                 }).addClass("placed")
             },
             click: function(e) {
                 var t = !this.active;
                 t ? (this.$element.trigger("clear-active", [this]), this.$element.trigger("open-properties", [this])) : this.$element.trigger("close-properties"), this.active = t, this.$element.toggleClass("active", t)
             },
             configure: function(e) {
                 e.padding && (this.padding = parseInt(e.padding, 10), this.width = this.image.width + this.padding * 2, this.height = this.image.height + this.padding * 2, this.area = this.width * this.height)
             },
             cleanName: function(e) {
                 return e = e.replace(/\.\w+$/i, ""), e = e.replace(/[\s.]+/gi, "-"), e = e.replace(/[^a-z0-9\-]/gi, "_"), e
             },
             left: function(e) {
                 var n = this.x + this.padding;
                 return e ? t.toPx(-n) : n
             },
             top: function(e) {
                 var n = this.y + this.padding;
                 return e ? t.toPx(-n) : n
             },
             toJSON: function() {
                 return {
                     name: this.name,
                     src: this.src
                 }
             }
         }, i
     }), define("module/canvas", ["wrap/jquery", "util/util", "util/array", "manager/layout", "module/sprite"], function(e, t, n, r, i) {
         var s = {
                 images: null,
                 dimensions: {
                     width: 400,
                     height: 400
                 }
             },
             o = function(n, r, i) {
                 this.$element = e(n), this.settings = e.extend({}, s, r), this.images = this.settings.images, this.dimensions = this.settings.dimensions, this.sprites = [], this.names = [], this.onprogress = i.onprogress || t.noop
             };
         return o.classname = ".stitches-canvas", o.prototype = {
             constructor: o,
             init: function() {
                 this.reset = t.debounce(this.reset, 500), this.bind(), this.setup(), this.reset()
             },
             bind: function() {
                 this.$element.on("clear-active", e.proxy(this.clearActive, this))
             },
             setup: function() {
                 var t = this;
                 e(this.images).each(function() {
                     var n = e(this),
                         r = n.data("name"),
                         i = n.attr("src");
                     t.createSprite(r, i)
                 }).remove()
             },
             reset: function() {
                 this.$element.trigger("show-overlay"), this.measure(this.sprites), this.place(this.sprites), this.cut(this.sprites), this.$element.trigger("generate-sheets"), this.$element.trigger("hide-overlay")
             },
             measure: function(e) {
                 this.dimensions = r.getDimensions(e, this.settings.dimensions)
             },
             place: function(t) {
                 var n = [];
                 e.map(t, function(e) {
                     e.reset()
                 }), t = t.sort(function(e, t) {
                     return e.name === t.name ? 0 : e.name > t.name ? 1 : -1
                 }), r.placeSprites(t, n, this.dimensions, this.onprogress)
             },
             cut: function(e) {
                 r.trim(e, this.dimensions), this.$element.css({
                     width: this.dimensions.width + "px",
                     height: this.dimensions.height + "px"
                 })
             },
             add: function(e) {
                 this.sprites.push(e), this.names.push(e.name), this.$element.trigger("show-overlay"), e.$element.appendTo(this.$element), this.$element.trigger("update-toolbar"), this.reset()
             },
             remove: function(e) {
                 this.sprites = n.remove(this.sprites, e), this.names = n.remove(this.names, e.name), this.$element.trigger("show-overlay"), e.$element.fadeOut("fast").remove(), this.$element.trigger("update-toolbar"), this.$element.trigger("close-properties"), this.reset()
             },
             clear: function() {
                 this.empty(), this.$element.trigger("show-overlay"), this.$element.trigger("update-toolbar"), this.$element.trigger("close-properties"), this.$element.trigger("open-settings"), this.reset()
             },
             empty: function() {
                 this.sprites = [], this.names = [], this.$element.empty()
             },
             createSprite: function(e, t) {
                 var n = this,
                     r = new i({
                         name: e,
                         src: t,
                         padding: this.settings.padding
                     }, {
                         onload: function(e) {
                             n.add(e)
                         }
                     })
             },
             clearActive: function(t, n) {
                 this.$element.find(".active").each(function() {
                     var t = e(this),
                         r = t.data("sprite");
                     n && r !== n && (t.removeClass("active"), r.active = !1)
                 })
             },
             toJSON: function() {
                 return {
                     sprites: this.sprites
                 }
             }
         }, o
     }), define("module/toolbar", ["wrap/jquery"], function(e) {
         var t = {
                 name: "",
                 actions: {}
             },
             n = function(n, r) {
                 this.$element = e(n), this.settings = e.extend({}, t, r), this.name = this.settings.name, this.actions = this.settings.actions, this.init()
             };
         return n.classname = ".stitches-toolbar", n.prototype = {
             constructor: n,
             init: function() {
                 this.bind()
             },
             bind: function() {
                 var t = this;
                 e.each(this.actions, function(n, r) {
                     e.each(r, function(e, r) {
                         var i = "[data-action=" + n + "]",
                             s = t.getHandler(t, r);
                         n === "instance" ? t.$element.on(e, t.getHandler(t, s)) : t.$element.on(e, i, s)
                     })
                 })
             },
             getHandler: function(t, n) {
                 return function(r) {
                     var i = e(r.currentTarget);
                     i.is(".disabled") ? (r.stopPropagation(), r.preventDefault()) : n.apply(t, arguments)
                 }
             },
             toggleActions: function(t, n) {
                 var r = this;
                 typeof t == "string" && (t = t.split(" ")), e.map(t, function(e) {
                     var t = r.$element.find("[data-action=" + e + "]");
                     t.toggleClass("disabled", n)
                 })
             },
             enable: function(e) {
                 this.toggleActions(e, !1)
             },
             disable: function(e) {
                 this.toggleActions(e, !0)
             }
         }, n
     }), define("module/palette", ["wrap/jquery", "util/util", "module/toolbar"], function(e, t, n) {
         var r = {
                 name: "",
                 visible: !1,
                 actions: {},
                 fields: {}
             },
             i = function(t, n) {
                 this.$element = e(t), this.settings = e.extend({}, r, n), this.name = this.settings.name, this.visible = this.settings.visible, this.actions = this.settings.actions, this.fields = this.settings.fields, this.source = null, this.init()
             };
         return i.classname = ".stitches-palette", t.inherit(i, n, {
             init: function() {
                 this._super("init", this, arguments), this.$element.toggleClass("in", this.visible)
             },
             bind: function() {
                 var t = this;
                 this._super("bind", this, arguments), e.each(this.fields, function(n, r) {
                     e.each(r, function(e, r) {
                         var i = "[name=" + n + "]",
                             s = t.getHandler(t, r);
                         t.$element.on(e, i, s)
                     })
                 })
             },
             open: function() {
                 this.$element.addClass("in"), this.visible = !0
             },
             close: function() {
                 this.$element.removeClass("in"), this.visible = !1
             },
             configure: function(t) {
                 var n = this;
                 this.source = t.source, e.each(t.inputs, function(e, t) {
                     var r = "[name=" + e + "]",
                         i = n.$element.find(r),
                         s = i.attr("type");
                     switch (s) {
                         case "radio":
                         case "checkbox":
                             i = i.removeAttr("checked").filter("[value=" + t + "]"), i.attr("checked", "checked");
                             break;
                         default:
                             i.val(t)
                     }
                 })
             }
         }), i
     }), define("module/stitches", ["wrap/jquery", "wrap/modernizr", "../../../libs/store/store", "util/util", "util/templates", "manager/file", "manager/layout", "manager/stylesheet", "module/drop-box", "module/canvas", "module/toolbar", "module/palette"], function(e, t, n, r, i, s, o, u, a, f, l, c) {
         var h = {
                 layout: "compact",
                 prefix: "",
                 padding: 5,
                 uri: !1,
                 stylesheet: "css"
             },
             p = function(t, n) {
                 this.$element = e(t), this.settings = e.extend({}, h, n), this.init()
             };
         return p.prototype = {
             constructor: p,
             init: function() {
                 this.configure(), this.render(), this.test(), this.bind(), this.setDropBox(), this.setToolbar(), this.setImages(), this.setCanvas(), this.setManagers(), this.setPalettes(), this.canvas.init()
             },
             configure: function() {
                 var t;
                 n && !n.disabled && (t = n.get("stitches-settings")), t && (this.settings = e.extend(this.settings, t))
             },
             render: function() {
                 var e = i.stitches({});
                 this.$element.append(e), this.$overlay = this.$element.find(".stitches-overlay"), this.$dropBox = this.$element.find(".stitches-drop-box"), this.$toolbar = this.$element.find(".stitches-toolbar"), this.$canvas = this.$element.find(".stitches-canvas"), this.$progress = this.$element.find(".stitches-progress .progress"), this.$progressBar = this.$element.find(".stitches-progress .bar"), this.$about = this.$element.find(".stitches-about"), this.$downloads = this.$element.find(".stitches-downloads"), this.$settings = this.$element.find(".stitches-settings"), this.$properties = this.$element.find(".stitches-properties")
             },
             test: function() {
                 this.hasFileInput = this.$element.find("input.file").length
             },
             bind: function() {
                 this.$element.on("show-overlay", e.proxy(this.showOverlay, this)), this.$element.on("hide-overlay", e.proxy(this.hideOverlay, this)), this.$element.on("open-about", e.proxy(this.openAbout, this)), this.$element.on("close-about", e.proxy(this.closeAbout, this)), this.$element.on("open-downloads", e.proxy(this.openDownloads, this)), this.$element.on("close-downloads", e.proxy(this.closeDownloads, this)), this.$element.on("open-settings", e.proxy(this.openSettings, this)), this.$element.on("close-settings", e.proxy(this.closeSettings, this)), this.$element.on("open-properties", e.proxy(this.openProperties, this)), this.$element.on("close-properties", e.proxy(this.closeProperties, this)), this.$element.on("close-palettes", e.proxy(this.closePalettes, this)), this.$element.on("process-files", e.proxy(this.processFiles, this)), this.$element.on("update-toolbar", e.proxy(this.updateToolbar, this)), this.$element.on("update-settings", e.proxy(this.updateSettingsPalette, this)), this.$element.on("update-downloads", e.proxy(this.updateDownloadsPalette, this)), this.$element.on("generate-sheets", e.proxy(this.generateSheets, this)), this.$element.on("error", e.proxy(this.errorHandler, this))
             },
             setDropBox: function() {
                 this.dropBox = new a(this.$dropBox)
             },
             setManagers: function() {
                 s.set({
                     onload: e.proxy(this.canvas.createSprite, this.canvas),
                     onprogress: e.proxy(this.updateProgress, this)
                 }), o.set(this.settings.layout), u.set(this.settings.stylesheet)
             },
             setImages: function() {
                 this.images = this.$element.find("> img").get()
             },
             setCanvas: function() {
                 this.canvas = new f(this.$canvas, {
                     images: this.images,
                     padding: this.settings.padding
                 }, {
                     onprogress: e.proxy(this.updateProgress, this)
                 })
             },
             setToolbar: function() {
                 var e = this;
                 this.toolbar = new l(this.$toolbar, {
                     name: "toolbar",
                     actions: {
                         open: {
                             change: function(t) {
                                 var n = e.$toolbar.find("input[type=file]"),
                                     r = n.clone(!0).val(""),
                                     i = t.target.files;
                                 e.$element.trigger("process-files", [i]), n.replaceWith(r)
                             }
                         },
                         settings: {
                             click: function(t) {
                                 e.$element.trigger("open-settings")
                             }
                         },
                         reset: {
                             click: function(t) {
                                 e.canvas.reset()
                             }
                         },
                         clear: {
                             click: function(t) {
                                 e.canvas.clear()
                             }
                         },
                         downloads: {
                             click: function(t) {
                                 e.$element.trigger("open-downloads")
                             }
                         },
                         about: {
                             click: function(t) {
                                 e.$element.trigger("open-about")
                             }
                         }
                     }
                 })
             },
             setPalettes: function() {
                 var t = this,
                     n = new c(this.$about, {
                         name: "about",
                         visible: !0,
                         actions: {
                             close: {
                                 click: function(e) {
                                     this.close()
                                 }
                             }
                         }
                     }),
                     r = new c(this.$downloads, {
                         name: "downloads",
                         visible: !1,
                         actions: {
                             close: {
                                 click: function(e) {
                                     this.close()
                                 }
                             }
                         }
                     }),
                     i = new c(this.$settings, {
                         name: "settings",
                         visible: !1,
                         actions: {
                             close: {
                                 click: function(e) {
                                     t.$element.trigger("close-settings")
                                 }
                             }
                         },
                         fields: {
                             layout: {
                                 change: function(e) {
                                     var n = this.$element.find("input[name=layout]:checked"),
                                         r = n.val();
                                     this.source.layout = r, o.set(r), t.updateSettings()
                                 }
                             },
                             stylesheet: {
                                 change: function(e) {
                                     var n = this.$element.find("input[name=stylesheet]:checked"),
                                         r = n.val();
                                     t.settings.stylesheet = r, u.set(r), t.updateSettings()
                                 }
                             },
                             prefix: {
                                 "input blur": function(n) {
                                     var r = e(n.currentTarget).val();
                                     this.source.prefix = r, t.updateSettings()
                                 }
                             },
                             padding: {
                                 "input blur": function(n) {
                                     var r = e(n.currentTarget).val();
                                     this.source.padding = r, t.canvas.padding = r, e.map(t.canvas.sprites, function(e) {
                                         e.configure({
                                             padding: r
                                         })
                                     }), t.updateSettings()
                                 }
                             },
                             uri: {
                                 change: function(n) {
                                     var r = e(n.currentTarget).is(":checked");
                                     this.source.uri = r, t.updateSettings()
                                 }
                             },
                             "import": {
                                 blur: function(n) {
                                     var r = e(n.currentTarget),
                                         i = r.parents(".control-group"),
                                         s = r.val(),
                                         o;
                                     i.removeClass("error");
                                     if (s) try {
                                         o = JSON.parse(s), t.importData(o)
                                     } catch (u) {
                                         i.addClass("error"), t.$element.trigger("error", [u])
                                     } else t.updateProgress(1, "success")
                                 }
                             }
                         }
                     }),
                     s = new c(this.$properties, {
                         name: "properties",
                         visible: !1,
                         actions: {
                             close: {
                                 click: function(e) {
                                     t.$element.trigger("close-properties")
                                 }
                             },
                             remove: {
                                 click: function(e) {
                                     var n = this.source;
                                     t.canvas.remove(n)
                                 }
                             }
                         },
                         fields: {
                             name: {
                                 "input blur": function(t) {
                                     var n = e(t.currentTarget),
                                         r = this.source,
                                         i = n.val(),
                                         s = r.cleanName(i);
                                     this.source.name = s, i !== s && n.val(s)
                                 }
                             }
                         }
                     });
                 this.palettes = {
                     about: n,
                     downloads: r,
                     settings: i,
                     properties: s
                 }
             },
             updateSettings: function() {
                 this.showOverlay(), this.canvas.reset(), n && !n.disabled && n.set("stitches-settings", this.settings)
             },
             showOverlay: function(e) {
                 this.$overlay.fadeTo("fast", .4)
             },
             hideOverlay: function(e) {
                 this.$overlay.fadeOut("fast")
             },
             openAbout: function(e) {
                 this.closePalettes(), this.palettes.about.open()
             },
             closeAbout: function(e) {
                 this.palettes.about.visible && this.palettes.about.close()
             },
             openDownloads: function(e) {
                 this.closePalettes(), this.palettes.downloads.open()
             },
             closeDownloads: function(e) {
                 this.palettes.downloads.visible && this.palettes.downloads.close()
             },
             openSettings: function(e) {
                 this.closePalettes(), this.palettes.settings.configure({
                     source: this.settings,
                     inputs: {
                         layout: this.settings.layout,
                         stylesheet: this.settings.stylesheet,
                         prefix: this.settings.prefix,
                         padding: this.settings.padding,
                         uri: this.settings.uri
                     }
                 }), this.palettes.settings.open()
             },
             closeSettings: function(e) {
                 var t = this.$settings.find("ul.nav-tabs"),
                     n = t.find("li:first-child a"),
                     r = this.$settings.find(":input[name=import]"),
                     i = r.parents(".control-group");
                 n.click(), r.val(""), i.removeClass("error"), this.palettes.settings.visible && this.palettes.settings.close()
             },
             openProperties: function(e, t) {
                 this.closePalettes(), this.palettes.properties.configure({
                     source: t,
                     inputs: {
                         name: t.name,
                         x: t.left(),
                         y: t.top()
                     }
                 }), this.palettes.properties.open()
             },
             closeProperties: function(e) {
                 this.palettes.properties.visible && (this.palettes.properties.close(), this.canvas.$element.trigger("clear-active", [!0]))
             },
             closePalettes: function(e) {
                 this.closeAbout(), this.closeDownloads(), this.closeSettings(), this.closeProperties()
             },
             processFiles: function(e, t) {
                 s.processFiles(t)
             },
             updateToolbar: function(e) {
                 var t = this.toolbar,
                     n = this.canvas;
                 n.sprites.length ? t.enable("reset clear downloads") : t.disable("reset clear downloads"), this.hasFileInput ? t.enable("open") : t.disable("open")
             },
             updateSettingsPalette: function(e) {
                 var t = this.$settings.find(".downloads-export");
                 t.attr({
                     href: "data:text/plain," + encodeURIComponent(JSON.stringify(this)),
                     target: "_blank"
                 })
             },
             updateDownloadsPalette: function(t) {
                 var n = this.$downloads.find("section"),
                     r = this.$downloads.find(".downloads-spritesheet"),
                     s = this.$downloads.find(".downloads-stylesheet"),
                     o = i.downloads({
                         prefix: this.settings.prefix,
                         spritesheet: this.spritesheet,
                         stylesheet: this.stylesheet,
                         stylesheetWithUri: this.stylesheetWithUri,
                         stylesheetType: u.type,
                         stylesheetLines: this.stylesheet.split("\n").length,
                         markup: this.markup,
                         markupLines: this.markup.split("\n").length,
                         markupTooltip: this.markupTooltip
                     });
                 n.html(o), r.attr({
                     href: this.spritesheet,
                     target: "_blank"
                 }), s.attr({
                     href: "data:text/plain," + encodeURIComponent(this.stylesheet),
                     target: "_blank"
                 }), e.fn.tooltip && n.find("[data-toggle=tooltip]").tooltip()
             },
             updateProgress: function(e, t) {
                 var n = Math.ceil(e * 100);
                 n === 100 && t !== "danger" && t !== "warning" && (t = "success"), t && this.$progress.attr({
                     "class": "progress progress-" + t
                 }), this.$progressBar.css({
                     width: n + "%"
                 })
             },
             generateSheets: function(e) {
                 this.spritesheet = o.getSpritesheet({
                     sprites: this.canvas.sprites,
                     dimensions: this.canvas.dimensions
                 }), this.stylesheetWithUri = u.getStylesheet({
                     sprites: this.canvas.sprites,
                     spritesheet: this.spritesheet,
                     prefix: this.settings.prefix,
                     uri: !0
                 }), this.markup = u.getMarkup({
                     sprites: this.canvas.sprites,
                     prefix: this.settings.prefix
                 }), this.markupTooltip = u.getMarkup({
                     sprites: this.canvas.sprites,
                     prefix: this.settings.prefix,
                     tooltip: !0
                 }), this.settings.uri ? this.stylesheet = this.stylesheetWithUri : this.stylesheet = u.getStylesheet({
                     sprites: this.canvas.sprites,
                     spritesheet: this.spritesheet,
                     prefix: this.settings.prefix,
                     uri: this.settings.uri
                 }), this.$element.trigger("update-toolbar"), this.$element.trigger("update-settings"), this.$element.trigger("update-downloads"), this.updateProgress(1, "success")
             },
             errorHandler: function(e, t, n) {
                 this.updateProgress(1, n || "warning")
             },
             toJSON: function() {
                 return {
                     settings: this.settings,
                     canvas: this.canvas.toJSON()
                 }
             },
             importData: function(t) {
                 var n = this,
                     r = t.settings || {},
                     i = t.canvas || {},
                     s = i.sprites || [];
                 this.settings = e.extend({}, h, r), o.set(this.settings.layout), u.set(this.settings.stylesheet), this.updateSettings(), this.canvas.clear(), this.canvas.settings.padding = this.settings.padding, e.map(s, function(e) {
                     n.canvas.createSprite(e.name, e.src)
                 }), this.updateProgress(1, "success")
             }
         }, p
     }), require({
         paths: {
             tpl: "../tpl"
         }
     }, ["wrap/jquery", "module/stitches"], function(e, t) {
         e(document).ready(function() {
             var n = ".stitches";
             e(n).each(function() {
                 var e = new t(this)
             })
         })
     }), define("stitches", function() {});
