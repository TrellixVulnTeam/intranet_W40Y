(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9268)}])},1551:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,s=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,a=(s=n(7294))&&s.__esModule?s:{default:s},i=n(1003),c=n(880),l=n(9246);var u={};function f(e,t,n,r){if(e&&i.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=c.useRouter(),s=a.default.useMemo((function(){var t=o(i.resolveHref(r,e.href,!0),2),n=t[0],s=t[1];return{href:n,as:e.as?i.resolveHref(r,e.as):s||n}}),[r,e.href,e.as]),d=s.href,h=s.as,p=a.default.useRef(d),m=a.default.useRef(h),g=e.children,v=e.replace,j=e.shallow,x=e.scroll,y=e.locale;"string"===typeof g&&(g=a.default.createElement("a",null,g));var _=(t=a.default.Children.only(g))&&"object"===typeof t&&t.ref,b=o(l.useIntersection({rootMargin:"200px"}),3),N=b[0],S=b[1],w=b[2],C=a.default.useCallback((function(e){m.current===h&&p.current===d||(w(),m.current=h,p.current=d),N(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[h,_,d,w,N]);a.default.useEffect((function(){var e=S&&n&&i.isLocalURL(d),t="undefined"!==typeof y?y:r&&r.locale,o=u[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(r,d,h,{locale:t})}),[h,d,S,y,n,r]);var E={ref:C,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,s,a,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:s,locale:c,scroll:a}))}(e,r,d,h,v,j,x,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(r,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof y?y:r&&r.locale,A=r&&r.isLocaleDomain&&i.getDomainLocale(h,k,r&&r.locales,r&&r.domainLocales);E.href=A||i.addBasePath(i.addLocale(h,k,r&&r.defaultLocale))}return a.default.cloneElement(t,E)};t.default=d,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,s=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);a=!0);}catch(c){i=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(i)throw o}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!i,u=s.useRef(),f=o(s.useState(!1),2),d=f[0],h=f[1],p=o(s.useState(t?t.current:null),2),m=p[0],g=p[1],v=s.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=c.get(r):(t=c.get(n),l.push(n));if(t)return t;var o=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(n,t={id:n,observer:s,elements:o}),t}(n),o=r.id,s=r.observer,a=r.elements;return a.set(e,t),s.observe(e),function(){if(a.delete(e),s.unobserve(e),0===a.size){s.disconnect(),c.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:n}))}),[r,m,n,d]),j=s.useCallback((function(){h(!1)}),[]);return s.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),s.useEffect((function(){t&&g(t.current)}),[t]),[v,d,j]};var s=n(7294),a=n(4686),i="undefined"!==typeof IntersectionObserver;var c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},9268:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return S}});var r=n(5893),o=(n(6774),n(7012)),s=n.n(o),a=n(1664),i=n.n(a),c=n(9008),l=n(5697),u=n.n(l),f=n(1163),d=n.n(f),h=n(7294),p=n(765);function m(e){var t=e.children,n=e.setStrass,o=(0,h.useState)(!(window.innerWidth<1300)),a=o[0],l=o[1],u=(0,h.useState)(""),f=u[0],m=u[1],g=(0,h.useState)([]),v=g[0],j=g[1],x=(0,h.useState)([]),y=x[0],_=x[1],b=(0,h.useState)(localStorage.getItem("theme")?JSON.parse(localStorage.getItem("theme")):0),N=b[0],S=b[1],w=[{title:"Neutre",logo:"logo_origine.png",colors:["black","white","white","#eaeaea","#eaeaea","#eaeaea"]},{title:"Modern",logo:"logo.png",colors:["white","#EEEBD3","#255957","#437C90","#A98743","#F7C548"]},{title:"Nature",logo:"logo.png",colors:["white","#FAF3DD","#4A7C59","#68B0AB","#8FC0A9","#C8D5B9"]},{title:"Forest",logo:"logo.png",colors:["white","#EDEEC0","#433E0E","#D0C88E","#A7A284","#7C9082"]},{title:"Delirium",logo:"logo.png",colors:["white","white","#6C6EA0","#66C7F4","#C1CAD6","#FF1053"]}],C=["--texte","--neutre","--darkcolor1","--color1","--darkcolor2","--color2"];(0,h.useEffect)((function(){for(var e=0;e<C.length;e++)document.documentElement.style.setProperty(C[e],w[N].colors[e])}),[N]),(0,h.useEffect)((function(){f.length>=3&&(0,p.Z)("/search/"+f).then((function(e){return j(e)}))}),[f]),(0,h.useEffect)((function(){(0,p.Z)("/auth").then((function(e){_(e),n(e[0])}))}),[]),(0,h.useEffect)((function(){m("")}),[d().pathname]);return(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("meta",{name:"description",content:"Created by Strass Infal Boquette"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.svg"}),(0,r.jsxs)("title",{children:["A&M Boquette - ",{"/":["Accueil","home"],"/actus":["Actualit\xe9s","actus"],"/birse":["Birse - Bien-\xeatre","birse"],"/events":["Ev\xe8nements","events"],"/events/[event]":["Ev\xe8nements","events"],"/calendar":["Calendrier","calendar"],"/cvis":["Catalogue C-Vis","cvis"],"/strass":["Strass - Promotions","strass"],"/liens":["Liens utiles","liens"],"/pret":["Pr\xeat Mat\xe9riel","pret"]}[d().pathname][0]]})]}),(0,r.jsxs)("header",{className:s().header,children:[(0,r.jsx)("img",{src:"/img/"+w[N].logo,className:s().appLogo,alt:"logo"}),(0,r.jsx)("button",{className:s().searchBouton,onClick:function(){return l(!a)},title:"Masquer le Menu",children:(0,r.jsx)("img",{src:"/img/menu.svg",className:s().image,alt:"menu"})}),(0,r.jsx)("input",{type:"text",className:s().chercher,placeholder:"Chercher une publication...",value:f,onChange:function(e){return m(e.target.value)}}),(0,r.jsx)("select",{className:s().selection,onChange:function(e){for(var t=0;t<y.length;t++)y[t].cn==e.target.value&&n(y[t])},children:null===y||void 0===y?void 0:y.map((function(e){return(0,r.jsx)("option",{value:e.cn,children:e.description},e.cn)}))}),(0,r.jsx)("select",{className:s().themes,onChange:function(e){localStorage.setItem("theme",JSON.stringify(e.target.value)),S(e.target.value)},children:w.map((function(e,t){return(0,r.jsx)("option",{value:t,selected:t==N?"selected":"",children:e.title},t)}))})]}),(0,r.jsxs)("div",{className:s().content,children:[a?(0,r.jsx)("nav",{className:s().menu,children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/",passHref:!0,children:(0,r.jsxs)("span",{className:[s().menuBouton,"/"==d().pathname?s().selectedMenu:void 0].join(" "),children:[(0,r.jsx)("img",{src:"/img/home.svg",className:s().image,alt:"logo"}),(0,r.jsx)("h2",{children:"Accueil"})]})})},"home"),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/actus",passHref:!0,children:(0,r.jsxs)("span",{className:[s().menuBouton,"/actus"==d().pathname?s().selectedMenu:void 0].join(" "),children:[(0,r.jsx)("img",{src:"/img/actus.svg",className:s().image,alt:"logo"}),(0,r.jsx)("h2",{children:"Actualit\xe9s"})]})})},"actus"),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/birse",passHref:!0,children:(0,r.jsxs)("span",{className:[s().menuBouton,"/birse"==d().pathname?s().selectedMenu:void 0].join(" "),children:[(0,r.jsx)("img",{src:"/img/birse.svg",className:s().image,alt:"logo"}),(0,r.jsx)("h2",{children:"Birse - Bien-\xeatre"})]})})},"birse"),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/events",passHref:!0,children:(0,r.jsxs)("span",{className:[s().menuBouton,"/events"==d().pathname||"/events/[event]"==d().pathname?s().selectedMenu:void 0].join(" "),children:[(0,r.jsx)("img",{src:"/img/events.svg",className:s().image,alt:"logo"}),(0,r.jsx)("h2",{children:"Ev\xe8nements"})]})})},"events"),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/calendar",passHref:!0,children:(0,r.jsxs)("span",{className:[s().menuBouton,"/calendar"==d().pathname?s().selectedMenu:void 0].join(" "),children:[(0,r.jsx)("img",{src:"/img/calendar.svg",className:s().image,alt:"logo"}),(0,r.jsx)("h2",{children:"Calendrier"})]})})},"calendar"),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/cvis",passHref:!0,children:(0,r.jsxs)("span",{className:[s().menuBouton,"/cvis"==d().pathname?s().selectedMenu:void 0].join(" "),children:[(0,r.jsx)("img",{src:"/img/cvis.png",className:s().image,alt:"logo"}),(0,r.jsx)("h2",{children:"Catalogue C-Vis"})]})})},"cvis"),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/strass",passHref:!0,children:(0,r.jsxs)("span",{className:[s().menuBouton,"/strass"==d().pathname?s().selectedMenu:void 0].join(" "),children:[(0,r.jsx)("img",{src:"/img/strass.svg",className:s().image,alt:"logo"}),(0,r.jsx)("h2",{children:"Strass"})]})})},"strass"),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/liens",passHref:!0,children:(0,r.jsxs)("span",{className:[s().menuBouton,"/liens"==d().pathname?s().selectedMenu:void 0].join(" "),children:[(0,r.jsx)("img",{src:"/img/liens.svg",className:s().image,alt:"logo"}),(0,r.jsx)("h2",{children:"Liens utiles"})]})})},"liens"),(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:"/pret",passHref:!0,children:(0,r.jsxs)("span",{className:[s().menuBouton,"/pret"==d().pathname?s().selectedMenu:void 0].join(" "),children:[(0,r.jsx)("img",{src:"/img/pret.svg",className:s().image,alt:"logo"}),(0,r.jsx)("h2",{children:"(Pr\xeat Mat\xe9riel)\xb0"})]})})},"pret")]})}):void 0,(0,r.jsx)("main",{className:s().main,children:f.length>=3?(0,r.jsx)("div",{className:s().searchContent,children:null===v||void 0===v?void 0:v.map((function(e){return(0,r.jsxs)("section",{className:s().searchSection,children:[(0,r.jsxs)("div",{className:s().searchHeader,children:[(0,r.jsx)("h4",{className:s().searchTitle,children:e.title}),(0,r.jsx)("p",{className:s().searchStrass,children:e.strassName})]}),(0,r.jsx)("div",{dangerouslySetInnerHTML:{__html:e.content},className:s().searchContent})]},e.id)}))}):t}),(0,r.jsx)("footer",{className:s().footer})]})]})}m.propTypes={setStrass:u().func.isRequired};var g=n(4051),v=n.n(g),j=n(6259),x=n.n(j);function y(e,t,n,r,o,s,a){try{var i=e[s](a),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(r,o)}function _(e){for(var t=e.setToken,n=(0,h.useState)(),o=n[0],s=n[1],a=(0,h.useState)(),i=a[0],l=a[1],u=(0,h.useState)(!1),f=u[0],d=u[1],p=function(){var e,n=(e=v().mark((function e(n){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),fetch("https://www.boquette.fr/api/auth",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"},body:JSON.stringify({username:o,password:i}),credentials:"include"}).then((function(e){if(200==e.status)return e.json();d(!0)})).then((function(e){e.xsrfToken?(d(!1),t(e.xsrfToken)):d(!0)}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var s=e.apply(t,n);function a(e){y(s,r,o,a,i,"next",e)}function i(e){y(s,r,o,a,i,"throw",e)}a(void 0)}))});return function(e){return n.apply(this,arguments)}}(),m=["--texte","--neutre","--darkcolor1","--color1","--darkcolor2","--color2"],g=["black","white","white","#eaeaea","#eaeaea","#eaeaea"],j=0;j<m.length;j++)document.documentElement.style.setProperty(m[j],g[j]);return(0,r.jsxs)("div",{className:x().loginWrapper,children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.svg"}),(0,r.jsx)("title",{children:"A&M Boquette - Connexion"})]}),(0,r.jsx)("img",{src:"/img/logo_origine.png",className:x().AppLogo,alt:"logo"}),f?(0,r.jsx)("p",{className:"field",children:"Hum ? Vos identifiants ne semblent pas fonctionner..."}):void 0,(0,r.jsxs)("form",{onSubmit:p,children:[(0,r.jsxs)("label",{children:[(0,r.jsx)("p",{className:"texte",children:"Nom d'utilisateur"}),(0,r.jsx)("input",{type:"text",onChange:function(e){return s(e.target.value)},className:"field",required:!0})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("p",{className:"texte",children:"Mot de passe"}),(0,r.jsx)("input",{type:"password",onChange:function(e){return l(e.target.value)},className:"field",required:!0})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{type:"submit",className:"submit",children:"Connexion"})})]})]})}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){b(e,t,n[t])}))}return e}function S(e){var t=e.Component,n=e.pageProps,o=(0,h.useState)(!1),s=o[0],a=o[1],i=(0,h.useState)({description:"Utilisateur",cn:"user"}),c=i[0],l=i[1],u=function(){var e=(0,h.useState)(function(){var e=localStorage.getItem("token");if("undefined"!==e)return JSON.parse(e)}()),t=e[0],n=e[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),n(e)},token:t}}(),f=u.token,d=u.setToken;return(0,h.useEffect)((function(){a(!0)}),[]),s?f?(0,r.jsx)(m,{setStrass:l,children:(0,r.jsx)(t,N({},n,{selectStrass:c}))}):(0,r.jsx)(_,N({},n,{setToken:d})):null}_.propTypes={setToken:u().func.isRequired}},765:function(e,t,n){"use strict";function r(e){return fetch("https://www.boquette.fr/api"+e,{method:"GET",headers:{"x-xsrf-token":JSON.parse(localStorage.getItem("token")),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"},credentials:"include"}).then((function(e){if(200==e.status)return e.json();localStorage.removeItem("token"),window.location.reload()}))}function o(e,t,n){return fetch("https://www.boquette.fr/api"+e,{method:t,headers:{"Content-Type":"application/json","x-xsrf-token":JSON.parse(localStorage.getItem("token")),"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":"true"},body:JSON.stringify(n),credentials:"include"}).then((function(e){if(200==e.status)return e.status;localStorage.removeItem("token"),window.location.reload()}))}n.d(t,{W:function(){return o},Z:function(){return r}})},7012:function(e){e.exports={container:"Layout_container__a4TgG",content:"Layout_content__h4xFu",main:"Layout_main__T635V",menu:"Layout_menu__XXqx4",appLogo:"Layout_appLogo__Fzoke",menuBouton:"Layout_menuBouton__u23SQ",selectedMenu:"Layout_selectedMenu__2b0Uh",searchContent:"Layout_searchContent__LfSM_",searchSection:"Layout_searchSection__RcqEQ",searchHeader:"Layout_searchHeader__YXj4I",searchTitle:"Layout_searchTitle__nr_D1",searchStrass:"Layout_searchStrass__N_ZsR",header:"Layout_header__5T1Lo",searchBouton:"Layout_searchBouton__4gAkG",image:"Layout_image__6FQVV",chercher:"Layout_chercher__F_3AD",selection:"Layout_selection___yJGW",themes:"Layout_themes__vz4rE"}},6259:function(e){e.exports={AppLogo:"Login_AppLogo__qzJ5Q",loginWrapper:"Login_loginWrapper__RKQ3s"}},6774:function(){},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)},1163:function(e,t,n){e.exports=n(880)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,a){if(a!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(880)}));var n=e.O();_N_E=n}]);