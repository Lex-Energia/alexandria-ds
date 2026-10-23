import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";function r({children:e,as:t=`span`,ref:n,...r}){return(0,i.createElement)(t,{ref:n,...r,className:`pharos10l6tqk pharos1i1rx1s pharosjm9jq1 pharoskdpibf pharos1717udv pharosb3r6kr pharoszpqnlu pharosuxw1ft pharosng3xce pharos13vifvy pharos1o0tod pharos47corl pharos87ps6o`},e)}var i,a=t((()=>{i=e(n(),1),r.displayName=`VisuallyHidden`,r.__docgenInfo={description:`Renders its children in the accessibility tree while hiding them visually.

Use for content that assistive technology must perceive but sighted users
should not see: accessible names for icon-only controls, \`aria-live\`
announcement regions, and supplementary screen-reader context.

@example
\`\`\`
<IconButton icon="trash" label="">
  <VisuallyHidden>Delete incident</VisuallyHidden>
</IconButton>
<VisuallyHidden as="div" aria-live="polite">
  {\`Moved \${task} to \${column}\`}
</VisuallyHidden>
\`\`\``,methods:[],displayName:`VisuallyHidden`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLElement>`,elements:[{name:`HTMLElement`}]},description:`Ref forwarded to the rendered element.`},children:{required:!0,tsType:{name:`ReactNode`},description:`Content to expose to assistive technology while hidden from sight.`},as:{required:!1,tsType:{name:`ElementType`},description:"HTML tag to render as. Defaults to `'span'` (inline) for the common\nicon-label case; pass a block element such as `'div'` when wrapping block\ncontent or hosting an `aria-live` region. This is a structural choice, not\na visual one.\n\n@default 'span'",defaultValue:{value:`'span'`,computed:!1}}},composes:[`Omit`]}})),o=t((()=>{a()}));export{r as n,a as r,o as t};