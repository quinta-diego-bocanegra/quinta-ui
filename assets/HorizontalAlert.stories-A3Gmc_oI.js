import{j as r}from"./jsx-runtime-BjgbQsUx.js";import"./index-DLv9xkdh.js";import{F as v}from"./index.es-CyGzB416.js";import{f as k,a as z,b as A,c as E}from"./index-C8TjWuBm.js";import{S as l}from"./ShadowButton-CmEPsIOZ.js";import{f as m}from"./index-B5ZI-g0m.js";import"./index-D2MAbzvX.js";import"./iframe-Cwowb9cZ.js";import"../sb-preview/runtime.js";import"./index-DEBVq0NN.js";import"./index-BIm0odtm.js";import"./index-CHGET4sZ.js";import"./index-DrFu-skq.js";function S({message:e,type:s,children:i,display:c="row"}){return r.jsxs("div",{className:"p-2 flex flex-col justify-center items-center rounded-xl border shadow-md "+B(s),children:[r.jsxs("div",{className:c=="col"?"flex flex-col gap-2 my-2":"flex items-center gap-2",children:[r.jsx(v,{icon:N(s),size:c=="col"&&"xl"}),r.jsx("h5",{className:"text-neutral-900 text-center ",children:e})]}),i&&r.jsx("div",{className:"py-2 basis-full flex gap-4 justify-center items-center",children:i})]})}function B(e){switch(e){case"error":return"bg-gradient-to-b from-red-100 border-slate-50 text-red-400";case"warning":return"bg-gradient-to-b from-orange-100 border-slate-50 text-orange-400"}}function N(e){switch(e){case"error":return z;case"warning":return k}}S.__docgenInfo={description:"",methods:[],displayName:"HorizontalAlert",props:{display:{defaultValue:{value:'"row"',computed:!1},required:!1}}};const G={Title:"Alerts/HorizontalAlert",tags:["autodocs"],parameters:{layout:"centered"},component:S,argTypes:{type:{control:"select",options:["error","warning"]},display:{control:"radio",options:["horizontal","vertical"],mapping:{horizontal:"row",vertical:"col"}}}},a={args:{type:"warning",message:"Precaución, esta acción es permanente"}},t={args:{type:"error",message:"Ocurrio un error, por favor intente de nuevo mas tarde"}},o={args:{...a.args,display:"col"}},n={args:{...o.args,children:r.jsxs(r.Fragment,{children:[r.jsx(l,{onClick:m,icon:A,children:"Cancelar"}),r.jsx(l,{onClick:m,icon:E,type:"submit",iconColor:"text-blue-400",children:"Confirmar"})]})}};var p,d,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "warning",
    message: "Precaución, esta acción es permanente"
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var g,f,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: "error",
    message: "Ocurrio un error, por favor intente de nuevo mas tarde"
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,w,y;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Warning.args,
    display: "col"
  }
}`,...(y=(w=o.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var C,b,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Vertical.args,
    children: <>
                <ShadowButton onClick={fn} icon={faXmark}>Cancelar</ShadowButton>
                <ShadowButton onClick={fn} icon={faCheck} type={"submit"} iconColor={"text-blue-400"}>
                    Confirmar
                </ShadowButton>
            </>
  }
}`,...(j=(b=n.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};const J=["Warning","Error","Vertical","WithChildren"];export{t as Error,o as Vertical,a as Warning,n as WithChildren,J as __namedExportsOrder,G as default};
