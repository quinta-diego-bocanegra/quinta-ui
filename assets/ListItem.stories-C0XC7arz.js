import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{F as x}from"./index.es-CyGzB416.js";import{d as g,e as h}from"./index-C8TjWuBm.js";function i({icon:s,title:a,children:p,display:l="col"}){return e.jsxs("div",{className:"basis-16 px-4 grow-0 shrink-0 flex flex-row items-center",children:[s&&e.jsx("div",{className:"basis-16 shrink-0 grow-0 flex items-center justify-start",children:e.jsx("div",{className:"min-h-12 basis-12 grow-0 bg-slate-200 rounded-full flex flex-row items-center justify-center",children:e.jsx(x,{icon:s,size:"lg"})})}),e.jsxs("div",{className:"flex-auto flex "+(l==="col"?"flex-col gap-2":"flex-row justify-between"),children:[e.jsx("p",{className:"font-uncut text-xs text-gray-400 leading-none "+(l=="row"&&"pt-1"),children:a}),p]})]})}const o=({children:s,justify:a="left"})=>e.jsx("p",{className:" text-gray-600 leading-none "+(a==="right"&&"text-right"),children:s});i.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{display:{defaultValue:{value:'"col"',computed:!1},required:!1}}};o.__docgenInfo={description:"",methods:[],displayName:"ListItemValue",props:{justify:{defaultValue:{value:'"left"',computed:!1},required:!1}}};const j={title:"Lists/AttributesList/ListItem",component:i,parameters:{layout:"centered"},argTypes:{display:{control:"radio",options:["horizontal","vertical"],mapping:{horizontal:"row",vertical:"col"}}},tags:["autodocs"]},t={args:{icon:g,title:"Mileage",children:e.jsx(o,{children:"1300"})}},r={args:{icon:h,title:"Maintenance",display:"row",children:e.jsx(o,{justify:"right",children:"05/06"})},render:s=>e.jsx("div",{className:"w-[360px] flex flex-col",children:e.jsx(i,{...s})})};var n,c,d;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    icon: faGauge,
    title: "Mileage",
    children: <ListItemValue>1300</ListItemValue>
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,u,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    icon: faScrewdriverWrench,
    title: "Maintenance",
    display: "row",
    children: <ListItemValue justify="right">05/06</ListItemValue>
  },
  render: args => <div className="w-[360px] flex flex-col"><ListItem {...args} /></div>
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const w=["Default","Row"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Row:r,__namedExportsOrder:w,default:j},Symbol.toStringTag,{value:"Module"}));export{t as D,i as L,r as R,v as a};
