import{f as h,g as D,o as c,c as r,w as g,v as x,u,b as i,i as T,h as O,_ as m,l as y,j as b,m as k,t as p,a as w,F as I,n as L,p as N,q as S}from"./app.fbdceb87.js";const _=()=>new Date().toLocaleDateString(),A=o=>{let n=localStorage.getItem(o);return JSON.parse(n||"[]")},C=(o,n)=>{let e=JSON.stringify(n);localStorage.setItem(o,e)},f=()=>(console.log(_()),A(_())),V=o=>{C(_(),o)},B=["onSubmit"],M=h({__name:"AddToDo",emits:["addNew"],setup(o,{emit:n}){let e=D("");const l=()=>{!e.value||(n("addNew",{text:e.value,finished:!1,id:e.value}),e.value="")};return(a,t)=>(c(),r("form",{class:"header",onSubmit:O(l,["prevent"])},[g(i("input",{type:"text",placeholder:"Add TODO...","onUpdate:modelValue":t[0]||(t[0]=s=>T(e)?e.value=s:e=s)},null,512),[[x,u(e)]]),i("input",{type:"button",value:"\u2795",onClick:l})],40,B))}});const $=m(M,[["__scopeId","data-v-18716f64"],["__file","AddToDo.vue"]]),E={class:"main"},F={class:"title"},J={class:"container"},j={style:{display:"flex","align-items":"center"}},q=["checked","onInput"],z=["onClick"],R=h({__name:"toDoList",setup(o){const n=t=>{let s=a.arr.findIndex(d=>d.id==t);console.log(s),a.arr.splice(s,1)},e=t=>{a.arr.push(t)},l=t=>{a.arr.forEach(s=>{s.id==t&&(s.finished=!s.finished)})};let a=y({arr:[]});return b(()=>{a.arr=f(),console.log(f())}),k(()=>a.arr,t=>{console.log("change"),V(t)},{deep:!0}),(t,s)=>(c(),r("div",E,[i("div",F,p(u(_)())+" TODO",1),w($,{onAddNew:e}),i("div",J,[(c(!0),r(I,null,L(u(a).arr,(d,U)=>(c(),r("div",{class:N(["todo-item",{"is-complete":d.finished}])},[i("span",null,p(d.text),1),i("div",j,[S(` <button class="action" @click="finishItem(item.id)">{{ !item.finished ? 'finished' : 'restore' }}</button> `),i("input",{type:"checkbox",checked:d.finished,onInput:v=>l(d.id)},null,40,q),i("button",{class:"del",onClick:v=>n(d.id)},"\xD7",8,z)])],2))),256))])]))}});const H=m(R,[["__scopeId","data-v-81b92558"],["__file","toDoList.vue"]]);export{H as default};
