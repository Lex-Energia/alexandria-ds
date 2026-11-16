import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{l as r,n as i,t as a,u as o}from"./themeProps-DnL3zvT_.js";import{t as s,x as c}from"./utils-BG_6uO_I.js";import{t as l}from"./jsx-runtime-cM__dR4X.js";function u({title:e,description:t,icon:n,actions:r,headingLevel:a=3,isCompact:s=!1,xstyle:l,className:u,style:m,ref:h,...g}){let _=`h${a}`;return(0,f.jsxs)(`div`,{ref:h,role:`status`,...c(i(`empty-state`,{variant:s?`compact`:null}),o(p.container,s&&p.containerCompact,l),u,m),...g,children:[n!=null&&(0,f.jsx)(`div`,{"aria-hidden":`true`,children:n}),(0,f.jsxs)(`div`,{className:`pharos78zum5 pharosdt5ytf pharos6s0dn4 pharosxc7z9f`,children:[(0,d.createElement)(_,{0:{className:`pharos1ghz6dp pharosjb2p0i pharos18juvz8 pharos2mo6ok pharosf74fhv pharos1tgivj0`},1:{className:`pharos1ghz6dp pharosjb2p0i pharos2mo6ok pharosf74fhv pharos1tgivj0 pharoscr08ib`}}[!!s<<0],e),t!=null&&(0,f.jsx)(`div`,{...{0:{className:`pharos1ghz6dp pharosjb2p0i pharosjm74w1 pharos1sodnla pharosw6l6zx pharosv1l7n4`},1:{className:`pharos1ghz6dp pharosjb2p0i pharos1sodnla pharosw6l6zx pharosv1l7n4 pharos141an7d`}}[!!s<<0],children:t})]}),r!=null&&(0,f.jsx)(`div`,{...{0:{className:`pharos78zum5 pharos1q0g3np pharos6s0dn4 pharos1txdalj pharoscsaf9d`},1:{className:`pharos78zum5 pharos6s0dn4 pharos1txdalj pharoscsaf9d pharosdt5ytf`}}[!!s<<0],children:r})]})}var d,f,p,m=t((()=>{d=e(n(),1),r(),s(),a(),f=l(),p={container:{k1xSpc:`pharos78zum5`,kXwgrk:`pharosdt5ytf`,kGNEyG:`pharos6s0dn4`,kjj79g:`pharosl56j7k`,k9WMMc:`pharos2b8uid`,kOIVth:`pharos18g69wz`,k8WAf4:`pharosmfvnks`,kg3NbH:`pharosm7rs69`,$$css:!0},containerCompact:{kOIVth:`pharos1txdalj`,k8WAf4:`pharos1na6nto`,kg3NbH:`pharos1pzlopt`,$$css:!0}},u.displayName=`EmptyState`,u.__docgenInfo={description:`An empty state placeholder for content areas with no data.
Displays an icon or illustration, title, optional description, and action buttons.

Uses \`role="status"\` to announce content to screen readers.
Styles use Pharos theme tokens via StyleX. Wrap your app in <Theme> to apply a theme.

@example
\`\`\`
<EmptyState
  title="No results found"
  description="Try adjusting your search or filters."
/>
<EmptyState
  icon={<Icon icon={InboxIcon} size="lg" />}
  title="No messages"
  description="You're all caught up!"
  actions={<Button label="Compose" variant="primary" />}
/>
\`\`\``,methods:[],displayName:`EmptyState`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},title:{required:!0,tsType:{name:`string`},description:`The primary message displayed in the empty state.`},description:{required:!1,tsType:{name:`string`},description:`Optional secondary text providing additional context.`},icon:{required:!1,tsType:{name:`ReactNode`},description:`Optional icon or illustration displayed above the title.
Rendered as decorative (aria-hidden="true").`},actions:{required:!1,tsType:{name:`ReactNode`},description:"Optional action buttons displayed below the description.\nLaid out horizontally by default, stacked vertically when `isCompact`."},headingLevel:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4 | 5 | 6`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`},{name:`literal`,value:`5`},{name:`literal`,value:`6`}]},description:`Semantic heading level for the title element.
Controls only the rendered HTML tag (h1–h6) so the title fits the
document outline. This is a semantic change for accessibility and does
not change the visual size of the title, which stays fixed regardless
of level.
@default 3`,defaultValue:{value:`3`,computed:!1}},isCompact:{required:!1,tsType:{name:`boolean`},description:`Use compact variant for constrained spaces with reduced spacing.
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),h=t((()=>{m()}));export{u as n,m as r,h as t};