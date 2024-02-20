import{_ as a,r as s,o as p,c as n,b as e,d as l,a as o,w as r,e as t}from"./app-BcH8wZQx.js";const d={},c=t('<h1 id="config" tabindex="-1"><a class="header-anchor" href="#config"><span>Config</span></a></h1><h2 id="hostname" tabindex="-1"><a class="header-anchor" href="#hostname"><span>hostname</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Required: Yes</p></li><li><p>Details:</p><p>The domain name where the current site is deployed, the plugin needs this option to work.</p></li></ul><h2 id="extraurls" tabindex="-1"><a class="header-anchor" href="#extraurls"><span>extraUrls</span></a></h2><ul><li><p>Type: <code>string[]</code></p></li><li><p>Details:</p><p>Extra link to be included.</p><p>If you have some links not including in VuePress Router (normally in public directory or generated by other tools directly), you may need this option.</p></li><li><p>Example: <code>[&#39;/about.html&#39;, &#39;/api/&#39;]</code></p></li></ul><h2 id="excludepaths" tabindex="-1"><a class="header-anchor" href="#excludepaths"><span>excludePaths</span></a></h2><ul><li><p>Type: <code>string[]</code></p></li><li><p>Default: <code>[&#39;/404.html&#39;]</code></p></li><li><p>Details:</p><p>Urls excluding from sitemap, starting with absolute path.</p><p>By default, all the urls generated by VuePress (excluding 404 page) will be added into sitemap.</p></li></ul><h2 id="devserver" tabindex="-1"><a class="header-anchor" href="#devserver"><span>devServer</span></a></h2><ul><li><p>Type: <code>boolean</code></p></li><li><p>Default: <code>false</code></p></li><li><p>Details:</p><p>Whether enabled in devServer.</p></li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>For performance reasons, we do not provide hot reload. Reboot your devServer to sync your changes.</p></div><h2 id="devhostname" tabindex="-1"><a class="header-anchor" href="#devhostname"><span>devHostname</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default: <code>&quot;http://localhost:${port}&quot;</code></p></li><li><p>Details:</p><p>Hostname to use in devServer</p></li></ul><h2 id="sitemapfilename" tabindex="-1"><a class="header-anchor" href="#sitemapfilename"><span>sitemapFilename</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default value: <code>&quot;sitemap.xml&quot;</code></p></li><li><p>Details:</p><p>The output filename, relative to output directory.</p></li></ul><h2 id="sitemapxslfilename" tabindex="-1"><a class="header-anchor" href="#sitemapxslfilename"><span>sitemapXSLFilename</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default value: <code>&quot;sitemap.xsl&quot;</code></p></li><li><p>Details:</p><p>Output xsl filename, relative to dest folder.</p></li></ul><h2 id="sitemapxsltemplate" tabindex="-1"><a class="header-anchor" href="#sitemapxsltemplate"><span>sitemapXSLTemplate</span></a></h2><ul><li><p>Type: <code>string</code></p></li><li><p>Default value: <code>&quot;@vuepress/plugin-sitemap/templates/sitemap.xsl&quot;</code></p></li><li><p>Details:</p><p>XSL content used as template.</p></li></ul><h2 id="changefreq" tabindex="-1"><a class="header-anchor" href="#changefreq"><span>changefreq</span></a></h2>',19),h=e("li",null,[e("p",null,[l("Type: "),e("code",null,'"always" | "hourly" | "daily" | "weekly" |"monthly" | "yearly" | "never"')])],-1),u=e("li",null,[e("p",null,[l("Default value: "),e("code",null,'"daily"')])],-1),m=e("p",null,"Details:",-1),f=t('<h2 id="priority" tabindex="-1"><a class="header-anchor" href="#priority"><span>priority</span></a></h2><ul><li><p>Type: <code>number</code></p></li><li><p>Default: <code>0.5</code></p></li><li><p>Details:</p><p>Page priority, from <code>0</code> to <code>1</code>.</p></li></ul><h2 id="modifytimegetter" tabindex="-1"><a class="header-anchor" href="#modifytimegetter"><span>modifyTimeGetter</span></a></h2><ul><li><p>Type: <code>(page: Page, app: App) =&gt; string</code></p></li><li><p>Details:</p><p>Last modify time getter. By default, the plugin will use the timestamp generated by git plugin.</p></li></ul>',4);function g(v,y){const i=s("RouteLink");return p(),n("div",null,[c,e("ul",null,[h,u,e("li",null,[m,e("p",null,[l("Page default update frequency, will be overridden by "),o(i,{to:"/plugins/sitemap/frontmatter.html#sitemap-changefreq"},{default:r(()=>[l("sitemap.changefreq")]),_:1}),l(" in Frontmatter.")])])]),f])}const b=a(d,[["render",g],["__file","config.html.vue"]]),_=JSON.parse('{"path":"/plugins/sitemap/config.html","title":"Config","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"hostname","slug":"hostname","link":"#hostname","children":[]},{"level":2,"title":"extraUrls","slug":"extraurls","link":"#extraurls","children":[]},{"level":2,"title":"excludePaths","slug":"excludepaths","link":"#excludepaths","children":[]},{"level":2,"title":"devServer","slug":"devserver","link":"#devserver","children":[]},{"level":2,"title":"devHostname","slug":"devhostname","link":"#devhostname","children":[]},{"level":2,"title":"sitemapFilename","slug":"sitemapfilename","link":"#sitemapfilename","children":[]},{"level":2,"title":"sitemapXSLFilename","slug":"sitemapxslfilename","link":"#sitemapxslfilename","children":[]},{"level":2,"title":"sitemapXSLTemplate","slug":"sitemapxsltemplate","link":"#sitemapxsltemplate","children":[]},{"level":2,"title":"changefreq","slug":"changefreq","link":"#changefreq","children":[]},{"level":2,"title":"priority","slug":"priority","link":"#priority","children":[]},{"level":2,"title":"modifyTimeGetter","slug":"modifytimegetter","link":"#modifytimegetter","children":[]}],"git":{"updatedTime":1706723991000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":3}]},"filePathRelative":"plugins/sitemap/config.md"}');export{b as comp,_ as data};
