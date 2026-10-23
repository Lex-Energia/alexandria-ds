import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{c as i,i as a,l as o,n as s,o as c,s as l,t as u}from"./src-DbPyeE2Q.js";import{Sn as d,Yn as f}from"./LexicalOnChangePlugin.prod-tGU3zmE2.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;t((()=>{p=e(n()),u(),l(),d(),m=r(),h={title:`Lab/RichTextEditor`,component:a,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text (required)`},isLabelHidden:{control:`boolean`},description:{control:`text`},placeholder:{control:`text`},isReadOnly:{control:`boolean`},isDisabled:{control:`boolean`},isRequired:{control:`boolean`},isOptional:{control:`boolean`},hasMarkdownShortcuts:{control:`boolean`},hasAutoFocus:{control:`boolean`},maxLength:{control:`number`},size:{control:`select`,options:[`sm`,`md`,`lg`]}}},g={args:{label:`Notes`,placeholder:`Write something…`}},_={args:{label:`Release notes`,description:`Supports **bold**, _italic_, lists, quotes and links.`,placeholder:`Describe what changed…`}},v={args:{label:`Summary`,isRequired:!0,placeholder:`Required field`}},y={args:{label:`Bio`,maxLength:80,description:`A character counter appears below the editor when maxLength is set.`,placeholder:`Type past 80 characters to see the counter turn red…`}},b={args:{label:`Comment`,description:"Restricted markdown: only `*bold*`, `_italic_` and `- ` unordered lists (no headings, quotes or code).",placeholder:`Try typing "# " — it will not become a heading…`,transformers:[c,i,o]}},x={args:{label:`Notes`,placeholder:`Write something…`,status:{type:`error`,message:`This field is required.`}}},S={args:{label:`Notes`,isReadOnly:!0}},C=JSON.stringify({root:{children:[{children:[{detail:0,format:0,mode:`normal`,style:``,text:`The quick brown fox jumps over the lazy dog.`,type:`text`,version:1}],direction:`ltr`,format:``,indent:0,type:`paragraph`,version:1}],direction:`ltr`,format:``,indent:0,type:`root`,version:1}}),w={args:{label:`Notes`,defaultValue:C}},T={render:()=>{let[e,t]=(0,p.useState)(C);return(0,m.jsxs)(`div`,{style:{display:`grid`,gap:24,maxWidth:560},children:[(0,m.jsx)(a,{label:`Editor`,defaultValue:C,placeholder:`Type here…`,onChange:e=>t(JSON.stringify(e.toJSON()))}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{style:{fontWeight:600,marginBottom:8},children:`RichTextView (read-only render of the same content)`}),(0,m.jsx)(s,{value:e})]})]})}},E={render:()=>{let e=(0,p.useRef)(null),[t,n]=(0,p.useState)(`(nothing read yet)`);return(0,m.jsxs)(`div`,{style:{display:`grid`,gap:16,maxWidth:560},children:[(0,m.jsx)(a,{ref:e,label:`Editor with imperative ref`,defaultValue:C,placeholder:`Type here, then use the buttons below…`}),(0,m.jsxs)(`div`,{style:{display:`flex`,gap:8,flexWrap:`wrap`},children:[(0,m.jsx)(`button`,{type:`button`,onClick:()=>e.current?.focus(),children:`focus()`}),(0,m.jsx)(`button`,{type:`button`,onClick:()=>e.current?.clear(),children:`clear()`}),(0,m.jsx)(`button`,{type:`button`,onClick:()=>{let t=(e.current?.getEditorState())?.read(()=>f().getTextContent());n(`getEditorState() text content: ${JSON.stringify(t)}`)},children:`getEditorState()`}),(0,m.jsx)(`button`,{type:`button`,onClick:()=>{let t=e.current?.getMarkdown();n(`getMarkdown():\n${t}`)},children:`getMarkdown()`}),(0,m.jsx)(`button`,{type:`button`,onClick:()=>{let t=e.current?.getEditor();n(`getEditor() -> ${t?`LexicalEditor instance ✓`:`null`}`)},children:`getEditor()`})]}),(0,m.jsx)(`pre`,{style:{background:`#f5f5f5`,padding:12,borderRadius:6,fontSize:13,whiteSpace:`pre-wrap`},children:t})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    placeholder: 'Write something…'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Release notes',
    description: 'Supports **bold**, _italic_, lists, quotes and links.',
    placeholder: 'Describe what changed…'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Summary',
    isRequired: true,
    placeholder: 'Required field'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bio',
    maxLength: 80,
    description: 'A character counter appears below the editor when maxLength is set.',
    placeholder: 'Type past 80 characters to see the counter turn red…'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Comment',
    description: 'Restricted markdown: only \`*bold*\`, \`_italic_\` and \`- \` unordered lists (no headings, quotes or code).',
    placeholder: 'Try typing "# " — it will not become a heading…',
    transformers: [BOLD_STAR, ITALIC_STAR, UNORDERED_LIST]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    placeholder: 'Write something…',
    status: {
      type: 'error',
      message: 'This field is required.'
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    isReadOnly: true
  }
}`,...S.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Notes',
    defaultValue: SEED
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [json, setJson] = useState<string>(SEED);
    return <div style={{
      display: 'grid',
      gap: 24,
      maxWidth: 560
    }}>
        <RichTextEditor label="Editor" defaultValue={SEED} placeholder="Type here…" onChange={(state: EditorState) => setJson(JSON.stringify(state.toJSON()))} />
        <div>
          <div style={{
          fontWeight: 600,
          marginBottom: 8
        }}>
            RichTextView (read-only render of the same content)
          </div>
          <RichTextView value={json} />
        </div>
      </div>;
  }
}`,...T.parameters?.docs?.source},description:{story:`Serialize on change and render the same content read-only with RichTextView.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const ref = useRef<RichTextEditorRef>(null);
    const [readout, setReadout] = useState<string>('(nothing read yet)');
    return <div style={{
      display: 'grid',
      gap: 16,
      maxWidth: 560
    }}>
        <RichTextEditor ref={ref} label="Editor with imperative ref" defaultValue={SEED} placeholder="Type here, then use the buttons below…" />
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <button type="button" onClick={() => ref.current?.focus()}>
            focus()
          </button>
          <button type="button" onClick={() => ref.current?.clear()}>
            clear()
          </button>
          <button type="button" onClick={() => {
          const state = ref.current?.getEditorState();
          const text = state?.read(() => $getRoot().getTextContent());
          setReadout(\`getEditorState() text content: \${JSON.stringify(text)}\`);
        }}>
            getEditorState()
          </button>
          <button type="button" onClick={() => {
          const md = ref.current?.getMarkdown();
          setReadout(\`getMarkdown():\\n\${md}\`);
        }}>
            getMarkdown()
          </button>
          <button type="button" onClick={() => {
          const editor = ref.current?.getEditor();
          setReadout(\`getEditor() -> \${editor ? 'LexicalEditor instance ✓' : 'null'}\`);
        }}>
            getEditor()
          </button>
        </div>
        <pre style={{
        background: '#f5f5f5',
        padding: 12,
        borderRadius: 6,
        fontSize: 13,
        whiteSpace: 'pre-wrap'
      }}>
          {readout}
        </pre>
      </div>;
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithDescription`,`Required`,`WithCharacterLimit`,`CustomTransformers`,`ErrorStatus`,`ReadOnly`,`WithInitialValue`,`ControlledPersistence`,`ImperativeRef`]}))();export{T as ControlledPersistence,b as CustomTransformers,g as Default,x as ErrorStatus,E as ImperativeRef,S as ReadOnly,v as Required,y as WithCharacterLimit,_ as WithDescription,w as WithInitialValue,D as __namedExportsOrder,h as default};