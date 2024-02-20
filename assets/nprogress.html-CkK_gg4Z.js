import{_ as o,r as e,o as p,c as i,a,b as s,d as n,e as t}from"./app-OmzTsp-1.js";const c={},d=s("h1",{id:"nprogress-插件",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nprogress-插件"},[s("span",null,"nprogress 插件")])],-1),D={href:"https://github.com/rstacruz/nprogress",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>该插件已经集成到默认主题中。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i -D @vuepress/plugin-nprogress@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">nprogressPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-nprogress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span><span style="color:#DCDCAA;">nprogressPlugin</span><span style="color:#D4D4D4;">()],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2><p>你可以通过 CSS 变量来自定义进度条的样式：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --nprogress-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#29d</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --nprogress-z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1031</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function m(g,h){const l=e("NpmBadge"),r=e("ExternalLinkIcon");return p(),i("div",null,[d,a(l,{package:"@vuepress/plugin-nprogress"}),s("p",null,[n("将 "),s("a",D,[n("nprogress"),a(r)]),n(" 集成到 VuePress 中，在切换到另一个页面时会展示进度条。")]),u])}const y=o(c,[["render",m],["__file","nprogress.html.vue"]]),b=JSON.parse('{"path":"/zh/plugins/nprogress.html","title":"nprogress","lang":"zh-CN","frontmatter":{"title":"nprogress"},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"样式","slug":"样式","link":"#样式","children":[]}],"git":{"updatedTime":1706605723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"filePathRelative":"zh/plugins/nprogress.md"}');export{y as comp,b as data};
