import{_ as n,o as s,c as a,d as e}from"./app.fbdceb87.js";const p={},t=e(`<h4 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h4><h3 id="\u6DF1\u62F7\u8D1D\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D\u7684\u4F5C\u7528" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D\u7684\u4F5C\u7528</h3><p>\u5728\u8D4B\u503C\u5F15\u7528\u7C7B\u578B\u65F6\uFF0C\u53EA\u4F1A\u8D4B\u503C\u5176\u5730\u5740\uFF0C\u4F8B\u5982\u628A\u5BF9\u8C61b\u8D4B\u7ED9a \u6B64\u65F6a\u548Cb\u6307\u5411\u540C\u4E2A\u5185\u5B58\u7A7A\u95F4\uFF0Ca\u6539\u53D8 b\u4E5F\u4F1A\u6539\u53D8</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;base&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> a <span class="token operator">=</span> b<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token string">&quot;\u6539\u53D8\u524D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: &#39;base&#39; } { name: &#39;base&#39; }</span>

a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;change&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> <span class="token string">&quot;\u6539\u53D8\u540E&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// { name: &#39;change&#39; } { name: &#39;change&#39; }</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6D45\u62F7\u8D1D</h3><p>\u53EA\u80FD\u62F7\u8D1D\u6700\u5916\u5C42 \u5957\u4E24\u5C42\u4F9D\u65E7\u4F1A\u53D7\u5230\u5F71\u54CD \u4F8B\u5982\u6570\u7EC4\u91CC\u7684\u6570\u7EC4 \u5BF9\u8C61\u91CC\u7684\u5BF9\u8C61</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;122&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u8DB3\u7403&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>person <span class="token punctuation">}</span><span class="token punctuation">;</span>

test<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* 
{ name: &#39;test&#39;, hobby: { name: &#39;\u8DB3\u7403&#39; } } 
{ name: &#39;122&#39;, hobby: { name: &#39;\u8DB3\u7403&#39; } }
\u53EF\u89C1\u6700\u5916\u5C42\u4E0D\u4F1A\u53D7\u5F71\u54CD
*/</span>

test<span class="token punctuation">.</span>hobby<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u7BEE\u7403&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> person<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/* 
{ name: &#39;test&#39;, hobby: { name: &#39;\u7BEE\u7403&#39; } }
 { name: &#39;122&#39;, hobby: { name: &#39;\u7BEE\u7403&#39; } }
 \u7B2C\u4E8C\u5C42\u53D7\u5230\u5F71\u54CD
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5229\u7528json" tabindex="-1"><a class="header-anchor" href="#\u5229\u7528json" aria-hidden="true">#</a> \u5229\u7528JSON</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;122&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u8DB3\u7403&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

test<span class="token punctuation">.</span>hobby<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;\u7BEE\u7403&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> test<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">/*
{ name: &#39;122&#39;, hobby: { name: &#39;\u8DB3\u7403&#39; } }
 { name: &#39;122&#39;, hobby: { name: &#39;\u7BEE\u7403&#39; } }
 */</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u89C1\u5B9E\u73B0\u4E86\u6DF1\u62F7\u8D1D \u4F46\u8FD9\u4E2A\u65B9\u6CD5\u6709\u7F3A\u9677</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">NaN</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> newObj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 
{
  a: NaN,
  b: undefined,
  c: 2023-02-23T04:37:41.132Z,
  d: Error
      at Object.&lt;anonymous&gt; (d:\\gitRepository\\blog\\blogs\\\u9762\u8BD5\u9898\\demo\\deepCopy.js:6:6)      
      at Module._compile (node:internal/modules/cjs/loader:1105:14)
      at Module._extensions..js (node:internal/modules/cjs/loader:1159:10)
      at Module.load (node:internal/modules/cjs/loader:981:32)
      at Module._load (node:internal/modules/cjs/loader:827:12)
      at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
      at node:internal/main/run_main_module:17:47,
  e: Infinity
}
{ a: null, c: &#39;2023-02-23T04:37:41.132Z&#39;, d: {}, e: null }
*/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JSON.parse(JSON.stringify())\u62F7\u8D1D\u540E\u7684\u7F3A\u9677\uFF1A</strong></p><ul><li>NaN ===\u300Bnull</li><li>undefined ===\u300B \u7A7A (\u76F4\u63A5\u4E22\u5931\u6539\u5C5E\u6027)</li><li>\u65F6\u95F4\u6233 ===\u300B\u5B57\u7B26\u4E32\u65F6\u95F4\uFF08\u8F6C\u4E3A\u5B57\u7B26\u4E32</li><li>\u9519\u8BEF\u4FE1\u606F ===\u300B \u7A7A\u5BF9\u8C61</li><li>Infinity ===\u300Bnull</li></ul><h3 id="\u9012\u5F52\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u5B9E\u73B0" aria-hidden="true">#</a> \u9012\u5F52\u5B9E\u73B0</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">NaN</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u5316</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5224\u65AD\u662F\u5426\u5177\u6709\u8BE5\u5C5E\u6027</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;object&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u82E5\u4E3A\u5BF9\u8C61\u7C7B\u578B \u9012\u5F52\u62F7\u8D1D</span>
        res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> newObj <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { a: NaN, b: undefined, c: {}, d: {}, e: Infinity }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D1\u73B0\u540C\u6837\u6709\u7F3A\u9677 \u7F3A\u5C11\u5BF9\u590D\u6742\u5BF9\u8C61\u7684\u5904\u7406</p>`,16),o=[t];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","\u624B\u5199\u6DF1\u62F7\u8D1D.html.vue"]]);export{r as default};
