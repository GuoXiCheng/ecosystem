import{_ as r,r as o,o as c,c as d,a as s,b as e,d as l,w as a,e as t}from"./app-OmzTsp-1.js";const u={},h=e("h1",{id:"frontmatter",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frontmatter"},[e("span",null,"Frontmatter")])],-1),m=e("h2",{id:"all-pages",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#all-pages"},[e("span",null,"All Pages")])],-1),D=e("p",null,"Frontmatter in this section will take effect in all types of pages.",-1),g=e("h3",{id:"externallinkicon",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#externallinkicon"},[e("span",null,"externalLinkIcon")])],-1),v=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),f=e("p",null,"Details:",-1),b=e("p",null,"Also see:",-1),y=e("h3",{id:"navbar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#navbar"},[e("span",null,"navbar")])],-1),_=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),k=e("li",null,[e("p",null,"Details:"),e("p",null,"Show navbar on this page or not."),e("p",null,"If you disable navbar in theme config, this frontmatter will not take effect.")],-1),x=e("p",null,"Also see:",-1),C=t(`<h3 id="pageclass" tabindex="-1"><a class="header-anchor" href="#pageclass"><span>pageClass</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Add extra class name to this page.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">pageClass</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">custom-page-class</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then you can customize styles of this page in <code>.vuepress/styles/index.scss</code> file:</p><div class="language-scss line-numbers-mode" data-ext="scss" data-title="scss"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D7BA7D;">.theme-container.custom-page-class</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#6A9955;">  /* page styles */</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),E=t(`<h2 id="home-page" tabindex="-1"><a class="header-anchor" href="#home-page"><span>Home Page</span></a></h2><p>Frontmatter in this section will only take effect in home pages.</p><h3 id="home" tabindex="-1"><a class="header-anchor" href="#home"><span>home</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Specify whether the page is homepage or a normal page.</p><p>If you don&#39;t set this frontmatter or set it to <code>false</code>, the page would be a <a href="#normal-page">normal page</a>.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">home</span><span style="color:#D4D4D4;">: </span><span style="color:#569CD6;">true</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="heroimage" tabindex="-1"><a class="header-anchor" href="#heroimage"><span>heroImage</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the url of the hero image.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#6A9955;"># public file path</span></span>
<span class="line"><span style="color:#569CD6;">heroImage</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/images/hero.png</span></span>
<span class="line"><span style="color:#6A9955;"># url</span></span>
<span class="line"><span style="color:#569CD6;">heroImage</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://vuejs.org/images/logo.png</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),T={href:"https://v2.vuepress.vuejs.org/guide/assets.html#public-files",target:"_blank",rel:"noopener noreferrer"},A=e("h3",{id:"heroimagedark",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#heroimagedark"},[e("span",null,"heroImageDark")])],-1),w=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),S=e("li",null,[e("p",null,"Details:"),e("p",null,"Specify the url of hero image to be used in dark mode."),e("p",null,"You can make use of this option if you want to use different heroImage config in dark mode.")],-1),L=e("p",null,"Also see:",-1),I=e("li",null,[e("a",{href:"#heroimage"},"Default Theme > Frontmatter > heroImage")],-1),N=t('<h3 id="heroalt" tabindex="-1"><a class="header-anchor" href="#heroalt"><span>heroAlt</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the <code>alt</code> attribute of the hero image.</p><p>This will fallback to the <a href="#herotext">heroText</a>.</p></li></ul><h3 id="heroheight" tabindex="-1"><a class="header-anchor" href="#heroheight"><span>heroHeight</span></a></h3>',3),P=e("li",null,[e("p",null,[l("Type: "),e("code",null,"number")])],-1),F=e("li",null,[e("p",null,[l("Default: "),e("code",null,"280")])],-1),H=e("p",null,"Details:",-1),j=e("p",null,[l("Specify the "),e("code",null,"height"),l(" attribute of the hero "),e("code",null,"<img>"),l(" tag.")],-1),B=e("p",null,"You may need to reduce this value if the height of your hero image is less than the default value.",-1),V={href:"https://web.dev/cls/",target:"_blank",rel:"noopener noreferrer"},M=e("h3",{id:"herotext",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#herotext"},[e("span",null,"heroText")])],-1),G=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string | null")])],-1),R=e("p",null,"Details:",-1),U=e("p",null,"Specify the the hero text.",-1),O={href:"https://v2.vuepress.vuejs.org/reference/config.html#title",target:"_blank",rel:"noopener noreferrer"},Y=e("p",null,[l("Set to "),e("code",null,"null"),l(" to disable hero text.")],-1),z=e("h3",{id:"tagline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tagline"},[e("span",null,"tagline")])],-1),J=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string | null")])],-1),q=e("p",null,"Details:",-1),K=e("p",null,"Specify the the tagline.",-1),Q={href:"https://v2.vuepress.vuejs.org/reference/config.html#description",target:"_blank",rel:"noopener noreferrer"},W=e("p",null,[l("Set to "),e("code",null,"null"),l(" to disable tagline.")],-1),X=t(`<h3 id="actions" tabindex="-1"><a class="header-anchor" href="#actions"><span>actions</span></a></h3><ul><li>Type:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">Array</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  text</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#9CDCFE;">  link</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#9CDCFE;">  type</span><span style="color:#D4D4D4;">?: </span><span style="color:#CE9178;">&#39;primary&#39;</span><span style="color:#D4D4D4;"> | </span><span style="color:#CE9178;">&#39;secondary&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Configuration of the action buttons.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">actions</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Get Started</span></span>
<span class="line"><span style="color:#569CD6;">    link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.html</span></span>
<span class="line"><span style="color:#569CD6;">    type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">primary</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Introduction</span></span>
<span class="line"><span style="color:#569CD6;">    link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/introduction.html</span></span>
<span class="line"><span style="color:#569CD6;">    type</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">secondary</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>features</span></a></h3><ul><li>Type:</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">Array</span><span style="color:#D4D4D4;">&lt;{</span></span>
<span class="line"><span style="color:#9CDCFE;">  title</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#9CDCFE;">  details</span><span style="color:#D4D4D4;">: </span><span style="color:#4EC9B0;">string</span></span>
<span class="line"><span style="color:#D4D4D4;">}&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Details:</p><p>Configuration of the features list.</p></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#569CD6;">features</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Simplicity First</span></span>
<span class="line"><span style="color:#569CD6;">    details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Minimal setup with markdown-centered project structure helps you focus on writing.</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Vue-Powered</span></span>
<span class="line"><span style="color:#569CD6;">    details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Enjoy the dev experience of Vue, use Vue components in markdown, and develop custom themes with Vue.</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#569CD6;">title</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Performant</span></span>
<span class="line"><span style="color:#569CD6;">    details</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>footer</span></a></h3><ul><li><p>Type: <code>string</code></p></li><li><p>Details:</p><p>Specify the content of the footer.</p></li></ul><h3 id="footerhtml" tabindex="-1"><a class="header-anchor" href="#footerhtml"><span>footerHtml</span></a></h3><ul><li><p>Type: <code>boolean</code></p></li><li><p>Details:</p><p>Allow HTML in footer or not.</p><p>If you set it to <code>true</code>, the <a href="#footer">footer</a> will be treated as HTML code.</p></li></ul><h2 id="normal-page" tabindex="-1"><a class="header-anchor" href="#normal-page"><span>Normal Page</span></a></h2><p>Frontmatter in this section will only take effect in normal pages.</p><h3 id="editlink" tabindex="-1"><a class="header-anchor" href="#editlink"><span>editLink</span></a></h3>`,17),Z=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),$=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Enable the "),e("em",null,"edit this page"),l(" link in this page or not.")])],-1),ee=e("p",null,"Also see:",-1),le=e("h3",{id:"editlinkpattern",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#editlinkpattern"},[e("span",null,"editLinkPattern")])],-1),se=e("li",null,[e("p",null,[l("Type: "),e("code",null,"string")])],-1),ne=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Specify the pattern of the "),e("em",null,"edit this page"),l(" link of this page.")])],-1),ae=e("p",null,"Also see:",-1),te=e("h3",{id:"lastupdated",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lastupdated"},[e("span",null,"lastUpdated")])],-1),ie=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),oe=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Enable the "),e("em",null,"last updated timestamp"),l(" in this page or not.")])],-1),pe=e("p",null,"Also see:",-1),re=e("h3",{id:"contributors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributors"},[e("span",null,"contributors")])],-1),ce=e("li",null,[e("p",null,[l("Type: "),e("code",null,"boolean")])],-1),de=e("li",null,[e("p",null,"Details:"),e("p",null,[l("Enable the "),e("em",null,"contributors list"),l(" in this page or not.")])],-1),ue=e("p",null,"Also see:",-1),he=e("h3",{id:"sidebar",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sidebar"},[e("span",null,"sidebar")])],-1),me=e("li",null,[e("p",null,[l("Type: "),e("code",null,"false | 'auto' | SidebarConfigArray | SidebarConfigObject")])],-1),De=e("li",null,[e("p",null,"Details:"),e("p",null,"Configure the sidebar of this page.")],-1),ge=e("p",null,"Also see:",-1),ve=e("h3",{id:"sidebardepth",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sidebardepth"},[e("span",null,"sidebarDepth")])],-1),fe=e("li",null,[e("p",null,[l("Type: "),e("code",null,"number")])],-1),be=e("li",null,[e("p",null,"Details:"),e("p",null,"Configure the sidebar depth of this page.")],-1),ye=e("p",null,"Also see:",-1),_e=t(`<h3 id="prev" tabindex="-1"><a class="header-anchor" href="#prev"><span>prev</span></a></h3><ul><li><p>Type: <code>NavLink | string</code></p></li><li><p>Details:</p><p>Specify the link of the previous page.</p><p>If you don&#39;t set this frontmatter, the link will be inferred from the sidebar config.</p><p>To configure the prev link manually, you can set this frontmatter to a <code>NavLink</code> object or a string:</p><ul><li>A <code>NavLink</code> object should have a <code>text</code> field and a <code>link</code> field.</li><li>A string should be the path to the target page file. It will be converted to a <code>NavLink</code> object, whose <code>text</code> is the page title, and <code>link</code> is the page route path.</li></ul></li><li><p>Example:</p></li></ul><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"><span style="color:#6A9955;"># NavLink</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#569CD6;">  text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">Get Started</span></span>
<span class="line"><span style="color:#569CD6;">  link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.html</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># NavLink - external url</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">:</span></span>
<span class="line"><span style="color:#569CD6;">  text</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">GitHub</span></span>
<span class="line"><span style="color:#569CD6;">  link</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">https://github.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># string - page file path</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">/guide/getting-started.md</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># string - page file relative path</span></span>
<span class="line"><span style="color:#569CD6;">prev</span><span style="color:#D4D4D4;">: </span><span style="color:#CE9178;">../../guide/getting-started.md</span></span>
<span class="line"><span style="color:#D4D4D4;">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="next" tabindex="-1"><a class="header-anchor" href="#next"><span>next</span></a></h3><ul><li><p>Type: <code>NavLink | string</code></p></li><li><p>Details:</p><p>Specify the link of the next page.</p><p>If you don&#39;t set this frontmatter, the link will be inferred from the sidebar config.</p><p>The type is the same as <a href="#prev">prev</a> frontmatter.</p></li></ul>`,5);function ke(xe,Ce){const p=o("NpmBadge"),n=o("RouteLink"),i=o("ExternalLinkIcon");return c(),d("div",null,[h,s(p,{package:"@vuepress/theme-default"}),m,D,g,e("ul",null,[v,e("li",null,[f,e("p",null,[l("Provided by "),s(n,{to:"/plugins/external-link-icon.html#externallinkicon"},{default:a(()=>[l("@vuepress/plugin-external-link-icon")]),_:1}),l(".")])]),e("li",null,[b,e("ul",null,[e("li",null,[s(n,{to:"/themes/default/config.html#themeplugins-externallinkicon"},{default:a(()=>[l("Default Theme > Config Reference > themePlugins.externalLinkIcon")]),_:1})])])])]),y,e("ul",null,[_,k,e("li",null,[x,e("ul",null,[e("li",null,[s(n,{to:"/themes/default/config.html#navbar"},{default:a(()=>[l("Default Theme > Config > navbar")]),_:1})])])])]),C,e("ul",null,[e("li",null,[l("Also see: "),e("ul",null,[e("li",null,[s(n,{to:"/themes/default/styles.html#style-file"},{default:a(()=>[l("Default Theme > Styles > Style File")]),_:1})])])])]),E,e("ul",null,[e("li",null,[l("Also see: "),e("ul",null,[e("li",null,[e("a",T,[l("Guide > Assets > Public Files"),s(i)])])])])]),A,e("ul",null,[w,S,e("li",null,[L,e("ul",null,[I,e("li",null,[s(n,{to:"/themes/default/config.html#colormode"},{default:a(()=>[l("Default Theme > Config > colorMode")]),_:1})])])])]),N,e("ul",null,[P,F,e("li",null,[H,j,B,e("p",null,[l("Notice that the height is also constrained by CSS. This attribute is to reduce "),e("a",V,[l("Cumulative Layout Shift (CLS)"),s(i)]),l(" that caused by the loading of the hero image.")])])]),M,e("ul",null,[G,e("li",null,[R,U,e("p",null,[l("This will fallback to the site "),e("a",O,[l("title"),s(i)]),l(".")]),Y])]),z,e("ul",null,[J,e("li",null,[q,K,e("p",null,[l("This will fallback to the site "),e("a",Q,[l("description"),s(i)]),l(".")]),W])]),X,e("ul",null,[Z,$,e("li",null,[ee,e("ul",null,[e("li",null,[s(n,{to:"/themes/default/config.html#editlink"},{default:a(()=>[l("Default Theme > Config > editLink")]),_:1})])])])]),le,e("ul",null,[se,ne,e("li",null,[ae,e("ul",null,[e("li",null,[s(n,{to:"/themes/default/config.html#editlinkpattern"},{default:a(()=>[l("Default Theme > Config > editLinkPattern")]),_:1})])])])]),te,e("ul",null,[ie,oe,e("li",null,[pe,e("ul",null,[e("li",null,[s(n,{to:"/themes/default/config.html#lastupdated"},{default:a(()=>[l("Default Theme > Config > lastUpdated")]),_:1})])])])]),re,e("ul",null,[ce,de,e("li",null,[ue,e("ul",null,[e("li",null,[s(n,{to:"/themes/default/config.html#contributors"},{default:a(()=>[l("Default Theme > Config > contributors")]),_:1})])])])]),he,e("ul",null,[me,De,e("li",null,[ge,e("ul",null,[e("li",null,[s(n,{to:"/themes/default/config.html#sidebar"},{default:a(()=>[l("Default Theme > Config > sidebar")]),_:1})])])])]),ve,e("ul",null,[fe,be,e("li",null,[ye,e("ul",null,[e("li",null,[s(n,{to:"/themes/default/config.html#sidebardepth"},{default:a(()=>[l("Default Theme > Config > sidebarDepth")]),_:1})])])])]),_e])}const Te=r(u,[["render",ke],["__file","frontmatter.html.vue"]]),Ae=JSON.parse('{"path":"/themes/default/frontmatter.html","title":"Frontmatter","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"All Pages","slug":"all-pages","link":"#all-pages","children":[{"level":3,"title":"externalLinkIcon","slug":"externallinkicon","link":"#externallinkicon","children":[]},{"level":3,"title":"navbar","slug":"navbar","link":"#navbar","children":[]},{"level":3,"title":"pageClass","slug":"pageclass","link":"#pageclass","children":[]}]},{"level":2,"title":"Home Page","slug":"home-page","link":"#home-page","children":[{"level":3,"title":"home","slug":"home","link":"#home","children":[]},{"level":3,"title":"heroImage","slug":"heroimage","link":"#heroimage","children":[]},{"level":3,"title":"heroImageDark","slug":"heroimagedark","link":"#heroimagedark","children":[]},{"level":3,"title":"heroAlt","slug":"heroalt","link":"#heroalt","children":[]},{"level":3,"title":"heroHeight","slug":"heroheight","link":"#heroheight","children":[]},{"level":3,"title":"heroText","slug":"herotext","link":"#herotext","children":[]},{"level":3,"title":"tagline","slug":"tagline","link":"#tagline","children":[]},{"level":3,"title":"actions","slug":"actions","link":"#actions","children":[]},{"level":3,"title":"features","slug":"features","link":"#features","children":[]},{"level":3,"title":"footer","slug":"footer","link":"#footer","children":[]},{"level":3,"title":"footerHtml","slug":"footerhtml","link":"#footerhtml","children":[]}]},{"level":2,"title":"Normal Page","slug":"normal-page","link":"#normal-page","children":[{"level":3,"title":"editLink","slug":"editlink","link":"#editlink","children":[]},{"level":3,"title":"editLinkPattern","slug":"editlinkpattern","link":"#editlinkpattern","children":[]},{"level":3,"title":"lastUpdated","slug":"lastupdated","link":"#lastupdated","children":[]},{"level":3,"title":"contributors","slug":"contributors","link":"#contributors","children":[]},{"level":3,"title":"sidebar","slug":"sidebar","link":"#sidebar","children":[]},{"level":3,"title":"sidebarDepth","slug":"sidebardepth","link":"#sidebardepth","children":[]},{"level":3,"title":"prev","slug":"prev","link":"#prev","children":[]},{"level":3,"title":"next","slug":"next","link":"#next","children":[]}]}],"git":{"updatedTime":1706625181000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"filePathRelative":"themes/default/frontmatter.md"}');export{Te as comp,Ae as data};
