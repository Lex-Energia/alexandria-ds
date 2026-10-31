import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{l as r,n as i,t as a,u as o}from"./themeProps-DnL3zvT_.js";import{i as s,n as c,r as ee,t as te}from"./LayoutContent-EIGUrS01.js";import{n as l,t as u}from"./LayoutHeader-DyTFLHS6.js";import{p as d,t as f,x as p,y as ne}from"./utils-BG_6uO_I.js";import{b as re,v as m,y as ie}from"./Text-D-FAeb1k.js";import{t as h}from"./jsx-runtime-cM__dR4X.js";import{n as g,t as ae}from"./LayoutPanel-CjT_xmo6.js";import{a as oe,o as _}from"./navItemStyles.stylex-DvLZqooA.js";import{a as se,t as v}from"./i18n-BSb8vusN.js";import{_ as y,b as ce,g as b,v as x,x as S,y as C}from"./TopNav-fqjznDWG.js";import{d as w,u as T}from"./SideNav-D-Y9HW3m.js";import{n as le,t as E}from"./useMediaQuery-DQj-NxJS.js";function D({variant:e=`elevated`,banner:t,children:n,contentPadding:r,"data-testid":a,height:s=`fill`,mobileNav:c,sideNav:l,topNav:f,xstyle:m,className:h,style:g,ref:_,...v}){let y=se(),S=c===!1,C=c!=null&&c!==!1&&typeof c==`object`&&!(0,k.isValidElement)(c)?c:null,w=C?.breakpoint??`md`,E=c!=null&&c!==!1&&((0,k.isValidElement)(c)||typeof c==`string`)?c:null,D=C?.content??null,O=C?.hasToggle!==!1,F=C?.isOpen!==void 0,I=le(w===`none`?`(max-width: 0px)`:`(max-width: ${M[w]}px)`,C?.defaultIsMobile),[ue,de]=(0,k.useState)(!1),L=C?.isOpen??ue,R=(0,k.useCallback)(e=>{F||de(e),C?.onOpenChange?.(e)},[F,C]),z=s===`fill`,B=s===`auto`,V=d(t),H=d(f),U=d(l),W=!S&&(H||U)&&E==null,G=e===`section`,fe=e===`elevated`,K=e===`wash`||e===`elevated`?P.navAreaWash:e===`surface`?P.navAreaSurface:void 0,pe=e===`wash`?P.contentBgWash:e===`elevated`&&U&&!I?P.contentBgTransparent:e===`surface`||e===`elevated`?P.contentBgSurface:void 0,me=K??P.navAreaSurface,q=(0,k.useRef)(null),J=(0,k.useRef)(null);(0,k.useEffect)(()=>{if(!B||!q.current||!J.current)return;let e=q.current,t=J.current,n=()=>{let n=e.getBoundingClientRect().height;t.style.setProperty(`--appshell-header-height`,`${n}px`)};return ie(e,()=>n()),()=>re(e)},[B]);let Y=U&&!I,he=E!=null,ge=W&&D!=null&&I,X=(0,k.useId)(),_e=(0,k.useMemo)(()=>({isMobile:I,isMobileNavOpen:L,mobileNavId:X,toggleMobileNav:()=>W&&R(!L),openMobileNav:()=>W&&R(!0),closeMobileNav:()=>R(!1),isMobileNavEnabled:W,hasAutoToggle:O}),[I,L,X,R,W,O]),ve=U&&O?(0,A.jsx)(T,{value:`drawer-content`,children:l}):null,ye=U?(0,A.jsx)(T,{value:`drawer-content`,children:l}):null,be=H?I&&!S&&E==null?(0,A.jsx)(b,{value:ve,children:(0,A.jsx)(x,{value:`mobile-bar`,children:f})}):f:null,Z=H||V?(0,A.jsxs)(u,{padding:0,hasDivider:G&&H,children:[V&&(0,A.jsx)(`div`,{...o(P.banner,K),children:t}),H&&be]}):void 0,xe=Z==null?void 0:(0,A.jsx)(`div`,{ref:q,...p(i(`app-shell-header`,{variant:e}),o(K,B&&P.headerSticky)),children:Z}),Q=Y?(0,A.jsx)(ae,{padding:0,hasDivider:G,isScrollable:z,...i(`app-shell-sidenav`,{variant:e}),xstyle:[K,B&&me,B&&P.panelAutoFill],children:l}):void 0,Se=Q!=null&&B?(0,A.jsx)(`div`,{className:`pharos2lah0s pharos7giv3 pharos7wzq59 pharosepuwc7 pharos16zugyo pharos78zum5 pharosdt5ytf`,children:Q}):Q,Ce=fe&&Y,$=(0,A.jsx)(te,{padding:r??0,role:`main`,id:N,isScrollable:z,xstyle:pe,children:n}),we=Ce?(0,A.jsxs)(`div`,{className:`pharos1n2onr6 pharos78zum5 pharos98rzlu pharos2lwn1j pharos5yr21d`,children:[(0,A.jsx)(`div`,{...{0:{className:`pharos10l6tqk pharos10a8y8t pharos10xzikg pharos183tx6i pharos47corl`},1:{className:`pharos10l6tqk pharos10a8y8t pharos10xzikg pharos183tx6i pharos47corl pharosqjqw5k`}}[!H<<0]}),$]}):$,Te=!S&&O&&I&&!H&&U?(0,A.jsx)(`div`,{...p(i(`app-shell-header`,{variant:e}),o(K,B&&P.headerSticky)),children:(0,A.jsx)(u,{padding:0,hasDivider:G,children:(0,A.jsxs)(`div`,{className:`pharos78zum5 pharos6s0dn4 pharos1k15mir pharosf314gf`,role:`navigation`,"aria-label":y(`@pharos.appShell.mobileNavigation`),children:[(0,A.jsx)(T,{value:`topbar`,children:l}),(0,A.jsx)(ce,{})]})})}):void 0;return(0,A.jsx)(oe,{value:_e,children:(0,A.jsxs)(`div`,{...v,ref:ne(_,J),"data-testid":a,...p(i(`app-shell`,{variant:e}),o(P.root,e===`wash`?P.variantWash:e===`surface`?P.variantSurface:e===`section`?P.variantSection:P.variantElevated,z?P.rootFill:P.rootAuto,m),h,g),children:[(0,A.jsx)(`a`,{href:`#${N}`,className:`pharos10l6tqk pharos1xrnuwo pharos1i1rx1s pharos1jqxupm pharosjm9jq1 pharos15cytp8 pharost970qd pharosh2mrf5 pharosnjsko4 pharos1cf3d6k pharoskdpibf pharos1y5lnwp pharosb3r6kr pharosomzh7y pharos1hyvwdk pharos1rsz1da pharosuxw1ft pharos1hbpcn8 pharosc342km pharos13vifvy pharos1rw3289 pharos1o0tod pharosodanix pharos10xzikg pharosjse4m1 pharos1q2oy4v pharos1hl2dhg pharos2mo6ok pharosjm74w1`,"data-testid":`skip-to-content`,children:y(`@pharos.appShell.skipToContent`)}),(0,A.jsx)(ee,{height:s,padding:0,header:(0,A.jsxs)(A.Fragment,{children:[xe,Te]}),start:Se,content:we}),he&&E,ge&&D,I&&!S&&E==null&&!D&&(0,A.jsxs)(j,{mode:L?`visible`:`hidden`,children:[U&&!H&&(0,A.jsx)(T,{value:`drawer`,children:l}),H&&(0,A.jsx)(b,{value:ye,children:(0,A.jsx)(x,{value:`drawer`,children:f})})]})]})})}var O,k,A,j,M,N,P,F=t((()=>{O=e(n(),1),k=e(n(),1),r(),s(),l(),g(),c(),S(),w(),C(),y(),_(),f(),E(),m(),a(),v(),A=h(),j=O.Activity===void 0?({children:e})=>(0,A.jsx)(A.Fragment,{children:e}):({mode:e,children:t})=>(0,A.jsx)(O.Activity,{mode:e,children:t}),M={sm:640,md:768,lg:1024,none:0},N=`pharos-app-shell-main`,P={root:{k1xSpc:`pharos78zum5`,kXwgrk:`pharosdt5ytf`,kVAEAm:`pharos1n2onr6`,$$css:!0},variantWash:{kWkggS:`pharos1eiddq6`,$$css:!0},variantSurface:{kWkggS:`pharos10xzikg`,$$css:!0},variantSection:{kWkggS:`pharos10xzikg`,$$css:!0},variantElevated:{kWkggS:`pharos1eiddq6`,$$css:!0},rootFill:{kZKoxP:`pharostdtrs8`,$$css:!0},rootAuto:{kAzted:`pharos1ov3xa9`,$$css:!0},contentBgSurface:{kWkggS:`pharos10xzikg`,$$css:!0},contentBgWash:{kWkggS:`pharos1eiddq6`,$$css:!0},contentBgTransparent:{kWkggS:`pharosjbqb8w`,kHBbk8:`pharosc8icb0`,$$css:!0},navAreaWash:{kWkggS:`pharos1eiddq6`,$$css:!0},navAreaSurface:{kWkggS:`pharos10xzikg`,$$css:!0},banner:{kmuXW:`pharos2lah0s`,$$css:!0},headerSticky:{kVAEAm:`pharos7wzq59`,k87sOh:`pharos13vifvy`,kY2c9j:`pharos1vjfegm`,$$css:!0},panelAutoFill:{kUk6DE:`pharos98rzlu`,kzQI83:null,kmuXW:null,kCS8Yb:null,kVQacm:`pharosysyzu8`,kXHlph:null,kORKVm:null,$$css:!0}},D.displayName=`AppShell`,D.__docgenInfo={description:`Application-level layout shell. Provides the structural frame for an app:
top navigation, side navigation, and main content area.

Slot-based API with \`topNav\`, \`sideNav\`, \`banner\`, and \`children\`.
Supports two height modes (\`fill\` and \`auto\`), responsive side nav
collapse, and mobile overlay with backdrop.

@example
\`\`\`
<AppShell
  topNav={<TopNav label="Navigation" heading={<TopNavHeading heading="My App" />} />}
  sideNav={<SideNav>{navSections}</SideNav>}
  mobileNav={
    <MobileNav isOpen={mobileOpen} onOpenChange={(open) => setMobileOpen(open)} title="My App">
      {navSections}
    </MobileNav>
  }>
  <Content />
</AppShell>
\`\`\``,methods:[],displayName:`AppShell`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},variant:{required:!1,tsType:{name:`AppShellVariantMap`},description:"Navigation background style controlling how nav areas contrast with content.\n- `wash`: Nav uses wash background, no dividers\n- `surface`: Nav uses surface background, no dividers\n- `section`: Dividers between nav and content (classic look)\n- `elevated`: Wash nav with elevated surface content area + border radius\n@default 'elevated'",defaultValue:{value:`'elevated'`,computed:!1}},banner:{required:!1,tsType:{name:`ReactNode`},description:`Optional banner slot for system-wide announcements.
Renders above the top nav and scrolls away with the page in auto mode.`},children:{required:!0,tsType:{name:`ReactNode`},description:"Main content area (rendered as `<main>`)."},contentPadding:{required:!1,tsType:{name:`union`,raw:`0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10`,elements:[{name:`literal`,value:`0`},{name:`literal`,value:`0.5`},{name:`literal`,value:`1`},{name:`literal`,value:`1.5`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`}]},description:"Padding for the main content area using the spacing scale.\nSet based on the dominant content pattern for the page:\n- `4` (16px) — standard padding for forms, settings, text-heavy pages\n- `0` — no padding, for dashboards, maps, tables that need edge-to-edge\nOverride individual sections with `<Section padding={...}>`.\nAccepts numeric spacing steps: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10."},height:{required:!1,tsType:{name:`union`,raw:`'fill' | 'auto'`,elements:[{name:`literal`,value:`'fill'`},{name:`literal`,value:`'auto'`}]},description:"Height behavior:\n- `fill`: Shell fills viewport, content scrolls internally (default)\n- `auto`: Shell grows with content, page scrolls as a whole\n@default 'fill'",defaultValue:{value:`'fill'`,computed:!1}},mobileNav:{required:!1,tsType:{name:`union`,raw:`false | MobileNavConfig | ReactNode`,elements:[{name:`literal`,value:`false`},{name:`MobileNavConfig`},{name:`ReactNode`}]},description:`Mobile navigation configuration.

Accepts three shapes:
- **\`false\`** — Disable mobile nav entirely.
- **\`MobileNavConfig\` object** — Configure auto behavior (toggle, controlled state, custom content).
- **\`ReactNode\`** — Full escape hatch: provide your own \`<MobileNav>\` (you own everything).

When omitted, AppShell automatically generates a mobile drawer with
sideNav content (and TopNav items in the future) below the breakpoint.

@example
\`\`\`
<AppShell topNav={...} sideNav={...} />
<AppShell mobileNav={{ isOpen, onOpenChange }} />
<AppShell mobileNav={{ hasToggle: false }}>
  <MobileNavToggle />
</AppShell>
<AppShell mobileNav={<MobileNav title="Menu">...</MobileNav>} />
<AppShell mobileNav={false} />
\`\`\``},sideNav:{required:!1,tsType:{name:`ReactNode`},description:`Side navigation — typically an SideNav.

Pass \`undefined\` (or omit) when a page has no side navigation.
Do NOT pass a component that renders \`null\` — AppShell treats any
renderable value as "sidenav exists".

**Next.js parallel routes:** Conditionally pass the slot based on
the current route rather than relying on a \`default.tsx\` that
returns \`null\`:

@example
\`\`\`
const SIDEBAR_ROUTES = ['/dashboard', '/settings'];
function Layout({ children, sidebar }) {
  const hasSidebar = SIDEBAR_ROUTES.some(r => pathname.startsWith(r));
  return (
    <AppShell
      sideNav={hasSidebar ? sidebar : undefined}
      mobileNav={hasSidebar ? { breakpoint: 'md' } : false}>
      {children}
    </AppShell>
  );
}
\`\`\``},topNav:{required:!1,tsType:{name:`ReactNode`},description:"Top navigation — typically an TopNav.\nSame contract as `sideNav` — pass `undefined` when there's no top nav."}},composes:[`Omit`]}})),I=t((()=>{F()}));export{D as n,F as r,I as t};