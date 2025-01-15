import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{T as i,C as n}from"./ComponenteLlanta-YTduRIGw.js";import{C as R,T as s}from"./ComponenteEje-N2255rPf.js";import"./index-D2MAbzvX.js";const C={title:"UnitLayout/Axle",component:R,parameters:{layout:"centered"},argTypes:{numberOfChildren:{control:{type:"number",min:0,max:4}},variant:{control:"select",options:["Basic","Axle-Differential"]},tireVariant:{control:"select",options:Object.keys(i),mapping:{...i}}},args:{numberOfChildren:4,tireVariant:i.LLANTA_BASE},tags:["autodocs"]},t={args:{},render:({numberOfChildren:o,tireVariant:e,...u})=>r.jsx("div",{className:"w-32",children:r.jsx(R,{...u,children:f(o,e)})})},a={args:{variant:"Axle-Differential"},render:t.render};function f(o,e){switch(o){case 1:return[r.jsx(n,{position:s.DERECHA_EXTERIOR,variant:e})];case 2:return[r.jsx(n,{position:s.DERECHA_EXTERIOR,variant:e}),r.jsx(n,{position:s.IZQUIERDA_EXTERIOR,variant:e})];case 3:return[r.jsx(n,{position:s.DERECHA_EXTERIOR,variant:e}),r.jsx(n,{position:s.DERECHA_INTERIOR,variant:e}),r.jsx(n,{position:s.IZQUIERDA_EXTERIOR,variant:e})];case 4:return[r.jsx(n,{position:s.DERECHA_EXTERIOR,variant:e}),r.jsx(n,{position:s.DERECHA_INTERIOR,variant:e}),r.jsx(n,{position:s.IZQUIERDA_INTERIOR,variant:e}),r.jsx(n,{position:s.IZQUIERDA_EXTERIOR,variant:e})];default:return[]}}var E,p,c;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {},
  render: ({
    numberOfChildren,
    tireVariant,
    ...args
  }) => <div className="w-32">
            <ComponenteEje {...args}>
                {renderChildren(numberOfChildren, tireVariant)}
            </ComponenteEje>
        </div>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: "Axle-Differential"
  },
  render: Default.render
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const D=["Default","WithDifferential"];export{t as Default,a as WithDifferential,D as __namedExportsOrder,C as default};
