(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{Tggg:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b})),n.d(t,"pageQuery",(function(){return v}));var a=n("mXGw"),r=n.n(a),i=n("eP3y"),o=n("oBo7"),s=n("s9gt"),u=n("SbgB"),c=n("KWaf"),l=n("6Uku"),d=n("dY+r"),m=n("u2Ol"),f=n("mxAR"),g=n("oCA+"),p=n("tJhG"),w=n("ydnR");function b(e){var t,n=e.data,a=n.sanityResource,b=(n.sanityPage,n.sanitySignupForm),v=Object(p.a)(w.a)[0],E=r.a.useState(v),h=E[0],y=E[1],x=a,k=r.a.useCallback((function(){window.location=x.resource[0].asset?x.resource[0].asset.asset.url:x.resource[0].url}),[x.resource]),S=r.a.useCallback((function(){y(!1)}),[]);return r.a.createElement(s.a,{title:x.seoTitle||x.title||x.heroTitle,description:x.seoDescription,pathname:a.slug.current+"/"+x.slug.current,banner:null===(t=x.heroImage)||void 0===t?void 0:t.asset.fluid.src,sx:{backgroundColor:"black"}},r.a.createElement(c.a,null),r.a.createElement(i.a,{sx:{py:[4,6]}},r.a.createElement(i.a.Col,{gridColumn:["start / end","start / span 6","start / span 6"],sx:{maxWidth:"100%",color:"inverted"}},x.heroImage&&r.a.createElement(l.a,{width:430,fluid:x.heroImage.asset.fluid,loading:"eager",sx:{borderRadius:"card",width:["100%",430]}}),r.a.createElement(o.a,{as:"h2",sx:{my:[3,5]}},x.title),r.a.createElement(m.a,{blocks:x._rawBody})),r.a.createElement(i.a.Col,{gridColumn:["start / end","8 / end","9 / end"],sx:{mt:[4,0]}},r.a.createElement(u.a,{sx:{position:"relative"}},h&&r.a.createElement(u.a,{sx:Object.assign({position:[null,"absolute"],top:["auto",0],bottom:[null,3],mb:[4,0],width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",color:"inverted"},g.g)},r.a.createElement(o.a,{as:"h4",variant:"h3",sx:{mb:3}},"Welcome back ",JSON.parse(v).FirstName),r.a.createElement("span",null,"Not you?"," ",r.a.createElement(d.a,{variant:"reset",onClick:S,sx:{verticalAlign:"inherit"}},"Click here"))),r.a.createElement(f.a,{onSuccess:k,submitLabel:b.submitBtn,codeSnippet:x.marketoSnippet,sx:Object.assign({transition:function(e){return"opacity "+e.transitions.normal}},h&&{".fields":{opacity:.2,pointerEvents:"none",display:["none","grid"]}})})))))}var v="4180355632"},mxAR:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("mXGw"),r=n.n(a);function i(e){var t=r.a.useState({}),a=t[0],i=t[1];r.a.useEffect((function(){Promise.all([n.e(4),n.e(43)]).then(n.bind(null,"YcZI")).then((function(e){i(e)}))}),[]);var o=a.default;return o?r.a.createElement(o,e):null}},tJhG:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("mXGw");function r(e,t){void 0===t&&(t="");var n=Object(a.useState)((function(){return"undefined"!=typeof window&&window.localStorage.getItem(e)||t})),r=n[0],i=n[1];Object(a.useEffect)((function(){var n=window.localStorage.getItem(e);r!==n&&i(n||t)}),[e,r,t]);var o=Object(a.useCallback)((function(n){n.key===e&&n.newValue!==r&&i(n.newValue||t)}),[t,e,r]);return Object(a.useEffect)((function(){return window.addEventListener("storage",o),function(){return window.removeEventListener("storage",o)}}),[o]),[r,function(t){var n=JSON.stringify(t);i(n),window.localStorage.setItem(e,n)}]}},ydnR:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="marketo_returning_user",r="marketo_is_signed_up"}}]);
//# sourceMappingURL=component---src-templates-resource-js-94da93e3fe1e92f9db93.js.map