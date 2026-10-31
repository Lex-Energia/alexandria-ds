import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{l as r,n as i,t as a,u as o}from"./themeProps-DnL3zvT_.js";import{t as s,x as c}from"./utils-BG_6uO_I.js";import{n as l,r as u}from"./useTheme-Cz3Z275w.js";import{n as d,t as f}from"./Text-D-FAeb1k.js";import{t as p}from"./jsx-runtime-cM__dR4X.js";function m({size:e=`md`,shade:t=`default`,label:n,xstyle:r,className:a,style:s,"aria-label":l,"data-testid":d,ref:p,...m}){let b=(0,h.useRef)(null),{tokens:x}=u();(0,h.useEffect)(()=>{let n=b.current;if(n==null)return;let r=n.getContext(`2d`);if(!r)return;let{border:i,diameter:a}=v[e],o=window.devicePixelRatio||1,s=t===`inherit`?getComputedStyle(n).color:null,c=t===`inherit`?s:t===`onMedia`?x[`--color-on-dark`]:t===`subtle`?x[`--color-text-secondary`]:x[`--color-accent`],l=t===`inherit`?s:t===`onMedia`?`${x[`--color-on-dark`]}4D`:x[`--color-track`],u=a+i*2,d=Math.round(u*o),f=d+d%2,p=f/u,m=a/2*p,h=i*p;n.height=n.width=f,n.style.width=n.style.height=u+`px`,r.lineCap=`round`,r.lineWidth=h;let g=f/2;r.beginPath(),r.arc(g,g,m,0,2*Math.PI),r.strokeStyle=l,t===`inherit`&&(r.globalAlpha=.3),r.stroke(),r.globalAlpha=1,r.beginPath(),r.arc(g,g,m,_*Math.PI,2.25%2*Math.PI),r.strokeStyle=c,r.stroke()},[t,e,x]);let{border:S,diameter:C}=v[e],w=C+S*2,T=n!=null,E=(0,h.useId)(),D=T&&typeof n==`string`&&l==null,O=(0,g.jsx)(`span`,{ref:T?void 0:p,role:`status`,"aria-label":D?void 0:l??(typeof n==`string`?n:void 0)??`Loading`,"aria-labelledby":D?E:void 0,"data-testid":T?void 0:d,...T?{}:m,...c(T?``:i(`spinner`,{size:e,shade:t}),o(y.spinner,!T&&r),T?void 0:a,{...T?{}:s,width:w,height:w}),children:(0,g.jsx)(`canvas`,{ref:b,className:`pharoslp1x4z pharos1lliihq pharos1so62im pharos14qxm4i pharosnh0sag pharosa4qsjk pharosak4fu1 pharos1esw782`})});return T?(0,g.jsxs)(`div`,{ref:p,"data-testid":d,...m,...c(i(`spinner`,{size:e,shade:t}),o(y.wrapper,r),a,s),children:[O,typeof n==`string`?(0,g.jsx)(f,{id:E,type:`body`,weight:`bold`,children:n}):n]}):O}var h,g,_,v,y,b=t((()=>{h=e(n(),1),r(),l(),d(),s(),a(),g=p(),_=1.5,v={sm:{diameter:10,border:2},md:{diameter:14,border:3},lg:{diameter:18,border:3},xl:{diameter:28,border:4}},y={wrapper:{k1xSpc:`pharos3nfvp2`,kXwgrk:`pharosdt5ytf`,kGNEyG:`pharos6s0dn4`,kOIVth:`pharos1txdalj`,$$css:!0},spinner:{k1xSpc:`pharoswz0xwf`,kgQiWS:`pharos1ku5rj1`,kVQacm:`pharosb3r6kr`,kXLuUW:`pharosxymvpz`,$$css:!0}},m.displayName=`Spinner`,m.__docgenInfo={description:`An animated loading indicator. Available in three sizes and two color shades.

@example
\`\`\`
<Spinner />
<Spinner size="sm" />
<Spinner size="lg" shade="onMedia" />
<Spinner label="Loading..." />
<Spinner aria-label="Loading data" />
\`\`\``,methods:[],displayName:`Spinner`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLSpanElement>`,elements:[{name:`HTMLSpanElement`}]},description:`Ref forwarded to the root element`},size:{required:!1,tsType:{name:`union`,raw:`keyof typeof SIZES`,elements:[{name:`literal`,value:`sm`},{name:`literal`,value:`md`},{name:`literal`,value:`lg`},{name:`literal`,value:`xl`}]},description:`Spinner size.
- 'sm': 10px diameter
- 'md': 14px diameter
- 'lg': 18px diameter
- 'xl': 36px diameter
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},shade:{required:!1,tsType:{name:`union`,raw:`'default' | 'onMedia' | 'subtle' | 'inherit'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'onMedia'`},{name:`literal`,value:`'subtle'`},{name:`literal`,value:`'inherit'`}]},description:`Color shade.
- 'default': accent color on light backgrounds
- 'onMedia': white on dark/accent backgrounds
- 'subtle': secondary text color, less prominent — for inline use in lists
- 'inherit': inherits the parent's \`currentColor\` (with a translucent
  track) — use inside colored elements like buttons so the ring matches
  the resolved foreground regardless of theme/variant
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}},label:{required:!1,tsType:{name:`ReactNode`},description:`Visible content displayed below the spinner.
Accepts a string or ReactNode for rich content.

When \`label\` is a string, the visible text also provides the accessible
name of the status element (via aria-labelledby, avoiding a duplicate
announcement) unless \`aria-label\` is explicitly set.

@example
\`\`\`
<Spinner label="Loading..." />
<Spinner label={<><strong>Fetching data</strong><br/>This may take a moment</>} aria-label="Fetching data" />
\`\`\``},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for the root element.`}},composes:[`Omit`]}})),x=t((()=>{b()}));export{m as n,b as r,x as t};