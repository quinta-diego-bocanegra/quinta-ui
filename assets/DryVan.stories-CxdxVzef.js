import{j as a}from"./jsx-runtime-BjgbQsUx.js";import{T as i}from"./ComponenteLlanta-YTduRIGw.js";import{C as n}from"./ComponenteCaja-DZXH2Hr_.js";import{GoodDepth as x,MediumDepth as E,BadDepth as L,Default as R,UnmountedTire as g,Loading as I,SelectedTire as h}from"./Tire.stories-CO0p48JP.js";import{T as s}from"./ComponenteEje-N2255rPf.js";import"./index-D2MAbzvX.js";import"./ComponenteUnidad-DVn9ZACI.js";const j={title:"UnitLayout/DryVan",component:n,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["ThreeAxles","TwoAxles"]},tireVariant:{control:"select",options:Object.keys(i),mapping:{MILIMETRAJE_BUENO:x.args,MILIMETRAJE_MEDIO:E.args,MILIMETRAJE_MALO:L.args,LLANTA_BASE:R.args,LLANTA_NO_MONTADA:g.args,BUSCANDO_LLANTA:I.args,LLANTA_SELECCIONADA:h.args}}},args:{tireVariant:i.LLANTA_BASE},tags:["autodocs"]},r={args:{},render:({tireVariant:e,...t})=>a.jsx("div",{className:"w-[768px]",children:a.jsx(n,{tires:m.TwoAxles(e),...t})})},o={args:{variant:"ThreeAxles"},render:({tireVariant:e,...t})=>a.jsx("div",{className:"w-[768px]",children:a.jsx(n,{tires:m.ThreeAxles(e),...t})})},m={LoadTires:e=>[{position:s.DERECHA_EXTERIOR,...e},{position:s.DERECHA_INTERIOR,...e},{position:s.IZQUIERDA_EXTERIOR,...e},{position:s.IZQUIERDA_INTERIOR,...e}],ThreeAxles:function(e){return{FirstAxle:this.LoadTires(e),SecondAxle:this.LoadTires(e),ThirdAxle:this.LoadTires(e),SPARE_TIRE:{...e}}},TwoAxles:function(e){return{FirstAxle:this.LoadTires(e),SecondAxle:this.LoadTires(e),SPARE_TIRE:{...e}}}};var A,T,d;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {},
  render: ({
    tireVariant,
    ...args
  }) => <div className="w-[768px]"><ComponenteCaja tires={RenderTires.TwoAxles(tireVariant)} {...args} /></div>
}`,...(d=(T=r.parameters)==null?void 0:T.docs)==null?void 0:d.source}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: "ThreeAxles"
  },
  render: ({
    tireVariant,
    ...args
  }) => <div className="w-[768px]"><ComponenteCaja tires={RenderTires.ThreeAxles(tireVariant)} {...args} /></div>
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const w=["TwoAxles","ThreeAxles"];export{o as ThreeAxles,r as TwoAxles,w as __namedExportsOrder,j as default};
