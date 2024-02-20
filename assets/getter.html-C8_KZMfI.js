import{_ as s,o as n,c as e,e as a}from"./app-BcH8wZQx.js";const l={},t=a(`<h1 id="feed-getter" tabindex="-1"><a class="header-anchor" href="#feed-getter"><span>Feed Getter</span></a></h1><p>You can take full control of feed items generation by setting <code>getter</code> in the plugin options.</p><h2 id="getter-title" tabindex="-1"><a class="header-anchor" href="#getter-title"><span>getter.title</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; string</code></li></ul><p>Item title getter</p><h2 id="getter-link" tabindex="-1"><a class="header-anchor" href="#getter-link"><span>getter.link</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; string</code></li></ul><p>Item link getter</p><h2 id="getter-description" tabindex="-1"><a class="header-anchor" href="#getter-description"><span>getter.description</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; string | undefined</code></li></ul><p>Item description getter</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Due to Atom support HTML in summary, so you can return HTML content here if possible, but the content must start with mark <code>html:</code>.</p></div><h2 id="getter-content" tabindex="-1"><a class="header-anchor" href="#getter-content"><span>getter.content</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; string</code></li></ul><p>Item content getter</p><h2 id="getter-author" tabindex="-1"><a class="header-anchor" href="#getter-author"><span>getter.author</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; FeedAuthor[]</code></li></ul><p>Item author getter.</p><div class="custom-container tip"><p class="custom-container-title">The getter should return an empty array when author information is missing.</p></div><details class="custom-container details"><summary>FeedAuthor format</summary><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> FeedAuthor</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Author name</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Author email</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  email</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Author site</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> json format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  url</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Author avatar</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> json format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  avatar</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-category" tabindex="-1"><a class="header-anchor" href="#getter-category"><span>getter.category</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; FeedCategory[] | undefined</code></li></ul><p>Item category getter.</p><details class="custom-container details"><summary>FeedCategory format</summary><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> FeedCategory</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Category Name</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * A string that identifies a categorization taxonomy</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> rss format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  domain</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * the categorization scheme via a URI</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> atom format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  scheme</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-enclosure" tabindex="-1"><a class="header-anchor" href="#getter-enclosure"><span>getter.enclosure</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; FeedEnclosure | undefined</code></li></ul><p>Item enclosure getter.</p><details class="custom-container details"><summary>FeedEnclosure format</summary><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> FeedEnclosure</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Enclosure link</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  url</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * what its type is</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> should be a standard MIME Type, rss format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  Type</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Size in bytes</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> rss format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  length</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">number</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-publishdate" tabindex="-1"><a class="header-anchor" href="#getter-publishdate"><span>getter.publishDate</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; Date | undefined</code></li></ul><p>Item release date getter</p><h2 id="getter-lastupdatedate" tabindex="-1"><a class="header-anchor" href="#getter-lastupdatedate"><span>getter.lastUpdateDate</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; Date</code></li></ul><p>Item last update date getter</p><h2 id="getter-image" tabindex="-1"><a class="header-anchor" href="#getter-image"><span>getter.image</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; string</code></li></ul><p>Item Image Getter</p><div class="custom-container tip"><p class="custom-container-title">Ensure it&#39;s returning a full URL</p></div><h2 id="getter-contributor" tabindex="-1"><a class="header-anchor" href="#getter-contributor"><span>getter.contributor</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; FeedContributor[]</code></li></ul><p>Item Contributor Getter</p><div class="custom-container tip"><p class="custom-container-title">The getter should return an empty array when contributor information is missing.</p></div><details class="custom-container details"><summary>FeedContributor format</summary><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#569CD6;">interface</span><span style="color:#4EC9B0;"> FeedContributor</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Author name</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  name</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Author email</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  email</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Author site</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> json format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  url</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">  /**</span></span>
<span class="line"><span style="color:#6A9955;">   * Author avatar</span></span>
<span class="line"><span style="color:#6A9955;">   *</span></span>
<span class="line"><span style="color:#6A9955;">   * </span><span style="color:#569CD6;">@description</span><span style="color:#6A9955;"> json format only</span></span>
<span class="line"><span style="color:#6A9955;">   */</span></span>
<span class="line"><span style="color:#9CDCFE;">  avatar</span><span style="color:#D4D4D4;">?: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="getter-copyright" tabindex="-1"><a class="header-anchor" href="#getter-copyright"><span>getter.copyright</span></a></h2><ul><li>Type: <code>(page: Page) =&gt; string | undefined</code></li></ul><p>Item copyright getter</p>`,46),i=[t];function p(r,c){return n(),e("div",null,i)}const d=s(l,[["render",p],["__file","getter.html.vue"]]),u=JSON.parse('{"path":"/plugins/feed/getter.html","title":"Feed Getter","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"getter.title","slug":"getter-title","link":"#getter-title","children":[]},{"level":2,"title":"getter.link","slug":"getter-link","link":"#getter-link","children":[]},{"level":2,"title":"getter.description","slug":"getter-description","link":"#getter-description","children":[]},{"level":2,"title":"getter.content","slug":"getter-content","link":"#getter-content","children":[]},{"level":2,"title":"getter.author","slug":"getter-author","link":"#getter-author","children":[]},{"level":2,"title":"getter.category","slug":"getter-category","link":"#getter-category","children":[]},{"level":2,"title":"getter.enclosure","slug":"getter-enclosure","link":"#getter-enclosure","children":[]},{"level":2,"title":"getter.publishDate","slug":"getter-publishdate","link":"#getter-publishdate","children":[]},{"level":2,"title":"getter.lastUpdateDate","slug":"getter-lastupdatedate","link":"#getter-lastupdatedate","children":[]},{"level":2,"title":"getter.image","slug":"getter-image","link":"#getter-image","children":[]},{"level":2,"title":"getter.contributor","slug":"getter-contributor","link":"#getter-contributor","children":[]},{"level":2,"title":"getter.copyright","slug":"getter-copyright","link":"#getter-copyright","children":[]}],"git":{"updatedTime":1706762763000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"filePathRelative":"plugins/feed/getter.md"}');export{d as comp,u as data};
