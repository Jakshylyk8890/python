(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+Wax":function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("oedh"),i=a("mXGw"),r=a.n(i),s=a("oBo7"),o=a("+qGf"),c=a("LKEG"),l=a("SbgB"),u=a("6Uku");function d(e){var t=e.image,a=e.sx,i=Object(n.a)(e,["image","sx"]);return r.a.createElement(l.a,{sx:a},r.a.createElement(u.a,Object.assign({fluid:Object.assign({},t.fluid,{aspectRatio:1}),alt:t.alt,sx:function(e){return{borderRadius:"circle"}}},i)))}function m(e){var t,a,i=e.to,m=e.title,f=e.subtitle,g=e.media,b=e.avatar,h=e.tag,x=e.sizes,p=e.width,v=e.loading,E=(e.sx,Object(n.a)(e,["to","title","subtitle","media","avatar","tag","sizes","width","loading","sx"]));return r.a.createElement(o.a,Object.assign({to:i,sx:{display:"flex",flexDirection:"column","&:hover":{textDecorationColor:"transparent",".img":{opacity:.5}},".img":{transition:function(e){return"all "+e.transitions.fast}}}},E),r.a.createElement(l.a,{sx:{position:"relative",flexShrink:0}},g.asset&&r.a.createElement(u.a,{className:"img",fluid:Object.assign({},g.asset.fluid,{aspectRatio:830/463}),sizes:x,width:p,imgProps:{width:null===(t=g.asset.metadata)||void 0===t?void 0:t.dimensions.width,height:null===(a=g.asset.metadata)||void 0===a?void 0:a.dimensions.height},loading:v,alt:g.alt,sx:{borderRadius:"card"}}),(null==b?void 0:b.asset)&&r.a.createElement(d,{image:b.asset,sx:{transform:"translateY(-50%)",ml:3,mb:-4,width:"15%"}})),r.a.createElement(s.a,{as:"h4",variant:"h5",sx:{mt:4,mb:2}},m),f&&r.a.createElement(c.a,{sx:{color:"body",mt:"auto"}},f),h&&r.a.createElement(c.a,{variant:"caps",sx:{color:"primary",border:"1px solid",borderColor:"primary",borderRadius:"default",py:1,px:"8px",mt:2,mr:"auto",lineHeight:1}},h))}},"1Us2":function(e,t,a){"use strict";var n=a("oedh"),i=a("mXGw"),r=a.n(i),s=a("KWaf"),o=a("SbgB"),c=a("eP3y"),l=a("oCA+");var u=a("oBo7"),d=r.a.forwardRef((function(e,t){var a=e.animateText,i=e.sx,s=e.children,o=Object(n.a)(e,["animateText","sx","children"]);return r.a.createElement(u.a,Object.assign({ref:t,as:"h1",variant:"h1",sx:function(e){return Object.assign({ml:"-0.05em",mb:-3,whiteSpace:"pre-line",color:"inverted",fontSize:"34px","&[data-splitting]":{visibility:"hidden","&.splitting":{visibility:"visible"}},".word":{animation:l.b+" 1s ease-out both","@supports (-moz-appearance:none)":{animation:l.f+" 2s ease-out both",animationDelay:"calc(2000ms + 500ms * (1 + var(--word-index) / 5))"},animationDelay:"calc(1300ms + 1000ms * (1 + var(--word-index) / 5))"}},i)}},a&&{"data-splitting":"words"},o),s)}));var m=a("7sai");var f=a("LKEG");var g=function(e){var t=e.fullscreen,a=e.animate,i=e.sx,u=e.children;Object(n.a)(e,["fullscreen","animate","sx","children"]);return r.a.createElement(o.a,{className:"hero-container",sx:Object.assign({position:"relative",display:"flex",flexDirection:"column"},l.j,t?{height:["130vw","100vh"],maxHeight:"100vh"}:{height:["90vw","55vh"]},i)},r.a.createElement(s.a,{animateIn:a}),r.a.createElement(c.a,{sx:Object.assign({flexGrow:1},i)},r.a.createElement(c.a.Col,{sx:{display:"flex",alignItems:"center"}},u)))};t.a=g;g.Background=function(e){e.node;var t=e.sx,a=e.children,i=Object(n.a)(e,["node","sx","children"]);return r.a.createElement(o.a,Object.assign({sx:Object.assign({},l.d,{overflow:"hidden",backgroundColor:"background"},t)},i),a)},g.Title=function(e){var t=e.animateText,i=void 0===t?"":t,s=e.sx,c=Object(n.a)(e,["animateText","sx"]),l=r.a.useRef(),u={__html:i.replace(/\n/g,"<br />")};return r.a.useEffect((function(){i&&(window.Splitting?window.Splitting({target:l.current,by:"words"}):a.e(8).then(a.t.bind(null,"5OMf",7)).then((function(e){(0,e.default)({target:l.current,by:"words"})})))}),[i]),r.a.createElement(o.a,{sx:Object.assign({position:"relative"},s)},i?r.a.createElement(d,Object.assign({ref:l,animateText:!0,dangerouslySetInnerHTML:u},c)):r.a.createElement(d,c))},g.Subtitle=function(e){var t=e.animate,a=e.sx,i=e.children,s=(Object(n.a)(e,["animate","sx","children"]),r.a.useState(!1)),o=s[0],c=s[1];return r.a.useEffect((function(){c(!0)}),[]),r.a.createElement(f.a,{as:"h2",sx:function(e){return Object.assign({position:"relative",zIndex:1,color:"inverted",width:[220,450],maxWidth:[null,"40%"],mt:[3,4]},t&&o&&{animation:l.b+" 1s 3.2s ease-out both","@supports (-moz-appearance:none)":{animation:l.f+" 1s 3.2s ease-out both"}},t&&{opacity:0},a)}},i)},g.Illustration=function(e){var t=e.children,a=e.sx,i=Object(n.a)(e,["children","sx"]);return r.a.createElement(o.a,Object.assign({sx:Object.assign({position:"relative",height:"100%",ml:"auto",flex:1,maxWidth:"30%",maxHeight:"100%"},l.g,{img:{position:"absolute",right:0,top:0,bottom:0,height:"90%",margin:"auto"}},a)},i),t)},g.Content=function(e){var t=e.sx,a=e.children;return Object(n.a)(e,["sx","children"]),r.a.createElement(m.a,{sx:Object.assign({height:"100%",flexDirection:"column",justifyContent:"center",pb:"60px"},t)},a)}},"E/cx":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("oedh"),i=a("mXGw"),r=a.n(i),s=a("1Us2"),o=a("6Uku"),c=a("s9gt"),l=a("oyGz");function u(e){var t=e.title,a=e.description,i=e.page,u=e.pathname,d=e.banner,m=e.children,f=Object(n.a)(e,["title","description","page","pathname","banner","children"]),g=i.blocks.find((function(e){return"signupBlock"===e._type}));return r.a.createElement(c.a,Object.assign({title:t,description:a,pathname:i.slug.current+"/"+u,banner:d.asset.fluid.src},f),r.a.createElement(s.a,null,r.a.createElement(s.a.Background,null,r.a.createElement(o.a,{sx:{height:"100%"},fluid:d.asset.fluid,loading:"eager",alt:d.alt}))),m,g&&r.a.createElement(l.a,g))}},UBNY:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a("oedh"),i=a("mXGw"),r=a.n(i),s=a("SbgB"),o=a("oBo7"),c=a("kVAK"),l=a("7sai"),u=a("LKEG"),d=a("6Uku");function m(e){var t=e.name,a=e.image,n=e.date,i=e.sx;return r.a.createElement(l.a,{sx:Object.assign({display:"flex"},i)},a&&a.asset&&r.a.createElement(d.a,{sx:{borderRadius:"circle",width:[40,80],height:[40,80]},fluid:a.asset.fluid}),r.a.createElement(l.a,{sx:{flexDirection:"column",justifyContent:"center",borderLeft:"1px solid",borderColor:"gray.2",pl:3,ml:3}},r.a.createElement(u.a,{as:"address"},t),r.a.createElement(u.a,{as:"time",dateTime:n.value,sx:{variant:"text.caps",color:"primary",mt:1}},n.label)))}function f(e){var t=e.title,a=e.body,i=e.date,l=e.author,u=e.sx,d=Object(n.a)(e,["title","body","date","author","sx"]);return r.a.createElement(s.a,Object.assign({as:"article",variant:"styles.article",sx:Object.assign({px:"gridGap"},u)},d),l&&r.a.createElement(m,{sx:{position:[null,null,null,"absolute"],right:"gridGap",mt:[4,4,4,0]},name:l.name,image:l.image,date:i}),r.a.createElement(o.a,{as:"h1",variant:"h3",sx:{mt:[4,4,4,5]}},t),r.a.createElement(c.a,{blocks:a}))}},kVAK:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("oedh"),i=a("mXGw"),r=a.n(i),s=a("u2Ol"),o=a("Mon0"),c=function(e){switch(e){case"wide":return{maxWidth:["none","80vw"]};case"fullwidth":return{maxWidth:"none",width:"auto",mx:function(e){return"-"+e.space.gridGap}};case"shrinked":return{maxWidth:["60vw","30vw"]};case"centered":default:return{maxWidth:null}}},l=function(e){var t=e.node,a=Object(n.a)(e,["node"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.g,{node:t,sx:Object.assign({my:"gridGap"},t.attribution&&{mb:0,"& + p":{mb:"gridGap"}},c(t.style))}),t.attribution&&r.a.createElement(s.a,Object.assign({blocks:t.attribution},a)))},u=function(e){return r.a.createElement(r.a.Fragment,null,e.children)};function d(e){var t=Object.assign({},e);return r.a.createElement(s.a,Object.assign({serializers:{types:{imageArticle:l},container:u}},t))}},mxAR:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("mXGw"),i=a.n(n);function r(e){var t=i.a.useState({}),n=t[0],r=t[1];i.a.useEffect((function(){Promise.all([a.e(4),a.e(43)]).then(a.bind(null,"YcZI")).then((function(e){r(e)}))}),[]);var s=n.default;return s?i.a.createElement(s,e):null}},oyGz:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a("mXGw"),i=a.n(n),r=a("eP3y"),s=a("oBo7"),o=a("LKEG"),c=a("SbgB"),l=a("dY+r"),u=a("mxAR"),d=a("tJhG"),m=a("ydnR"),f=a("oCA+");function g(e){var t=e.reference,a=t.title,n=t.subtitle,g=t.successMessage,b=t.submitBtn,h=t.marketoSnippet,x=Object(d.a)(m.b),p=x[0],v=x[1],E=i.a.useState(),w=E[0],y=E[1];i.a.useEffect((function(){p&&y(!0)}),[p]);var j=i.a.useCallback((function(){y(!0),v(!0)}),[v]),O=i.a.useCallback((function(){y(!1),v(!1)}),[v]);return i.a.createElement(r.a,{as:"section",sx:Object.assign({py:[5,"gridGap"]},f.l)},i.a.createElement(r.a.Col,{gridColumn:["start / end","start / span 5"]},i.a.createElement(s.a,{as:"h2",sx:{color:"inverted"}},a),i.a.createElement(o.a,{as:"p",sx:{color:"inverted",mt:4}},n)),i.a.createElement(r.a.Col,{gridColumn:["start / end","9 / end"],sx:{position:"relative",mt:3}},i.a.createElement(u.a,{codeSnippet:h,onSuccess:j,submitLabel:b,sx:Object.assign({transition:"all 300ms"},w?{visibility:"hidden",opacity:0}:{visibility:"visible",opacity:1})}),w&&i.a.createElement(c.a,{sx:function(e){return Object.assign({position:"absolute",top:["auto",0],bottom:["10rem",0],width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},f.g)}},i.a.createElement(c.a,null,i.a.createElement(s.a,{as:"p",variant:"h3",sx:{color:"inverted",mb:4}},g),i.a.createElement(l.a,{variant:"link",sx:{color:"inverted",textDecorationColor:"currentColor","&:hover":{textDecorationColor:"transparent"}},onClick:O},"I want to signup again")))))}},tJhG:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("mXGw");function i(e,t){void 0===t&&(t="");var a=Object(n.useState)((function(){return"undefined"!=typeof window&&window.localStorage.getItem(e)||t})),i=a[0],r=a[1];Object(n.useEffect)((function(){var a=window.localStorage.getItem(e);i!==a&&r(a||t)}),[e,i,t]);var s=Object(n.useCallback)((function(a){a.key===e&&a.newValue!==i&&r(a.newValue||t)}),[t,e,i]);return Object(n.useEffect)((function(){return window.addEventListener("storage",s),function(){return window.removeEventListener("storage",s)}}),[s]),[i,function(t){var a=JSON.stringify(t);r(a),window.localStorage.setItem(e,a)}]}},ydnR:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n="marketo_returning_user",i="marketo_is_signed_up"},ysnD:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return u})),a.d(t,"pageQuery",(function(){return d}));var n=a("mXGw"),i=a.n(n),r=a("UBNY"),s=a("eP3y"),o=a("oBo7"),c=a("+Wax"),l=a("E/cx");function u(e){var t=e.data,a=t.sanityCaseStudy,n=t.moreCaseStudies,u=t.sanityPage,d=a;return i.a.createElement(l.a,{title:d.seoTitle||d.title,description:d.seoDescription,pathname:d.slug.current,banner:d.heroImage,page:u},i.a.createElement(r.a,{title:d.title,body:d._rawBody,date:{value:d.publishedAtRaw,label:d.publishedAt}}),i.a.createElement(s.a,{as:"section",sx:{my:[5,7]}},i.a.createElement(s.a.Col,null,i.a.createElement(o.a,{as:"h3"},"More Articles")),i.a.createElement(s.a.Col,null,i.a.createElement(s.a,{variant:"threeColumns",sx:{gridRowGap:[6,7]}},n.map((function(e){return i.a.createElement(c.a,{key:e.title,to:"/"+u.slug.current+"/"+e.slug.current,title:e.title,media:e.heroImage})}))))))}var d="1774060377"}}]);
//# sourceMappingURL=component---src-templates-case-study-js-b9ecb3595005bd0410bc.js.map