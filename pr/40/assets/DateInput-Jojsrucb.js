import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{l as r,n as i,t as a,u as ee}from"./themeProps-DnL3zvT_.js";import{H as o,M as s,it as c,q as te,t as l,u as ne,x as re,y as ie,z as ae}from"./utils-BG_6uO_I.js";import{t as u}from"./jsx-runtime-cM__dR4X.js";import{n as oe}from"./useTooltip-pdco3WSu.js";import{n as se,t as d}from"./Spinner-CtKShnGG.js";import{n as ce,t as f}from"./VisuallyHidden-B43kKq4B.js";import{n as p,r as le}from"./SizeContext-9C5DZxUg.js";import{n as ue,t as m}from"./Icon-NoujkzOX.js";import{a as de,r as fe,t as h}from"./i18n-NBhNkU8c.js";import{n as pe}from"./usePopover-DdWfois8.js";import{t as g}from"./Popover-MSEk9S7F.js";import{t as _}from"./Tooltip-CZDiQUEQ.js";import{n as me,t as v}from"./useInputStatusIcon-DMHQGKDA.js";import{i as y,n as he,o as ge,t as b}from"./Calendar-BDz7Yj2P.js";import{t as _e}from"./Field-BfguLRna.js";import{a as ve,c as ye,o as be,s as xe,t as x}from"./Field-DrNZ28Fp.js";import{a as S,i as Se,n as C,r as Ce}from"./InputGroupContext-B_mW-57H.js";function w({label:e,isLabelHidden:t=!1,description:n,isOptional:r=!1,isRequired:a=!1,isDisabled:o=!1,disabledMessage:l,value:u,onChange:d,changeAction:f,isLoading:p=!1,min:m,max:h,dateConstraints:g,placeholder:_,size:v,status:y,statusVariant:b=`attached`,labelTooltip:x,hasClear:S=!1,numberOfMonths:C=1,format:w=`date_long`,width:O,xstyle:we,className:Te,style:Ee,ref:De,...Oe}){let k=de(),A=fe(),ke=_??k(`@pharos.dateInput.placeholder`),j=le(v,`md`),M=(0,T.useId)(),N=(0,T.useId)(),P=(0,T.useId)(),F=(0,T.useId)(),I=(0,T.useRef)(null),L=(0,T.useRef)(null),R=(0,T.useRef)(void 0),z=Ce(),[,B]=(0,T.useTransition)(),[V,H]=(0,T.useOptimistic)(u),U=p||V!==u,W=o||U,G=o&&!!l,K=oe({placement:`above`,focusTrigger:`always`,isEnabled:G}),{isDateDisabled:q}=ge({min:m,max:h,dateConstraints:g}),{statusIcon:Ae,describedBy:je}=me({status:y,statusVariant:b,isInGroup:!!z}),{ariaLabelledBy:Me,ariaDescribedBy:Ne}=ne(N,[n?P:null,b!==`tooltip`&&y?.message?F:null,je,G?K.describedBy:null],z),[J,Y]=(0,T.useState)(null),Pe=(0,T.useRef)(u);u!==Pe.current&&(Pe.current=u,u!==R.current&&(R.current=void 0,J!==null&&Y(null)));let Fe=(0,T.useCallback)(e=>typeof w==`function`?w(e):ae(te(e),w,A),[w,A]),Ie=J===null?V&&/^\d{4}-\d{2}-\d{2}$/.test(V)?Fe(V):``:J,X=J===null||!J.trim()||s(J,A)!==null,Z=pe({dialogLabel:k(`@pharos.dateInput.dialogLabel`),closeButtonLabel:k(`@pharos.dateInput.closeCalendar`),onHide:()=>I.current?.focus()}),Le=(0,T.useCallback)(()=>{W||(Z.isOpen?Z.hide():Z.show())},[W,Z]),Re=(0,T.useCallback)(()=>{!W&&!Z.isOpen&&Z.show({skipAutoFocus:!0})},[W,Z]),Q=(0,T.useCallback)(e=>{U||(d?.(e),f&&B(async()=>{H(e),await f(e)}))},[U,d,f,B,H]),ze=(0,T.useCallback)(()=>{Q(void 0),I.current?.focus()},[Q]),Be=(0,T.useCallback)(e=>{Q(e),Y(null),Z.hide()},[Q,Z]),Ve=(0,T.useCallback)(e=>{if(W)return;let t=e.target.value;Y(t);let n=s(t,A);if(n&&c(n)!==u&&!q(n)){let e=c(n);R.current=e,Q(e),L.current?.navigateTo(e)}},[u,Q,q,W,A]),$=(0,T.useCallback)(()=>{if(J===null)return;if(!J.trim()){u!==void 0&&Q(void 0),Y(null);return}let e=s(J,A);if(e&&!q(e)){let t=c(e);t!==u&&Q(t)}Y(null)},[J,u,Q,q,A]),He=(0,T.useCallback)(()=>{$()},[$]),Ue=(0,T.useCallback)(e=>{e.key===`Escape`&&Z.isOpen?(e.preventDefault(),Z.hide()):(e.key===`ArrowDown`||e.altKey&&e.key===`ArrowDown`)&&!Z.isOpen?(e.preventDefault(),W||Z.show({skipAutoFocus:!0})):e.key===`Enter`&&(e.preventDefault(),$())},[Z,$,W]),We=(0,E.jsxs)(`div`,{ref:e=>{Z.triggerRef(e),K.ref(e)},...Oe,...re(i(`date-input`,{size:j,status:y?.type??null}),ee(ye.base,D[j],W&&ye.disabled,y&&ve[y.type],y&&!W&&xe[y.type],y&&be[y.type],z&&Se.inGroup,we),Te,Ee),children:[z&&(0,E.jsx)(ce,{id:N,children:e}),(0,E.jsx)(`button`,{type:`button`,onClick:Le,disabled:W,"aria-label":Z.isOpen?k(`@pharos.dateInput.toggleCalendarClose`):k(`@pharos.dateInput.openCalendar`),...{0:{className:`pharos78zum5 pharos6s0dn4 pharosl56j7k pharos1717udv pharos1ghz6dp pharosc342km pharosng3xce pharosjbqb8w pharos1ypdohk pharosh6dtrn pharos1a2a7pz pharos1p25gnr pharos1y3gkto`},1:{className:`pharos78zum5 pharos6s0dn4 pharosl56j7k pharos1717udv pharos1ghz6dp pharosc342km pharosng3xce pharosjbqb8w pharosh6dtrn pharos1a2a7pz pharos1p25gnr pharos1y3gkto pharos1h6gzvc`}}[!!W<<0],children:(0,E.jsx)(ue,{icon:`calendar`,size:`sm`,color:`secondary`,...i(`date-input-toggle-icon`,{state:Z.isOpen?`expanded`:`collapsed`})})}),(0,E.jsx)(`input`,{ref:ie(De,I),id:M,type:`text`,role:`combobox`,value:Ie,onChange:Ve,onBlur:He,onClick:Re,onKeyDown:Ue,placeholder:ke,disabled:W&&!G,"aria-disabled":G?`true`:void 0,readOnly:G||void 0,"aria-labelledby":Me,"aria-describedby":Ne,"aria-required":a===!0?`true`:void 0,"aria-invalid":y?.type===`error`||!X?`true`:void 0,"aria-busy":U||void 0,"aria-expanded":Z.isOpen,"aria-haspopup":`dialog`,"aria-controls":Z.isOpen?Z.id:void 0,"aria-autocomplete":`none`,autoComplete:`off`,...{0:{className:`pharos1lliihq pharos98rzlu pharoseuugli pharosc342km pharosng3xce pharos1717udv pharos9ynric pharosjm74w1 pharos6pjikd pharosw6l6zx pharos1tgivj0 pharosjbqb8w pharos1a2a7pz pharoseyghm5`},2:{className:`pharos1lliihq pharos98rzlu pharoseuugli pharosc342km pharosng3xce pharos1717udv pharos9ynric pharosjm74w1 pharos6pjikd pharosw6l6zx pharos1tgivj0 pharosjbqb8w pharos1a2a7pz pharoseyghm5 pharos1h6gzvc`},1:{className:`pharos1lliihq pharos98rzlu pharoseuugli pharosc342km pharosng3xce pharos1717udv pharos9ynric pharosjm74w1 pharos6pjikd pharosw6l6zx pharosjbqb8w pharos1a2a7pz pharoseyghm5 pharosv1l7n4`},3:{className:`pharos1lliihq pharos98rzlu pharoseuugli pharosc342km pharosng3xce pharos1717udv pharos9ynric pharosjm74w1 pharos6pjikd pharosw6l6zx pharosjbqb8w pharos1a2a7pz pharoseyghm5 pharos1h6gzvc pharosv1l7n4`}}[!!W<<1|!X<<0]}),(0,E.jsx)(ce,{as:`div`,role:`alert`,"aria-live":`assertive`,children:X?``:`Invalid date`}),S&&u!==void 0&&!W&&(0,E.jsx)(`button`,{type:`button`,onClick:ze,"aria-label":k(`@pharos.dateInput.clear`,{label:e}),className:`pharos78zum5 pharos6s0dn4 pharosl56j7k pharos1717udv pharos1ghz6dp pharosc342km pharosng3xce pharosjbqb8w pharos1ypdohk pharosh6dtrn pharos1a2a7pz pharos1p25gnr pharos1y3gkto`,children:(0,E.jsx)(ue,{icon:`close`,size:`sm`,color:`secondary`,...i(`date-input-clear-icon`)})}),U&&(0,E.jsx)(se,{size:`sm`}),Ae,Z.render((0,E.jsx)(he,{handleRef:L,mode:`single`,value:V,onChange:Be,min:m,max:h,dateConstraints:g,numberOfMonths:C}),{placement:`below`,alignment:`start`}),G&&K.renderTooltip(l)]});return z?We:(0,E.jsx)(_e,{label:e,isLabelHidden:t,description:n,inputID:M,descriptionID:n?P:void 0,isOptional:r,isRequired:a,isDisabled:o,status:y?{type:y.type,message:y.message,messageID:y.message?F:void 0}:void 0,statusVariant:b,labelTooltip:x,width:O,children:We})}var T,E,D,O=t((()=>{T=e(n(),1),r(),x(),m(),f(),C(),S(),p(),d(),b(),y(),v(),g(),_(),l(),o(),E=u(),a(),h(),D={sm:{kZKoxP:`pharos6k0iem`,k7Eaqz:`pharosfb3i0g`,$$css:!0},md:{kZKoxP:`pharos1ueg155`,k7Eaqz:`pharosfb3i0g`,$$css:!0},lg:{kZKoxP:`pharosssyfek`,k7Eaqz:`pharosfb3i0g`,$$css:!0}},w.displayName=`DateInput`,w.__docgenInfo={description:`A date picker component combining a text input with a calendar popover.

@example
\`\`\`
<DateInput
  label="Event date"
  value={date}
  onChange={setDate}
/>
\`\`\``,methods:[],displayName:`DateInput`,props:{ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLInputElement>`,elements:[{name:`HTMLInputElement`}]},description:`Ref forwarded to the root element`},label:{required:!0,tsType:{name:`string`},description:`Label text for the input (required for accessibility).`},isLabelHidden:{required:!1,tsType:{name:`boolean`},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:`false`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text displayed between the label and input.`},isOptional:{required:!1,tsType:{name:`boolean`},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:`false`,computed:!1}},isRequired:{required:!1,tsType:{name:`boolean`},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:`false`,computed:!1}},isDisabled:{required:!1,tsType:{name:`boolean`},description:`Whether the input is disabled.
@default false`,defaultValue:{value:`false`,computed:!1}},disabledMessage:{required:!1,tsType:{name:`string`},description:`Explains why the input is disabled. When set together with
\`isDisabled\`, the input shows a tooltip with this text on hover and
keyboard focus, and the field stays focusable (via \`aria-disabled\`)
so the reason is discoverable by keyboard and assistive technology.
Typing and calendar activation stay blocked.

Use this instead of wrapping a disabled input in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<DateInput
  label="Event date"
  value={date}
  onChange={setDate}
  isDisabled
  disabledMessage="You need the Editor role to change this"
/>
\`\`\``},value:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`The selected date in ISO format (YYYY-MM-DD).`},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: ISODateString | undefined) => void`,signature:{arguments:[{type:{name:`union`,raw:`ISODateString | undefined`,elements:[{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:`undefined`}]},name:`value`}],return:{name:`void`}}},description:`Callback fired when the date changes.
Called with undefined when input is cleared.`},changeAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: ISODateString | undefined) => void | Promise<void>`,signature:{arguments:[{type:{name:`union`,raw:`ISODateString | undefined`,elements:[{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},{name:`undefined`}]},name:`value`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Async action on change. Fires after onChange.`},isLoading:{required:!1,tsType:{name:`boolean`},description:`Whether the input is in a loading state.
@default false`,defaultValue:{value:`false`,computed:!1}},min:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`Minimum selectable date in ISO format.`},max:{required:!1,tsType:{name:`literal`,value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:`Maximum selectable date in ISO format.`},dateConstraints:{required:!1,tsType:{name:`ReadonlyArray`,elements:[{name:`signature`,type:`function`,raw:`(date: Date) => boolean`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`boolean`}}}],raw:`ReadonlyArray<(date: Date) => boolean>`},description:`Custom date constraint functions. Date is disabled if ANY function returns false.`},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder text shown when no date is selected.
@default "Select a date"`},size:{required:!1,tsType:{name:`unknown`},description:`The size of the input.
- 'sm': Compact size (18px height)
- 'md': Default size (26px height)
@default 'md'`},status:{required:!1,tsType:{name:`InputStatus`},description:`Status indicator for the input.
When set, displays a colored border and status icon.
If message is provided, displays below the input.`},statusVariant:{required:!1,tsType:{name:`FieldStatusVariantMap`},description:`How the status message is placed relative to the input.
- 'attached': message overlaps directly below the input (bordered treatment)
- 'detached': message floats below as a separate element with spacing
- 'tooltip': no message box; the status icon becomes a focusable info-tip button that reveals the message on hover, keyboard focus, or tap
@default 'attached'`,defaultValue:{value:`'attached'`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:`string`},description:`Tooltip text to display in an info icon at the end of the label.`},hasClear:{required:!1,tsType:{name:`boolean`},description:`Whether to show a clear button when a date is set.
When clicked, resets the value to undefined and returns focus to the input.
@default false`,defaultValue:{value:`false`,computed:!1}},numberOfMonths:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:`Number of months to display in the calendar popover.
@default 1`,defaultValue:{value:`1`,computed:!1}},format:{required:!1,tsType:{name:`union`,raw:`DateInputFormat | ((value: ISODateString) => string)`,elements:[{name:`Extract`,elements:[{name:`union`,raw:`| 'relative'
| 'auto'
| 'date'
| 'date_long'
| 'date_weekday'
| 'date_time'
| 'time'
| 'system_date'
| 'system_date_time'
| 'system_time'`,elements:[{name:`literal`,value:`'relative'`},{name:`literal`,value:`'auto'`},{name:`literal`,value:`'date'`},{name:`literal`,value:`'date_long'`},{name:`literal`,value:`'date_weekday'`},{name:`literal`,value:`'date_time'`},{name:`literal`,value:`'time'`},{name:`literal`,value:`'system_date'`},{name:`literal`,value:`'system_date_time'`},{name:`literal`,value:`'system_time'`}]},{name:`union`,raw:`'date' | 'date_long' | 'date_weekday' | 'system_date'`,elements:[{name:`literal`,value:`'date'`},{name:`literal`,value:`'date_long'`},{name:`literal`,value:`'date_weekday'`},{name:`literal`,value:`'system_date'`}]}],raw:`Extract<
  TimestampFormat,
  'date' | 'date_long' | 'date_weekday' | 'system_date'
>`},{name:`unknown`}]},description:`How the committed date value is displayed in the text field. Accepts a
named format reused from \`Timestamp\`'s \`format\` vocabulary (so the same
literal renders the same date shape in both components) or a function that
maps the ISO value to a custom display string.

- \`'date_long'\` (default): long-month date, e.g. "March 21, 2026"
- \`'date'\`: short-month date, e.g. "Mar 21, 2026"
- \`'date_weekday'\`: short weekday + date, e.g. "Wed, Mar 21, 2026"
- \`'system_date'\`: ISO 8601 calendar date, e.g. "2026-03-21"
- \`(value: ISODateString) => string\`: fully custom display string

Formatting applies only to the committed value — never to text the user is
actively typing. A custom function's output that \`parseDateInput\` cannot
read back can't be re-committed after an edit; external \`value\` changes
always recompute the display from the ISO value.

@default 'date_long'
@example
\`\`\`
<DateInput label="Ship date" value={date} onChange={setDate} format="date" />
<DateInput
  label="Ship date"
  value={date}
  onChange={setDate}
  format={iso => new Date(iso + 'T00:00').toDateString()}
/>
\`\`\``,defaultValue:{value:`'date_long'`,computed:!1}}},composes:[`Omit`]}})),we=t((()=>{O()}));export{w as n,O as r,we as t};