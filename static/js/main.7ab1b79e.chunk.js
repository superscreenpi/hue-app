(this["webpackJsonp@superscreenpi/hue-app"]=this["webpackJsonp@superscreenpi/hue-app"]||[]).push([[0],{18:function(e,n,t){e.exports=t(29)},23:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(4),i=t.n(a),c=function(){return r.a.createElement("div",null,"Hello World!")},s=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(23);var u,d=t(16),h=t(14),p={valueOne:"is set",valueTwo:0},f=t(2),v=t(17);!function(e){e.INCREMENT_VALUE="INCREMENT_VALUE"}(u||(u={}));var w=t(6),g={example:p},E=Object(f.b)({example:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.INCREMENT_VALUE:return Object(v.a)({},e,{valueTwo:e.valueTwo+n.delta});default:return e}}});var b=Object(f.c)(E,g,Object(h.persist)("launcher/state"));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w.a,{store:b},r.a.createElement(d.a,null,r.a.createElement(c,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hue-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/hue-app","/service-worker.js");s?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):l(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):l(n,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.7ab1b79e.chunk.js.map