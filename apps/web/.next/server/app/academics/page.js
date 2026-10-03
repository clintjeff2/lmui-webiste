(()=>{var e={};e.id=260,e.ids=[260],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},9214:(e,a,r)=>{"use strict";r.r(a),r.d(a,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>p,pages:()=>d,routeModule:()=>h,tree:()=>c}),r(8968),r(1083),r(8909);var s=r(3282),i=r(5736),t=r(3906),n=r.n(t),o=r(6880),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(a,l);let c=["",{children:["academics",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8968)),"/home/csmenorah/lmui-website/apps/web/src/app/academics/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6495))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1083)),"/home/csmenorah/lmui-website/apps/web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,8909)),"/home/csmenorah/lmui-website/apps/web/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6495))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/csmenorah/lmui-website/apps/web/src/app/academics/page.tsx"],p="/academics/page",m={require:r,loadChunk:()=>Promise.resolve()},h=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/academics/page",pathname:"/academics",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4991:(e,a,r)=>{Promise.resolve().then(r.bind(r,8975)),Promise.resolve().then(r.t.bind(r,6568,23))},8975:(e,a,r)=>{"use strict";r.d(a,{Reveal:()=>n,RevealGroup:()=>l,RevealItem:()=>d});var s=r(3227),i=r(6433);let t=[.16,1,.3,1];function n({children:e,delay:a=0,y:r=26,className:n}){return s.jsx(i.E.div,{className:n,initial:{opacity:0,y:r},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.75,delay:a,ease:t},children:e})}let o={hidden:{},show:{transition:{staggerChildren:.09}}};function l({children:e,className:a}){return s.jsx(i.E.div,{className:a,initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-80px"},variants:o,children:e})}let c={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.7,ease:t}}};function d({children:e,className:a}){return s.jsx(i.E.div,{className:a,variants:c,children:e})}},8968:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>m,generateMetadata:()=>p});var s=r(9013),i=r(1035),t=r(9089),n=r(6501),o=r(4549),l=r(7252),c=r(3522),d=r(575);async function p(){let e=await (0,d.ix)();return{title:"Academics — Landmark Metropolitan University Institute",description:`Four schools, ${e} options, every one built around real practice.`}}async function m(){let e=await (0,l.oX)(),a=await (0,o.getFields)(),r=(0,l.__)(),p=(0,o.getUniqueFieldCount)(),m=await (0,d.ix)();return(0,s.jsxs)("main",{children:[s.jsx("section",{className:"section",style:{paddingBottom:60},children:(0,s.jsxs)("div",{className:"container",children:[s.jsx(n.Ue,{children:s.jsx("span",{className:"eyebrow",children:"Academics"})}),s.jsx(n.Ue,{delay:.06,children:(0,s.jsxs)("h1",{className:"headline--display",style:{marginTop:20,maxWidth:820},children:[m,"+ options. ",p," fields of studies. ",r," schools. One standard for what counts as learning."]})}),s.jsx(n.Ue,{delay:.14,children:s.jsx("p",{className:"lede",style:{marginTop:24},children:"Every option below carries a real practicum requirement — a client, a docket, a lab, a build. Jump to a school, or apply now."})}),s.jsx(n.Ue,{delay:.2,children:s.jsx("div",{className:"academics-jump",children:e.map(e=>s.jsx("a",{href:e.route,className:"academics-jump__chip",children:e.shortName},e.route))})})]})}),e.map((e,r)=>{let i=(0,o.getFieldsBySchool)(e.slug,a);return s.jsx("section",{id:e.slug,className:`section academics-school ${r%2==1?"section--paper-alt":""}`,children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"academics-school__head",children:[(0,s.jsxs)("div",{children:[s.jsx(n.Ue,{children:(0,s.jsxs)("span",{className:"eyebrow",children:[e.stat.value," \xb7 ",e.stat.label]})}),s.jsx(n.Ue,{delay:.06,children:s.jsx("h2",{className:"headline",style:{marginTop:16,maxWidth:640},children:e.name})}),s.jsx(n.Ue,{delay:.1,children:Array.isArray(e.description)?e.description.map((e,a)=>s.jsx("p",{className:"lede",style:{marginTop:0===a?16:12},children:e},a)):s.jsx("p",{className:"lede",style:{marginTop:16},children:e.description})})]}),s.jsx(n.Ue,{delay:.14,children:(0,s.jsxs)("a",{href:c.hQ,target:"_blank",rel:"noopener noreferrer",className:"btn btn--outline-dark",children:["Apply to ",e.shortName]})})]}),s.jsx(n.WY,{className:"academics-grid",children:i.map(a=>s.jsx(n.$T,{children:s.jsx(t.$,{field:a,school:e})},a.slug))})]})},e.slug)}),s.jsx("section",{className:"cta-banner-simple",children:(0,s.jsxs)("div",{className:"container",style:{textAlign:"center"},children:[s.jsx(n.Ue,{children:(0,s.jsxs)("h2",{className:"headline",style:{color:"white",margin:"0 auto"},children:[m,"+ options. One application."]})}),s.jsx(n.Ue,{delay:.1,children:s.jsx("div",{style:{marginTop:28},children:s.jsx(i.z,{href:c.hQ,variant:"gold",children:"Apply Now"})})})]})}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}},9089:(e,a,r)=>{"use strict";r.d(a,{$:()=>n});var s=r(9013),i=r(6787),t=r(5200);function n({field:e,school:a}){return(0,s.jsxs)(i.default,{href:`/academics/${e.slug}`,className:"option-card",children:[s.jsx("div",{className:"option-card__visual",children:s.jsx(t.L,{pattern:a?.pattern??"grid",tone:"navy",className:"option-card__panel"})}),(0,s.jsxs)("div",{className:"option-card__body",children:[(0,s.jsxs)("div",{className:"option-card__meta",children:[s.jsx("span",{className:"option-card__badge",children:e.degreeLevel}),s.jsx("span",{children:e.duration})]}),s.jsx("h3",{className:"option-card__title",children:e.name}),s.jsx("p",{className:"option-card__summary",children:e.summary}),(0,s.jsxs)("span",{className:"btn btn--ghost-link btn--sm option-card__cta",children:["View option ",s.jsx("span",{className:"arrow",children:"→"})]})]}),s.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}},6501:(e,a,r)=>{"use strict";r.d(a,{$T:()=>n,Ue:()=>i,WY:()=>t});var s=r(3189);let i=(0,s.createProxy)(String.raw`/home/csmenorah/lmui-website/apps/web/src/components/Reveal.tsx#Reveal`),t=(0,s.createProxy)(String.raw`/home/csmenorah/lmui-website/apps/web/src/components/Reveal.tsx#RevealGroup`),n=(0,s.createProxy)(String.raw`/home/csmenorah/lmui-website/apps/web/src/components/Reveal.tsx#RevealItem`)}};var a=require("../../webpack-runtime.js");a.C(e);var r=e=>a(a.s=e),s=a.X(0,[522,913,525],()=>r(9214));module.exports=s})();