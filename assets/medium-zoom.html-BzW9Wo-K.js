import{_ as p,r as o,o as c,c as t,a as e,b as s,d as n,e as a}from"./app-BcH8wZQx.js";const r={},d=s("h1",{id:"medium-zoom",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#medium-zoom"},[s("span",null,"medium-zoom")])],-1),m={href:"https://github.com/francoischalifour/medium-zoom#readme",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>该插件已经集成到默认主题中。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i -D @vuepress/plugin-medium-zoom@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">mediumZoomPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-medium-zoom&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    mediumZoomPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="selector" tabindex="-1"><a class="header-anchor" href="#selector"><span>selector</span></a></h3><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>&#39;:not(a) &gt; img&#39;</code></p></li><li><p>详情：</p><p>可缩放的图片的选择器。</p><p>默认情况下，该插件会使 <code>&lt;a&gt;</code> 标签以外的所有图片都支持缩放。</p></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>500</code></p></li><li><p>详情：</p><p>以毫秒为单位的延迟。</p><p>在切换路由进入一个新页面时，该插件会在一定延迟后才使页面内的图片支持缩放。</p></li></ul><h3 id="zoomoptions" tabindex="-1"><a class="header-anchor" href="#zoomoptions"><span>zoomOptions</span></a></h3>`,10),D=s("li",null,[s("p",null,[n("类型： "),s("code",null,"Object")])],-1),h=s("li",null,[s("p",null,"详情："),s("p",null,"medium-zoom 的配置项。")],-1),v=s("p",null,"参考：",-1),y={href:"https://github.com/francoischalifour/medium-zoom#options",target:"_blank",rel:"noopener noreferrer"},b=a(`<h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2><p>你可以通过 <a href="#zoomoptions">zoomOptions</a> 对大部分的缩放样式进行自定义，不过作为补充，该插件同样提供了一些 CSS 变量：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --medium-zoom-z-index</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">100</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --medium-zoom-bg-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#ffffff</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#9CDCFE;">  --medium-zoom-opacity</span><span style="color:#D4D4D4;">: </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api"><span>Composition API</span></a></h2><h3 id="usemediumzoom" tabindex="-1"><a class="header-anchor" href="#usemediumzoom"><span>useMediumZoom</span></a></h3>`,5),C=s("p",null,"详情：",-1),_=s("code",null,"Zoom",-1),g={href:"https://github.com/francoischalifour/medium-zoom#methods",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,"该插件会在切换路由进入当前页面时使图片支持缩放。但如果你要动态添加新图片，那么你可能就需要这个方法来让这些新图片也支持缩放。",-1),z=s("p",null,[n("该插件在 "),s("code",null,"Zoom"),n(" 实例上额外添加了一个 "),s("code",null,"refresh"),n(" 方法，它将使用 "),s("a",{href:"#selector"},"selector"),n(" 作为默认参数，先调用 "),s("code",null,"zoom.detach()"),n(" 再调用 "),s("code",null,"zoom.attach()"),n(" ，便于你快速刷新当前页面图片的缩放状态。")],-1),k=s("li",null,[s("p",null,"示例：")],-1),E=a(`<div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">nextTick</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;vue&#39;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">useMediumZoom</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-medium-zoom/client&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#DCDCAA;">  setup</span><span style="color:#D4D4D4;">() {</span></span>
<span class="line"><span style="color:#569CD6;">    const</span><span style="color:#4FC1FF;"> zoom</span><span style="color:#D4D4D4;"> = </span><span style="color:#DCDCAA;">useMediumZoom</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // ... 进行了一些操作，在当前页面添加了新的图片</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">    // 此时你可能需要手动调用 \`refresh\` 来让这些新图片支持缩放</span></span>
<span class="line"><span style="color:#DCDCAA;">    nextTick</span><span style="color:#D4D4D4;">(() </span><span style="color:#569CD6;">=&gt;</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">      zoom</span><span style="color:#D4D4D4;">.</span><span style="color:#DCDCAA;">refresh</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">    })</span></span>
<span class="line"><span style="color:#D4D4D4;">  },</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function x(A,F){const i=o("NpmBadge"),l=o("ExternalLinkIcon");return c(),t("div",null,[d,e(i,{package:"@vuepress/plugin-medium-zoom"}),s("p",null,[n("将 "),s("a",m,[n("medium-zoom"),e(l)]),n(" 集成到 VuePress 中，为图片提供可缩放的功能。")]),u,s("ul",null,[D,h,s("li",null,[v,s("ul",null,[s("li",null,[s("a",y,[n("medium-zoom > Options"),e(l)])])])])]),b,s("ul",null,[s("li",null,[C,s("p",null,[n("返回该插件使用的 "),_,n(" 实例，便于你直接使用实例上的 "),s("a",g,[n("methods"),e(l)]),n(" 。")]),f,z]),k]),E])}const B=p(r,[["render",x],["__file","medium-zoom.html.vue"]]),N=JSON.parse('{"path":"/zh/plugins/medium-zoom.html","title":"medium-zoom","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"selector","slug":"selector","link":"#selector","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]},{"level":3,"title":"zoomOptions","slug":"zoomoptions","link":"#zoomoptions","children":[]}]},{"level":2,"title":"样式","slug":"样式","link":"#样式","children":[]},{"level":2,"title":"Composition API","slug":"composition-api","link":"#composition-api","children":[{"level":3,"title":"useMediumZoom","slug":"usemediumzoom","link":"#usemediumzoom","children":[]}]}],"git":{"updatedTime":1706605723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"filePathRelative":"zh/plugins/medium-zoom.md"}');export{B as comp,N as data};
