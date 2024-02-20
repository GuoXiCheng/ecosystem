import{_ as o,r as s,o as r,c,a,b as e,d as n,w as t,e as p}from"./app-BcH8wZQx.js";const d={},u=e("h1",{id:"remove-pwa",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#remove-pwa"},[e("span",null,"remove-pwa")])],-1),v=e("p",null,"此插件从你的 VuePress 站点中删除任何相关的 Service Worker，因此如果你在启用后任何 PWA 插件后移除它们，用户仍然可以获得更新。",-1),h={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"如果你启用过 PWA，为什么需要这个插件？",-1),D=e("code",null,"@vuepress/plugin-pwa",-1),_=e("p",null,"但是，如果你删除 PWA 插件，先前的 Service Worker 仍将在那里，但它们永远无法获得更新，因为他们永远无法找到要更新的新 Service Worker。 因此，用户将继续使用你网站的旧版本。",-1),b=e("p",null,"要解决这个问题：",-1),g=e("ol",null,[e("li",null,[e("p",null,"一个新的内容为空的 Service Worker 需要生成在原位置。")]),e("li",null,[e("p",null,"新的 Service Worker 应该尝试删除旧 Service Worker 缓存的内容，然后它应该注销自己。")])],-1),k=p(`<h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i -D @vuepress/plugin-remove-pwa@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">removePwaPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-remove-pwa&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    removePwaPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // options</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><h3 id="cacheprefix" tabindex="-1"><a class="header-anchor" href="#cacheprefix"><span>cachePrefix</span></a></h3><ul><li>类型：<code>string</code></li><li>默认值：<code>&#39;workbox&#39;</code></li><li>详情：Service worker 的缓存前缀。</li></ul><h3 id="swlocation" tabindex="-1"><a class="header-anchor" href="#swlocation"><span>swLocation</span></a></h3><ul><li>类型： <code>string</code></li><li>默认值：<code>&#39;service-worker.js&#39;</code></li><li>详情：旧 Service Worker 的位置。</li></ul>`,8);function w(x,f){const l=s("NpmBadge"),i=s("RouteLink");return r(),c("div",null,[u,a(l,{package:"@vuepress/plugin-remove-pwa"}),v,e("div",h,[m,e("p",null,[n("PWA 插件，如 "),a(i,{to:"/zh/plugins/pwa/"},{default:t(()=>[D]),_:1}),n(" 将 Service Worker 注册到你的站点，这将缓存你的站点并使其离线可用。")]),_,b,g]),k])}const C=o(d,[["render",w],["__file","remove-pwa.html.vue"]]),P=JSON.parse('{"path":"/zh/plugins/remove-pwa.html","title":"remove-pwa","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[{"level":3,"title":"cachePrefix","slug":"cacheprefix","link":"#cacheprefix","children":[]},{"level":3,"title":"swLocation","slug":"swlocation","link":"#swlocation","children":[]}]}],"git":{"updatedTime":1708397875000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"filePathRelative":"zh/plugins/remove-pwa.md"}');export{C as comp,P as data};
