import{_ as e,o as a,c as d,d as r}from"./app.fbdceb87.js";const i={},t=r(`<ul><li>1xx\u8868\u793A\u6D88\u606F</li><li>2xx\u8868\u793A\u6210\u529F</li><li>3xx\u8868\u793A\u91CD\u5B9A\u5411</li><li>4xx\u5BA2\u6237\u7AEF\u9519\u8BEF</li><li>5xx\u670D\u52A1\u7AEF\u9519\u8BEF</li></ul><h3 id="\u5E38\u89C1\u7684\u72B6\u6001\u7801" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u7684\u72B6\u6001\u7801" aria-hidden="true">#</a> \u5E38\u89C1\u7684\u72B6\u6001\u7801</h3><h4 id="_101-switch-protocol" tabindex="-1"><a class="header-anchor" href="#_101-switch-protocol" aria-hidden="true">#</a> 101 Switch Protocol</h4><p>\u5347\u7EA7\u534F\u8BAE\uFF0Chttp\u5230ws\uFF0C\u9700\u8981\u53CD\u5411\u4EE3\u7406\u652F\u6301\uFF0C\u5982nginx</p><h4 id="_200-ok" tabindex="-1"><a class="header-anchor" href="#_200-ok" aria-hidden="true">#</a> 200 OK</h4><p>\u8868\u793A\u8D44\u6E90\u8BF7\u6C42\u6210\u529F\uFF0C\u6700\u5E38\u89C1\u7684\u72B6\u6001\u7801</p><h4 id="_201-created" tabindex="-1"><a class="header-anchor" href="#_201-created" aria-hidden="true">#</a> 201 Created</h4><p>\u8D44\u6E90\u521B\u5EFA\u6210\u529F\uFF0C\u591A\u7528\u4E8Epost\u8BF7\u6C42</p><h4 id="_204-no-content" tabindex="-1"><a class="header-anchor" href="#_204-no-content" aria-hidden="true">#</a> 204 No Content</h4><p>\u54CD\u5E94\u4E0D\u4F1A\u8FD4\u56DEBody\uFF0C\u4E00\u822C\u662F\u4EE5\u4E0B\u4E24\u79CD\u60C5\u51B5</p><ul><li>\u4E0EOptions/Delete \u8BF7\u6C42\u642D\u914D</li><li>\u6253\u70B9\u7C7B</li></ul><h4 id="_206-partial-content" tabindex="-1"><a class="header-anchor" href="#_206-partial-content" aria-hidden="true">#</a> 206 Partial Content</h4><p>\u5206\u7247\u4F20\u8F93\uFF0C\u5F53\u8BF7\u6C42\u591A\u5A92\u4F53\u6570\u636E\u8F83\u5927\u65F6\u4F1A\u8FDB\u884C\u5206\u7247\u4F20\u8F93\uFF0C\u4F8B\u5982b\u8A79\u89C6\u9891</p><h4 id="_301-moved-permanently" tabindex="-1"><a class="header-anchor" href="#_301-moved-permanently" aria-hidden="true">#</a> 301 Moved Permanently</h4><p>\u6C38\u4E45\u91CD\u5B9A\u5411\u3002 http\u8F6Chttps\u6709\u65F6\u4F1A\u7528\u5230</p><h4 id="_302-found" tabindex="-1"><a class="header-anchor" href="#_302-found" aria-hidden="true">#</a> 302 Found</h4><p>\u6682\u65F6\u91CD\u5B9A\u5411</p><h4 id="_304-not-modified" tabindex="-1"><a class="header-anchor" href="#_304-not-modified" aria-hidden="true">#</a> 304 Not Modified</h4><p>\u8D44\u6E90\u5DF2\u88AB\u7F13\u5B58\uFF0C\u4E0E\u4E4B\u76F8\u5173\u7684\u54CD\u5E94\u5934</p><ul><li><code>ETag</code></li><li><code>last-modified</code>/<code>if-modified-since</code></li></ul><p>\u4E00\u822C\u7528\u4F5C <code>index.html</code> \u7B49\u4E0D\u5E26 hash \u7684\u8D44\u6E90\uFF0C\u7531\u4E8E\u793A\u4F8B\u592A\u591A\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u4E3E\u4F8B\u4E86</p><p>\u4E0E<code>\u534F\u5546\u7F13\u5B58</code> \u548C<code>\u5F3A\u7F13\u5B58</code>\u6709\u5173</p><h4 id="_307-temporary-redirect" tabindex="-1"><a class="header-anchor" href="#_307-temporary-redirect" aria-hidden="true">#</a> 307 Temporary Redirect</h4><p>\u6682\u65F6\u91CD\u5B9A\u5411\u3002\u4E5F\u53EF\u4F5C\u4E3A http \u5230 https \u7684\u91CD\u5B9A\u5411\u3002\u8FD8\u6709\u4E00\u79CD\u7528\u9014\u7528\u4F5C HSTS\uFF0C\u5F53\u8C37\u6B4C\u6D4F\u89C8\u5668\u53D1\u73B0\u67D0 http \u8D44\u6E90\u5DF2\u88AB\u52A0\u5165\u5230 HSTS \u5217\u8868\uFF0C\u6D4F\u89C8\u5668\u5185\u90E8\u4F1A\u901A\u8FC7 307 \u4F5C\u91CD\u5B9A\u5411</p><h4 id="_301\u3001302\u3001307\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_301\u3001302\u3001307\u7684\u533A\u522B" aria-hidden="true">#</a> 301\u3001302\u3001307\u7684\u533A\u522B</h4><ul><li><p>301 \u6BD4\u8F83\u5371\u9669\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86301\u60F3\u53D6\u6D88\uFF0C\u4F46\u662F\u6D4F\u89C8\u5668\u4E2D\u5DF2\u7ECF\u6709\u4E86\u7F13\u5B58\uFF0C\u8FD8\u662F\u4F1A\u91CD\u5B9A\u5411\uFF0C\u4E14SEO\u53EA\u548C\u91CD\u5B9A\u5411\u7684\u7F51\u7AD9\u6709\u5173</p></li><li><p>302 SEO\u5BF9\u4E24\u4E2A\u7F51\u7AD9\u90FD\u6709\u6548 \u4F1A\u628Amethod\u6539\u53D8\uFF1APOST-&gt; GET ,\u56E0\u6B64\u51FA\u73B0307</p></li><li><p>\u548C302\u7C7B\u4F3C \u4F46\u4E0D\u4F1A\u6539\u53D8method</p></li></ul><h4 id="_400-bad-request" tabindex="-1"><a class="header-anchor" href="#_400-bad-request" aria-hidden="true">#</a> 400 Bad Request</h4><p>\u5BF9\u4E8E\u670D\u52A1\u5668\u65E0\u6CD5\u7406\u89E3\u7684\u53C2\u6570\uFF0C\u5C06\u4F1A\u4F7F\u7528400\u4F5C\u4E3A\u8FD4\u56DE\u7801</p><p>\u793A\u4F8B\uFF1A\u5F53Content-Type\uFF1AJSON\u65F6 \uFF0C\u670D\u52A1\u5668\u89E3\u6790JSON\u5931\u8D25</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HTTP/1.1 400 Bad Request
Content-Length: 35

{&quot;message&quot;:&quot;Problems parsing JSON&quot;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_401-unauthorized" tabindex="-1"><a class="header-anchor" href="#_401-unauthorized" aria-hidden="true">#</a> 401 Unauthorized</h4><p>\u6CA1\u6743\u9650\u7684\u7528\u6237\u8BF7\u6C42\u9700\u8981\u5E26\u6743\u9650\u7684\u8D44\u6E90\u65F6 \uFF0C \u6709\u65F6\u8BA4\u8BC1\u5931\u8D25\u4E5F\u4F1A\u8FD4\u56DE401</p><p>\u4F8B\uFF1A\u767B\u5F55\u65F6\u5BC6\u7801\u4E0D\u6B63\u786E</p><h4 id="_403-forbidden" tabindex="-1"><a class="header-anchor" href="#_403-forbidden" aria-hidden="true">#</a> 403 Forbidden</h4><p>\u7981\u6B62\u8BBF\u95EE\uFF0C</p><h4 id="_404-not-found" tabindex="-1"><a class="header-anchor" href="#_404-not-found" aria-hidden="true">#</a> 404 Not Found</h4><p>\u672A\u627E\u5230\u8D44\u6E90</p><h4 id="_405-method-not-allowed" tabindex="-1"><a class="header-anchor" href="#_405-method-not-allowed" aria-hidden="true">#</a> 405 Method Not Allowed</h4><p>method\u9519\u8BEF</p><h4 id="_413-payload-too-large" tabindex="-1"><a class="header-anchor" href="#_413-payload-too-large" aria-hidden="true">#</a> 413 Payload Too Large</h4><p>\u8D1F\u8F7D\u8FC7\u5927 body\u8FC7\u5927</p><h4 id="_500-internal-server-error" tabindex="-1"><a class="header-anchor" href="#_500-internal-server-error" aria-hidden="true">#</a> 500 Internal Server Error</h4><p>\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF\uFF0C\u5F88\u6709\u53EF\u80FD\u662F\u5E94\u7528\u5C42\u672A\u6355\u83B7\u9519\u8BEF\u800C\u5BFC\u81F4\u6574\u4E2A\u670D\u52A1\u6302\u6389</p><h4 id="_502-bad-gateway" tabindex="-1"><a class="header-anchor" href="#_502-bad-gateway" aria-hidden="true">#</a> 502 Bad Gateway</h4><p>Nginx\u5E38\u89C1\uFF0C\u4ECE\u4E0A\u6E38\u5E94\u7528\u5C42\u672A\u8FD4\u56DE\u54CD\u5E94\uFF0C\u4E0A\u6E38\u5E94\u7528\u5C42\u6302\u4E86</p><h4 id="_503-service-unavailable" tabindex="-1"><a class="header-anchor" href="#_503-service-unavailable" aria-hidden="true">#</a> 503 Service Unavailable</h4><p>\u670D\u52A1\u5668\u7E41\u5FD9</p><h4 id="_504-gateway-timeout" tabindex="-1"><a class="header-anchor" href="#_504-gateway-timeout" aria-hidden="true">#</a> 504 Gateway Timeout</h4><p>\u7F51\u5173\u8D85\u65F6</p>`,49),h=[t];function n(o,l){return a(),d("div",null,h)}const s=e(i,[["render",n],["__file","http-code.html.vue"]]);export{s as default};