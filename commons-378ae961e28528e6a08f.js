(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(e,t,r){"use strict";var n,o=r("q1tI"),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},"8ypT":function(e,t,r){},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("Wbzz"),a=function(e){var t=e.title;return o.a.createElement("header",null,o.a.createElement("div",{className:"grid grid-cols-2 sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white border-b border-gray-200"},o.a.createElement("div",{className:"pl-4 sm:p-6 items-center lg:border-b-0"},o.a.createElement(i.Link,{to:"/",className:"overflow-hidden w-10 md:w-auto"},o.a.createElement("h1",{className:"text-2xl"},t))),o.a.createElement("div",null)))};a.defaultProps={siteTitle:""};var c=a;r("8ypT"),t.a=function(e){var t,r=e.children,n=Object(i.useStaticQuery)("3649515864");return o.a.createElement("div",{className:"min-h-screen"},o.a.createElement(c,{title:null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title}),o.a.createElement("main",null,r),o.a.createElement("footer",{className:"bottom-0 h-8 bg-emerald-500 text-sm items-center justify-center"},o.a.createElement("p",{className:"text-center"},"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},ZhWT:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!e(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!e(u.value[1],a.get(u.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!e(t[s[u]],a[s[u]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("E9XD");var n,o,i,a,c=r("17x9"),u=r.n(c),s=r("8+s/"),l=r.n(s),f=r("ZhWT"),p=r.n(f),d=r("q1tI"),y=r.n(d),h=r("YVoz"),m=r.n(h),b="bodyAttributes",T="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(g).map((function(e){return g[e]})),"charset"),A="cssText",E="href",O="http-equiv",C="innerHTML",S="itemprop",j="name",k="property",P="rel",x="src",I="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},N="defaultTitle",M="defer",R="encodeSpecialCharacters",q="onChangeClientState",_="titleTemplate",B=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),D=[g.NOSCRIPT,g.SCRIPT,g.STYLE],z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Y=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=G(e,g.TITLE),r=G(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=G(e,N);return t||n||void 0},J=function(e){return G(e,q)||function(){}},Q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},$=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||r===P&&"canonical"===e[r].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==C&&c!==A&&c!==S||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][s]&&(o[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},n[c],o[c]);n[c]=u}return e}),[]).reverse()},G=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,n),ue(g.HTML,o),ce(f,p);var d={baseTag:se(g.BASE,r),linkTags:se(g.LINK,i),metaTags:se(g.META,a),noscriptTags:se(g.NOSCRIPT,c),scriptTags:se(g.SCRIPT,s),styleTags:se(g.STYLE,l)},y={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(y[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,y,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(g.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";r.getAttribute(u)!==s&&r.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==a.join(",")&&r.setAttribute("data-react-helmet",a.join(","))}},se=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===A)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,o=fe(r,n),[y.a.createElement(g.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=le(r),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case T:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===C||r===A){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),y.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===C||e===A)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,n),bodyAttributes:pe(b,r,n),htmlAttributes:pe(T,o,n),link:pe(g.LINK,i,n),meta:pe(g.META,a,n),noscript:pe(g.NOSCRIPT,c,n),script:pe(g.SCRIPT,u,n),style:pe(g.STYLE,s,n),title:pe(g.TITLE,{title:f,titleAttributes:p},n)}},ye=l()((function(e){return{baseTag:Z([E,I],e),bodyAttributes:Q(b,e),defer:G(e,M),encode:G(e,R),htmlAttributes:Q(T,e),linkTags:$(g.LINK,[P,E],e),metaTags:$(g.META,[j,w,O,k,S],e),noscriptTags:$(g.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:$(g.SCRIPT,[x,C],e),styleTags:$(g.STYLE,[A],e),title:V(e),titleAttributes:Q(v,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),he=(o=ye,a=i=function(e){function t(){return H(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case g.TITLE:return F({},o,((t={})[n.type]=a,t.titleAttributes=F({},i),t));case g.BODY:return F({},o,{bodyAttributes:F({},i)});case g.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((r={})[n.type]=F({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return y.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[B[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),y.a.createElement(o,n)},Y(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(y.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind}).call(this,r("yLpj"))},vrFN:function(e,t,r){"use strict";var n=r("q1tI"),o=r.n(n),i=r("qhky"),a=r("Wbzz");function c(e){var t,r,n=e.description,c=e.lang,u=e.meta,s=e.title,l=Object(a.useStaticQuery)("63159454").site,f=n||l.siteMetadata.description,p=null===(t=l.siteMetadata)||void 0===t?void 0:t.title;return o.a.createElement(i.a,{htmlAttributes:{lang:c},title:s,titleTemplate:p?"%s | "+p:null,meta:[{name:"description",content:f},{property:"og:title",content:s},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=l.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:s},{name:"twitter:description",content:f}].concat(u)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=commons-378ae961e28528e6a08f.js.map