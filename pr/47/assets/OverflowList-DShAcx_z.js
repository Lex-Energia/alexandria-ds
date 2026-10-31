import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{l as r,n as i,t as a,u as o}from"./themeProps-DnL3zvT_.js";import{t as s,x as c,y as l}from"./utils-BG_6uO_I.js";import{b as u,v as d,y as f}from"./Text-D-FAeb1k.js";import{t as p}from"./jsx-runtime-cM__dR4X.js";import{n as m,t as h}from"./useIsomorphicLayoutEffect-BLjA_OV8.js";import{n as g,t as _}from"./useDevWarning-CgFHLnUO.js";function v(e,t,n){return Math.max(Math.min(e,n),t)}function y(e,t,n){return{floor:Math.max(0,Math.min(t,e)),ceiling:Math.max(0,Math.min(n??e,e))}}function b(e,t,n,r,i,a){let o=0,s=0;for(let c=0;c<e.length&&!(s>=a);c++){let a=e[c],l=c>0?t:0,u=o+a+l;if(u+(c===e.length-1?0:r+(s>0||r>0?t:0))>n&&s>=i)break;o=u,s++}return s}function x(e,t,n,r,i){let a=0,o=1,s=0;for(let c=0;c<e.length;c++){let l=e[c],u=s===0,d=u?l:s+t+l,f=o===i,p=f&&r>0?r+t:0;if(d+p<=n){s=d,a++;continue}if(u){if(f&&p>0)break;s=d,a++;continue}if(o>=i)break;o++,s=0,c--}return{placed:a,rows:o}}function S(e,t,n){if(e.length===0)return 0;let r=1,i=0;for(let a=0;a<e.length;a++){let o=e[a],s=i===0,c=s?o:i+t+o;c<=n||s?i=c:(r++,i=o)}return r}function C(e,t,n,r,i){let a=e.length;if(a===0)return{count:0,rows:0};let o=x(e,t,n,0,i);if(o.placed===a)return{count:a,rows:o.rows};let s=x(e,t,n,r,i).placed,c=S(e.slice(0,s),t,n);return{count:s,rows:Math.max(+(s>0),c)}}function w(e){let{widths:t,gap:n,availableWidth:r,indicatorWidth:i,minVisibleItems:a,maxVisibleItems:o,maxRows:s,collapseFrom:c}=e,l=t.length;if(l===0)return{visibleCount:0,rows:0};let{floor:u,ceiling:d}=y(l,a,o),f=c===`end`?t:[...t].reverse();if(!(s!=null&&s>1)){let e=v(b(f,n,r,i,u,d),u,d);return{visibleCount:e,rows:+(e>0)}}let{count:p,rows:m}=C(f,n,r,i,s),h=v(p,u,d),g=h===p?m:S(f.slice(0,h),n,r);return{visibleCount:h,rows:h>0?Math.max(1,g):0}}var T=t((()=>{}));function E(e,t={}){let{gap:n=0,minVisibleItems:r=0,maxVisibleItems:i,maxRows:a,collapseFrom:o=`end`,behavior:s=`observeSelf`}=t;g(`useOverflow`,`maxVisibleItems (${i}) is less than minVisibleItems (${r}); the floor wins and minVisibleItems items will be shown.`,i!=null&&i<r);let c=s===`observeParent`,[l,d]=(0,D.useState)(e),[p,h]=(0,D.useState)(1),[_,v]=(0,D.useState)(0),y=(0,D.useRef)(null),b=(0,D.useRef)(null),x=(0,D.useRef)(null),S=(0,D.useCallback)(()=>{let t=y.current,s=b.current;if(!t||!s)return;let l;if(c&&t.parentElement){let e=t.parentElement,n=getComputedStyle(e);l=e.clientWidth-parseFloat(n.paddingLeft)-parseFloat(n.paddingRight)}else l=t.offsetWidth;let u=Array.from(s.children),f=u.length>e,p=f?u.slice(0,e):u,m=f?u[u.length-1].offsetWidth:0;if(p.length===0){d(0),h(0);return}let g=p.map(e=>e.offsetWidth),_=p.reduce((e,t)=>Math.max(e,t.offsetHeight||0),0),{visibleCount:x,rows:S}=w({widths:g,gap:n,availableWidth:l,indicatorWidth:m,minVisibleItems:r,maxVisibleItems:i,maxRows:a,collapseFrom:o});d(x),h(e=>e===S?e:S),v(e=>e===_?e:_)},[e,n,r,i,a,o,c]),C=(0,D.useCallback)(e=>{if(y.current=e,x.current&&=(u(x.current),null),e){let t=c&&e.parentElement?e.parentElement:e;f(t,()=>{S()}),x.current=t}},[S,c]),T=(0,D.useCallback)(e=>{b.current=e,e&&S()},[S]);return m(()=>{S()},[S]),{containerRef:C,measureRef:T,visibleCount:l,hasOverflow:l<e,rows:p,rowHeight:_}}var D,O=t((()=>{D=e(n(),1),h(),d(),T(),_()}));function k({children:e,gap:t=2,minVisibleItems:n=0,maxVisibleItems:r,maxRows:a,collapseFrom:s=`end`,behavior:u=`observeSelf`,overflowRenderer:d,xstyle:f,className:p,style:m,ref:h,...g}){let _=A.Children.toArray(e),v=_.length,y=I[t],b=u===`observeParent`,x=a!=null&&a>1,{containerRef:S,measureRef:C,visibleCount:w,hasOverflow:T,rowHeight:D}=E(v,{gap:y,minVisibleItems:n,maxVisibleItems:r,maxRows:a,collapseFrom:s,behavior:u}),O=_.map((e,t)=>({child:e,index:t})),k,N;s===`end`?(k=O.slice(0,w),N=O.slice(w)):(k=O.slice(v-w),N=O.slice(0,v-w));let L=d?.(O);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(`div`,{ref:C,"aria-hidden":`true`,inert:!0,...o(M.measureContainer,F[t]),children:[_,L!=null&&(0,j.jsx)(`div`,{className:`pharos3nfvp2`,children:L})]}),(0,j.jsxs)(`div`,{ref:l(h,S),...c(i(`overflow-list`),o(x?M.containerMultiRow:M.container,F[t],x&&D>0&&a!=null&&P.height(a,D,y),b&&T&&M.fillParent,f),p,m),...g,children:[s===`start`&&T&&d?.(N),k.map(({child:e})=>e),s===`end`&&T&&d?.(N)]})]})}var A,j,M,N,P,F,I,L=t((()=>{A=e(n(),1),r(),s(),O(),a(),j=p(),M={container:{k1xSpc:`pharos78zum5`,kGNEyG:`pharos6s0dn4`,kVQacm:`pharosb3r6kr`,khDVqt:`pharosuxw1ft`,k7Eaqz:`pharoseuugli`,$$css:!0},containerMultiRow:{k1xSpc:`pharos78zum5`,kwnvtZ:`pharos1a02dak`,kfiyM8:`pharos8gbvx8`,kVQacm:`pharosb3r6kr`,khDVqt:`pharoseaf4i8`,k7Eaqz:`pharoseuugli`,$$css:!0},fillParent:{kzqmXN:`pharosh8yej3`,$$css:!0},measureContainer:{kVAEAm:`pharos10l6tqk`,k33iCy:`pharoslshs6z`,kZKoxP:`pharosqtp20y`,kVQacm:`pharosb3r6kr`,k1xSpc:`pharos78zum5`,kGNEyG:`pharos6s0dn4`,khDVqt:`pharosuxw1ft`,kfzvcC:`pharos47corl`,$$css:!0}},N={kskxy:`pharos1jols5v`,$$css:!0},P={height:(e,t,n)=>[N,{"--x-maxHeight":(e=>typeof e==`number`?e+`px`:e??void 0)(`calc(${t}px * ${e} + ${n}px * ${e-1})`)}]},F={0:{kOIVth:`pharossn7fz1`,khm7nJ:null,k1C7PZ:null,$$css:!0},1:{kOIVth:`pharoszye2dw`,khm7nJ:null,k1C7PZ:null,$$css:!0},2:{kOIVth:`pharos1txdalj`,khm7nJ:null,k1C7PZ:null,$$css:!0},3:{kOIVth:`pharosjcht0a`,khm7nJ:null,k1C7PZ:null,$$css:!0},4:{kOIVth:`pharos18g69wz`,khm7nJ:null,k1C7PZ:null,$$css:!0},5:{kOIVth:`pharos9mgr7n`,khm7nJ:null,k1C7PZ:null,$$css:!0},6:{kOIVth:`pharos1qh66ti`,khm7nJ:null,k1C7PZ:null,$$css:!0},8:{kOIVth:`pharos4t41sb`,khm7nJ:null,k1C7PZ:null,$$css:!0},10:{kOIVth:`pharos3hoi3v`,khm7nJ:null,k1C7PZ:null,$$css:!0},"0.5":{kOIVth:`pharos1lsbc85`,khm7nJ:null,k1C7PZ:null,$$css:!0},"1.5":{kOIVth:`pharos1s4dlld`,khm7nJ:null,k1C7PZ:null,$$css:!0}},I={0:0,.5:2,1:4,1.5:6,2:8,3:12,4:16,5:20,6:24,8:32,10:40},k.displayName=`OverflowList`,k.__docgenInfo={description:`A horizontal list that hides items that don't fit and shows an overflow indicator.

Uses a hidden measurement container to determine which items fit without
causing visual flickering. The overflow indicator is also measured
automatically so no manual width value is needed.

@example
\`\`\`
<OverflowList
  gap={2}
  overflowRenderer={(items) => (
    <Button label={\`+\${items.length} more\`} variant="ghost" />
  )}>
  <Button label="Action 1" />
  <Button label="Action 2" />
  <Button label="Action 3" />
  <Button label="Action 4" />
</OverflowList>
\`\`\``,methods:[],displayName:`OverflowList`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the visible container element`},children:{required:!0,tsType:{name:`ReactNode`},description:`The items to render. Each child should be a single element.`},gap:{required:!1,tsType:{name:`union`,raw:`0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`0.5`},{name:`literal`,value:`1`},{name:`literal`,value:`1.5`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`}]},description:`Gap between items as a spacing token step.
Accepts: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10
@default 2`,defaultValue:{value:`2`,computed:!1}},minVisibleItems:{required:!1,tsType:{name:`number`},description:`Minimum number of items to always show.
@default 0`,defaultValue:{value:`0`,computed:!1}},maxVisibleItems:{required:!1,tsType:{name:`number`},description:`Maximum number of items to ever show, even when they all fit. The ceiling
partner to \`minVisibleItems\`; extra items collapse into the overflow
indicator. Leave undefined for no cap. If it is less than
\`minVisibleItems\`, the floor wins (and a dev-only warning is logged).
@default undefined`},maxRows:{required:!1,tsType:{name:`number`},description:`Wrap items across up to this many rows before collapsing the remainder
into the overflow indicator. Leave undefined (or set \`1\`) for the default
single-line behavior. A number, not a boolean — unbounded wrapping is a
plain flex-wrap layout, not overflow collapse. Assumes uniform row height.
@default undefined`},collapseFrom:{required:!1,tsType:{name:`union`,raw:`'start' | 'end'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'end'`}]},description:`Which end to collapse items from.
@default 'end'`,defaultValue:{value:`'end'`,computed:!1}},behavior:{required:!1,tsType:{name:`union`,raw:`'observeParent' | 'observeSelf'`,elements:[{name:`literal`,value:`'observeParent'`},{name:`literal`,value:`'observeSelf'`}]},description:`Which element to observe for overflow calculations.
- \`'observeSelf'\`: uses the container's own width (default)
- \`'observeParent'\`: observes the parent element's content width
  for overflow calculations. This keeps the overflow list
  content-sized while still detecting available space for
  grow-back. Siblings that don't fit can wrap and be clipped by
  the parent's overflow.
@default 'observeSelf'`,defaultValue:{value:`'observeSelf'`,computed:!1}},overflowRenderer:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(overflowItems: OverflowItem[]) => ReactNode`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`OverflowItem`}],raw:`OverflowItem[]`},name:`overflowItems`}],return:{name:`ReactNode`}}},description:`Render function for the overflow indicator. Receives the list of
items that are not visible, each with its original index. Only called
when there are overflowing items.

The indicator is automatically measured in a hidden container to
reserve the correct amount of space.

@example
\`\`\`
const labels = ['Save', 'Edit', 'Share'];
<OverflowList
  overflowRenderer={(overflowItems) => (
    <DropdownMenu
      button={{label: \`+\${overflowItems.length}\`, variant: 'ghost'}}
      items={overflowItems.map(({index}) => ({ label: labels[index] }))}
    />
  )}>
  {labels.map(l => <Button key={l} label={l} />)}
</OverflowList>
\`\`\``}},composes:[`Omit`]}})),R=t((()=>{L()}));export{k as n,L as r,R as t};