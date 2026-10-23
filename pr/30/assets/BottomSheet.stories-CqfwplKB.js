import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./Text-BGzfPDry.js";import{t as i}from"./jsx-runtime-cM__dR4X.js";import{t as a}from"./Button-CoTrkm2q.js";import{t as o}from"./Button-a6s1dm9w.js";import{t as s}from"./Divider-9_2Lu6iu.js";import{t as c}from"./Divider-G-7-Y6Ln.js";import{t as l}from"./Heading-CftupGjJ.js";import{i as u,t as d}from"./Stack-DX8oAJuK.js";import{t as f}from"./Section-CI3iP3-s.js";import{t as p}from"./Section-BepwvWvU.js";import{n as m,t as h}from"./Text-CALYNOZi.js";import{t as g}from"./CheckboxInput-zqH_e1ez.js";import{t as _}from"./CheckboxInput-Cg5nQfai.js";import{n as v,t as y}from"./TextInput-Bm4hpfbL.js";import{n as b,t as x}from"./TextArea-D5_DO5k4.js";import{fn as S,t as C}from"./src-CHnt3yY8.js";var w,T,E,D,O,k,A;t((()=>{w=e(n()),C(),o(),c(),m(),p(),d(),h(),y(),x(),_(),T=i(),E={title:`Lab/BottomSheet`,component:S,tags:[`autodocs`],parameters:{layout:`fullscreen`},decorators:[e=>(0,T.jsx)(`div`,{style:{minHeight:480,padding:32},children:(0,T.jsx)(e,{})})]},D={render:()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{label:`Open sheet`,onClick:()=>t(!0)}),(0,T.jsx)(S,{isOpen:e,onOpenChange:t,label:`Filters`,children:(0,T.jsx)(f,{padding:4,children:(0,T.jsxs)(u,{gap:4,children:[(0,T.jsx)(l,{level:3,children:`Filters`}),(0,T.jsx)(s,{}),(0,T.jsxs)(u,{gap:2,children:[(0,T.jsx)(g,{label:`In stock`,value:!1}),(0,T.jsx)(g,{label:`On sale`,value:!1}),(0,T.jsx)(g,{label:`Free shipping`,value:!1})]}),(0,T.jsx)(a,{label:`Apply`,onClick:()=>t(!1)})]})})})]})}},O={render:()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{label:`Open nearby places`,onClick:()=>t(!0)}),(0,T.jsx)(S,{isOpen:e,onOpenChange:t,label:`Nearby places`,height:`tall`,children:(0,T.jsx)(f,{padding:4,children:(0,T.jsxs)(u,{gap:3,children:[(0,T.jsx)(r,{type:`supporting`,color:`secondary`,children:`Drag the handle down or press Escape to dismiss.`}),(0,T.jsx)(s,{}),Array.from({length:12},(e,t)=>(0,T.jsxs)(u,{gap:1,children:[(0,T.jsxs)(r,{type:`label`,children:[`Place `,t+1]}),(0,T.jsxs)(r,{type:`supporting`,color:`secondary`,children:[(.2+t*.3).toFixed(1),` mi away`]})]},t))]})})})]})}},k={render:()=>{let[e,t]=(0,w.useState)(!1);return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(a,{label:`Add a comment`,onClick:()=>t(!0)}),(0,T.jsx)(S,{isOpen:e,onOpenChange:t,label:`Add a comment`,height:`auto`,children:(0,T.jsx)(f,{padding:4,children:(0,T.jsxs)(u,{gap:4,children:[(0,T.jsx)(l,{level:3,children:`Add a comment`}),(0,T.jsx)(r,{type:`supporting`,color:`secondary`,children:`The sheet fits its content up to the tall budget.`}),(0,T.jsx)(s,{}),(0,T.jsx)(v,{label:`Title`,value:``}),(0,T.jsx)(b,{label:`Comment`,rows:4,value:``}),(0,T.jsx)(a,{label:`Post`,onClick:()=>t(!1)})]})})})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Open sheet" onClick={() => setIsOpen(true)} />
        <BottomSheet isOpen={isOpen} onOpenChange={setIsOpen} label="Filters">
          <Section padding={4}>
            <VStack gap={4}>
              <Heading level={3}>Filters</Heading>
              <Divider />
              <VStack gap={2}>
                <CheckboxInput label="In stock" value={false} />
                <CheckboxInput label="On sale" value={false} />
                <CheckboxInput label="Free shipping" value={false} />
              </VStack>
              <Button label="Apply" onClick={() => setIsOpen(false)} />
            </VStack>
          </Section>
        </BottomSheet>
      </>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Open nearby places" onClick={() => setIsOpen(true)} />
        <BottomSheet isOpen={isOpen} onOpenChange={setIsOpen} label="Nearby places" height="tall">
          <Section padding={4}>
            <VStack gap={3}>
              <Text type="supporting" color="secondary">
                Drag the handle down or press Escape to dismiss.
              </Text>
              <Divider />
              {Array.from({
              length: 12
            }, (_, i) => <VStack key={i} gap={1}>
                  <Text type="label">Place {i + 1}</Text>
                  <Text type="supporting" color="secondary">
                    {(0.2 + i * 0.3).toFixed(1)} mi away
                  </Text>
                </VStack>)}
            </VStack>
          </Section>
        </BottomSheet>
      </>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Add a comment" onClick={() => setIsOpen(true)} />
        <BottomSheet isOpen={isOpen} onOpenChange={setIsOpen} label="Add a comment" height="auto">
          <Section padding={4}>
            <VStack gap={4}>
              <Heading level={3}>Add a comment</Heading>
              <Text type="supporting" color="secondary">
                The sheet fits its content up to the tall budget.
              </Text>
              <Divider />
              <TextInput label="Title" value="" />
              <TextArea label="Comment" rows={4} value="" />
              <Button label="Post" onClick={() => setIsOpen(false)} />
            </VStack>
          </Section>
        </BottomSheet>
      </>;
  }
}`,...k.parameters?.docs?.source}}},A=[`Showcase`,`TallSheet`,`AutoHeight`]}))();export{k as AutoHeight,D as Showcase,O as TallSheet,A as __namedExportsOrder,E as default};