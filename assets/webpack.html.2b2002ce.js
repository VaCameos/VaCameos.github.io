import{_ as n,o as s,c as a,d as e}from"./app.fbdceb87.js";const p={},t=e(`<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><h3 id="context" tabindex="-1"><a class="header-anchor" href="#context" aria-hidden="true">#</a> context</h3><p><code>webpack</code>\u5728\u67E5\u627E\u76F8\u5BF9\u8DEF\u5F84\u7684\u65F6\u5019\uFF0C\u4F1A\u4EE5<code>context</code>\u4E3A\u6839\u76EE\u5F55\u8FDB\u884C\u67E5\u627E\uFF0C\u5176\u9ED8\u8BA4\u503C\u662Fwebpack\u7684\u542F\u52A8\u8DEF\u5F84\uFF0C\u5982\u679C\u9700\u8981\u4FEE\u6539\u4E5F\u53EF\u4EE5\u624B\u52A8\u4FEE\u6539</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">context</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span> <span class="token comment">// __dirname\u4E3A\u5F53\u524D\u6587\u4EF6\u8DEF\u5F84 \u548C \u7B2C\u4E8C\u4E2A\u53C2\u6570\u62FC\u63A5\u8D77\u6765</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="context\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#context\u7C7B\u578B" aria-hidden="true">#</a> context\u7C7B\u578B</h4><table><thead><tr><th>\u7C7B\u578B</th><th>\u4F8B\u5B50</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>path.join(__dirname, &#39;src&#39;)</code></td><td>\u8BBE\u7F6E <code>Webpack</code> \u7684\u4E0A\u4E0B\u6587\uFF0C<strong>\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84</strong></td></tr></tbody></table><p>\u73B0\u5728\u5C31\u5C06\u76F8\u5BF9\u8DEF\u5F84\u7684\u6839\u76EE\u5F55\u6539\u6210\u4E86 <code>src</code>\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\u5C31\u662F\u4ECE <code>src</code> \u76EE\u5F55\u4E0B\u8FDB\u884C\u67E5\u627E\u3002\u4F8B\u5982\u4E0A\u9762\u7684 <code>entry</code>\uFF0C\u5C31\u4F1A\u4ECE <code>src</code> \u76EE\u5F55\u4E0B\u8FDB\u884C\u67E5\u627E\uFF0C\u4E5F\u5C31\u662F <code>src/index.js</code>\u3002</p><h3 id="entry" tabindex="-1"><a class="header-anchor" href="#entry" aria-hidden="true">#</a> entry</h3><p><code>entry</code>\u987E\u540D\u601D\u4E49\u5165\u53E3 \uFF0C \u662F<code>webpack</code>\u914D\u7F6E\u6A21\u5757\u7684\u5165\u53E3</p><p><code>webpack</code>\u5F00\u59CB\u6784\u5EFA\u65F6\u4F1A\u4ECE<code>entry</code>\u7684\u6587\u4EF6\u5F00\u59CB\u9012\u5F52\u89E3\u6790\u51FA\u6240\u6709\u4F9D\u8D56\u7684\u6A21\u5757</p><h4 id="entry-\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#entry-\u7C7B\u578B" aria-hidden="true">#</a> Entry \u7C7B\u578B</h4><table><thead><tr><th>\u7C7B\u578B</th><th>\u4F8B\u5B50</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td><code>string</code></td><td><code>./index.js</code></td><td>\u5165\u53E3\u6A21\u5757\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84</td></tr><tr><td><code>array</code></td><td><code>[&#39;./index.js&#39;, &#39;./main.js&#39;]</code></td><td>\u5165\u53E3\u6A21\u5757\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84</td></tr><tr><td><code>object</code></td><td><code>{ index: &#39;./index.js&#39;, main: [&#39;./main.js&#39;, &#39;./src/index.js&#39;]}</code></td><td>\u591A\u5165\u53E3\u914D\u7F6E\uFF0C\u6BCF\u4E2A\u5165\u53E3\u751F\u6210\u4E00\u4E2A <code>chunk</code></td></tr></tbody></table><h4 id="entry-\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#entry-\u63CF\u8FF0" aria-hidden="true">#</a> Entry \u63CF\u8FF0</h4><ul><li><code>dependOn</code>\uFF1A\u5F53\u524D\u5165\u53E3\u6587\u4EF6\u4F9D\u8D56\u7684\u5165\u53E3\u6587\u4EF6\uFF0C\u5373\u5FC5\u987B\u5728\u5165\u53E3\u6587\u4EF6\u88AB\u52A0\u8F7D\u4E4B\u524D\u52A0\u8F7D\u4F9D\u8D56\u7684\u5165\u53E3\u6587\u4EF6</li><li><code>filename</code>\uFF1A\u6307\u5B9A\u5F53\u524D\u5165\u53E3\u6587\u4EF6\u6784\u5EFA\u540E\u8F93\u51FA\u7684\u6587\u4EF6\u540D\u79F0</li><li><code>import</code>\uFF1A\u542F\u52A8\u6784\u5EFA\u65F6\u88AB\u5939\u52A0\u8F7D\u7684\u6A21\u5757</li><li><code>library</code>\uFF1A\u914D\u7F6E\u5165\u53E3\u6587\u4EF6\u7684\u9009\u9879</li><li><code>runtime</code>\uFF1A\u8FD0\u884C\u65F6 <code>chunk</code> \u7684\u540D\u79F0\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u6B64\u9009\u9879\u5C06\u4F1A\u521B\u5EFA\u4E00\u4E2A\u540C\u540D\u7684\u8FD0\u884C\u65F6 <code>chunk</code>\uFF0C\u5426\u5219\u5C06\u4F1A\u4F7F\u7528\u5165\u53E3\u6587\u4EF6\u4F5C\u4E3A\u8FD0\u884C\u65F6</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span><span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">main</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">dependOn</span><span class="token operator">:</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
            <span class="token keyword">import</span><span class="token operator">:</span><span class="token string">&#39;./main.js&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6784\u5EFA\u65F6\u4F1A\u7B49\u5F85 <code>index</code> \u6784\u5EFA\u5B8C\u6210\u540E\u518D\u542F\u52A8 <code>main</code> \u7684\u6784\u5EFA\u3002</p><p>\u5BF9\u4E8E\u5355\u4E2A\u5165\u53E3\uFF0C<code>dependOn</code> \u548C <code>runtime</code> \u4E0D\u80FD\u540C\u65F6\u5B58\u5728:\u4F1A\u62A5\u9519</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">runtime</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&#39;./main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u4F1A\u62A5\u9519\uFF0C \u5BF9\u4E8E\u5355\u4E2A\u5165\u53E3\uFF0C<code>runtime</code> \u4E0D\u80FD\u662F\u5DF2\u7ECF\u5B58\u5728\u7684\u5165\u53E3\u6587\u4EF6\u540D\u79F0\uFF1A</p><p>\u5FAA\u73AF\u4F9D\u8D56\u4E5F\u4F1A\u62A5\u9519</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">dependOn</span><span class="token operator">:</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">,</span>
      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">dependOn</span><span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
      <span class="token keyword">import</span><span class="token operator">:</span> <span class="token string">&#39;./main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h4><ul><li>\u5206\u79BB\u4EE3\u7801\u548C\u4F9D\u8D56</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./src/app.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token string">&#39;./src/vendor.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
\u590D\u5236\u4EE3\u7801
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].[contenthash].bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
\u590D\u5236\u4EE3\u7801
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u505A\u662F\u5728\u544A\u8BC9 <code>Webpack</code> \u9700\u8981\u6253\u5305\u4E24\u4E2A\u5355\u72EC\u7684 <code>chunk</code>\u3002</p><p>\u8FD9\u6837\u505A\u7684\u597D\u5904\u5728\u4E8E\u53EF\u4EE5\u5C06\u4E00\u4E9B\u57FA\u672C\u4E0D\u4F1A\u4FEE\u6539\u7684\u4F9D\u8D56\uFF08\u4F8B\u5982 <code>jQuery</code> <code>Bootstrap</code>\uFF09\u653E\u5728 <code>vendor</code> \u5F53\u4E2D\uFF0C\u8FD9\u4E9B\u4F9D\u8D56\u4F1A\u88AB\u6253\u5305\u5728\u4E00\u8D77\u751F\u6210\u4E00\u4E2A <code>chunk</code>\u3002\u7531\u4E8E\u8FD9\u4E9B\u4F9D\u8D56\u57FA\u672C\u4E0D\u4F1A\u6709\u53D8\u5316\uFF0C\u6240\u4EE5\u8FD9\u4E9B\u4F9D\u8D56\u7684 <code>contenthash</code> \u4E5F\u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u80FD\u591F\u66F4\u597D\u5730\u4F18\u5316\u6D4F\u89C8\u5668\u7F13\u5B58\u3002</p><ul><li>\u591A\u9875\u5E94\u7528</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">pageOne</span><span class="token operator">:</span> <span class="token string">&#39;./src/pageOne/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pageTwo</span><span class="token operator">:</span> <span class="token string">&#39;./src/pageTwo/index.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pageThree</span><span class="token operator">:</span> <span class="token string">&#39;./src/pageThree/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u505A\u662F\u5728\u544A\u8BC9 <code>Webpack</code> \u9700\u8981\u6253\u5305\u4E09\u4E2A\u5355\u72EC\u7684 <code>chunk</code>\u3002</p><p>\u5728\u591A\u9875\u5E94\u7528\u91CC\uFF0C\u6BCF\u8BBF\u95EE\u4E00\u4E2A\u9875\u9762\u5C31\u4F1A\u91CD\u65B0\u83B7\u53D6\u4E00\u4E2A\u65B0\u7684 <code>HTML</code> \u6587\u6863\u3002\u5F53\u65B0\u7684 <code>HTML</code> \u6587\u6863\u88AB\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u8D44\u6E90\u4E5F\u4F1A\u88AB\u91CD\u65B0\u4E0B\u8F7D\u3002</p><p>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898 <code>Webpack</code> \u63D0\u4F9B\u4E86\u4E00\u4E2A\u7C7B\u4F3C <code>optimization.splitChunks</code> \u7684\u80FD\u529B\uFF0C\u80FD\u591F\u521B\u5EFA\u5404\u4E2A\u9875\u9762\u4E4B\u95F4\u516C\u5171\u7684 <code>bundle</code>\u3002\u968F\u7740\u591A\u9875\u5E94\u7528\u7684\u5165\u53E3\u589E\u591A\uFF0C\u8FD9\u79CD\u4EE3\u7801\u91CD\u7528\u673A\u5236\u7684\u6536\u76CA\u4F1A\u8D8A\u6765\u8D8A\u9AD8\u3002</p><h4 id="chunk\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#chunk\u540D\u79F0" aria-hidden="true">#</a> chunk\u540D\u79F0</h4><ul><li>\u5982\u679C<code>entry</code>\u7C7B\u578B\u4E3A<code>string</code> <code>array</code>\u5C31\u53EA\u4F1A\u751F\u6210\u4E00\u4E2A<code>chunk</code> , \u4E14\u540D\u79F0\u4E3A<code>main</code></li><li>\u5982\u679C<code>entry</code>\u7C7B\u578B\u4E3A<code>object</code>,\u5219\u4F1A\u751F\u6210\u591A\u4E2A<code>chunk</code> ,\u540D\u79F0\u4E3A<code>object</code> \u7684<code>key</code></li></ul><h4 id="\u52A8\u6001\u914D\u7F6Eentry" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u914D\u7F6Eentry" aria-hidden="true">#</a> \u52A8\u6001\u914D\u7F6Eentry</h4><p>\u5982\u679C\u9700\u8981\u52A8\u6001\u914D\u7F6E <code>entry</code>\uFF0C\u53EF\u4EE5\u5C06 <code>entry</code> \u8BBE\u7F6E\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u652F\u6301\u540C\u6B65\u548C\u5F02\u6B65\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u540C\u6B65</span>
  <span class="token function-variable function">entry</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">syncEntry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./main.js&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5F02\u6B65</span>
  <span class="token function-variable function">entry</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">asyncEntry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">&#39;./index.js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">&#39;./main.js&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u591A\u5165\u53E3\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u591A\u5165\u53E3\u914D\u7F6E" aria-hidden="true">#</a> \u591A\u5165\u53E3\u914D\u7F6E</h4><p>\u5982\u679C\u9700\u8981\u521B\u5EFA\u591A\u4E2A <code>chunk</code>\uFF0C\u6216\u8005\u4F7F\u7528\u4E86 <code>CommonsChunkPlugin</code> \u4E4B\u7C7B\u7684\u63D2\u4EF6\uFF0C\u5219\u5E94\u8BE5\u4F7F\u7528<strong>\u6A21\u677F\u8BED\u6CD5</strong>\u6765\u66FF\u6362 <code>filename</code>\uFF0C\u786E\u4FDD\u6BCF\u4E2A <code>chunk</code> \u90FD\u6709\u5355\u72EC\u7684\u540D\u79F0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./src/app.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&#39;./src/search.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h3><p><code>output</code> \u662F <code>Webpack</code> \u914D\u7F6E\u8F93\u51FA\u6587\u4EF6\u7684\u6587\u4EF6\u540D\u3001\u8DEF\u5F84\u7B49\u4FE1\u606F\u7684\u9009\u9879\u3002\u5BF9\u4E8E\u591A\u4E2A\u5165\u53E3\uFF0C\u53EA\u9700\u8981\u914D\u7F6E\u4E00\u4E2A <code>output</code>\u3002</p><p>\u6700\u57FA\u7840\u7684\u7528\u6CD5\u53EA\u9700\u8981\u914D\u7F6E\u4E00\u4E2A <code>filename</code> \u9009\u9879\u5373\u53EF\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u914D\u7F6E\u5C06\u4F1A\u8F93\u51FA\u4E00\u4E2A <code>bundle.js</code> \u5728 <code>dist</code> \u76EE\u5F55\u4E0B\u3002</p>`,44),o=[t];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","webpack.html.vue"]]);export{d as default};