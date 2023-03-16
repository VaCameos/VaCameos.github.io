import{_ as e,o as d,c as t,d as a}from"./app.fbdceb87.js";const i={},r=a(`<h3 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h3><p>v2\u4E3A\u4F8B\u5B50 \u5B98\u7F51\u4E0A\u5199\u7684\u662F\u7CFB\u7EDF\u81EA\u5E26\u7684<strong>8\u4E2A</strong>\u5468\u671F</p><table><thead><tr><th>\u751F\u547D\u5468\u671F</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>beforeCreate</td><td>\u7EC4\u4EF6\u5B9E\u4F8B\u88AB\u521B\u5EFA\u4E4B\u524D</td></tr><tr><td>created</td><td>\u7EC4\u4EF6\u5B9E\u4F8B\u5DF2\u7ECF\u5B8C\u6210\u521B\u5EFA</td></tr><tr><td>beforeMount</td><td>\u7EC4\u4EF6\u6302\u5728\u524D</td></tr><tr><td>mounted</td><td>\u7EC4\u4EF6\u6302\u8F7D\u540E</td></tr><tr><td>beforeUpdate</td><td>\u7EC4\u4EF6\u6570\u636E\u53D1\u751F\u53D8\u5316\uFF0C\u66F4\u65B0\u4E4B\u524D</td></tr><tr><td>updated</td><td>\u7EC4\u4EF6\u6570\u636E\u66F4\u65B0\u4E4B\u540E</td></tr><tr><td>beforeDestroy</td><td>\u7EC4\u4EF6\u5B9E\u4F8B\u9500\u6BC1\u4E4B\u524D</td></tr><tr><td>destroyed</td><td>\u7EC4\u4EF6\u5B9E\u4F8B\u9500\u6BC1\u4E4B\u540E</td></tr><tr><td>activated</td><td>keep-alive\u7F13\u5B58\u7684\u7EC4\u4EF6\u6FC0\u6D3B\u65F6</td></tr><tr><td>deactivated</td><td>keep-alive\u7F13\u5B58\u7684\u7EC4\u4EF6\u505C\u7528\u65F6\u8C03\u7528</td></tr><tr><td>errorCaptured</td><td>\u6355\u83B7\u4E00\u4E2A\u6765\u81EA\u5B50\u5B59\u7EC4\u4EF6\u7684\u9519\u8BEF\u65F6\u88AB\u8C03\u7528</td></tr></tbody></table><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>  beforeCreate(){
    console.log(&#39;bfc&#39;,this.$el,this.$data)
  },
  created(){
    console.log(&#39;c&#39;,this.$el,this.$data)
  },
  beforeMount(){
    console.log(&#39;bfmt&#39;,this.$el,this.$data)
  },
  mounted(){
    console.log(&#39;mt&#39;,this.$el,this.$data)
  },

bfc undefined undefined
c undefined {&quot;count&quot;:0}
bfmt undefined {&quot;count&quot;:0}
mt [object HTMLDivElement] {&quot;count&quot;:0}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u7236\u5B50\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u987A\u5E8F" aria-hidden="true">#</a> \u7236\u5B50\u987A\u5E8F</h4><p>\u7236bfc =&gt; \u7236c=\u300B\u7236bfm=\u300B\u5B50bfc=\u300B\u5B50c=\u300B\u5B50bfm=\u300B\u5B50m =\u300B\u7236m</p><p>**\u603B\u7ED3\uFF1A**\u7236\u7EC4\u4EF6\u5148\u628A\u6570\u636E\u51C6\u5907\u597D\uFF0C\u7136\u540E\u6302\u8F7D\u5B50\u7EC4\u4EF6 \u6700\u540E\u6302\u8F7D\u7236\u7EC4\u4EF6\uFF0C\u591A\u4E2A\u5B50\u7EC4\u4EF6\u540C\u7406</p><h4 id="\u5982\u4F55\u5728created\u83B7\u53D6dom" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5728created\u83B7\u53D6dom" aria-hidden="true">#</a> \u5982\u4F55\u5728created\u83B7\u53D6dom</h4><ul><li>\u5199\u5F02\u6B65\u4EE3\u7801\uFF0C\u6B64\u65F6dom\u5DF2\u7ECF\u6302\u8F7D\u5B8C\u6BD5 <code>settimeout</code> <code>promise.then</code></li><li>vue\u7CFB\u7EDF\u5185\u7F6E\u7684 <code>nexttick</code> \u540C\u6837\u4E5F\u662F<strong>\u5F02\u6B65</strong></li></ul><h4 id="\u4E3A\u4EC0\u4E48\u4E0D\u5728beforecreated\u91CC\u53D1\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u5728beforecreated\u91CC\u53D1\u8BF7\u6C42" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4E0D\u5728beforeCreated\u91CC\u53D1\u8BF7\u6C42</h4><p>\u5982\u679C\u8BF7\u6C42\u662F\u5728methods\u5C01\u88C5\u6210\u51FD\u6570\uFF0C\u5728beforeCreated\u8FD9\u4E2A\u751F\u547D\u5468\u671F\u662F\u62FF\u4E0D\u5230methods\u7684\uFF0C\u6B64\u65F6\u4F1A\u62A5\u9519</p><h4 id="created\u4E0Ebeforecreated\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#created\u4E0Ebeforecreated\u7684\u533A\u522B" aria-hidden="true">#</a> created\u4E0EbeforeCreated\u7684\u533A\u522B</h4><ul><li>\u524D\u8005\u6709$data \u540E\u8005\u6CA1\u6709</li><li>\u524D\u8005\u80FD\u62FF\u5230methods \u540E\u8005\u4E0D\u80FD</li></ul><h4 id="\u53D1\u9001\u8BF7\u6C42\u5728created\u8FD8\u662Fmounted" tabindex="-1"><a class="header-anchor" href="#\u53D1\u9001\u8BF7\u6C42\u5728created\u8FD8\u662Fmounted" aria-hidden="true">#</a> \u53D1\u9001\u8BF7\u6C42\u5728created\u8FD8\u662Fmounted</h4><p>\u8FD9\u4E2A\u95EE\u9898\u5177\u4F53\u8981\u770B\u9879\u76EE\u548C\u4E1A\u52A1\u7684\u60C5\u51B5\u4E86\uFF0C\u56E0\u4E3A\u7EC4\u4EF6\u7684\u52A0\u8F7D\u987A\u5E8F\u4E86\uFF0C\u7236\u7EC4\u4EF6\u5F15\u5165\u4E86\u5B50\u7EC4\u4EF6\uFF0C\u90A3\u4E48\u5148\u6267\u884C\u7236\u7684\u524D3\u4E2A\u751F\u547D\u5468\u671F\uFF0C\u5982\u4F55\u6267\u884C\u5B50\u7684\u56DB\u4E2A\u751F\u547D\u5468\u671F\uFF0C\u5982\u679C\u6211\u4EEC\u7684\u4E1A\u52A1\u662F\u7236\u7EC4\u4EF6\u5F15\u5165\u5B50\u7EC4\u4EF6\uFF0C\u5E76\u4E14\u4F18\u5148\u52A0\u8F7D\u5B50\u7EC4\u4EF6\u7684\u6570\u636E\uFF0C\u90A3\u4E48\u7236\u7EC4\u4EF6\u4E2D\u5F53\u524D\u8BF7\u6C42\u8981\u653E\u5728mounted\u4E2D\uFF0C\u8FD9\u6837\u624D\u4E0D\u4F1A\u51FA\u73B0\u963B\u585E\u5BFC\u81F4\u4E0D\u6EE1\u8DB3\u4E1A\u52A1\u3002 \u5982\u679C\u5F53\u524D\u7EC4\u4EF6\u6CA1\u6709\u4F9D\u8D56\u5173\u7CFB\uFF0C\u90A3\u4E48\u653E\u5728\u54EA\u4E2A\u751F\u547D\u5468\u671F\u90FD\u53EF\u4EE5\u8981\u6839\u636E\u9879\u76EE\u8FDB\u884C\u9009\u62E9</p><h4 id="\u7B2C\u4E8C\u6B21\u6216\u8005\u7B2Cn\u6B21\u56DE\u6267\u884C\u54EA\u4E9B\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u6B21\u6216\u8005\u7B2Cn\u6B21\u56DE\u6267\u884C\u54EA\u4E9B\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u7B2C\u4E8C\u6B21\u6216\u8005\u7B2CN\u6B21\u56DE\u6267\u884C\u54EA\u4E9B\u751F\u547D\u5468\u671F</h4><ul><li>\u5982\u679C\u5F53\u524D\u7EC4\u4EF6\u52A0\u5165\u4E86keep-alive \u53EA\u4F1A\u6267\u884C<code>activated</code></li><li>\u5982\u679C\u6CA1\u52A0\u5165\uFF0C\u4F1A\u6267\u884C\u524D4\u4E2A</li></ul><h4 id="\u52A0\u5165keep-alive\u4F1A\u6267\u884C\u54EA\u4E9B\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u52A0\u5165keep-alive\u4F1A\u6267\u884C\u54EA\u4E9B\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u52A0\u5165keep-alive\u4F1A\u6267\u884C\u54EA\u4E9B\u751F\u547D\u5468\u671F</h4><p>\u5982\u679C\u4F7F\u7528\u4E86keep-alive\u7EC4\u4EF6\uFF0C\u5F53\u524D\u7EC4\u4EF6\u4F1A\u989D\u5916\u589E\u52A02\u4E2A\u751F\u547D\u5468\u671F</p><ul><li>activated</li><li>deactivated</li></ul><p>\u7B2C\u4E00\u6B21\u8FDB\u5165\u4F1A\u6267\u884C4+activated \u540E\u6765\u8FDB\u5165\u4F1A\u6267\u884Cactivated</p><h4 id="\u4F7F\u7528\u8FC7\u54EA\u4E9B\u751F\u547D\u5468\u671F\u3001\u4EC0\u4E48\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u8FC7\u54EA\u4E9B\u751F\u547D\u5468\u671F\u3001\u4EC0\u4E48\u573A\u666F" aria-hidden="true">#</a> \u4F7F\u7528\u8FC7\u54EA\u4E9B\u751F\u547D\u5468\u671F\u3001\u4EC0\u4E48\u573A\u666F</h4><ul><li>created ===\u300B \u8BF7\u6C42</li><li>mounted ===\u300B\u83B7\u53D6dom</li><li>activated ===\u300B \u8BE6\u60C5\u9875 \u5224\u65ADid\u662F\u5426\u76F8\u540C\uFF0C\u82E5\u76F8\u540C\u4E0D\u53D1\u9001\u8BF7\u6C42</li><li>destroyed ===\u300B \u5173\u95ED\u9875\u9762\u8BB0\u5F55\u89C6\u9891\u64AD\u653E\u7684\u65F6\u95F4\uFF0C\u521D\u59CB\u5316\u7684\u65F6\u5019\u4ECE\u4E0A\u4E00\u6B21\u7684\u5386\u53F2\u5F00\u59CB\u64AD\u653E</li></ul>`,23),n=[r];function l(c,o){return d(),t("div",null,n)}const h=e(i,[["render",l],["__file","vue\u751F\u547D\u5468\u671F.html.vue"]]);export{h as default};
