import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{A as n,E as r,M as i,O as a,n as o,t as s}from"./src-53wHlZNe.js";import{i as c,o as l,r as u,t as d}from"./_data-B9LkkYH_.js";var f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{s(),u(),f=t(),p={title:`Charts/Bar`,component:i},m=(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{position:`bottom`}),(0,f.jsx)(n,{position:`left`})]}),h={render:()=>(0,f.jsx)(i,{data:c,xKey:`month`,title:`Monthly Revenue`,series:[r(`revenue`,{color:`#3b82f6`})],tooltip:!0,grid:(0,f.jsx)(a,{}),axes:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{position:`bottom`}),(0,f.jsx)(n,{position:`left`,tickFormat:o()})]}),height:300})},g={render:()=>(0,f.jsx)(i,{data:c,xKey:`month`,title:`Revenue & Costs`,subtitle:`Stacked by category`,series:[r(`revenue`,{color:`#3b82f6`,stack:`totals`,label:`Revenue`}),r(`costs`,{color:`#ef4444`,stack:`totals`,label:`Costs`})],legend:{position:`bottom`,alignment:`center`},grid:(0,f.jsx)(a,{}),axes:m,height:300})},_={render:()=>(0,f.jsx)(i,{data:c,xKey:`month`,title:`Revenue vs Costs`,series:[r(`revenue`,{color:`#3b82f6`,group:`compare`,label:`Revenue`}),r(`costs`,{color:`#ef4444`,group:`compare`,label:`Costs`})],legend:{position:`top`,alignment:`end`},grid:(0,f.jsx)(a,{}),axes:m,height:300})},v={render:()=>(0,f.jsx)(i,{data:d,xKey:`month`,title:`Grouped + stacked`,series:[r(`revenueA`,{color:`#3b82f6`,stack:`a`,group:`cmp`}),r(`costsA`,{color:`#93c5fd`,stack:`a`,group:`cmp`}),r(`revenueB`,{color:`#ef4444`,stack:`b`,group:`cmp`}),r(`costsB`,{color:`#fca5a5`,stack:`b`,group:`cmp`})],grid:(0,f.jsx)(a,{}),axes:m,height:300})},y={render:()=>(0,f.jsx)(i,{data:l,xKey:`month`,title:`Profit / Loss`,series:[r(`profit`,{color:`#3b82f6`})],grid:(0,f.jsx)(a,{}),axes:m,height:300})},b=[{channel:`Instagram`,leads:120},{channel:`Google Ads`,leads:96},{channel:`Referral`,leads:64},{channel:`LinkedIn`,leads:41},{channel:`Events`,leads:18}],x={render:()=>(0,f.jsx)(i,{data:b,xKey:`channel`,orientation:`horizontal`,title:`Leads by channel`,description:`Instagram leads with 120 leads, more than double LinkedIn.`,series:[r(`leads`,{label:`Leads`})],margin:{left:88},tooltip:!0,grid:(0,f.jsx)(a,{}),axes:(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(n,{position:`left`}),(0,f.jsx)(n,{position:`bottom`})]}),dataTable:{xLabel:`Channel`},height:260})},S={render:()=>(0,f.jsx)(i,{data:c,xKey:`month`,"aria-label":`Revenue and costs per month`,description:`Revenue stays above costs every month.`,series:[r(`revenue`,{group:`compare`,label:`Revenue`}),r(`costs`,{group:`compare`,label:`Costs`})],dataTable:{xLabel:`Month`,formatValue:o()},legend:!0,tooltip:!0,grid:(0,f.jsx)(a,{}),axes:m,height:300})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Monthly Revenue" series={[bar('revenue', {
    color: '#3b82f6'
  })]} tooltip grid={<ChartGrid />} axes={<>
          <ChartAxis position="bottom" />
          <ChartAxis position="left" tickFormat={currency()} />
        </>} height={300} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Revenue & Costs" subtitle="Stacked by category" series={[bar('revenue', {
    color: '#3b82f6',
    stack: 'totals',
    label: 'Revenue'
  }), bar('costs', {
    color: '#ef4444',
    stack: 'totals',
    label: 'Costs'
  })]} legend={{
    position: 'bottom',
    alignment: 'center'
  }} grid={<ChartGrid />} axes={axes} height={300} />
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Revenue vs Costs" series={[bar('revenue', {
    color: '#3b82f6',
    group: 'compare',
    label: 'Revenue'
  }), bar('costs', {
    color: '#ef4444',
    group: 'compare',
    label: 'Costs'
  })]} legend={{
    position: 'top',
    alignment: 'end'
  }} grid={<ChartGrid />} axes={axes} height={300} />
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={groupedStackData} xKey="month" title="Grouped + stacked" series={[bar('revenueA', {
    color: '#3b82f6',
    stack: 'a',
    group: 'cmp'
  }), bar('costsA', {
    color: '#93c5fd',
    stack: 'a',
    group: 'cmp'
  }), bar('revenueB', {
    color: '#ef4444',
    stack: 'b',
    group: 'cmp'
  }), bar('costsB', {
    color: '#fca5a5',
    stack: 'b',
    group: 'cmp'
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={profitLossData} xKey="month" title="Profit / Loss" series={[bar('profit', {
    color: '#3b82f6'
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={leadsByChannel} xKey="channel" orientation="horizontal" title="Leads by channel" description="Instagram leads with 120 leads, more than double LinkedIn." series={[bar('leads', {
    label: 'Leads'
  })]} margin={{
    left: 88
  }} tooltip grid={<ChartGrid />} axes={<>
          <ChartAxis position="left" />
          <ChartAxis position="bottom" />
        </>} dataTable={{
    xLabel: 'Channel'
  }} height={260} />
}`,...x.parameters?.docs?.source},description:{story:`Categories on the y-axis, values growing right. Grid follows the value axis.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" aria-label="Revenue and costs per month" description="Revenue stays above costs every month." series={[bar('revenue', {
    group: 'compare',
    label: 'Revenue'
  }), bar('costs', {
    group: 'compare',
    label: 'Costs'
  })]} dataTable={{
    xLabel: 'Month',
    formatValue: currency()
  }} legend tooltip grid={<ChartGrid />} axes={axes} height={300} />
}`,...S.parameters?.docs?.source},description:{story:'Accessible by default: `role="img"` named by `title` (or `aria-label`),\n`description` as the image description, and a visually hidden data table.\nTheme palette colors (no `color`) follow light/dark mode.',...S.parameters?.docs?.description}}},C=[`Simple`,`Stacked`,`Grouped`,`GroupedStacked`,`NegativeValues`,`Horizontal`,`Accessible`]}))();export{S as Accessible,_ as Grouped,v as GroupedStacked,x as Horizontal,y as NegativeValues,h as Simple,g as Stacked,C as __namedExportsOrder,p as default};