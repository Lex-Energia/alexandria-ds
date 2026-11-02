import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{l as r,n as i,t as a,u as o}from"./themeProps-DnL3zvT_.js";import{t as s,x as c}from"./utils-BG_6uO_I.js";import{t as l}from"./jsx-runtime-cM__dR4X.js";import{n as u,t as d}from"./globalIconRegistry-DnbUop5V.js";var f,p,m,h=t((()=>{f=e(n(),1),p=(0,f.createContext)(null),p.displayName=`CollapsibleGroupContext`,m=(0,f.createContext)(null),m.displayName=`CollapsibleGroupPresentationContext`}));function g(e){let{isCollapsible:t,value:n}=e,r=(0,_.use)(p),i=r!=null&&n!=null,a=t===!0?{}:t||null,o=a!=null,[s,c]=(0,_.useState)(()=>i?!0:a?.isOpen===void 0?a?.defaultIsOpen??!0:a.isOpen),l;return l=i&&n!=null?r.isOpen(n):a?.isOpen===void 0?s:a.isOpen,{isEnabled:o,isOpen:l,toggle:()=>{if(i&&n!=null){r.toggle(n);return}let e=!l;a?.isOpen===void 0&&c(e),a?.onOpenChange?.(e)}}}var _,v=t((()=>{_=e(n(),1),h()}));function y({trigger:e,children:t,defaultIsOpen:n,isOpen:r,isDisabled:a=!1,onOpenChange:s,value:l,ref:u,xstyle:f,className:p,style:h,..._}){let{isOpen:v,toggle:y}=g({isCollapsible:r===void 0?{defaultIsOpen:n??!0,onOpenChange:s}:{isOpen:r,onOpenChange:s},value:l}),C=()=>{a||y()},E=(0,b.use)(m),D=E?.hasDividers??!1,O=E?.density??null,k=d(`chevronDown`),A=(0,b.useId)();return(0,x.jsxs)(`div`,{ref:u,...c(i(`collapsible`,{density:O??void 0}),o(S.root,D&&S.divided,f),p,h),..._,children:[(0,x.jsxs)(`button`,{type:`button`,onClick:C,"aria-disabled":a||void 0,"aria-expanded":v,"aria-controls":A,tabIndex:a?-1:void 0,...c(i(`collapsible-trigger`,{density:O??void 0}),o(S.trigger,O!=null&&w[O],a&&S.triggerDisabled)),children:[(0,x.jsx)(`span`,{className:`pharos1b2iylo pharoswgcxoh`,children:e}),(0,x.jsx)(`span`,{...{0:{className:`pharos3nfvp2 pharos6s0dn4 pharosl56j7k pharos2lah0s pharos11xpdln pharosuedmi6 pharoslr8y92 pharosv9yike pharos7p49u4`},1:{className:`pharos3nfvp2 pharos6s0dn4 pharosl56j7k pharos2lah0s pharos11xpdln pharosuedmi6 pharoslr8y92 pharosv9yike pharos19jd1h0`}}[!!v<<0],children:k})]}),(0,x.jsx)(`div`,{id:A,...c(i(`collapsible-content`,{density:O??void 0}),o(S.content,O!=null&&T[O],!v&&S.contentHidden)),children:E==null?t:(0,x.jsx)(m,{value:null,children:t})})]})}var b,x,S,C,w,T,E=t((()=>{b=e(n(),1),r(),v(),h(),u(),s(),a(),x=l(),S={root:{kzqmXN:`pharosh8yej3`,$$css:!0},trigger:{kB7OPa:`pharos9f619`,k1xSpc:`pharos78zum5`,kGNEyG:`pharos6s0dn4`,kjj79g:`pharos1qughib`,kzqmXN:`pharosh8yej3`,kkrTdU:`pharos1ypdohk`,kMv6JI:`pharos9ynric`,kGuDYH:`pharos18juvz8`,k63SB2:`pharos2mo6ok`,kMwMTN:`pharos1tgivj0`,k9WMMc:`pharos1yc453h`,k8WAf4:`pharost970qd`,kI3sdo:`pharos17nn4n9`,kInvED:`pharos1wfwxd8 pharos7s97pk`,$$css:!0},triggerDisabled:{kkrTdU:`pharos1h6gzvc`,kSiTet:`pharosbyyjgo`,$$css:!0},contentHidden:{k1xSpc:`pharos1s85apg`,$$css:!0},content:{kLKAdn:`pharosfsso4q`,kMv6JI:`pharos9ynric`,kGuDYH:`pharosjm74w1`,k63SB2:`pharosxovm9e`,kLWn49:`pharosw6l6zx`,kMwMTN:`pharos1tgivj0`,$$css:!0},divided:{kEafiO:`pharos11xkdxz pharos1g31smg`,kPef9Z:`pharos13fuv20`,kLZC3w:`pharos1pc3f07`,$$css:!0}},C={triggerCompact:{k8WAf4:`pharosu0wf1k`,kLKAdn:null,kGO01o:null,$$css:!0},triggerBalanced:{k8WAf4:`pharosce4md1`,kLKAdn:null,kGO01o:null,$$css:!0},triggerSpacious:{k8WAf4:`pharos8o8v82`,kLKAdn:null,kGO01o:null,$$css:!0},contentCompact:{kGO01o:`pharosy143xn`,$$css:!0},contentBalanced:{kGO01o:`pharos1wesfrj`,$$css:!0},contentSpacious:{kGO01o:`pharosvmdzux`,$$css:!0}},w={compact:C.triggerCompact,balanced:C.triggerBalanced,spacious:C.triggerSpacious},T={compact:C.contentCompact,balanced:C.contentBalanced,spacious:C.contentSpacious},y.displayName=`Collapsible`,y.__docgenInfo={description:`A primitive that makes any content collapsible.

Renders a trigger area (always visible) with a chevron indicator,
and a content area that toggles visibility on click.
Handles its own state by default, or defers to CollapsibleGroup
when a \`value\` prop is provided and a group is present.

Use inside Card for elevated collapsible sections.
Wrap multiple instances in CollapsibleGroup for accordion behavior.

@example
\`\`\`
<Collapsible trigger="Details">
  <Text type="body">Collapsible content</Text>
</Collapsible>
<Card>
  <Collapsible trigger="Settings">
    <SettingsForm />
  </Collapsible>
</Card>
<CollapsibleGroup type="single" defaultValue="general">
  <VStack gap={2}>
    <Card>
      <Collapsible trigger="General" value="general">
        <GeneralSettings />
      </Collapsible>
    </Card>
    <Card>
      <Collapsible trigger="Advanced" value="advanced">
        <AdvancedSettings />
      </Collapsible>
    </Card>
  </VStack>
</CollapsibleGroup>
\`\`\``,methods:[],displayName:`Collapsible`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref forwarded to the root element`},trigger:{required:!0,tsType:{name:`ReactNode`},description:`Content shown in the trigger area (always visible).
Rendered inside a button with aria-expanded and a chevron indicator.`},children:{required:!1,tsType:{name:`ReactNode`},description:`Content that collapses/expands when the trigger is clicked.`},defaultIsOpen:{required:!1,tsType:{name:`boolean`},description:`Default open state for uncontrolled usage.
@default true`},isOpen:{required:!1,tsType:{name:`boolean`},description:`Controlled open state. When provided, the component is fully controlled.`},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the collapsible is disabled. A disabled item can't be toggled —
its trigger is non-interactive and dimmed. Following the system-wide
disabled convention, the trigger uses \`aria-disabled\` (not the native
\`disabled\` attribute) and drops out of the tab order, staying perceivable
to assistive tech. The content stays in whatever open state it was;
disabling doesn't collapse an already-open item.
@default false`,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:`Callback when the open state changes.`},value:{required:!1,tsType:{name:`string`},description:`Unique identifier for this collapsible within an CollapsibleGroup.
Required when using inside a group for coordination.`},"data-testid":{required:!1,tsType:{name:`string`},description:`Test ID for the collapsible element.`}},composes:[`Omit`]}}));function D(e){return e==null?[]:Array.isArray(e)?e:[e]}function O({type:e=`single`,defaultValue:t,value:n,onChange:r,hasDividers:a=!1,density:s,children:l,ref:u,xstyle:d,className:f,style:h,...g}){let _=n!==void 0,[v,y]=(0,k.useState)(()=>D(t)),b=_?D(n):v,x=(0,k.useCallback)(e=>b.includes(e),[b]),S=(0,k.useCallback)(t=>{let n;n=e===`single`?b.includes(t)?[]:[t]:b.includes(t)?b.filter(e=>e!==t):[...b,t],_||y(n),r&&r(e===`single`?n[0]??``:n)},[e,b,_,r]),C=(0,k.useMemo)(()=>({isOpen:x,toggle:S}),[x,S]),w=s??(a?`balanced`:null);return(0,A.jsx)(p,{value:C,children:(0,A.jsx)(m,{value:(0,k.useMemo)(()=>({hasDividers:a,density:w}),[a,w]),children:a?(0,A.jsx)(`div`,{ref:u,...c(i(`collapsible-group`,{density:w??void 0}),o(j.wrapper,d),f,h),...g,children:l}):l})})}var k,A,j,M=t((()=>{k=e(n(),1),r(),h(),s(),a(),A=l(),j={wrapper:{k1xSpc:`pharos78zum5`,kXwgrk:`pharosdt5ytf`,$$css:!0}},O.displayName=`CollapsibleGroup`,O.__docgenInfo={description:`Groups collapsible components with coordinated open/close behavior.
Renders no wrapper DOM unless \`hasDividers\` is set.

In "single" mode (default), opening one item closes the others.
In "multiple" mode, items toggle independently.

@compositionHint Wrap Collapsible instances to coordinate their open/close state.
Each Collapsible needs a \`value\` prop to participate. For FAQ-style lists,
use \`hasDividers\` with bare Collapsible children instead of wrapping each
item in Card.

@example
\`\`\`
<CollapsibleGroup type="single" hasDividers defaultValue="faq1">
  <Collapsible trigger="What is Pharos?" value="faq1">
    Pharos is a design system for building internal tools.
  </Collapsible>
  <Collapsible trigger="How do I start?" value="faq2">
    Install the package and import components.
  </Collapsible>
</CollapsibleGroup>
<CollapsibleGroup type="single" defaultValue="faq1">
  <VStack gap={2}>
    <Card>
      <Collapsible trigger="What is Pharos?" value="faq1">
        Pharos is a design system for building internal tools.
      </Collapsible>
    </Card>
    <Card>
      <Collapsible trigger="How do I start?" value="faq2">
        Install the package and import components.
      </Collapsible>
    </Card>
  </VStack>
</CollapsibleGroup>
\`\`\``,methods:[],displayName:`CollapsibleGroup`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLElement>`,elements:[{name:`HTMLElement`}]},description:``},type:{required:!1,tsType:{name:`union`,raw:`'single' | 'multiple'`,elements:[{name:`literal`,value:`'single'`},{name:`literal`,value:`'multiple'`}]},description:`Whether only one item can be open at a time, or multiple.
@default "single"`,defaultValue:{value:`'single'`,computed:!1}},defaultValue:{required:!1,tsType:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},description:`Default open item(s) — uncontrolled mode.
Use a string for single mode, string[] for multiple mode.`},value:{required:!1,tsType:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},description:`Controlled open item(s).
When provided, the group is fully controlled externally.`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | string[]) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | string[]`,elements:[{name:`string`},{name:`Array`,elements:[{name:`string`}],raw:`string[]`}]},name:`value`}],return:{name:`void`}}},description:`Callback when the open item(s) change.`},hasDividers:{required:!1,tsType:{name:`boolean`},description:`Whether to draw hairline dividers between the group's items — the
accordion row chrome. When set, the group renders a wrapper div (it
otherwise renders no DOM) and items get 'balanced' density unless
\`density\` says otherwise. Pair with bare Collapsible children; Card-wrapped
items provide their own separation.
@default false`,defaultValue:{value:`false`,computed:!1}},density:{required:!1,tsType:{name:`union`,raw:`'compact' | 'balanced' | 'spacious'`,elements:[{name:`literal`,value:`'compact'`},{name:`literal`,value:`'balanced'`},{name:`literal`,value:`'spacious'`}]},description:`Row density controlling trigger and content block padding on the group's
items. Defaults to 'balanced' when dividers are shown; otherwise items
keep their default unpadded look.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Children — any components that support isCollapsible + value.

@compositionHint Wrap Collapsible instances (typically inside Card).
Each Collapsible needs a \`value\` prop to participate in the group.

@example
\`\`\`
<CollapsibleGroup type="single" defaultValue="general">
  <VStack gap={2}>
    <Card>
      <Collapsible trigger="General" value="general">
        <p>General settings content</p>
      </Collapsible>
    </Card>
    <Card>
      <Collapsible trigger="Advanced" value="advanced">
        <p>Advanced settings content</p>
      </Collapsible>
    </Card>
  </VStack>
</CollapsibleGroup>
\`\`\``}},composes:[`Omit`]}})),N=t((()=>{E(),M(),v()}));export{E as a,y as i,O as n,M as r,N as t};