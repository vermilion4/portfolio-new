(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(896)}])},7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return a},ACTION_SERVER_PATCH:function(){return l},ACTION_PREFETCH:function(){return s},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return u}});let o="refresh",i="navigate",a="restore",l="server-patch",s="prefetch",c="fast-refresh",u="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return g}});let n=r(8754),o=r(1757),i=o._(r(7294)),a=n._(r(3935)),l=n._(r(9201)),s=r(3914),c=r(5494),u=r(869);r(1905);let d=r(1823),f=n._(r(5538)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio-new/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,r,n,o,i){let a=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===a)return;e["data-loaded-src"]=a;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function getDynamicProps(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:a,width:l,decoding:s,className:c,style:u,fetchPriority:d,placeholder:f,loading:p,unoptimized:h,fill:g,onLoadRef:m,onLoadingCompleteRef:x,setBlurComplete:b,setShowAltText:v,onLoad:y,onError:w,..._}=e;return i.default.createElement("img",{..._,...getDynamicProps(d),loading:p,width:l,height:a,decoding:s,"data-nimg":g?"fill":"1",className:c,style:u,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&handleLoading(e,f,m,x,b,h))},[r,f,m,x,b,w,h,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,f,m,x,b,h)},onError:e=>{v(!0),"empty"!==f&&b(!0),w&&w(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):i.default.createElement(l.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let g=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(d.RouterContext),n=(0,i.useContext)(u.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:l}=e,g=(0,i.useRef)(a);(0,i.useEffect)(()=>{g.current=a},[a]);let m=(0,i.useRef)(l);(0,i.useEffect)(()=>{m.current=l},[l]);let[x,b]=(0,i.useState)(!1),[v,y]=(0,i.useState)(!1),{props:w,meta:_}=(0,s.getImgProps)(e,{defaultLoader:f.default,imgConf:o,blurComplete:x,showAltText:v});return i.default.createElement(i.default.Fragment,null,i.default.createElement(h,{...w,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:g,onLoadingCompleteRef:m,setBlurComplete:b,setShowAltText:y,ref:t}),_.priority?i.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let n=r(8754),o=n._(r(7294)),i=r(4450),a=r(2227),l=r(4364),s=r(109),c=r(3607),u=r(1823),d=r(9031),f=r(920),p=r(30),h=r(7192),g=r(7498),m=new Set;function prefetch(e,t,r,n,o,i){if(!i&&!(0,a.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(m.has(i))return;m.add(i)}let l=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(l).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}let x=o.default.forwardRef(function(e,t){let r,n;let{href:l,as:m,children:x,prefetch:b=null,passHref:v,replace:y,shallow:w,scroll:_,locale:C,onClick:j,onMouseEnter:N,onTouchStart:P,legacyBehavior:S=!1,...k}=e;r=x,S&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let E=o.default.useContext(u.RouterContext),O=o.default.useContext(d.AppRouterContext),I=null!=E?E:O,M=!E,z=!1!==b,A=null===b?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:L,as:R}=o.default.useMemo(()=>{if(!E){let e=formatStringOrUrl(l);return{href:e,as:m?formatStringOrUrl(m):e}}let[e,t]=(0,i.resolveHref)(E,l,!0);return{href:e,as:m?(0,i.resolveHref)(E,m):t||e}},[E,l,m]),T=o.default.useRef(L),H=o.default.useRef(R);S&&(n=o.default.Children.only(r));let D=S?n&&"object"==typeof n&&n.ref:t,[F,B,U]=(0,f.useIntersection)({rootMargin:"200px"}),V=o.default.useCallback(e=>{(H.current!==R||T.current!==L)&&(U(),H.current=R,T.current=L),F(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[R,D,L,U,F]);o.default.useEffect(()=>{I&&B&&z&&prefetch(I,L,R,{locale:C},{kind:A},M)},[R,L,B,C,z,null==E?void 0:E.locale,I,M,A]);let W={ref:V,onClick(e){S||"function"!=typeof j||j(e),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,i,l,s,c,u,d){let{nodeName:f}=e.currentTarget,p="A"===f.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==s||s;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:l,locale:c,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!d,scroll:e})};u?o.default.startTransition(navigate):navigate()}(e,I,L,R,y,w,_,C,M,z)},onMouseEnter(e){S||"function"!=typeof N||N(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&(z||!M)&&prefetch(I,L,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:A},M)},onTouchStart(e){S||"function"!=typeof P||P(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&(z||!M)&&prefetch(I,L,R,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:A},M)}};if((0,s.isAbsoluteUrl)(R))W.href=R;else if(!S||v||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==E?void 0:E.locale,t=(null==E?void 0:E.isLocaleDomain)&&(0,p.getDomainLocale)(R,e,null==E?void 0:E.locales,null==E?void 0:E.domainLocales);W.href=t||(0,h.addBasePath)((0,c.addLocale)(R,e,null==E?void 0:E.defaultLocale))}return S?o.default.cloneElement(n,W):o.default.createElement("a",{...k,...W},r)}),b=x;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),o=r(3436),i="function"==typeof IntersectionObserver,a=new Map,l=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!i,[u,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{f.current=e},[]);(0,n.useEffect)(()=>{if(i){if(c||u)return;let e=f.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=l.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},l.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=l.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!u){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,r,t,u,f.current]);let h=(0,n.useCallback)(()=>{d(!1)},[]);return[p,u,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(1905);let n=r(2393),o=r(5494);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var r;let i,a,l,{src:s,sizes:c,unoptimized:u=!1,priority:d=!1,loading:f,className:p,quality:h,width:g,height:m,fill:x=!1,style:b,onLoad:v,onLoadingComplete:y,placeholder:w="empty",blurDataURL:_,fetchPriority:C,layout:j,objectFit:N,objectPosition:P,lazyBoundary:S,lazyRoot:k,...E}=e,{imgConf:O,showAltText:I,blurComplete:M,defaultLoader:z}=t,A=O||o.imageConfigDefault;if("allSizes"in A)i=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);i={...A,allSizes:e,deviceSizes:t}}let L=E.loader||z;delete E.loader,delete E.srcSet;let R="__next_img_default"in L;if(R){if("custom"===i.loader)throw Error('Image with src "'+s+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(j){"fill"===j&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[j];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[j];t&&!c&&(c=t)}let T="",H=getInt(g),D=getInt(m);if("object"==typeof(r=s)&&(isStaticRequire(r)||void 0!==r.src)){let e=isStaticRequire(s)?s.default:s;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,l=e.blurHeight,_=_||e.blurDataURL,T=e.src,!x){if(H||D){if(H&&!D){let t=H/e.width;D=Math.round(e.height*t)}else if(!H&&D){let t=D/e.height;H=Math.round(e.width*t)}}else H=e.width,D=e.height}}let F=!d&&("lazy"===f||void 0===f);(!(s="string"==typeof s?s:T)||s.startsWith("data:")||s.startsWith("blob:"))&&(u=!0,F=!1),i.unoptimized&&(u=!0),R&&s.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(u=!0),d&&(C="high");let B=getInt(h),U=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:P}:{},I?{}:{color:"transparent"},b),V=M||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:H,heightInt:D,blurWidth:a,blurHeight:l,blurDataURL:_||"",objectFit:U.objectFit})+'")':'url("'+w+'")',W=V?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},G=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:l({config:t,src:r,quality:i,width:s[u]})}}({config:i,src:s,unoptimized:u,width:H,quality:B,sizes:c,loader:L}),Z={...E,loading:F?"lazy":f,fetchPriority:C,width:H,height:D,decoding:"async",className:p,style:{...U,...W},sizes:G.sizes,srcSet:G.srcSet,src:G.src},q={unoptimized:u,priority:d,placeholder:w,fill:x};return{props:Z,meta:q}}},2393:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=n?40*n:t,s=o?40*o:r,c=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return s}});let n=r(8754),o=r(3914),i=r(1905),a=r(3271),l=n._(r(5538)),unstable_getImgProps=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/portfolio-new/_next/image/",loader:"custom",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=a.Image},5869:function(e,t,r){"use strict";r.d(t,{Z:function(){return CustomImage}});var n=r(5893),o=r(5675),i=r.n(o),a=r(5538);function CustomImage(e){return(0,n.jsx)(i(),{...e,loader:a.default,alt:"loader"})}},896:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return App}});var n=r(5893);r(5675);var o=r(1664),i=r.n(o),shared_Footer=()=>(0,n.jsxs)("footer",{className:"bg-primary pt-20 px-5 sm:px-10",children:[(0,n.jsx)("hr",{className:"max-w-7xl mx-auto opacity-20 "}),(0,n.jsxs)("nav",{className:"flex justify-between items-center max-w-7xl mx-auto h-[92px]",children:[(0,n.jsxs)("div",{className:"text-xs sm:text-sm flex items-center tracking-[0.42px]",children:[(0,n.jsx)("span",{className:"mr-[6px] mt-2 text-2xl",children:"\xa9"}),"2024 Adaeze Ndupu"]}),(0,n.jsxs)("ul",{className:"flex gap-4",children:[(0,n.jsx)(i(),{href:"https://www.linkedin.com/in/adaeze-ndupu",target:"_blank",className:"ease-in transition-all hover:scale-110",children:(0,n.jsx)("li",{className:"tracking-[0.42px] text-sm",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"group",width:"16",height:"16",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{id:"Vector",d:"M14.8189 0H1.18111C0.867861 0 0.567441 0.124438 0.34594 0.34594C0.124438 0.567441 0 0.867861 0 1.18111V14.8189C0 15.1321 0.124438 15.4326 0.34594 15.6541C0.567441 15.8756 0.867861 16 1.18111 16H14.8189C15.1321 16 15.4326 15.8756 15.6541 15.6541C15.8756 15.4326 16 15.1321 16 14.8189V1.18111C16 0.867861 15.8756 0.567441 15.6541 0.34594C15.4326 0.124438 15.1321 0 14.8189 0ZM4.76889 13.63H2.36333V5.98889H4.76889V13.63ZM3.56445 4.93C3.29158 4.92846 3.02528 4.84613 2.79916 4.69339C2.57304 4.54065 2.39723 4.32435 2.29392 4.07179C2.19061 3.81923 2.16443 3.54173 2.21869 3.2743C2.27294 3.00688 2.4052 2.76152 2.59877 2.56919C2.79234 2.37686 3.03854 2.24618 3.30631 2.19364C3.57408 2.1411 3.85141 2.16906 4.1033 2.27399C4.35519 2.37892 4.57036 2.55611 4.72164 2.78321C4.87293 3.01031 4.95355 3.27713 4.95333 3.55C4.95591 3.73269 4.92167 3.91403 4.85267 4.0832C4.78368 4.25238 4.68132 4.40593 4.55171 4.53471C4.42211 4.66349 4.2679 4.76486 4.09828 4.83277C3.92867 4.90068 3.74711 4.93375 3.56445 4.93ZM13.6356 13.6367H11.2311V9.46222C11.2311 8.23111 10.7078 7.85111 10.0322 7.85111C9.31889 7.85111 8.61889 8.38889 8.61889 9.49333V13.6367H6.21333V5.99445H8.52667V7.05333H8.55778C8.79 6.58333 9.60333 5.78 10.8444 5.78C12.1867 5.78 13.6367 6.57667 13.6367 8.91L13.6356 13.6367Z",className:"fill-white group-hover:fill-accent"})})})}),(0,n.jsx)(i(),{href:"https://github.com/vermilion4",target:"_blank",className:"ease-in transition-all hover:scale-110",children:(0,n.jsx)("li",{className:"tracking-[0.42px] text-sm",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"group",width:"16",height:"16",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z",className:"fill-white group-hover:fill-accent"})})})}),(0,n.jsx)(i(),{href:"https://twitter.com/what_is_a_swat",target:"_blank",className:"ease-in transition-all hover:scale-110",children:(0,n.jsx)("li",{className:"tracking-[0.42px] text-sm",children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"group",width:"16",height:"16",viewBox:"0 0 16 16",children:(0,n.jsx)("path",{d:"M12.6 0H15L9.7 6.2L16 14H11.1L7.3 9.2L3 14H0.6L6.2 7.5L0.2 0H5.2L8.6 4.3L12.6 0ZM11.8 12.6H13.1L4.4 1.3H3L11.8 12.6Z",className:"fill-white group-hover:fill-accent"})})})})]})]})]}),a=r(5869),l=r(7294),s=r(1163),shared_Navbar=()=>{let[e,t]=(0,l.useState)(!1),r=(0,s.useRouter)(),o=r.pathname;return(0,n.jsxs)("header",{className:"px-5 sm:px-10 fixed w-full top-0 z-50 backdrop-blur-lg bg-[rgba(0,0,0,0.2)]",children:[e&&(0,n.jsx)("div",{onClick:()=>t(!1),className:"left-0 top-0 absolute w-screen ease-in transition-all duration-500 h-screen bg-black bg-opacity-30 z-20"}),(0,n.jsxs)("nav",{className:"flex justify-between items-center max-w-7xl mx-auto h-[92px]",children:[(0,n.jsxs)("div",{className:"flex gap-6 items-center",children:[(0,n.jsx)(i(),{href:"/",children:(0,n.jsx)(a.Z,{width:69,height:32.33,src:"".concat("/portfolio-new","/logo.png"),alt:"Ada's Logo"})}),(0,n.jsxs)("div",{className:"space-y-1 hidden md:block",children:[(0,n.jsx)("h3",{className:"text-white font-bold tracking-[0.48px]",children:"Frontend Developer"}),(0,n.jsx)("p",{className:"text-white opacity-50 text-sm tracking-[0.42px]",children:"Adaeze Ndupu"})]})]}),(0,n.jsxs)("ul",{className:"hidden md:flex gap-4",children:[(0,n.jsx)(i(),{href:"/",className:"px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ".concat("/"===o&&"bg-accent"," ease-in transition-all "),children:"Home"}),(0,n.jsx)(i(),{href:"/projects",className:"px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ".concat("/projects"===o&&"bg-accent"," ease-in transition-all "),children:"Projects"}),(0,n.jsx)(i(),{href:"/about",className:"px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ".concat("/about"===o&&"bg-accent"," ease-in transition-all "),children:"About"})]}),(0,n.jsx)(a.Z,{width:24,height:24,src:"".concat("/portfolio-new","/hamburger.svg"),alt:"menu icon",className:"md:hidden hover:cursor-pointer",onClick:()=>t(!e)})]}),(0,n.jsx)("div",{className:"md:hidden absolute top-[74px] right-0 ".concat(e?"translate-x-0 opacity-100":"translate-x-[500px] opacity-0"," transition-all ease-in duration-500 z-30 bg-primary p-10"),children:(0,n.jsxs)("ul",{className:"flex flex-col gap-4 text-center",children:[(0,n.jsx)(i(),{href:"/",className:"px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ".concat("/"===o&&"bg-accent"," ease-in transition-all "),onClick:()=>t(!1),children:"Home"}),(0,n.jsx)(i(),{href:"/projects",className:"px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ".concat("/projects"===o&&"bg-accent"," ease-in transition-all "),onClick:()=>t(!1),children:"Projects"}),(0,n.jsx)(i(),{href:"/about",className:"px-5 py-[9px] rounded-[100px] border border-white border-opacity-30 tracking-[0.42px] text-sm hover:bg-accent hover:bg-opacity-30 ".concat("/about"===o&&"bg-accent"," ease-in transition-all "),onClick:()=>t(!1),children:"About"})]})})]})},layout_Layout=e=>{let{children:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(shared_Navbar,{}),(0,n.jsx)("main",{children:t}),(0,n.jsx)(shared_Footer,{})]})};r(2352);var c=r(9008),u=r.n(c);function App(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(u(),{children:[(0,n.jsx)("title",{children:"Adaeze Ndupu | Frontend Developer Portfolio"}),(0,n.jsx)("meta",{name:"description",content:"Adaeze Ndupu is a frontend developer specializing in HTML, CSS, Javascript, React, Git, Bootstrap, Tailwind, Next.js, and WordPress. Explore her portfolio to see her latest projects and learn more about her skills and experience."}),(0,n.jsx)("meta",{name:"author",content:"Adaeze Ndupu"}),(0,n.jsx)("meta",{property:"og:title",content:"Adaeze Ndupu's Portfolio"}),(0,n.jsx)("meta",{property:"og:description",content:"Adaeze Ndupu - Frontend Developer. Passionate about creating exceptional websites that merge functionality with aesthetics. Specializing in frontend development. Crafting user-friendly and responsive solutions that enhance user experiences."}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"https://vermilion4.github.io/portfolio-new/"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:creator",content:"@what_is_a_swat"}),(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"WebSite",name:"Adaeze Ndupu's Frontend Developer Portfolio",description:"Adaeze Ndupu is a frontend developer specializing in HTML, CSS, Javascript, React, Git, Bootstrap, Tailwind, Next.js, and WordPress.",author:{"@type":"Person",name:"Adaeze Ndupu"},url:"https://vermilion4.github.io/portfolio-new/",potentialAction:{"@type":"SearchAction",target:"https://vermilion4.github.io/portfolio-new/?q={search_term_string}","query-input":"required name=search_term_string"},sameAs:["https://twitter.com/what_is_a_swat","https://www.linkedin.com/in/adaeze-ndupu","https://github.com/vermilion4","https://medium.com/@andupu4","https://www.hackerrank.com/andupu4","https://www.frontendmentor.io/profile/vermilion4"],mainEntityOfPage:{"@type":"WebPage","@id":"https://vermilion4.github.io/portfolio-new/"}})}})]}),(0,n.jsx)(layout_Layout,{children:(0,n.jsx)(t,{...r})})]})}},5538:function(e,t,r){"use strict";function imageLoader(e){let{src:t,width:r,quality:n}=e,o=t.startsWith("/")?t:"/".concat(t);return"".concat("/portfolio-new").concat(o).concat(n?"?q=".concat(n):"")}r.r(t),r.d(t,{default:function(){return imageLoader}})},2352:function(){},9008:function(e,t,r){e.exports=r(9201)},5675:function(e,t,r){e.exports=r(645)},1664:function(e,t,r){e.exports=r(5170)},1163:function(e,t,r){e.exports=r(9974)}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(1118),__webpack_exec__(9974)}),_N_E=e.O()}]);