import{j as e}from"./jsx-runtime-BjgbQsUx.js";import{C as c,U as g}from"./ComponenteUnidad-DVn9ZACI.js";import{C as t,T as s}from"./ComponenteEje-N2255rPf.js";import{Default as E,WithDifferential as d}from"./Axle.stories-DqbKSR7J.js";import{A as l}from"./ComponenteTracto-DEE_EIYj.js";import{T as m,C as o}from"./ComponenteLlanta-YTduRIGw.js";import{A}from"./ComponenteCaja-DZXH2Hr_.js";import"./index-D2MAbzvX.js";const S={title:"UnitLayout/Unit",component:c,parameters:{layout:"centered"},argTypes:{templateName:{control:"select",options:Object.keys(g)},frame:{control:"select",options:["default","long"]},tireVariant:{control:"select",options:Object.keys(m),mapping:{...m}}},args:{tireVariant:m.LLANTA_BASE},tags:["autodocs"]},a={args:{templateName:"TRACTOCAMION"},render:({tireVariant:r,...n})=>e.jsx("div",{className:"w-[768px]",children:e.jsxs(c,{...n,children:[e.jsx(t,{...E.args,position:l.STEERING_AXLE,children:i(2,r)}),e.jsx(t,{...d.args,position:l.FIRST_DRIVE_AXLE,children:i(4,r)}),e.jsx(t,{...d.args,position:l.SECOND_DRIVE_AXLE,children:i(4,r)})]})})},p={args:{templateName:"CAJA SECA",frame:"long"},render:({tireVariant:r,...n})=>e.jsx("div",{className:"w-[768px]",children:e.jsxs(c,{...n,children:[e.jsx(t,{...E.args,position:A.twoAxles.FirstAxle,children:i(4,r)}),e.jsx(t,{...E.args,position:A.twoAxles.SecondAxle,children:i(4,r)})]})})};function i(r,n){switch(r){case 1:return[e.jsx(o,{position:s.DERECHA_EXTERIOR,variant:n})];case 2:return[e.jsx(o,{position:s.DERECHA_EXTERIOR,variant:n}),e.jsx(o,{position:s.IZQUIERDA_EXTERIOR,variant:n})];case 3:return[e.jsx(o,{position:s.DERECHA_EXTERIOR,variant:n}),e.jsx(o,{position:s.DERECHA_INTERIOR,variant:n}),e.jsx(o,{position:s.IZQUIERDA_EXTERIOR,variant:n})];case 4:return[e.jsx(o,{position:s.DERECHA_EXTERIOR,variant:n}),e.jsx(o,{position:s.DERECHA_INTERIOR,variant:n}),e.jsx(o,{position:s.IZQUIERDA_INTERIOR,variant:n}),e.jsx(o,{position:s.IZQUIERDA_EXTERIOR,variant:n})];default:return[]}}var x,R,T;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    templateName: "TRACTOCAMION"
  },
  render: ({
    tireVariant,
    ...args
  }) => <div className="w-[768px]">
            <ComponenteUnidad {...args}>
                <ComponenteEje {...Default.args} position={AxlePositions.STEERING_AXLE} children={renderTires(2, tireVariant)} />
                <ComponenteEje {...WithDifferential.args} position={AxlePositions.FIRST_DRIVE_AXLE} children={renderTires(4, tireVariant)} />
                <ComponenteEje {...WithDifferential.args} position={AxlePositions.SECOND_DRIVE_AXLE} children={renderTires(4, tireVariant)} />
            </ComponenteUnidad>
        </div>
}`,...(T=(R=a.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var C,I,j;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    templateName: "CAJA SECA",
    frame: "long"
  },
  render: ({
    tireVariant,
    ...args
  }) => <div className="w-[768px]">
            <ComponenteUnidad {...args}>
                <ComponenteEje {...Default.args} position={DryVanAxlePositions.twoAxles.FirstAxle} children={renderTires(4, tireVariant)} />
                <ComponenteEje {...Default.args} position={DryVanAxlePositions.twoAxles.SecondAxle} children={renderTires(4, tireVariant)} />
            </ComponenteUnidad>
        </div>
}`,...(j=(I=p.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const U=["SemiTruck","DryVan"];export{p as DryVan,a as SemiTruck,U as __namedExportsOrder,S as default};
