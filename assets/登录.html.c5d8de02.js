import{_ as n,o as s,c as a,d as t}from"./app.fbdceb87.js";const p="/assets/jwt.75008a55.png",e={},o=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token string">&#39;use strict&#39;</span><span class="token punctuation">;</span>
exports<span class="token punctuation">.</span><span class="token function-variable function">main</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">//event\u4E3A\u5BA2\u6237\u7AEF\u4E0A\u4F20\u7684\u53C2\u6570</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;event : &#39;</span><span class="token punctuation">,</span> event<span class="token punctuation">)</span>

	<span class="token comment">// jscode2session  code\u4F20\u8FDB\u6765</span>
	<span class="token keyword">const</span> <span class="token punctuation">{</span>
		code
	<span class="token punctuation">}</span> <span class="token operator">=</span> event<span class="token punctuation">;</span>

	<span class="token comment">// \u5229\u7528code\u83B7\u53D6openid \u5FAE\u4FE1\u5B98\u65B9\u6587\u6863</span>
	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> uniCloud<span class="token punctuation">.</span>httpclient<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>
		<span class="token string">&quot;https://api.weixin.qq.com/sns/jscode2session?appid=wxbaa7c6e90225489a&amp;secret=02c2412bc5182c683eac208e8f8eb4b3&amp;js_code=&quot;</span><span class="token operator">+</span>code<span class="token operator">+</span><span class="token string">&quot;&amp;grant_type=authorization_code&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">dataType</span><span class="token operator">:</span><span class="token string">&#39;json&#39;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		
	<span class="token keyword">const</span> openid <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>openid
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>openid<span class="token punctuation">)</span>
	<span class="token comment">//\u8FD4\u56DE\u6570\u636E\u7ED9\u5BA2\u6237\u7AEF</span>
	<span class="token keyword">return</span> event
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
			uni<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">provider</span><span class="token operator">:</span><span class="token string">&#39;weixin&#39;</span><span class="token punctuation">,</span>
				<span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">let</span> code <span class="token operator">=</span> res<span class="token punctuation">.</span>code
					uniCloud<span class="token punctuation">.</span><span class="token function">callFunction</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
						<span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
						<span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
							code
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
							console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B80\u5355\u7684\u4E00\u4E2A\u767B\u5F55demo</p><p>\u521B\u5EFA\u516C\u5171\u6A21\u5757 \u5B58\u50A8appid\u548C\u5BC6\u94A5</p><p>\u6D41\u7A0B \u5728\u4E91\u51FD\u6570\u4E0A\u53F3\u952E \u7BA1\u7406\u516C\u5171\u6A21\u5757\u4F9D\u8D56 =\u300B \u52FE\u9009 =\u300B\u66F4\u65B0</p><p><img src="`+p+'" alt="jwt"></p><p>jwt\u57FA\u4E8Etoken\u9274\u6743</p><p>token\u662F\u6709\u6709\u6548\u671F\u7684 \u548Copenid\u4E0D\u540C</p><p>\u6DFB\u52A0\u7D22\u5F15\u5B57\u6BB5openid \u9632\u6B62\u4EA7\u751F\u591A\u6761\u76F8\u540C\u6570\u636E</p>',9),c=[o];function i(l,u){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","\u767B\u5F55.html.vue"]]);export{d as default};
