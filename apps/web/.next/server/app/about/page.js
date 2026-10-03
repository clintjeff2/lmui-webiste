(()=>{var e={};e.id=301,e.ids=[301],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},1106:(e,a,i)=>{"use strict";i.r(a),i.d(a,{GlobalError:()=>l.a,__next_app__:()=>p,originalPathname:()=>m,pages:()=>c,routeModule:()=>h,tree:()=>d}),i(938),i(1083),i(8909);var r=i(3282),s=i(5736),t=i(3906),l=i.n(t),n=i(6880),o={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);i.d(a,o);let d=["",{children:["about",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,938)),"/home/csmenorah/lmui-website/apps/web/src/app/about/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,6495))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,1083)),"/home/csmenorah/lmui-website/apps/web/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.bind(i,8909)),"/home/csmenorah/lmui-website/apps/web/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,6495))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/csmenorah/lmui-website/apps/web/src/app/about/page.tsx"],m="/about/page",p={require:i,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/about/page",pathname:"/about",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},2187:(e,a,i)=>{Promise.resolve().then(i.bind(i,8975)),Promise.resolve().then(i.t.bind(i,730,23)),Promise.resolve().then(i.t.bind(i,6568,23))},8975:(e,a,i)=>{"use strict";i.d(a,{Reveal:()=>l,RevealGroup:()=>o,RevealItem:()=>c});var r=i(3227),s=i(6433);let t=[.16,1,.3,1];function l({children:e,delay:a=0,y:i=26,className:l}){return r.jsx(s.E.div,{className:l,initial:{opacity:0,y:i},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-80px"},transition:{duration:.75,delay:a,ease:t},children:e})}let n={hidden:{},show:{transition:{staggerChildren:.09}}};function o({children:e,className:a}){return r.jsx(s.E.div,{className:a,initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-80px"},variants:n,children:e})}let d={hidden:{opacity:0,y:24},show:{opacity:1,y:0,transition:{duration:.7,ease:t}}};function c({children:e,className:a}){return r.jsx(s.E.div,{className:a,variants:d,children:e})}},938:(e,a,i)=>{"use strict";i.r(a),i.d(a,{default:()=>p,metadata:()=>m});var r=i(9013),s=i(7043),t=i(1035),l=i(6501),n=i(5200),o=i(7055),d=i(3522);let c=new Date().getFullYear()-2005,m={title:"About — Landmark Metropolitan University Institute",description:`${c}+ years of training practitioners, not just graduates.`};async function p(){let{pillars:e,leadership:a,milestones:i,campusGallery:m,campusCount:p}=await (0,o.p)();return(0,r.jsxs)("main",{children:[r.jsx("section",{className:"section",style:{paddingBottom:40},children:(0,r.jsxs)("div",{className:"container about-hero",children:[(0,r.jsxs)("div",{className:"about-hero__copy",children:[r.jsx(l.Ue,{children:r.jsx("span",{className:"eyebrow",children:"About Landmark"})}),r.jsx(l.Ue,{delay:.06,children:(0,r.jsxs)("h1",{className:"headline--display",style:{marginTop:20,maxWidth:820},children:[c,"+ years of training practitioners, not just graduates."]})}),r.jsx(l.Ue,{delay:.14,children:r.jsx("p",{className:"lede",style:{marginTop:24},children:"Founded in 2005 as an ACCA training center for those who wanted to take the ACCA exam for Accounting accreditation, Landmark has spent over two decades refusing to separate education from practice."})})]}),(0,r.jsxs)(l.Ue,{delay:.1,className:"about-hero__visual",children:[r.jsx(s.default,{src:"https://landmark.cm/static/media/admission-pic.jpg",alt:"",fill:!0,sizes:"(max-width: 980px) 100vw, 70vw",style:{objectFit:"cover"}}),r.jsx(n.L,{pattern:"concentric",tone:"navy",monogram:!0,className:"about-hero__panel"})]})]})}),r.jsx("section",{className:"section--tight section--paper-alt",children:r.jsx("div",{className:"container",children:r.jsx(l.WY,{className:"about-pillars",children:e.map(e=>(0,r.jsxs)(l.$T,{className:"about-pillar",children:[r.jsx("h3",{children:e.title}),r.jsx("p",{children:e.description})]},e.title))})})}),r.jsx("section",{className:"section",children:(0,r.jsxs)("div",{className:"container",children:[r.jsx(l.Ue,{children:r.jsx("span",{className:"eyebrow",children:"Leadership"})}),r.jsx(l.Ue,{delay:.06,children:r.jsx("h2",{className:"headline",style:{marginTop:16,marginBottom:48},children:"Who's steering it."})}),r.jsx(l.WY,{className:"leadership-grid",children:a.map(e=>(0,r.jsxs)(l.$T,{className:"leader-card",children:[r.jsx("div",{className:"leader-card__visual",children:e.image?r.jsx("img",{className:"leader-card__image",src:e.image,alt:`Portrait of ${e.name}`}):r.jsx(n.L,{pattern:"grid",tone:"navy"})}),r.jsx("h3",{className:"leader-card__name",children:e.name}),r.jsx("div",{className:"leader-card__title",children:e.title}),r.jsx("p",{className:"leader-card__bio",children:e.bio})]},e.name))})]})}),r.jsx("section",{className:"section section--navy",children:(0,r.jsxs)("div",{className:"container",children:[r.jsx(l.Ue,{children:r.jsx("span",{className:"eyebrow",children:"History"})}),r.jsx(l.Ue,{delay:.06,children:r.jsx("h2",{className:"headline",style:{marginTop:16,marginBottom:56},children:"A short history of a long habit."})}),r.jsx(l.WY,{className:"timeline",children:i.map(e=>(0,r.jsxs)(l.$T,{className:"timeline-row",children:[r.jsx("div",{className:"timeline-row__year",children:e.year}),r.jsx("div",{className:"timeline-row__desc",children:e.description.split(/\n\s*\n/).map((a,i)=>r.jsx("p",{children:a},`${e.year}-${i}`))})]},e.year))})]})}),r.jsx("section",{className:"section",children:(0,r.jsxs)("div",{className:"container",children:[r.jsx("div",{className:"section-head",children:(0,r.jsxs)("div",{children:[r.jsx(l.Ue,{children:r.jsx("span",{className:"eyebrow",children:"Campuses"})}),r.jsx(l.Ue,{delay:.06,children:(0,r.jsxs)("h2",{className:"headline",style:{marginTop:16},children:[p," campuses. One metropolitan region."]})})]})}),r.jsx(l.WY,{className:"gallery-bento",children:m.map(e=>(0,r.jsxs)(l.$T,{className:`gallery-tile gallery-tile--${e.size}`,children:[r.jsx(n.L,{pattern:e.pattern,tone:"navy",className:"gallery-tile__visual"}),r.jsx("div",{className:"gallery-tile__label",children:e.label})]},e.label))})]})}),r.jsx("section",{className:"cta-banner-simple",children:(0,r.jsxs)("div",{className:"container",style:{textAlign:"center"},children:[r.jsx(l.Ue,{children:r.jsx("h2",{className:"headline",style:{color:"white",margin:"0 auto",maxWidth:640},children:"Come see it before you commit to it."})}),r.jsx(l.Ue,{delay:.1,children:r.jsx("div",{style:{marginTop:28},children:r.jsx(t.z,{href:d.hQ,variant:"gold",children:"Apply Now"})})})]})}),r.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .about-hero {
          display: grid; grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          align-items: stretch; gap: clamp(32px, 5vw, 72px);
        }
        .about-hero__copy { min-width: 0; }
        .about-hero__visual {
          position: relative; width: 100%; height: auto; margin-block: -16px;
          border-radius: var(--radius-lg); overflow: hidden;
          background: var(--navy-800);
        }

        .about-pillars { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; }
        .about-pillar h3 { font-size: 1.3rem; margin-bottom: 12px; }
        .about-pillar p { color: var(--muted); font-size: 0.92rem; line-height: 1.65; }

        .leadership-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .leader-card__visual { position: relative; aspect-ratio: 4/5; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 16px; }
        .leader-card__image { display: block; width: 100%; height: 100%; object-fit: cover; object-position: center top; }
        .leader-card__name { font-size: 1rem; margin-bottom: 4px; }
        .leader-card__title { font-size: 0.8rem; color: var(--garnet-500); font-weight: 600; margin-bottom: 10px; }
        .leader-card__bio { font-size: 0.86rem; color: var(--muted); line-height: 1.55; }

        .timeline { max-width: 760px; }
        .timeline-row {
          display: grid; grid-template-columns: 100px 1fr; gap: 24px; padding: 22px 0;
          border-top: 1px solid rgba(255,255,255,0.12);
        }
        .timeline-row:last-child { border-bottom: 1px solid rgba(255,255,255,0.12); }
        .timeline-row__year { font-family: var(--font-display); color: var(--gold-400); font-size: 1.2rem; }
        .timeline-row__desc { color: rgba(255,255,255,0.78); line-height: 1.6; }
        .timeline-row__desc p + p { margin-top: 12px; }

        .gallery-bento {
          display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: 160px; gap: 16px;
        }
        .gallery-tile { position: relative; border-radius: var(--radius-md); overflow: hidden; }
        .gallery-tile--lg { grid-column: span 2; grid-row: span 2; }
        .gallery-tile--md { grid-column: span 2; grid-row: span 1; }
        .gallery-tile--sm { grid-column: span 1; grid-row: span 1; }
        .gallery-tile__visual { position: absolute; inset: 0; transition: transform 0.6s var(--ease-out); }
        .gallery-tile:hover .gallery-tile__visual { transform: scale(1.08); }
        .gallery-tile__label {
          position: absolute; left: 0; right: 0; bottom: 0; padding: 16px;
          background: linear-gradient(180deg, transparent, rgba(8,19,42,0.85));
          color: white; font-size: 0.86rem; font-weight: 500;
        }

        .cta-banner-simple { background: var(--navy-900); padding: 90px 0; }

        @media (max-width: 980px) {
          .about-pillars { grid-template-columns: 1fr; }
          .leadership-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-bento { grid-template-columns: repeat(2, 1fr); }
          .gallery-tile--lg { grid-column: span 2; }
          .gallery-tile--md { grid-column: span 2; }
        }
        @media (max-width: 560px) {
          .leadership-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 700px) {
          .about-hero { grid-template-columns: minmax(0, 1fr); gap: 28px; }
          .about-hero__visual { height: clamp(220px, 60vw, 360px); margin-block: 0; }
        }
      `}})]})}},6501:(e,a,i)=>{"use strict";i.d(a,{$T:()=>l,Ue:()=>s,WY:()=>t});var r=i(3189);let s=(0,r.createProxy)(String.raw`/home/csmenorah/lmui-website/apps/web/src/components/Reveal.tsx#Reveal`),t=(0,r.createProxy)(String.raw`/home/csmenorah/lmui-website/apps/web/src/components/Reveal.tsx#RevealGroup`),l=(0,r.createProxy)(String.raw`/home/csmenorah/lmui-website/apps/web/src/components/Reveal.tsx#RevealItem`)}};var a=require("../../webpack-runtime.js");a.C(e);var i=e=>a(a.s=e),r=a.X(0,[522,913,525],()=>i(1106));module.exports=r})();