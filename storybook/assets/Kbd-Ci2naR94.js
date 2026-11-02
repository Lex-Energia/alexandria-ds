import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{l as r,n as i,t as a,u as o}from"./themeProps-DnL3zvT_.js";import{t as s,x as c}from"./utils-BG_6uO_I.js";import{t as l}from"./jsx-runtime-cM__dR4X.js";function u(e,t){return e===`mod`?t?`⌘`:`Ctrl`:y[e]??e.toUpperCase()}function d(e,t){return e===`mod`?t?`Command`:`Control`:b[e]??e.toUpperCase()}function f(){return()=>{}}function p(){return!1}function m(){if(typeof navigator>`u`)return!1;let e=`userAgentData`in navigator?navigator.userAgentData:null;return e&&typeof e==`object`&&`platform`in e?/mac/i.test(e.platform??``):/Mac|iPhone|iPad|iPod/.test(navigator.platform??``)}function h({keys:e,ref:t,xstyle:n,className:r,style:a,...s}){let l=(0,g.useSyncExternalStore)(f,m,p),h=e.split(`+`).map(e=>e.trim().toLowerCase()),y=h.map(e=>d(e,l)).join(` + `);return(0,_.jsx)(`span`,{...s,ref:t,role:`img`,"aria-label":y,...c(i(`kbd`),o(v.wrapper,n),r,a),children:h.map(e=>(0,_.jsx)(`kbd`,{"aria-hidden":`true`,className:`pharos3nfvp2 pharos6s0dn4 pharosl56j7k pharos16asifk pharos1grt7ep pharos7a5moj pharosx3sua9 pharos17x4s8c pharoslxy82 pharos1q0q8m5 pharosib2hle pharosv1l7n4 pharos9ynric pharos141an7d pharos1e4wzip pharos1ltkj2j pharos87ps6o`,children:u(e,l)},e))})}var g,_,v,y,b,x=t((()=>{g=e(n(),1),r(),s(),a(),_=l(),v={wrapper:{k1xSpc:`pharos3nfvp2`,kGNEyG:`pharos6s0dn4`,kOIVth:`pharoszye2dw`,kmuXW:`pharos2lah0s`,$$css:!0}},y={ctrl:`⌃`,alt:`⌥`,shift:`⇧`,enter:`↵`,backspace:`⌫`,escape:`Esc`,tab:`⇥`,up:`↑`,down:`↓`,left:`←`,right:`→`,plus:`+`},b={ctrl:`Control`,alt:`Alt`,shift:`Shift`,enter:`Enter`,backspace:`Backspace`,escape:`Escape`,tab:`Tab`,up:`Up arrow`,down:`Down arrow`,left:`Left arrow`,right:`Right arrow`,plus:`Plus`},h.displayName=`Kbd`,h.__docgenInfo={description:`Displays a keyboard shortcut as styled <kbd> elements.

A general-purpose component for rendering keyboard shortcuts
anywhere in the system — tooltips, menus, documentation, etc.

Platform-aware: \`mod\` renders as ⌘ on macOS and Ctrl elsewhere.
SSR-safe — defers platform detection through useSyncExternalStore to avoid
hydration mismatches.

@example
\`\`\`
<Kbd keys="mod+k" />
\`\`\``,methods:[],displayName:`Kbd`,props:{xstyle:{required:!1,tsType:{name:`StyleXStyles`},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLSpanElement>`,elements:[{name:`HTMLSpanElement`}]},description:``},keys:{required:!0,tsType:{name:`string`},description:`Keyboard shortcut string. Use "+" to separate keys.
Special keys: mod (Cmd on Mac), ctrl, alt, shift, enter, backspace, escape.
Use "plus" to render a literal "+" key (e.g. "shift+plus").

@example
\`\`\`
"mod+k"
"mod+shift+p"
"shift+plus"
"enter"
\`\`\``}},composes:[`Omit`]}})),S=t((()=>{x()}));export{h as n,x as r,S as t};