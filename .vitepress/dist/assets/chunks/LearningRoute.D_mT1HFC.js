import{$ as S,ap as L,r as M,ab as r,S as O,U as R,a4 as f,c as t,Z as e,u as _,G as s,a5 as B,a6 as D}from"./framework.BDLhZlrp.js";import{m as v,R as C,D as E,B as N}from"./theme.B4DIv_iF.js";const b=c=>(B("data-v-c2ca119b"),c=c(),D(),c),I={class:"operation-btn"},U=b(()=>f("span",null,"在空白处按住右键拖动浏览！",-1)),V=b(()=>f("div",{id:"map"},null,-1)),P={__name:"LearningRoute",props:{routeData:{type:Object}},setup(c){let u=null,i=null;L(()=>import("./MindElixir.b7sKbHm6.js"),[]).then(a=>{u=a.default,g()}).catch(a=>{});const k=c;let m=M(null);const g=()=>{let a={el:"#map",direction:u.LEFT,draggable:!0,contextMenu:!0,toolBar:!0,nodeMenu:!0,keypress:!0,locale:"zh_CN",overflowHidden:!1,mainLinkStyle:2,mouseSelectionButton:0,contextMenuOption:{focus:!0,link:!0,extend:[{name:"编辑节点",onclick:()=>{v.warning("暂时不可编辑")}}]},before:{insertSibling(n,o){return!1},async addChild(n,o){return await sleep(),!0}}};i=new u(a),i.init(k.routeData)},w=()=>{g()},d=async a=>{try{let n=null;if(a==="js"){const p=`${JSON.stringify(m.value,null,2)};
`;n=new Blob([p],{type:"text/javascript"})}if(a==="png"&&(n=await i.exportPng(!1)),a==="svg"&&(n=await i.exportSvg(!1)),!n)return;const o=URL.createObjectURL(n),l=document.createElement("a");l.href=o,l.download="front-end."+a,l.click(),URL.revokeObjectURL(o)}catch(n){v.error(n)}},h=async a=>{switch(a.key){case"javascript":m.value=i.getData(),d("js");break;case"png":d("png");break;case"svg":d("svg");break}};return(a,n)=>{const o=r("a-button"),l=r("a-menu-item"),p=r("a-menu"),x=r("a-dropdown"),j=r("a-tooltip"),y=r("a-flex");return O(),R("div",null,[f("div",I,[t(y,{gap:"small",wrap:"wrap"},{default:e(()=>[t(o,{onClick:w},{icon:e(()=>[t(_(C))]),default:e(()=>[s(" 刷新数据 ")]),_:1}),t(x,null,{overlay:e(()=>[t(p,{onClick:h},{default:e(()=>[t(l,{key:"javascript"},{default:e(()=>[s(" 导出为JS")]),_:1}),t(l,{key:"png"},{default:e(()=>[s(" 导出为PNG ")]),_:1}),t(l,{key:"svg"},{default:e(()=>[s(" 导出为SVG ")]),_:1})]),_:1})]),default:e(()=>[t(o,null,{icon:e(()=>[t(_(E))]),default:e(()=>[s(" 导出 ")]),_:1})]),_:1}),t(j,{placement:"right",color:"orange"},{title:e(()=>[U]),default:e(()=>[t(o,null,{icon:e(()=>[t(_(N))]),default:e(()=>[s(" 操作提示 ")]),_:1})]),_:1})]),_:1})]),V])}}},F=S(P,[["__scopeId","data-v-c2ca119b"]]);export{F as L};