import{_ as o,r as n,o as p,c as t,a,b as s,d as e,e as i}from"./app-BcH8wZQx.js";const c={},d=s("h1",{id:"nprogress-plugin",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nprogress-plugin"},[s("span",null,"nprogress Plugin")])],-1),u={href:"https://github.com/rstacruz/nprogress",target:"_blank",rel:"noopener noreferrer"},g=i(`<p>This plugin has been integrated into the default theme.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i -D @vuepress/plugin-nprogress@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">nprogressPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-nprogress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span><span style="color:#DCDCAA;">nprogressPlugin</span><span style="color:#D4D4D4;">()],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles"><span>Styles</span></a></h2><p>You can customize the style of the progress bar via CSS variables:</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --nprogress-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#29d</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --nprogress-z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1031</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function D(h,m){const l=n("NpmBadge"),r=n("ExternalLinkIcon");return p(),t("div",null,[d,a(l,{package:"@vuepress/plugin-nprogress"}),s("p",null,[e("Integrate "),s("a",u,[e("nprogress"),a(r)]),e(" into VuePress, which can provide a progress bar when navigating to another page.")]),g])}const y=o(c,[["render",D],["__file","nprogress.html.vue"]]),b=JSON.parse('{"path":"/plugins/nprogress.html","title":"nprogress","lang":"en-US","frontmatter":{"title":"nprogress"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Styles","slug":"styles","link":"#styles","children":[]}],"git":{"updatedTime":1706605723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"filePathRelative":"plugins/nprogress.md"}');export{y as comp,b as data};
