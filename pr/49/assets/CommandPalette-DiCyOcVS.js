import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{l as r,n as i,t as a,u as o}from"./themeProps-DnL3zvT_.js";import{r as s,t as c}from"./LayoutContent-EIGUrS01.js";import{t as l}from"./LayoutHeader-DyTFLHS6.js";import{t as u,x as d,y as ee}from"./utils-BG_6uO_I.js";import{t as f}from"./jsx-runtime-cM__dR4X.js";import{n as p,t as m}from"./Spinner-B7ujMP55.js";import{n as h,t as g}from"./Icon-NoujkzOX.js";import{a as _,t as v}from"./i18n-BSb8vusN.js";import{n as y,t as b}from"./useAnnounce-DCnKX0VL.js";import{n as x,t as S}from"./Kbd-Ci2naR94.js";import{i as te,o as C,s as w,t as T}from"./Dialog-D0Vlg1Hw.js";import{t as ne}from"./LayoutFooter-CNHGG38D.js";import{t as re}from"./Layout-BmO6prmP.js";import{s as ie,t as ae}from"./Selector-DJQyMpbP.js";function E(){return(0,D.use)(O)}var D,O,k=t((()=>{D=e(n(),1),O=(0,D.createContext)(null),O.displayName=`CommandPaletteContext`}));function oe({children:e,label:t,ref:n,xstyle:r,className:a,style:s,...c}){let l=_(),u=t??l(`@pharos.commandPalette.list.label`);return(0,se.jsx)(`div`,{ref:n,id:E()?.listId,role:`listbox`,"aria-label":u,...d(i(`command-palette-list`),o(A.list,r),a,s),...c,children:e})}var se,A,j=t((()=>{r(),u(),k(),a(),v(),se=f(),A={list:{kORKVm:`pharos1odjw0f`,kskxy:`pharosmz0i5r`,kmVPX3:`pharos9epnlk`,kUk6DE:`pharos98rzlu`,k1xSpc:`pharos78zum5`,kXwgrk:`pharosdt5ytf`,kOIVth:`pharos1lsbc85`,$$css:!0}},oe.displayName=`CommandPaletteList`,oe.__docgenInfo={description:`Scrollable results container for the command palette.
Renders as a listbox for ARIA compliance.

When used inside CommandPalette, automatically gets the correct
ID for aria-controls linking with the input.

@compositionHint Place inside CommandPalette, after CommandPaletteInput.
  Contains CommandPaletteItem and CommandPaletteGroup children.

@example
\`\`\`
<CommandPaletteList>
  <CommandPaletteItem value="home" onSelect={goHome}>
    Go Home
  </CommandPaletteItem>
</CommandPaletteList>
\`\`\``,methods:[],displayName:`CommandPaletteList`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Command palette items, groups, empty states, etc.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the listbox.
@default 'Commands'`}},composes:[`Omit`]}}));function M({value:e,onSelect:t,isHighlighted:n,isSelected:r,isDisabled:a=!1,children:s,ref:c,xstyle:l,className:u,style:f,...p}){let m=E(),h=w()?.isInline===!0,g=(0,N.useRef)(null),_=(0,N.useRef)(!1),v=(0,N.useMemo)(()=>m?.selectableItems.findIndex(t=>t.value===e)??-1,[m?.selectableItems,e]),y=n??(m?m.highlightedIndex===v&&v>=0:!1),b=r??(m?m.value===e:!1);(0,N.useEffect)(()=>{let e=h&&!_.current;_.current=!0,!e&&y&&g.current&&g.current.scrollIntoView?.({block:`nearest`})},[y,h]);let x=(0,N.useCallback)(()=>{a||(t?.(e),m&&(m.selectItem(e),m.onClose()))},[a,e,t,m]),S=(0,N.useCallback)(()=>{a||!m||v<0||m.setHighlightedIndex(v)},[a,v,m]);return(0,P.jsx)(`div`,{ref:ee(c,g),id:m&&v>=0?m.getItemId(v):void 0,role:`option`,"aria-selected":b,"aria-disabled":a||void 0,"data-value":e,onClick:x,onMouseEnter:S,...d(i(`command-palette-item`),o(F.item,!a&&F.itemHover,y&&F.itemHighlighted,b&&F.itemSelected,a&&F.itemDisabled,l),u,f),...p,children:s})}var N,P,F,I=t((()=>{N=e(n(),1),r(),u(),k(),C(),a(),P=f(),F={item:{k1xSpc:`pharos78zum5`,kGNEyG:`pharos6s0dn4`,kOIVth:`pharos1txdalj`,kzqmXN:`pharosh8yej3`,kg3NbH:`pharosrrkdod`,k8WAf4:`pharosce4md1`,kaIpWk:`pharosx3sua9`,kMv6JI:`pharos9ynric`,kGuDYH:`pharoscr08ib`,kMwMTN:`pharos1tgivj0`,kWkggS:`pharosjbqb8w`,kQgIW9:`pharos1gs6z28`,kkrTdU:`pharos1ypdohk`,k9WMMc:`pharos1yc453h`,kI3sdo:`pharos1a2a7pz`,kfSwDN:`pharos87ps6o`,$$css:!0},itemHover:{kHE3J0:`pharose9uy6x`,kSReZ0:`pharosyxi2l3`,$$css:!0},itemHighlighted:{kWkggS:`pharos1lmrjuc`,$$css:!0},itemDisabled:{kSiTet:`pharosbyyjgo`,kkrTdU:`pharos1h6gzvc`,$$css:!0},itemSelected:{kWkggS:`pharosgcxg3y`,$$css:!0}},M.displayName=`CommandPaletteItem`,M.__docgenInfo={description:`A selectable item in the command palette.
Accepts arbitrary children for full rendering control.

When used inside CommandPalette, registers with context for
keyboard navigation and selection. Can also be used
standalone with explicit isHighlighted/isSelected props.

@compositionHint Place inside CommandPaletteList or CommandPaletteGroup.

@example
\`\`\`
<CommandPaletteItem value="settings" onSelect={() => navigate('/settings')}>
  Settings
</CommandPaletteItem>
\`\`\``,methods:[],displayName:`CommandPaletteItem`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},value:{required:!0,tsType:{name:`string`},description:`Unique value for identification and selection.`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when this item is selected (via click or Enter).`},isHighlighted:{required:!1,tsType:{name:`boolean`},description:`Whether this item is visually highlighted (keyboard focus).
When omitted inside CommandPalette, derived from context.
@default false`},isSelected:{required:!1,tsType:{name:`boolean`},description:`Whether this item is currently selected (picker mode).
@default false`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the item is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:`Item content. Fully custom — render icons, descriptions, shortcuts, etc.`}},composes:[`Omit`]}}));function L({heading:e,children:t,ref:n,xstyle:r,className:a,style:s,...c}){return(0,R.jsxs)(`div`,{ref:n,role:`group`,"aria-label":e,...d(i(`command-palette-group`),o(z.group,r),a,s),...c,children:[(0,R.jsx)(`div`,{"aria-hidden":`true`,...d(i(`command-palette-group-heading`),{className:`pharosrrkdod pharosu0wf1k pharos9ynric pharos141an7d pharos1ltkj2j pharosv1l7n4 pharos87ps6o`}),children:e}),t]})}var R,z,B=t((()=>{r(),u(),a(),R=f(),z={group:{k1xSpc:`pharos78zum5`,kXwgrk:`pharosdt5ytf`,kOIVth:`pharos1lsbc85`,k8WAf4:`pharosu0wf1k`,$$css:!0}},L.displayName=`CommandPaletteGroup`,L.__docgenInfo={description:`Visual grouping for command palette items with a heading label.

Heading style matches DropdownMenu section headings:
supporting-size (12px), secondary color, no uppercase/letterSpacing.

@compositionHint Place inside CommandPaletteList.
  Contains CommandPaletteItem children.

@example
\`\`\`
<CommandPaletteGroup heading="Navigation">
  <CommandPaletteItem value="home" onSelect={goHome}>
    Home
  </CommandPaletteItem>
</CommandPaletteGroup>
\`\`\``,methods:[],displayName:`CommandPaletteGroup`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element.`},heading:{required:!0,tsType:{name:`string`},description:`Group heading text.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Items within this group.`}},composes:[`Omit`]}}));function V({value:e,onValueChange:t,placeholder:n,label:r,hasAutoFocus:a=!0,endContent:s,onChange:c,onKeyDown:l,ref:u,xstyle:f,...m}){let g=_(),v=n??g(`@pharos.commandPalette.input.placeholder`),y=E(),b=w(),x=(0,H.useRef)(null),S=e??y?.search,te=t??y?.setSearch,C=a&&b?.isInline!==!0;(0,H.useEffect)(()=>{C&&x.current&&requestAnimationFrame(()=>{x.current?.focus()})},[C]);let T=(0,H.useCallback)(e=>{l?.(e),!e.defaultPrevented&&y?.onKeyDown(e)},[y,l]);return(0,U.jsxs)(`div`,{...d(i(`command-palette-input`),o(W.wrapper,f)),children:[(0,U.jsx)(`span`,{className:`pharos78zum5 pharos6s0dn4 pharos2lah0s pharosv1l7n4`,children:(0,U.jsx)(h,{icon:`search`,size:`sm`,color:`inherit`})}),(0,U.jsx)(`input`,{ref:ee(u,x),type:`text`,role:`combobox`,"aria-expanded":y?.isOpen??!0,"aria-autocomplete":`list`,"aria-controls":y?.listId,"aria-activedescendant":y&&y.highlightedIndex>=0?y.getItemId(y.highlightedIndex):void 0,"aria-label":r??v,placeholder:v,value:S,"data-autofocus":C||void 0,onChange:e=>{te?.(e.target.value),c?.(e)},onKeyDown:T,className:`pharos98rzlu pharoseuugli pharos1gs6z28 pharos1a2a7pz pharosjbqb8w pharos1tgivj0 pharos9ynric pharosjm74w1 pharos6pjikd pharosw6l6zx pharos1717udv pharoseyghm5`,...m}),(y?.isBusy||s)&&(0,U.jsxs)(`span`,{className:`pharos78zum5 pharos6s0dn4 pharoszye2dw pharos2lah0s`,children:[y?.isBusy&&(0,U.jsx)(`span`,{className:`pharos78zum5 pharos6s0dn4 pharos2lah0s pharosv1l7n4 pharos1hc1fzr pharos19991ni pharosjd9b36 pharos5h36tt pharos4itv7f`,children:(0,U.jsx)(p,{size:`sm`})}),s]}),` `]})}var H,U,W,G=t((()=>{H=e(n(),1),r(),g(),m(),u(),k(),C(),a(),v(),U=f(),W={wrapper:{k1xSpc:`pharos78zum5`,kGNEyG:`pharos6s0dn4`,kOIVth:`pharos1txdalj`,kg3NbH:`pharos1pzlopt`,k8WAf4:`pharos8o8v82`,kmuXW:`pharos2lah0s`,$$css:!0}},V.displayName=`CommandPaletteInput`,V.__docgenInfo={description:`Search input for the command palette.

Renders a search icon and a text input. Auto-focuses when mounted
so users can start typing immediately.

When used inside CommandPalette, automatically wires to the
context for search state and keyboard navigation (via useCombobox).
Can also be used standalone with explicit value/onValueChange props.

@compositionHint Place as the first child of CommandPalette.

@example
\`\`\`
<CommandPalette isOpen={isOpen} onOpenChange={setIsOpen}>
  <CommandPaletteInput placeholder="Search commands..." />
</CommandPalette>
\`\`\``,methods:[],displayName:`CommandPaletteInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Ref forwarded to the input element (for focus management).`},value:{required:!1,tsType:{name:`string`},description:`The current search value.
When omitted inside CommandPalette, reads from context.`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when the search value changes.
When omitted inside CommandPalette, writes to context.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text for the input.
@default 'Search...'`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the combobox input, announced by screen readers.
Falls back to the placeholder text (\`'Search…'\` by default), since a
placeholder alone is not a reliable accessible name.`},hasAutoFocus:{required:!1,tsType:{name:`boolean`},description:`Whether to auto-focus the input when mounted.
@default true`,defaultValue:{value:`true`,computed:!1}},endContent:{required:!1,tsType:{name:`ReactNode`},description:`Content rendered at the trailing end of the input, after the spinner.
Use for clear buttons, keyboard shortcuts, or other trailing actions.
The spinner (when busy) appears immediately before this content with a 4px gap.`},onChange:{required:!1,tsType:{name:`ReactChangeEventHandler`,raw:`React.ChangeEventHandler<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Native onChange handler for the input element.`}},composes:[`Omit`]}}));function K({children:e,ref:t,xstyle:n,className:r,style:a,...s}){return(0,q.jsx)(`div`,{ref:t,...d(i(`command-palette-footer`),o(J.footer,n),r,a),...s,children:e??(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(`span`,{className:`pharos78zum5 pharos6s0dn4 pharoszye2dw`,children:[(0,q.jsx)(x,{keys:`up`}),(0,q.jsx)(x,{keys:`down`}),`Navigate`]}),(0,q.jsxs)(`span`,{className:`pharos78zum5 pharos6s0dn4 pharoszye2dw`,children:[(0,q.jsx)(x,{keys:`enter`}),`Select`]}),(0,q.jsxs)(`span`,{className:`pharos78zum5 pharos6s0dn4 pharoszye2dw`,children:[(0,q.jsx)(x,{keys:`escape`}),`Close`]})]})})}var q,J,Y=t((()=>{r(),u(),S(),a(),q=f(),J={footer:{k1xSpc:`pharos78zum5`,kGNEyG:`pharos6s0dn4`,kOIVth:`pharos18g69wz`,kg3NbH:`pharos1pzlopt`,k8WAf4:`pharosce4md1`,kmuXW:`pharos2lah0s`,kMv6JI:`pharos9ynric`,kGuDYH:`pharos141an7d`,kLWn49:`pharos1ltkj2j`,kMwMTN:`pharosv1l7n4`,$$css:!0}},K.displayName=`CommandPaletteFooter`,K.__docgenInfo={description:`Footer for the command palette showing keyboard navigation hints.

When no children are provided, renders default hints using Kbd
for arrow keys, Enter to select, and Escape to close.

@compositionHint Pass to CommandPalette's \`footer\` slot.

@example
\`\`\`
<CommandPalette
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  input={<CommandPaletteInput />}
  footer={<CommandPaletteFooter />}>
  <CommandPaletteList>...</CommandPaletteList>
</CommandPalette>
\`\`\``,methods:[],displayName:`CommandPaletteFooter`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the footer element.`},children:{required:!1,tsType:{name:`ReactNode`},description:`Footer content. When provided, renders custom content instead of default hints.
Custom children inherit the footer font treatment (supporting/12px, secondary color).
When omitted, renders default keyboard navigation hints using Kbd.`}},composes:[`Omit`]}}));function X({ref:e,children:t,xstyle:n,className:r,style:a,...s}){return(0,ce.jsx)(`div`,{ref:e,...d(i(`command-palette-empty`),o(le.empty,n),r,a),...s,children:t})}var ce,le,Z=t((()=>{n(),r(),u(),a(),ce=f(),le={empty:{k1xSpc:`pharos78zum5`,kGNEyG:`pharos6s0dn4`,kjj79g:`pharosl56j7k`,k8WAf4:`pharosmfvnks`,kg3NbH:`pharos1pzlopt`,kMv6JI:`pharos9ynric`,kGuDYH:`pharos141an7d`,kLWn49:`pharos1ltkj2j`,kMwMTN:`pharosv1l7n4`,k9WMMc:`pharos2b8uid`,$$css:!0}},X.displayName=`CommandPaletteEmpty`,X.__docgenInfo={description:`Empty state for the command palette list area.

Rendered automatically by CommandPalette in two situations:
- \`emptyBootstrapText\`: no search term and bootstrap() returns nothing
- \`emptySearchText\`: a search query returned no results

Can also be composed manually inside a custom render function.

@example
\`\`\`
<CommandPalette
  emptyBootstrapText={<CommandPaletteEmpty>Start typing to search</CommandPaletteEmpty>}
  emptySearchText={<CommandPaletteEmpty>No results found</CommandPaletteEmpty>}
  searchSource={source}
/>
\`\`\``,methods:[],displayName:`CommandPaletteEmpty`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:`The message or content to display.`}},composes:[`Omit`]}}));function ue(e){let t=e.auxiliaryData;return typeof t?.group==`string`?t.group:void 0}function de(e){if(!e.some(e=>ue(e)!=null))return e.map(e=>({value:e.id,label:e.label}));let t=[],n=new Map,r=[];for(let i of e){let e=ue(i);e==null?r.push(i):(n.has(e)||(t.push(e),n.set(e,[])),n.get(e)?.push(i))}let i=[];for(let e of t)for(let t of n.get(e)??[])i.push({value:t.id,label:t.label});for(let e of r)i.push({value:e.id,label:e.label});return i}function fe({items:e,value:t,renderItem:n}){let r=e=>(0,$.jsx)(M,{value:e.id,children:n?n(e,e.id===t):e.label},e.id);if(!e.some(e=>ue(e)!=null))return(0,$.jsx)($.Fragment,{children:e.map(r)});let i=[],a=new Map,o=[];for(let t of e){let e=ue(t);e==null?o.push(t):(a.has(e)||(i.push(e),a.set(e,[])),a.get(e)?.push(t))}return(0,$.jsxs)($.Fragment,{children:[i.map(e=>(0,$.jsx)(L,{heading:e,children:(a.get(e)??[]).map(r)},e)),o.map(r)]})}function pe({ref:e,isOpen:t,isInline:n,onOpenChange:r,searchSource:i,input:a,footer:o,renderItem:u,emptySearchText:d,emptyBootstrapText:ee,value:f,onValueChange:p,label:m,width:h=640,maxHeight:g=480,...v}){let b=_(),x=m??b(`@pharos.commandPalette.label`),S=d??b(`@pharos.commandPalette.emptySearch`),C=ee??b(`@pharos.commandPalette.emptyBootstrap`),w=(0,Q.useId)(),[T,re]=(0,Q.useState)(``),[ae,E]=(0,Q.useState)(``),[D,k]=(0,Q.useState)([]),[se,A]=(0,Q.useTransition)(),[j,M]=(0,Q.useOptimistic)(T),[N,P]=(0,Q.useOptimistic)(D),F=se,I=(0,Q.useRef)(0),L=y(),R=f??ae,z=(0,Q.useCallback)(e=>{f===void 0&&E(e),p?.(e)},[f,p]),B=(0,Q.useMemo)(()=>de(N),[N]),H=(0,Q.useCallback)(()=>{re(``),k([]),f===void 0&&E(``),i.cancel?.(),L(``),r(!1)},[r,i,f,L]),U=(0,Q.useCallback)(e=>{z(e)},[z]),W=ie({selectableItems:B,value:R,isOpen:!0,onOpen:()=>{},onClose:()=>{},onSelect:e=>{U(e),H()},listboxId:w}),G=(0,Q.useCallback)(e=>{i.cancel?.();let t=++I.current;A(async()=>{let n=e===``;if(n||L(b(`@pharos.commandPalette.loading`)),!n&&D.length>0){let t=e.toLowerCase().trim();P(D.filter(e=>e.label.toLowerCase().includes(t)))}let r=n?i.bootstrap():i.search(e),a=await Promise.resolve(r);if(I.current===t&&(re(e),P(a),k(a),n?L(``):a.length===0?L(b(`@pharos.commandPalette.noResultsFor`,{query:e})):L(b(`@pharos.commandPalette.resultCount`,{count:a.length})),n&&R!=null&&R!==``)){let e=a.findIndex(e=>e.id===R);e>=0&&W.setHighlightedIndex(e)}})},[i,D,A,R,W,P,L,b]),q=(0,Q.useRef)(G);q.current=G,(0,Q.useEffect)(()=>{t&&q.current(``)},[t]);let J=(0,Q.useCallback)(e=>{if(e.key===`Escape`){e.preventDefault(),H();return}if(e.key===`Enter`){if(e.preventDefault(),W.highlightedIndex>=0&&W.highlightedIndex<B.length){let e=B[W.highlightedIndex];e&&!e.disabled&&(U(e.value),H())}return}e.key!==` `&&W.onKeyDown(e)},[W,H,B,U]),Y=(0,Q.useMemo)(()=>({search:j,setSearch:e=>{A(()=>{M(e)}),G(e)},value:R,setValue:z,listId:w,highlightedIndex:W.highlightedIndex,setHighlightedIndex:W.setHighlightedIndex,getItemId:W.getItemId,selectableItems:B,searchResults:N,selectItem:U,onKeyDown:J,onClose:H,isOpen:t,isBusy:F}),[j,M,G,R,z,w,W.highlightedIndex,W.setHighlightedIndex,W.getItemId,B,N,U,J,H,t,F]),ce=T===``&&N.length===0,le=T!==``&&N.length===0,Z;return Z=ce?(0,$.jsx)(X,{children:C}):le?(0,$.jsx)(X,{children:S}):(0,$.jsx)(fe,{items:N,value:R,renderItem:u}),(0,$.jsx)(te,{ref:e,isOpen:t,isInline:n,onOpenChange:e=>{e?r(!0):H()},width:h,maxHeight:g,purpose:`info`,"aria-label":x,...v,children:(0,$.jsx)(O,{value:Y,children:(0,$.jsx)(s,{defaultHasDividers:!0,header:(0,$.jsx)(l,{hasDivider:!0,padding:0,children:a??(0,$.jsx)(V,{})}),content:(0,$.jsx)(c,{padding:0,children:(0,$.jsx)(oe,{children:Z})}),footer:(0,$.jsx)(ne,{hasDivider:!0,padding:0,children:o??(0,$.jsx)(K,{})})})})})}var Q,$,me=t((()=>{Q=e(n(),1),T(),re(),ae(),k(),j(),I(),B(),G(),Y(),Z(),b(),v(),$=f(),pe.displayName=`CommandPalette`,pe.__docgenInfo={description:`Command palette root component.

Uses \`searchSource\` for all search logic — same interface as Typeahead.
For static lists, use \`createStaticSource\` from \`@pharos-ds/core/Typeahead\`.

Keyboard navigation is handled by \`useCombobox\` from Selector,
ensuring consistent arrow key, Home/End, Enter, and Escape behavior
across all combobox-pattern components.

Input and footer are rendered by default — only pass them to replace the defaults.

@compositionHint
  - \`input\` slot: CommandPaletteInput (default)
  - \`footer\` slot: CommandPaletteFooter (default)
  - \`renderItem(item, isSelected)\`: custom per-item content (grouping preserved)

@example
\`\`\`
<CommandPalette
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  searchSource={createStaticSource(commands)}
/>
\`\`\``,methods:[],displayName:`CommandPalette`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDialogElement>`,elements:[{name:`HTMLDialogElement`}]},description:``},isOpen:{required:!0,tsType:{name:`boolean`},description:`Whether the command palette is open.`},isInline:{required:!1,tsType:{name:`boolean`},description:`Renders command palette content inline without modal behavior.
Suppresses input auto-focus and initial highlighted-item auto-scroll.
For documentation previews and showcases only.
@default false`},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:`Called when the command palette visibility changes.`},searchSource:{required:!0,tsType:{name:`SearchSource`,elements:[{name:`T`}],raw:`SearchSource<T>`},description:"Search source providing items. Implements `search(query)` and `bootstrap()`.\nSame interface as Typeahead's searchSource.\nUse `createStaticSource` for simple static lists."},input:{required:!1,tsType:{name:`ReactNode`},description:`The search input slot.
@default <CommandPaletteInput />`},footer:{required:!1,tsType:{name:`ReactNode`},description:`The footer slot.
@default <CommandPaletteFooter />`},renderItem:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: T, isSelected: boolean) => ReactNode`,signature:{arguments:[{type:{name:`T`},name:`item`},{type:{name:`boolean`},name:`isSelected`}],return:{name:`ReactNode`}}},description:"Per-item render function. Receives the item and whether it is currently selected.\nAuto-grouping by `auxiliaryData.group` is preserved.\nWhen omitted, renders each item's `label` text."},emptySearchText:{required:!1,tsType:{name:`ReactNode`},description:`Content shown when a search query returns no results.
@default 'No results'`},emptyBootstrapText:{required:!1,tsType:{name:`ReactNode`},description:`Content shown when there is no search query and bootstrap() returns nothing.
@default 'Type to search'`},value:{required:!1,tsType:{name:`string`},description:`Controlled selected value (for picker mode).`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:`Called when the selected value changes.`},label:{required:!1,tsType:{name:`string`},description:`Accessible label for the command palette dialog.
@default 'Command palette'`},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Width of the command palette dialog.
@default 640`,defaultValue:{value:`640`,computed:!1}},maxHeight:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:`Maximum height of the command palette dialog.
@default 480`,defaultValue:{value:`480`,computed:!1}}},composes:[`Omit`]}})),he=t((()=>{me(),G(),j(),I(),B(),Y(),Z(),k()}));export{Y as a,L as c,K as i,B as l,pe as n,V as o,me as r,G as s,he as t};