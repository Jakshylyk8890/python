(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"1Us2":function(e,t,a){"use strict";var n=a("oedh"),i=a("mXGw"),r=a.n(i),s=a("KWaf"),l=a("SbgB"),o=a("eP3y"),c=a("oCA+");var u=a("oBo7"),m=r.a.forwardRef((function(e,t){var a=e.animateText,i=e.sx,s=e.children,l=Object(n.a)(e,["animateText","sx","children"]);return r.a.createElement(u.a,Object.assign({ref:t,as:"h1",variant:"h1",sx:function(e){return Object.assign({ml:"-0.05em",mb:-3,whiteSpace:"pre-line",color:"inverted",fontSize:"34px","&[data-splitting]":{visibility:"hidden","&.splitting":{visibility:"visible"}},".word":{animation:c.b+" 1s ease-out both","@supports (-moz-appearance:none)":{animation:c.f+" 2s ease-out both",animationDelay:"calc(2000ms + 500ms * (1 + var(--word-index) / 5))"},animationDelay:"calc(1300ms + 1000ms * (1 + var(--word-index) / 5))"}},i)}},a&&{"data-splitting":"words"},l),s)}));var d=a("7sai");var h=a("LKEG");var b=function(e){var t=e.fullscreen,a=e.animate,i=e.sx,u=e.children;Object(n.a)(e,["fullscreen","animate","sx","children"]);return r.a.createElement(l.a,{className:"hero-container",sx:Object.assign({position:"relative",display:"flex",flexDirection:"column"},c.j,t?{height:["130vw","100vh"],maxHeight:"100vh"}:{height:["90vw","55vh"]},i)},r.a.createElement(s.a,{animateIn:a}),r.a.createElement(o.a,{sx:Object.assign({flexGrow:1},i)},r.a.createElement(o.a.Col,{sx:{display:"flex",alignItems:"center"}},u)))};t.a=b;b.Background=function(e){e.node;var t=e.sx,a=e.children,i=Object(n.a)(e,["node","sx","children"]);return r.a.createElement(l.a,Object.assign({sx:Object.assign({},c.d,{overflow:"hidden",backgroundColor:"background"},t)},i),a)},b.Title=function(e){var t=e.animateText,i=void 0===t?"":t,s=e.sx,o=Object(n.a)(e,["animateText","sx"]),c=r.a.useRef(),u={__html:i.replace(/\n/g,"<br />")};return r.a.useEffect((function(){i&&(window.Splitting?window.Splitting({target:c.current,by:"words"}):a.e(8).then(a.t.bind(null,"5OMf",7)).then((function(e){(0,e.default)({target:c.current,by:"words"})})))}),[i]),r.a.createElement(l.a,{sx:Object.assign({position:"relative"},s)},i?r.a.createElement(m,Object.assign({ref:c,animateText:!0,dangerouslySetInnerHTML:u},o)):r.a.createElement(m,o))},b.Subtitle=function(e){var t=e.animate,a=e.sx,i=e.children,s=(Object(n.a)(e,["animate","sx","children"]),r.a.useState(!1)),l=s[0],o=s[1];return r.a.useEffect((function(){o(!0)}),[]),r.a.createElement(h.a,{as:"h2",sx:function(e){return Object.assign({position:"relative",zIndex:1,color:"inverted",width:[220,450],maxWidth:[null,"40%"],mt:[3,4]},t&&l&&{animation:c.b+" 1s 3.2s ease-out both","@supports (-moz-appearance:none)":{animation:c.f+" 1s 3.2s ease-out both"}},t&&{opacity:0},a)}},i)},b.Illustration=function(e){var t=e.children,a=e.sx,i=Object(n.a)(e,["children","sx"]);return r.a.createElement(l.a,Object.assign({sx:Object.assign({position:"relative",height:"100%",ml:"auto",flex:1,maxWidth:"30%",maxHeight:"100%"},c.g,{img:{position:"absolute",right:0,top:0,bottom:0,height:"90%",margin:"auto"}},a)},i),t)},b.Content=function(e){var t=e.sx,a=e.children;return Object(n.a)(e,["sx","children"]),r.a.createElement(d.a,{sx:Object.assign({height:"100%",flexDirection:"column",justifyContent:"center",pb:"60px"},t)},a)}},SJEN:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("oedh"),i=a("mXGw"),r=a.n(i),s=a("Wbzz");function l(e){var t=e.blocks,a=e.serializers,i=void 0===a?{}:a;Object(n.a)(e,["blocks","serializers"]);return t.map((function(e){var t=i[e._type],a=Object(s.getModule)(e.component);return a?t?r.a.createElement(t,e,r.a.createElement(a,e)):r.a.createElement(a,e):r.a.createElement("span",null,"loading...")}))}},WlPu:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m})),a.d(t,"pageQuery",(function(){return d}));var n=a("mXGw"),i=a.n(n),r=a("s9gt"),s=a("1Us2"),l=a("7sai"),o=a("6Uku"),c=a("SJEN"),u={signupBlock:function(e){var t=e.children;return i.a.createElement("div",{id:"direct"},t)}};function m(e){var t=e.data.sanityPage;return i.a.createElement(r.a,{title:t.seoTitle||t.title||t.heroTitle,description:t.seoDescription,pathname:t.slug.current},i.a.createElement(s.a,null,i.a.createElement(s.a.Content,null,i.a.createElement(l.a,{sx:{flexDirection:"column",height:"100%",justifyContent:"center"}},i.a.createElement(s.a.Title,null,t.heroTitle||t.title),t.subtitle&&i.a.createElement(s.a.Subtitle,null,t.subtitle))),t.heroImage&&t.heroImage.asset&&i.a.createElement(s.a.Illustration,null,i.a.createElement(o.a,{fluid:t.heroImage.asset.fluid,alt:t.heroImage.alt}))),i.a.createElement(c.a,{blocks:t.blocks,serializers:u}))}var d="4053266712"}}]);
//# sourceMappingURL=component---src-templates-contact-us-js-dee6d7b96e5901ceadb4.js.map