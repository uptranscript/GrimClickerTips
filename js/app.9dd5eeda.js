(function(){"use strict";var e={1213:function(e,t,n){var r=n(5130),o=n(6768),i=n(4232),u=n(6450),a=n(3367),l=n(8332),f=n(9669),c=n(6938),d=n(6498),s=n(7294),p=n(8477),m=n(8201),v=n(8050);function h(e,t,n,h,b,g){const y=(0,o.g2)("v-list-item-icon"),k=(0,o.g2)("v-list-item-content"),w=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(u.E,null,{default:(0,o.k6)((()=>[(0,o.bF)(m.e,{modelValue:e.drawer,"onUpdate:modelValue":t[0]||(t[0]=t=>e.drawer=t),app:""},{default:(0,o.k6)((()=>[(0,o.bF)(c.x8,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.items,(e=>((0,o.uX)(),(0,o.Wv)(d.g,{key:e.title,onClick:t=>g.goTo(e.route)},{default:(0,o.k6)((()=>[(0,o.bF)(y,null,{default:(0,o.k6)((()=>[(0,o.bF)(f.w,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.icon),1)])),_:2},1024)])),_:2},1024),(0,o.bF)(k,null,{default:(0,o.k6)((()=>[(0,o.bF)(s.U,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.title),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1},8,["modelValue"]),(0,o.bF)(a.z,{app:""},{default:(0,o.k6)((()=>[(0,o.bF)(l.Z,{onClick:t[1]||(t[1]=(0,r.D$)((t=>e.drawer=!e.drawer),["stop"]))}),(0,o.bF)(v.s,null,{default:(0,o.k6)((()=>[(0,o.eW)("Title")])),_:1})])),_:1}),(0,o.bF)(p.Y,null,{default:(0,o.k6)((()=>[(0,o.bF)(w)])),_:1})])),_:1})}n(4114);var b={data:()=>({drawer:!1,items:[{title:"ようこそページ",icon:"mdi-home",route:"/"},{title:"スキル構築",icon:"mdi-school",route:"/skills"},{title:"序盤の攻略",icon:"mdi-sword",route:"/strategy"}]}),methods:{goTo(e){this.$router.push(e),this.drawer=!1}}},g=n(1241);const y=(0,g.A)(b,[["render",h]]);var k=y,w=n(1387);const _=[{path:"/",name:"Home",component:()=>n.e(783).then(n.bind(n,4783))},{path:"/skills",name:"Skills",component:()=>n.e(958).then(n.bind(n,3501))},{path:"/strategy",name:"Strategy",component:()=>n.e(170).then(n.bind(n,9170))}],O=(0,w.aE)({history:(0,w.LA)("/GrimClickerTips/"),routes:_});var C=O,j=(n(5524),n(1036)),E=(0,j.$N)();async function F(){const e=await n.e(53).then(n.t.bind(n,8874,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}F(),(0,r.Ef)(k).use(C).use(E).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],i=e[c][2];for(var a=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(a=!1,i<u&&(u=i));if(a){e.splice(c--,1);var f=o();void 0!==f&&(t=f)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((function(e){u[e]=function(){return r[e]}}));return u["default"]=function(){return r},n.d(i,u),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(53===e?"webfontloader":e)+"."+{53:"690088db",170:"dfdebf4a",783:"228b07d9",958:"c97f15d6"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{170:"27a6d63a",783:"27a6d63a",958:"3ce7a8f4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="grim-vue:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,l;if(void 0!==i)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var d=f[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var s=function(t,n){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/GrimClickerTips/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,r,o,i){var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",n.nc&&(u.nonce=n.nc);var a=function(n){if(u.onerror=u.onload=null,"load"===n.type)o();else{var r=n&&n.type,a=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+a+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=a,u.parentNode&&u.parentNode.removeChild(u),i(l)}};return u.onerror=u.onload=a,u.href=t,r?r.parentNode.insertBefore(u,r.nextSibling):document.head.appendChild(u),u},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={524:0};n.f.miniCss=function(e,t){var n={170:1,783:1,958:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],l=r[2],f=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(l)var c=l(n)}for(t&&t(r);f<u.length;f++)i=u[f],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkgrim_vue"]=self["webpackChunkgrim_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1213)}));r=n.O(r)})();
//# sourceMappingURL=app.9dd5eeda.js.map