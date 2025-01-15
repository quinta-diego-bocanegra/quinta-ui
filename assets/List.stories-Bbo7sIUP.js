import{j as r}from"./jsx-runtime-BjgbQsUx.js";import{L as g,D as h,R as C}from"./ListItem.stories-C0XC7arz.js";import{L,B as j,T as b}from"./ListHeader.stories-DGR1lyAa.js";import"./index-D2MAbzvX.js";import"./index.es-CyGzB416.js";import"./index-DEBVq0NN.js";import"./index-C8TjWuBm.js";function a({children:e}){return r.jsx("div",{className:"px-3 pt-3 pb-1 rounded-xl border-2 border-gray-100 flex flex-col",children:e})}const i=({children:e})=>r.jsx("div",{className:"basis-full grow-0 overflow-auto flex flex-col divide-y",children:e});a.__docgenInfo={description:"",methods:[],displayName:"List"};i.__docgenInfo={description:"",methods:[],displayName:"ListBodyContainer"};const I={title:"Lists/AttributesList/List",component:a,parameters:{layout:"centered"},argTypes:{numberOfChildren:{control:"number"}},args:{numberOfChildren:5},tags:["autodocs"]},s={args:{},render:({numberOfChildren:e,...t})=>r.jsx("div",{className:"w-[640px]",children:r.jsxs(a,{children:[r.jsx(L,{...j.args}),r.jsx(i,{children:f(e,r.jsx(g,{...h.args}))})]})})},n={args:{},render:({numberOfChildren:e,...t})=>r.jsx("div",{className:"w-[640px]",children:r.jsxs(a,{children:[r.jsx(L,{...b.args}),r.jsx(i,{children:f(e,r.jsx(g,{...C.args}))})]})})};function f(e,t){const o=[];for(let d=0;d<e;d++)o.push(t);return o}var c,l,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {},
  render: ({
    numberOfChildren,
    ...args
  }) => <div className="w-[640px]">
      <List>
        <ListHeader {...BasicHeader.args} />
        <ListBodyContainer>
          {renderChildren(numberOfChildren, <ListItem {...Default.args} />)}
        </ListBodyContainer>
      </List>
    </div>
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,x;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: ({
    numberOfChildren,
    ...args
  }) => <div className="w-[640px]">
      <List>
        <ListHeader {...TwoCols.args} />
        <ListBodyContainer>
          {renderChildren(numberOfChildren, <ListItem {...Row.args} />)}
        </ListBodyContainer>
      </List>
    </div>
}`,...(x=(u=n.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const E=["Basic","Extended"];export{s as Basic,n as Extended,E as __namedExportsOrder,I as default};
