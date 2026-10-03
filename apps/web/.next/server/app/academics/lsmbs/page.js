(()=>{var e={};e.id=167,e.ids=[167],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},9215:(e,a,s)=>{"use strict";s.r(a),s.d(a,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>h,tree:()=>c}),s(5178),s(1083),s(8909);var r=s(3282),i=s(5736),t=s(3906),n=s.n(t),o=s(6880),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(a,l);let c=["",{children:["academics",{children:["lsmbs",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,5178)),"/home/csmenorah/lmui-website/apps/web/src/app/academics/lsmbs/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,6495))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,1083)),"/home/csmenorah/lmui-website/apps/web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,8909)),"/home/csmenorah/lmui-website/apps/web/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,6495))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/csmenorah/lmui-website/apps/web/src/app/academics/lsmbs/page.tsx"],p="/academics/lsmbs/page",m={require:s,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/academics/lsmbs/page",pathname:"/academics/lsmbs",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4991:(e,a,s)=>{Promise.resolve().then(s.bind(s,8975)),Promise.resolve().then(s.t.bind(s,6568,23))},8975:(e,a,s)=>{"use strict";s.d(a,{Reveal:()=>n,RevealGroup:()=>l,RevealItem:()=>d});var r=s(3227),i=s(6433);let t=[.16,1,.3,1];function n({children:e,delay:a=0,y:s=26,className:n}){return r.jsx(i.E.div,{className:n,initial:{opacity:0,y:s},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.75,delay:a,ease:t},children:e})}let o={hidden:{},show:{transition:{staggerChildren:.09}}};function l({children:e,className:a}){return r.jsx(i.E.div,{className:a,initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-80px"},variants:o,children:e})}let c={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.7,ease:t}}};function d({children:e,className:a}){return r.jsx(i.E.div,{className:a,variants:c,children:e})}},5178:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>r.Z,generateMetadata:()=>r.N});var r=s(4220)},4220:(e,a,s)=>{"use strict";s.d(a,{N:()=>p,Z:()=>m});var r=s(9013),i=s(1035),t=s(2474),n=s(6501),o=s(4549),l=s(575),c=s(7252),d=s(3522);async function p(){let e=await (0,l.O5)("biomedical");return{title:"LSMBS — Landmark Metropolitan University Institute",description:`${e} options across five areas, every one built around real practice.`}}async function m(){let e=await (0,c.oX)(),a=await (0,o.getFields)(),s=e.filter(e=>"biomedical"===e.slug),p=(0,o.getUniqueFieldCountBySchool)("biomedical"),m=await (0,l.O5)("biomedical",a);return(0,r.jsxs)("main",{children:[r.jsx("section",{className:"section",style:{paddingBottom:60},children:(0,r.jsxs)("div",{className:"container",children:[r.jsx(n.Ue,{children:r.jsx("span",{className:"eyebrow",children:"Landmark School of Biomedical Sciences"})}),r.jsx(n.Ue,{delay:.06,children:(0,r.jsxs)("h1",{className:"headline--display",style:{marginTop:20,maxWidth:820},children:[m," options. ",p," field areas. One standard for what counts as learning."]})}),r.jsx(n.Ue,{delay:.14,children:r.jsx("p",{className:"lede",style:{marginTop:24},children:"Every option below carries a real practicum requirement — a client, a docket, a lab, a build. Jump to a school, or apply now."})}),r.jsx(n.Ue,{delay:.2,children:r.jsx("div",{className:"academics-jump",children:s.map(e=>r.jsx("a",{href:`#${e.slug}`,className:"academics-jump__chip",children:e.shortName},e.slug))})})]})}),s.map((e,s)=>{let i=(0,o.getFieldsBySchool)(e.slug,a);return r.jsx("section",{id:e.slug,className:`section academics-school ${s%2==1?"section--paper-alt":""}`,children:(0,r.jsxs)("div",{className:"container",children:[(0,r.jsxs)("div",{className:"academics-school__head",children:[(0,r.jsxs)("div",{children:[r.jsx(n.Ue,{children:(0,r.jsxs)("span",{className:"eyebrow",children:[m," \xb7 Options"]})}),r.jsx(n.Ue,{delay:.06,children:r.jsx("h2",{className:"headline",style:{marginTop:16,maxWidth:640},children:e.name})}),r.jsx(n.Ue,{delay:.1,children:Array.isArray(e.description)?e.description.map((e,a)=>r.jsx("p",{className:"lede",style:{marginTop:0===a?16:12},children:e},a)):r.jsx("p",{className:"lede",style:{marginTop:16},children:e.description})})]}),r.jsx(n.Ue,{delay:.14,children:(0,r.jsxs)("a",{href:d.hQ,target:"_blank",rel:"noopener noreferrer",className:"btn btn--outline-dark",children:["Apply to ",e.shortName]})})]}),r.jsx(n.WY,{className:"academics-grid",children:i.map(a=>r.jsx(n.$T,{children:r.jsx(t.R,{option:a,school:e})},a.slug))})]})},e.slug)}),r.jsx("section",{className:"cta-banner-simple",children:(0,r.jsxs)("div",{className:"container",style:{textAlign:"center"},children:[r.jsx(n.Ue,{children:(0,r.jsxs)("h2",{className:"headline",style:{color:"white",margin:"0 auto"},children:[m," options. One application."]})}),r.jsx(n.Ue,{delay:.1,children:r.jsx("div",{style:{marginTop:28},children:r.jsx(i.z,{href:d.hQ,variant:"gold",children:"Apply Now"})})})]})}),r.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .academics-jump { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 32px; }
        .academics-jump__chip {
          padding: 9px 18px; border-radius: 999px; border: 1px solid var(--line-strong);
          font-size: 0.84rem; color: var(--navy-900); transition: background 0.3s, color 0.3s, border-color 0.3s;
        }
        .academics-jump__chip:hover { background: var(--navy-900); color: white; border-color: var(--navy-900); }

        .academics-school { scroll-margin-top: 90px; }
        .academics-school__head {
          display: flex; justify-content: space-between; align-items: flex-end; gap: 32px;
          margin-bottom: 44px; flex-wrap: wrap;
        }
        .academics-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }

        .cta-banner-simple { background: var(--navy-900); padding: 90px 0; }

        @media (max-width: 980px) {
          .academics-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .academics-grid { grid-template-columns: 1fr; }
        }
      `}})]})}},2474:(e,a,s)=>{"use strict";s.d(a,{R:()=>n});var r=s(9013),i=s(6787),t=s(5200);function n({option:e,school:a}){return(0,r.jsxs)(i.default,{href:`/academics/${e.slug}`,className:"option-card",children:[r.jsx("div",{className:"option-card__visual",children:r.jsx(t.L,{pattern:a?.pattern??"grid",tone:"navy",className:"option-card__panel"})}),(0,r.jsxs)("div",{className:"option-card__body",children:[(0,r.jsxs)("div",{className:"option-card__meta",children:[r.jsx("span",{className:"option-card__badge",children:e.degreeLevel}),r.jsx("span",{children:e.duration})]}),r.jsx("h3",{className:"option-card__title",children:e.name}),r.jsx("p",{className:"option-card__summary",children:e.summary}),(0,r.jsxs)("span",{className:"btn btn--ghost-link btn--sm option-card__cta",children:["View option ",r.jsx("span",{className:"arrow",children:"→"})]})]}),r.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .option-card {
          display: block;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out), border-color 0.4s;
        }
        .option-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 26px 50px -22px rgba(8,19,42,0.28);
          border-color: transparent;
        }
        .option-card__visual { position: relative; aspect-ratio: 16/9; overflow: hidden; }
        .option-card__panel { transition: transform 0.6s var(--ease-out); }
        .option-card:hover .option-card__panel { transform: scale(1.08); }
        .option-card__body { padding: 22px; }
        .option-card__meta {
          display: flex; justify-content: space-between; align-items: center;
          font-size: 0.76rem; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 12px;
        }
        .option-card__badge {
          background: var(--paper-alt); color: var(--garnet-500); padding: 4px 10px; border-radius: 999px; font-weight: 600;
        }
        .option-card__title { font-size: 1.12rem; margin-bottom: 10px; }
        .option-card__summary {
          font-size: 0.88rem; color: var(--muted); line-height: 1.55;
          display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
          margin-bottom: 16px;
        }
      `}})]})}},6501:(e,a,s)=>{"use strict";s.d(a,{$T:()=>n,Ue:()=>i,WY:()=>t});var r=s(3189);let i=(0,r.createProxy)(String.raw`/home/csmenorah/lmui-website/apps/web/src/components/Reveal.tsx#Reveal`),t=(0,r.createProxy)(String.raw`/home/csmenorah/lmui-website/apps/web/src/components/Reveal.tsx#RevealGroup`),n=(0,r.createProxy)(String.raw`/home/csmenorah/lmui-website/apps/web/src/components/Reveal.tsx#RevealItem`)}};var a=require("../../../webpack-runtime.js");a.C(e);var s=e=>a(a.s=e),r=a.X(0,[522,913,525],()=>s(9215));module.exports=r})();