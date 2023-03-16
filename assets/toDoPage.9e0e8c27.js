import{f as p,l as _,j as m,o as e,c as t,q as n,F as o,n as a,b as c,t as l,p as u,_ as h}from"./app.fbdceb87.js";const f={class:"container"},v={class:"title"},x={class:"todo-item"},g={key:0},y={key:1},k=p({__name:"toDoPage",setup(b){const s=_({map:new Map});return m(()=>{s.map={...localStorage},delete s.map["vuepress-reco-color-scheme"],console.log(s)}),(D,C)=>(e(),t("div",f,[n(` <div class="todo-item" v-for="item, idx in list.arr" :class="{ 'is-complete': item.finished }">\r
                <span>{{ item.text }}</span>\r
                <div style="display: flex; align-items:center ;">\r
                    <input type="checkbox" :checked="item.finished" @input="finishItem(item.id)">\r
                    <button class="del" @click="handleDel(item.id)">\xD7</button>\r
                </div>\r
            </div> `),(e(!0),t(o,null,a(s.map,(r,d)=>(e(),t("div",null,[c("span",v,l(d),1),(e(!0),t(o,null,a(JSON.parse(r),i=>(e(),t("div",x,[c("span",{class:u({"is-complete":i.finished})},l(i.text),3),i.finished?(e(),t("span",g," \u2714")):(e(),t("span",y,"\u274C")),n(`  <div style="display: flex; align-items:center ;">\r
                    <input type="checkbox" :checked="item.finished">\r
                </div> `)]))),256))]))),256))]))}});const B=h(k,[["__scopeId","data-v-79b46722"],["__file","toDoPage.vue"]]);export{B as default};
