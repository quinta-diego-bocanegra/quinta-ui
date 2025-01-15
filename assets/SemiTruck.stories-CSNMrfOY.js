import{j as t}from"./jsx-runtime-BjgbQsUx.js";import{T as r}from"./ComponenteEje-N2255rPf.js";import{T as R}from"./ComponenteLlanta-YTduRIGw.js";import{C as a}from"./ComponenteTracto-DEE_EIYj.js";import{GoodDepth as l,MediumDepth as I,BadDepth as D,Default as n,UnmountedTire as L,Loading as _,SelectedTire as x}from"./Tire.stories-CO0p48JP.js";import"./index-D2MAbzvX.js";import"./ComponenteUnidad-DVn9ZACI.js";const f={title:"UnitLayout/SemiTruck",component:a,parameters:{layout:"centered"},argTypes:{variant:{control:"select",options:["ThreeAxles","TwoAxles"]},tireVariant:{control:"select",options:Object.keys(R),mapping:{MILIMETRAJE_BUENO:l.args,MILIMETRAJE_MEDIO:I.args,MILIMETRAJE_MALO:D.args,LLANTA_BASE:n.args,LLANTA_NO_MONTADA:L.args,BUSCANDO_LLANTA:_.args,LLANTA_SELECCIONADA:x.args}}},args:{tireVariant:n.args},tags:["autodocs"]},s={args:{},render:({tireVariant:e,...i})=>t.jsx("div",{className:"w-[768px]",children:t.jsx(a,{tires:m.ThreeAxles(e),...i})})},o={args:{variant:"TwoAxles"},render:({tireVariant:e,...i})=>t.jsx("div",{className:"w-[768px]",children:t.jsx(a,{tires:m.TwoAxles(e),...i})})},m={LoadDriveTires:e=>[{position:r.DERECHA_EXTERIOR,...e},{position:r.DERECHA_INTERIOR,...e},{position:r.IZQUIERDA_EXTERIOR,...e},{position:r.IZQUIERDA_INTERIOR,...e}],LoadDirectiontires:e=>[{position:r.DERECHA_EXTERIOR,...e},{position:r.IZQUIERDA_EXTERIOR,...e}],ThreeAxles:function(e){return{STEERING_AXLE:this.LoadDirectiontires(e),FIRST_DRIVE_AXLE:this.LoadDriveTires(e),SECOND_DRIVE_AXLE:this.LoadDriveTires(e),SPARE_TIRE:{...e}}},TwoAxles:function(e){return{STEERING_AXLE:this.LoadDirectiontires(e),DRIVE_AXLE:this.LoadDriveTires(e),SPARE_TIRE:{...e}}}};var T,E,A;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: ({
    tireVariant,
    ...args
  }) => <div className="w-[768px]"><ComponenteTracto tires={RenderTires.ThreeAxles(tireVariant)} {...args} /></div>
}`,...(A=(E=s.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var c,p,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: "TwoAxles"
  },
  render: ({
    tireVariant,
    ...args
  }) => <div className="w-[768px]"><ComponenteTracto tires={RenderTires.TwoAxles(tireVariant)} {...args} /></div>
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const w=["Default","TwoAxles"];export{s as Default,o as TwoAxles,w as __namedExportsOrder,f as default};
