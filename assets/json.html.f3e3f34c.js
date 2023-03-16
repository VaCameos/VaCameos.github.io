import{_ as n,o as s,c as a,d as t}from"./app.fbdceb87.js";const e={},p=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>outputs</strong>:{&quot;a&quot;:3,&quot;b&quot;:4,&quot;c&quot;:null}</p><p>**\u6CE8\u610F\uFF1A**\u5BF9\u5176\u4E2D\u7684 <code>undefined</code>\uFF0C<code>function</code> \u5C06\u5728 <code>JSON.stringify</code> \u65F6\u4F1A\u5FFD\u7565\u6389</p><p><code>const obj</code> \u4E2D\u7684 <code>get e () {}</code> \u5E76\u4E0D\u662F\u51FD\u6570\uFF0C\u6B64\u5904\u5E94\u8BE5\u662F\u91CD\u5199\u4E86 <code>obj.e</code> \u7684 <code>get</code> \u65B9\u6CD5\uFF0C\u56E0\u4E3A <code>get</code> \u65B9\u6CD5\u672A\u5B9A\u4E49\u8FD4\u56DE\u503C\uFF0C\u56E0\u6B64\u5728\u6267\u884C <code>JSON.stringify</code> \u65F6\uFF0C\u6267\u884C <code>obj.e</code> \u7684 <code>get</code> \u65B9\u6CD5\uFF0C\u8FD4\u56DE <code>undefined</code>\uFF0C\u56E0\u6B64\u88AB\u5FFD\u7565</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token keyword">get</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token number">666</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>outputs</strong>:{&quot;a&quot;:3,&quot;b&quot;:4,&quot;c&quot;:null,&quot;e&quot;:666}</p>`,6),o=[p];function c(l,u){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","json.html.vue"]]);export{r as default};
