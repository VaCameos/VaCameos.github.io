import{_ as e,o as n,c as i,d as s}from"./app.fbdceb87.js";const a={},t=s(`<h4 id="type\u548Cinterface\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#type\u548Cinterface\u7684\u533A\u522B" aria-hidden="true">#</a> type\u548Cinterface\u7684\u533A\u522B</h4><ul><li>\u53EF\u91CD\u590D\u5B9A\u4E49</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code>interface face1{
	name:string;
	age:number
}
interface face1{
	hobby:string
}

// \u4F1A\u5408\u5E76\u58F0\u660E \u76F8\u5F53\u4E8E
interface face1{
	name:string;
	age:number;
	hobby:string
}

// type\u4E0D\u80FD\u91CD\u590D\u5B9A\u4E49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7EE7\u627F\u4E0D\u540C</li></ul><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">type A</span> <span class="token punctuation">=</span> <span class="token value attr-value">{height:string} &amp; B</span>
interface face1 extends face2 {
	height:string
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u603B\u7ED3\uFF1Ainterface <strong>\u53EF\u4EE5\u91CD\u590D\u58F0\u660E</strong> type\u4E0D\u884C\u3002\u7EE7\u627F\u65B9\u5F0F\u4E0D\u4E00\u6837\uFF0Cinterface\u4F7F\u7528extends\u5B9E\u73B0\uFF0Ctype\u4F7F\u7528\u4EA4\u53C9\u7C7B\u578B\u65B9\u5F0F\uFF0C\u5728\u5BF9\u8C61\u6269\u5C55\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528\u63A5\u53E3\u7EE7\u627F\u8981\u6BD4\u4EA4\u53C9\u7C7B\u578B<strong>\u6027\u80FD\u66F4\u597D</strong>\u3002\u5EFA\u8BAE\u4F7F\u7528interface\u6765<strong>\u63CF\u8FF0\u5BF9\u8C61\u5BF9\u5916\u66B4\u9732\u7684\u63A5\u53E3</strong>\uFF0C\u4F7F\u7528type<strong>\u5C06\u4E00\u7EC4\u7C7B\u578B\u91CD\u547D\u540D</strong></p>`,6),l=[t];function r(d,c){return n(),i("div",null,l)}const u=e(a,[["render",r],["__file","ts\u5E38\u89C1\u9762\u8BD5\u9898.html.vue"]]);export{u as default};
