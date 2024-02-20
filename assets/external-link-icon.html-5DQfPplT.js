import{_ as c,r as s,o as t,c as r,a as l,b as n,d as a,w as d,e}from"./app-BcH8wZQx.js";const D={},u=n("h1",{id:"external-link-icon",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#external-link-icon"},[n("span",null,"external-link-icon")])],-1),v=e(`<p>该插件已经集成到默认主题中。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#CE9178;"> i -D @vuepress/plugin-external-link-icon@next</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">externalLinkIconPlugin</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-external-link-icon&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    externalLinkIconPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#6A9955;">      // 配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选项" tabindex="-1"><a class="header-anchor" href="#选项"><span>选项</span></a></h2><h3 id="locales" tabindex="-1"><a class="header-anchor" href="#locales"><span>locales</span></a></h3><ul><li><p>类型： <code>Record&lt;string, { openInNewWindow: string }&gt;</code></p></li><li><p>详情：</p><p>外部链接图标在不同 locales 下的 A11y 文字。</p><p>如果没有指定该配置项，它会降级使用默认文字。</p></li><li><p>示例：</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#C586C0;"> default</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  plugins:</span><span style="color:#D4D4D4;"> [</span></span>
<span class="line"><span style="color:#DCDCAA;">    externalLinkIconPlugin</span><span style="color:#D4D4D4;">({</span></span>
<span class="line"><span style="color:#9CDCFE;">      locales:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">          openInNewWindow:</span><span style="color:#CE9178;"> &#39;open in new window&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#CE9178;">        &#39;/zh/&#39;</span><span style="color:#9CDCFE;">:</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">          openInNewWindow:</span><span style="color:#CE9178;"> &#39;在新窗口打开&#39;</span><span style="color:#D4D4D4;">,</span></span>
<span class="line"><span style="color:#D4D4D4;">        },</span></span>
<span class="line"><span style="color:#D4D4D4;">      },</span></span>
<span class="line"><span style="color:#D4D4D4;">    }),</span></span>
<span class="line"><span style="color:#D4D4D4;">  ],</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),h=e(`<h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2><h3 id="externallinkicon" tabindex="-1"><a class="header-anchor" href="#externallinkicon"><span>externalLinkIcon</span></a></h3><ul><li><p>类型： <code>boolean</code></p></li><li><p>详情：</p><p>是否在当前页面的外部链接的后面添加外部链接图标。</p></li></ul><h2 id="样式" tabindex="-1"><a class="header-anchor" href="#样式"><span>样式</span></a></h2><p>你可以通过 CSS 变量来自定义外部链接图标的样式：</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">:root</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">  --external-link-icon-color</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">#aaa</span><span style="color:#D4D4D4;">;</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><h3 id="externallinkicon-1" tabindex="-1"><a class="header-anchor" href="#externallinkicon-1"><span>ExternalLinkIcon</span></a></h3><ul><li><p>详情：</p><p>该插件会全局注册一个 <code>&lt;ExternalLinkIcon /&gt;</code> 组件，你可以不传入任何 Props 来使用它。</p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>该组件主要用于主题开发。在大多数情况下你不需要直接使用该组件。</p></div>`,10);function m(y,k){const i=s("NpmBadge"),o=s("ExternalLinkIcon"),p=s("RouteLink");return t(),r("div",null,[u,l(i,{package:"@vuepress/plugin-external-link-icon"}),n("p",null,[a("该插件会为你 Markdown 内容中的外部链接添加一个图标，即 "),l(o)]),v,n("ul",null,[n("li",null,[a("参考： "),n("ul",null,[n("li",null,[l(p,{to:"/guide/i18n.html"},{default:d(()=>[a("指南 > 多语言支持")]),_:1})])])])]),h])}const x=c(D,[["render",m],["__file","external-link-icon.html.vue"]]),C=JSON.parse('{"path":"/zh/plugins/external-link-icon.html","title":"external-link-icon","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[{"level":3,"title":"locales","slug":"locales","link":"#locales","children":[]}]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[{"level":3,"title":"externalLinkIcon","slug":"externallinkicon","link":"#externallinkicon","children":[]}]},{"level":2,"title":"样式","slug":"样式","link":"#样式","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[{"level":3,"title":"ExternalLinkIcon","slug":"externallinkicon-1","link":"#externallinkicon-1","children":[]}]}],"git":{"updatedTime":1707223547000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"filePathRelative":"zh/plugins/external-link-icon.md"}');export{x as comp,C as data};
