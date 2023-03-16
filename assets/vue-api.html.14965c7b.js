import{_ as n,o as s,c as a,d as t}from"./app.fbdceb87.js";const p={},e=t(`<h4 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> $set</h4><p><code>this.$set(target,key,value)</code></p><ul><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4FEE\u6539\u7684\u5BF9\u8C61</li><li>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u8981\u4FEE\u6539\u7684key</li><li>\u7B2C\u4E09\u4E2A\u662F\u8981\u4FEE\u6539\u7684\u503C</li></ul><p>\u6709\u6CA1\u6709\u6570\u636E\u4FEE\u6539\u4E86\u89C6\u56FE\u6CA1\u6709\u4FEE\u6539\u7684\u60C5\u51B5\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">btn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">&#39;xxx&#39;</span> <span class="token comment">// \u6B64\u65F6\u6570\u636E\u66F4\u6539\u4E86\u4F46\u89C6\u56FE\u4E0D\u4F1A\u6539</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">,</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;xxx&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> $nextTick</h4><p>$nextTick \u8FD4\u56DE\u7684\u51FD\u6570\u662F\u4E00\u4E2A\u5F02\u6B65\u7684</p><p>\u5927\u81F4\u539F\u7406</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u529F\u80FD\uFF1A\u83B7\u53D6\u66F4\u65B0\u540E\u7684dom</p><h4 id="refs" tabindex="-1"><a class="header-anchor" href="#refs" aria-hidden="true">#</a> $refs</h4><p>\u83B7\u53D6dom</p><h4 id="data" tabindex="-1"><a class="header-anchor" href="#data" aria-hidden="true">#</a> $data</h4><p>\u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6data\u6570\u636E\u7684</p><h4 id="children" tabindex="-1"><a class="header-anchor" href="#children" aria-hidden="true">#</a> $children</h4><p>\u83B7\u53D6\u5F53\u524D\u7EC4\u4EF6\u7684\u6240\u6709\u5B50\u7EC4\u4EF6</p><h4 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> $root</h4><p>\u627E\u5230\u6839\u7EC4\u4EF6</p><h4 id="data\u5B9A\u4E49\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#data\u5B9A\u4E49\u6570\u636E" aria-hidden="true">#</a> data\u5B9A\u4E49\u6570\u636E</h4><p>\u6570\u636E\u5B9A\u4E49\u5728data\u7684return\u5185\u548Creturn\u5916\u7684\u533A\u522B\uFF1A</p><ul><li>return\u5916\uFF1A\u5355\u7EAF\u4FEE\u6539\u8FD9\u4E2A\u6570\u636E\u662F\u4E0D\u53EF\u4FEE\u6539\u7684\uFF0C\u56E0\u4E3A\u6CA1\u6709get/set</li><li>return\u5185\uFF1A\u53EF\u4FEE\u6539</li></ul><p>\u82E5</p><h4 id="data\u4E3A\u4EC0\u4E48\u662F\u4E00\u4E2A\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#data\u4E3A\u4EC0\u4E48\u662F\u4E00\u4E2A\u51FD\u6570" aria-hidden="true">#</a> data\u4E3A\u4EC0\u4E48\u662F\u4E00\u4E2A\u51FD\u6570</h4><ul><li>data\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD9\u6837\u6BCF\u6B21\u590D\u7528\u4E00\u6B21\u7EC4\u4EF6\uFF0C\u5C31\u4F1A\u8FD4\u56DE\u4E00\u4EFD\u65B0\u7684data \uFF0C\uFF08\u76F8\u5F53\u4E8E\u6BCF\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u521B\u5EFA\u79C1\u6709\u7A7A\u95F4\uFF0C\u5404\u81EA\u7EF4\u62A4\u81EA\u5DF1\u7684\u6570\u636E</li><li>object\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u4FDD\u5B58\u7684\u662F\u5185\u5B58\u5730\u5740\uFF0Cdata\u5199\u6210\u5BF9\u8C61\u5F62\u5F0F\uFF0C\u5C31\u4F7F\u5F97\u6240\u6709\u7EC4\u4EF6\u5B9E\u4F8B\u5171\u7528\u4E00\u4EFDdata\uFF0C\u4F8B\u5982\u4E00\u4E2A\u7EC4\u4EF6\u88AB\u590D\u75283\u6B21 \uFF0C\u5F53\u67D0\u4E00\u5904\u590D\u7528\u7684\u5730\u65B9\u7EC4\u4EF6\u5185data\u6570\u636E\u88AB\u6539\u53D8\u65F6\u5C31\u4F1A\u5F71\u54CD\u5230\u5176\u4ED6\u5730\u65B9</li></ul><h4 id="computed" tabindex="-1"><a class="header-anchor" href="#computed" aria-hidden="true">#</a> computed</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token string">&#39;21&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// 1 \u4FEE\u6539\u4F1A\u62A5\u9519 has no setter</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">str</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> test<span class="token operator">+</span><span class="token string">&#39;1&#39;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2 \u53EF\u4EE5\u5B8C\u6210\u4FEE\u6539</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    str<span class="token punctuation">{</span>
        <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> test<span class="token operator">+</span><span class="token string">&#39;1&#39;</span>
        <span class="token punctuation">}</span> <span class="token punctuation">,</span>
        <span class="token function">set</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
             <span class="token keyword">this</span><span class="token punctuation">.</span>test <span class="token operator">=</span> val
            <span class="token comment">// \u89E6\u53D1set\u540E\u89E6\u53D1get</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">this</span><span class="token punctuation">.</span>changeStr <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>computed\u8BA1\u7B97\u5C5E\u6027\u7684\u7ED3\u679C\u503C\uFF0C\u53EF\u4EE5\u4FEE\u6539\u5417\uFF1F</p><p>\u7B54\uFF1A\u53EF\u4EE5\uFF0C\u9700\u8981\u901A\u8FC7get/set\u5199\u6CD5</p></li><li><p>\u5F53\u524D\u7EC4\u4EF6v-model\u7ED1\u5B9A\u7684\u503C\u662Fcomputed\u6765\u7684\uFF0C\u53EF\u4EE5\u4FEE\u6539\u5417? \u53EF\u4EE5\uFF0C\u9700\u8981\u901A\u8FC7get/set\u5199\u6CD5</p></li></ul><h4 id="watch" tabindex="-1"><a class="header-anchor" href="#watch" aria-hidden="true">#</a> watch</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">// 1</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">str</span><span class="token punctuation">(</span><span class="token parameter">newVal<span class="token punctuation">,</span>oldVal</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newVal<span class="token punctuation">,</span>oldVal<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2 \u914D\u7F6E\u9879</span>
<span class="token literal-property property">watch</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">str</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            
        <span class="token punctuation">}</span>\uFF0C
        <span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">// \u521D\u59CB\u5316\u65F6\u5C31\u89E6\u53D1\u4E00\u6B21</span>
        <span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="computed-\u3001methods\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#computed-\u3001methods\u7684\u533A\u522B" aria-hidden="true">#</a> computed \u3001methods\u7684\u533A\u522B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token punctuation">{</span>total<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>total<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>total<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span>total<span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token literal-property property">computed</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token comment">// \u53EA\u6253\u5370\u4E00\u6B21\u20181\u2019</span>

<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6267\u884C4\u6B21</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>computed</code>\u662F\u6709\u7F13\u5B58\u673A\u5236\u7684\uFF0C<code>methods</code>\u662F\u6CA1\u6709\u7684\uFF08\u8C03\u7528\u51E0\u6B21\u6267\u884C\u51E0\u6B21\uFF09</li></ul><h4 id="\u5982\u4F55\u81EA\u5B9A\u4E49\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u81EA\u5B9A\u4E49\u6307\u4EE4" aria-hidden="true">#</a> \u5982\u4F55\u81EA\u5B9A\u4E49\u6307\u4EE4</h4><ul><li>\u5168\u5C40\uFF1Amain.js</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;demo&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token function-variable function">inserted</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>c<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5C40\u90E8\uFF1A\u67D0\u4E2A\u7EC4\u4EF6\u5185</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    directives<span class="token punctuation">{</span>
    	<span class="token literal-property property">demo</span><span class="token operator">:</span><span class="token punctuation">{</span>
			<span class="token function-variable function">bind</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">el</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>    
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="v-bind" tabindex="-1"><a class="header-anchor" href="#v-bind" aria-hidden="true">#</a> v-bind</h4><p>\u5355\u9879\u7ED1\u5B9A</p><h4 id="v-model" tabindex="-1"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h4><p>\u53CC\u5411\u7ED1\u5B9A</p><h4 id="v-if\u548Cv-for\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#v-if\u548Cv-for\u4F18\u5148\u7EA7" aria-hidden="true">#</a> v-if\u548Cv-for\u4F18\u5148\u7EA7</h4><ul><li>vue2 v-for &gt; v -if</li><li>vue3 v-if&gt;v-for</li></ul>`,43),c=[e];function i(o,l){return s(),a("div",null,c)}const r=n(p,[["render",i],["__file","vue-api.html.vue"]]);export{r as default};