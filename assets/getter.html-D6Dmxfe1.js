import{_ as s,o as n,c as e,e as a}from"./app-OmzTsp-1.js";const l={},i=a(`<h1 id="feed-获取器" tabindex="-1"><a class="header-anchor" href="#feed-获取器"><span>Feed 获取器</span></a></h1><p>你可以通过控制插件选项中的 <code>getter</code> 来完全控制 Feed 项目的生成。</p><h2 id="getter-title" tabindex="-1"><a class="header-anchor" href="#getter-title"><span>getter.title</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; string</code></li></ul><p>项目标题获取器</p><h2 id="getter-link" tabindex="-1"><a class="header-anchor" href="#getter-link"><span>getter.link</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; string</code></li></ul><p>项目链接获取器</p><h2 id="getter-description" tabindex="-1"><a class="header-anchor" href="#getter-description"><span>getter.description</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; string | undefined</code></li></ul><p>项目描述获取器</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>因为 Atom 在摘要中支持 HTML，所以如果可能的话，你可以在这里返回 HTML 内容，但内容必须以标记 <code>html:</code> 开头。</p></div><h2 id="getter-content" tabindex="-1"><a class="header-anchor" href="#getter-content"><span>getter.content</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; string</code></li></ul><p>项目内容获取器</p><h2 id="getter-author" tabindex="-1"><a class="header-anchor" href="#getter-author"><span>getter.author</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; FeedAuthor[]</code></li></ul><p>项目作者获取器。</p><div class="custom-container tip"><p class="custom-container-title">获取器应在作者信息缺失时返回空数组。</p></div><details class="custom-container details"><summary>FeedAuthor 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> FeedAuthor</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 作者名字</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 作者邮件</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  email</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 作者网站</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> json format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  url</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 作者头像</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> json format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  avatar</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-category" tabindex="-1"><a class="header-anchor" href="#getter-category"><span>getter.category</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; FeedCategory[] | undefined</code></li></ul><p>项目分类获取器。</p><details class="custom-container details"><summary>FeedCategory 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> FeedCategory</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 分类名称</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 标识分类法的字符串</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> rss format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  domain</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * URI 标识的分类 scheme</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> atom format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  scheme</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-enclosure" tabindex="-1"><a class="header-anchor" href="#getter-enclosure"><span>getter.enclosure</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; FeedEnclosure | undefined</code></li></ul><p>项目附件获取器。</p><details class="custom-container details"><summary>FeedEnclosure 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> FeedEnclosure</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Enclosure 地址</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  url</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 类型</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> 应为一个标准的 MIME 类型，rss format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 按照字节数计算的大小</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> rss format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  length</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-publishdate" tabindex="-1"><a class="header-anchor" href="#getter-publishdate"><span>getter.publishDate</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; Date | undefined</code></li></ul><p>项目发布日期获取器</p><h2 id="getter-lastupdatedate" tabindex="-1"><a class="header-anchor" href="#getter-lastupdatedate"><span>getter.lastUpdateDate</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; Date</code></li></ul><p>项目最后更新日期获取器</p><h2 id="getter-image" tabindex="-1"><a class="header-anchor" href="#getter-image"><span>getter.image</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; string</code></li></ul><p>项目图片获取器</p><div class="custom-container tip"><p class="custom-container-title">确保返回一个完整的 URL。</p></div><h2 id="getter-contributor" tabindex="-1"><a class="header-anchor" href="#getter-contributor"><span>getter.contributor</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; FeedContributor[]</code></li></ul><p>项目贡献者获取器</p><div class="custom-container tip"><p class="custom-container-title">获取器应在贡献者信息缺失时返回空数组。</p></div><details class="custom-container details"><summary>FeedContributor 格式</summary><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> FeedContributor</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 作者名字</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 作者邮件</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  email</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 作者网站</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> json format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  url</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * 作者头像</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> json format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  avatar</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-copyright" tabindex="-1"><a class="header-anchor" href="#getter-copyright"><span>getter.copyright</span></a></h2><ul><li>类型：<code>(page: Page) =&gt; string | undefined</code></li></ul><p>项目版权获取器</p>`,46),t=[i];function p(r,c){return n(),e("div",null,t)}const d=s(l,[["render",p],["__file","getter.html.vue"]]),u=JSON.parse('{"path":"/zh/plugins/feed/getter.html","title":"Feed 获取器","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"getter.title","slug":"getter-title","link":"#getter-title","children":[]},{"level":2,"title":"getter.link","slug":"getter-link","link":"#getter-link","children":[]},{"level":2,"title":"getter.description","slug":"getter-description","link":"#getter-description","children":[]},{"level":2,"title":"getter.content","slug":"getter-content","link":"#getter-content","children":[]},{"level":2,"title":"getter.author","slug":"getter-author","link":"#getter-author","children":[]},{"level":2,"title":"getter.category","slug":"getter-category","link":"#getter-category","children":[]},{"level":2,"title":"getter.enclosure","slug":"getter-enclosure","link":"#getter-enclosure","children":[]},{"level":2,"title":"getter.publishDate","slug":"getter-publishdate","link":"#getter-publishdate","children":[]},{"level":2,"title":"getter.lastUpdateDate","slug":"getter-lastupdatedate","link":"#getter-lastupdatedate","children":[]},{"level":2,"title":"getter.image","slug":"getter-image","link":"#getter-image","children":[]},{"level":2,"title":"getter.contributor","slug":"getter-contributor","link":"#getter-contributor","children":[]},{"level":2,"title":"getter.copyright","slug":"getter-copyright","link":"#getter-copyright","children":[]}],"git":{"updatedTime":1706762763000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"filePathRelative":"zh/plugins/feed/getter.md"}');export{d as comp,u as data};
