import{_ as r,r as l,o as c,c as i,b as s,d as e,a as o,w as p,e as a}from"./app-OmzTsp-1.js";const d={},f=a('<h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2><p>将你的 VuePress 站点变成渐进式网络应用程序 (PWA)<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>。</p>',3),u={href:"https://developers.google.com/web/tools/workbox/modules/workbox-build",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/yyx990803/register-service-worker",target:"_blank",rel:"noopener noreferrer"},D={class:"custom-container warning"},y=s("p",{class:"custom-container-title"},"注意",-1),v=a(`<p>A PWA uses a Service Worker <sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup> (SW for short) to cache and proxy site content.</p><p>一个 PWA 使用 Service Worker <sup class="footnote-ref"><a href="#footnote2">[2:1]</a><a class="footnote-anchor" id="footnote-ref2:1"></a></sup> (简称 SW) 来获取并托管网站内容。</p><h2 id="网络-app-清单" tabindex="-1"><a class="header-anchor" href="#网络-app-清单"><span>网络 App 清单</span></a></h2><p>为了使你的网站符合 PWA 的要求，一个网络 App 清单<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup>文件是必要的，并且你的 PWA 应满足可安装性<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup>要求。</p><p>你可以通过设置 <code>manifest</code> 选项来自定义 manifest 文件，或者在 public 文件夹中提供 <code>manifest.webmanifest</code> 或 <code>manifest.json</code>。前者优先级更高。</p><p>插件会自动为你生成 <code>manifest.webmanifest</code>，并在每个页面的 <code>&lt;head&gt;</code> 中添加清单链接声明，但是 <strong>你至少应该通过 <code>manifest.icons</code> 或 PWA 插件中的其他选项设置一个有效的图标。</strong></p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>可安装性<sup class="footnote-ref"><a href="#footnote4">[4:1]</a><a class="footnote-anchor" id="footnote-ref4:1"></a></sup>规范要求 manifest 中至少声明一个有效的图标。</p><p>所以如果你不配置 <code>manifest.icons</code>，访问者只能享受到 Service Worker 缓存带来的离线可访问性，而并不能作为 PWA 进行安装。</p></div><p>此外，该插件默认不处理清单中的任何内容，而是按原样输出。 这意味着，如果你计划部署到子目录，则应自行将 URL 前缀附加到自己的清单 Urls 中。如果你需要的所有东西都在 base 文件夹下，你可以在插件选项中设置 <code>appendBase: true</code> 让插件将 <code>base</code> 自动附加到任何地址。</p><h2 id="缓存控制" tabindex="-1"><a class="header-anchor" href="#缓存控制"><span>缓存控制</span></a></h2><p>为了更好的控制 Service Worker 可以预缓存的内容，插件提供了相关的缓存控制选项。</p><h3 id="默认缓存" tabindex="-1"><a class="header-anchor" href="#默认缓存"><span>默认缓存</span></a></h3><p>默认情况下插件会预缓存所有的 JS 和 CSS 文件，但仅缓存主页和 404 页面的 HTML。插件同时还会缓存字体文件 (woff, woff2, eot, ttf, otf) 和 SVG 图标。</p><h3 id="图片缓存" tabindex="-1"><a class="header-anchor" href="#图片缓存"><span>图片缓存</span></a></h3><p>如果你的站点只有少量重要图片，并希望它们在离线模式下显示，你可以通过设置 <code>cacheImage</code> 选项为 <code>true</code> 来缓存站点图片。</p><p>我们通过文件后缀名识别图片，任何以 <code>.png</code>, <code>.jpg</code>, <code>.jpeg</code>, <code>.gif</code>, <code>.bmp</code>, <code>.webp</code> 结尾的文件都会视为图片。</p><h3 id="html-缓存" tabindex="-1"><a class="header-anchor" href="#html-缓存"><span>HTML 缓存</span></a></h3><p>当你网站体积不大，并且希望文档完全离线可用时，你可以通过设置 <code>cacheHTML</code> 为 <code>true</code> 来缓存所有 HTML 页面。</p><div class="custom-container tip"><p class="custom-container-title">为什么默认不缓存非主页和 404 页面</p><p>虽然说 VuePress 为所有的页面通过 SSG<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup> 生成了 HTML 文件，但是这些文件主要用于 SEO<sup class="footnote-ref"><a href="#footnote6">[6]</a><a class="footnote-anchor" id="footnote-ref6"></a></sup>，并能够让你在后端不做 SPA<sup class="footnote-ref"><a href="#footnote7">[7]</a><a class="footnote-anchor" id="footnote-ref7"></a></sup> 配置的情况下能够直接访问任何链接。</p><p>VuePress 本质上是一个 SPA。这意味着你只需要缓存主页并从主页进入即可正常访问所有页面。所以默认不缓存其他 HTML 能够有效减小缓存大小 (可以缩减大约 40% 的体积)，加快 SW 更新速度。</p><p>但是这样做也有缺点，如果用户直接从非主页进入网站，首个页面的 HTML 文件仍需要从互联网加载。同时离线环境下，用户只能通过主页进入再自行导航到对应页面，直接访问某个链接会出现无法访问的提示。</p></div><h3 id="大小控制" tabindex="-1"><a class="header-anchor" href="#大小控制"><span>大小控制</span></a></h3><p>为了防止在预缓存列表中包含大文件，任何 &gt; 2 MB 的文件或 &gt; 1 MB 的图片都将被忽略。 你可以通过 <code>maxSize</code> 和 <code>maxImageSize</code> 来自定义大小限制 (单位为 KB)。</p><h2 id="更新控制" tabindex="-1"><a class="header-anchor" href="#更新控制"><span>更新控制</span></a></h2><p>我们提供 <code>update</code> 选项控制用户如何接收更新。</p><p><code>update</code> 选项的默认值是 <code>&quot;available&quot;</code>，这意味着当网站内容更新后，新的 SW 会在后台静默安装，并在安装结束后弹窗提示用户新内容就绪。用户可以自主选择是否立即刷新查看新内容。这意味在新 SW 就绪前用户会访问旧版本网站。</p><p>如果你的文档仍在建设期，希望尽早提示用户他可能在阅读已过时的内容，你可以将其设置为 <code>&quot;hint&quot;</code>。这样用户在进入文档后数秒内就可以收到新内容已发布的通知。但这样做的负面效果是如果用户在新 SW 就绪前选择更新，那么他将在新 SW 安装并接管页面前，需要从互联网获取页面的全部资源。</p><p>如果你的文档很稳定，或者你在托管博客，不太关心用户立即接收到最新版本，你可以将其设置为 <code>&quot;disabled&quot;</code>，这意味着新的 SW 将在后台完全静默安装并在安装后等待，当旧版本 SW 控制的页面全部关闭后，新 SW 将再下次访问接管并提供用户新内容。此设置可以避免用户在访中被弹窗打扰。</p><p>如果你希望通过 SW 来加速用户在弱网或无网条件下的访问，但同时希望用户时刻访问新内容，你可以将此选项设置为 <code>&quot;force&quot;</code>。这意味着检测到新 SW 后旧 SW 将会被立刻销毁并且页面会被刷新以确保用户浏览最新内容。最大的缺点就是致新 SW 发布后，用户在重新进入网站后的几秒内会遇到预期之外的突然刷新，并且他们将必须通过互联网访问文档并完全重新安装最新的 SW。</p><h3 id="更新提示弹窗" tabindex="-1"><a class="header-anchor" href="#更新提示弹窗"><span>更新提示弹窗</span></a></h3><p>当检测到新内容 (检测到新的 SW) 时，更新提示弹窗将会出现；当新内容就绪时，更新就绪弹窗将会出现。</p><p>如果你对默认的弹窗不满意，你可以自行编写组件更换。从 <code>@vuepress/plugin-pwa/client</code> 中导入 <code>PWAFoundPopup</code> 或 <code>PWAReadyPopup</code> 并使用其 slot 来自定义弹窗内容，然后将组件路径传递给 <code>foundComponent</code> 或 <code>readyComponent</code> 选项。</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">PWAFoundPopup</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-pwa/client&#39;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">PWAFoundPopup</span><span style="color:#9CDCFE;"> v-slot</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">found</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">refresh</span><span style="color:#D4D4D4;"> }</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">div</span><span style="color:#C586C0;"> v-if</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">found</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">      已找到新内容</span></span>
<span class="line"><span style="color:#808080;">      &lt;</span><span style="color:#569CD6;">button</span><span style="color:#D4D4D4;"> @</span><span style="color:#9CDCFE;">click</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">refresh</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">刷新</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">PWAFoundPopup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">script</span><span style="color:#9CDCFE;"> setup</span><span style="color:#9CDCFE;"> lang</span><span style="color:#D4D4D4;">=</span><span style="color:#CE9178;">&quot;ts&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#C586C0;">import</span><span style="color:#D4D4D4;"> { </span><span style="color:#9CDCFE;">PWAReadyPopup</span><span style="color:#D4D4D4;"> } </span><span style="color:#C586C0;">from</span><span style="color:#CE9178;"> &#39;@vuepress/plugin-pwa/client&#39;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">script</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;</span><span style="color:#569CD6;">PWAReadyPopup</span><span style="color:#9CDCFE;"> v-slot</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#D4D4D4;">{ </span><span style="color:#9CDCFE;">isReady</span><span style="color:#D4D4D4;">, </span><span style="color:#9CDCFE;">reload</span><span style="color:#D4D4D4;"> }</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;</span><span style="color:#569CD6;">div</span><span style="color:#C586C0;"> v-if</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">isReady</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">      新内容已就绪</span></span>
<span class="line"><span style="color:#808080;">      &lt;</span><span style="color:#569CD6;">button</span><span style="color:#D4D4D4;"> @</span><span style="color:#9CDCFE;">click</span><span style="color:#D4D4D4;">=</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#9CDCFE;">reload</span><span style="color:#D4D4D4;">&quot;</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">应用</span><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">button</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">    &lt;/</span><span style="color:#569CD6;">div</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">  &lt;/</span><span style="color:#569CD6;">PWAReadyPopup</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">template</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他选项" tabindex="-1"><a class="header-anchor" href="#其他选项"><span>其他选项</span></a></h2>`,32),g=s("code",null,"generateSwConfig",-1),m=s("code",null,"workbox-build",-1),_=s("h2",{id:"相关阅读",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#相关阅读"},[s("span",null,"相关阅读")])],-1),b=s("p",null,"更多内容，请详见:",-1),C={href:"https://web.dev/progressive-web-apps/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},W={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},S=s("hr",{class:"footnotes-sep"},null,-1),P={class:"footnotes"},E={class:"footnotes-list"},A={id:"footnote1",class:"footnote-item"},w=s("p",null,[s("strong",null,"PWA 介绍")],-1),x=s("p",null,"PWA 全称 Progressive Web app，即渐进式网络应用程序，标准由 W3C 规定。",-1),q=s("p",null,"它允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。",-1),F={href:"https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps",target:"_blank",rel:"noopener noreferrer"},M=s("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),z=a('<li id="footnote2" class="footnote-item"><p><strong>Service Worker 简要介绍</strong></p><ol><li><p>Service Worker 会在注册过程中获取注册在其中的所有文件并缓存它们。</p></li><li><p>注册成功后，Service Worker 激活，并开始代理并控制你的全部请求。</p></li><li><p>每当你想要通过浏览器发起访问请求后，Service Worker 将会查看其是否存在与自身缓存列表中，若存在则直接返回缓存好的结果，否则调用自身的 fetch 方法进行获取。你可以通过自定义 fetch 方法，来完全控制网页内资源获取请求的结果，比如在离线时提供一个 fallback 的网页。</p></li><li><p>每次用户重新打开网站时，Service Worker 会向自身注册时的地址发出校验命令，如果检测到新版本的 Service Worker，则会更新自身，并开始缓存注册在新 Service Worker 中的资源列表。成功获取内容更新后，Service Worker 将会触发 <code>update</code> 事件。可以通过此事件提示用户，比如将在右下角显示一个弹出窗口，提示用户新内容可用并允许用户触发更新。</p></li></ol><a href="#footnote-ref2" class="footnote-backref">↩︎</a> <a href="#footnote-ref2:1" class="footnote-backref">↩︎</a></li>',1),L={id:"footnote3",class:"footnote-item"},N=s("p",null,[s("strong",null,"清单文件")],-1),R=s("p",null,"清单文件使用 JSON 格式，负责声明 PWA 各项信息，如名称、描述、图标、快捷动作等。",-1),T=s("p",null,"为了使你的站点能够被注册为 PWA，你需要满足 manifest 基本的规范，才能使浏览器认为该网站为一个可安装的 PWA 并允许用户安装它。",-1),B={class:"custom-container tip"},H=s("p",{class:"custom-container-title"},"提示",-1),V={href:"https://developer.mozilla.org/zh-CN/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"},O={href:"https://w3c.github.io/manifest/",target:"_blank",rel:"noopener noreferrer"},G=s("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1),I=a('<li id="footnote4" class="footnote-item"><p><strong>可安装性</strong></p><p>想要让网站可以注册为 PWA，网站需要自行成功注册有效的 Service Worker，同时拥有合法的 manifest 清单文件并在网站中声明它。</p><p>清单文件应至少包含 <code>name</code>(或 <code>short_name</code>) <code>icons</code> <code>start_url</code>。</p><p>在 Safari 中，SW 的最大缓存空间为 50 MB。 <a href="#footnote-ref4" class="footnote-backref">↩︎</a> <a href="#footnote-ref4:1" class="footnote-backref">↩︎</a></p></li><li id="footnote5" class="footnote-item"><p><strong>SSG</strong>: <strong>S</strong>tatic <strong>S</strong>ite <strong>G</strong>enerating，静态站点生成。 <a href="#footnote-ref5" class="footnote-backref">↩︎</a></p></li>',2),j={id:"footnote6",class:"footnote-item"},J=s("p",null,[s("strong",null,"SEO"),e(": "),s("strong",null,"S"),e("earch "),s("strong",null,"E"),e("ngine "),s("strong",null,"O"),e("ptimization，搜索引擎增强，")],-1),U={href:"https://mister-hope.com/code/website/html/definition/seo.html",target:"_blank",rel:"noopener noreferrer"},K=s("a",{href:"#footnote-ref6",class:"footnote-backref"},"↩︎",-1),Q=s("li",{id:"footnote7",class:"footnote-item"},[s("p",null,[s("strong",null,"SPA"),e(": "),s("strong",null,"S"),e("ingle "),s("strong",null,"P"),e("age "),s("strong",null,"A"),e("pplication, 单页应用")]),s("p",null,[e("大多只有主页，并使用 history mode 处理路由，而不是真的在页面之间导航。 "),s("a",{href:"#footnote-ref7",class:"footnote-backref"},"↩︎")])],-1);function X(Y,Z){const n=l("ExternalLinkIcon"),t=l("RouteLink");return c(),i("div",null,[f,s("p",null,[e("此插件使用 "),s("a",u,[e("workbox-build"),o(n)]),e(" 生成 Service Worker 文件，并使用 "),s("a",h,[e("register-service-worker"),o(n)]),e(" 注册 Service Worker。")]),s("div",D,[y,s("p",null,[e("如果你启用过该插件，并想要禁用它，你可能需要 "),o(t,{to:"/zh/plugins/remove-pwa.html"},{default:p(()=>[e("`@vuepress/plugin-remove-pwa")]),_:1}),e(" 来移除现有的 Service Worker 。")])]),v,s("p",null,[e("插件还提供了其他 PWA 相关选项，比如微软磁贴图标与颜色设置，苹果图标等。 如果你是一个高级用户，你也可以设置 "),g,e(" 来配置 "),m,e("。查看 "),o(t,{to:"/zh/plugins/pwa/config.html#%E9%80%89%E9%A1%B9"},{default:p(()=>[e("插件选项")]),_:1}),e(" 了解更多细节。")]),_,b,s("ul",null,[s("li",null,[s("a",C,[e("Google PWA"),o(n)])]),s("li",null,[s("a",k,[e("MDN PWA"),o(n)])]),s("li",null,[s("a",W,[e("W3C Manifest 规范"),o(n)])])]),S,s("section",P,[s("ol",E,[s("li",A,[w,x,q,s("p",null,[e("访问 "),s("a",F,[e("https://developer.mozilla.org/zh-CN/docs/Web/Progressive_web_apps"),o(n)]),e(" 查看详情。 "),M])]),z,s("li",L,[N,R,T,s("div",B,[H,s("p",null,[e("Manifest 的标准与规范，请详见 "),s("a",V,[e("MDN 网络 App 清单"),o(n)]),e(" 和 "),s("a",O,[e("W3C Manifest"),o(n)])])]),G]),I,s("li",j,[J,s("p",null,[e("详见 "),s("a",U,[e("SEO 介绍"),o(n)]),e(),K])]),Q])])])}const ss=r(d,[["render",X],["__file","guide.html.vue"]]),es=JSON.parse('{"path":"/zh/plugins/pwa/guide.html","title":"指南","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"网络 App 清单","slug":"网络-app-清单","link":"#网络-app-清单","children":[]},{"level":2,"title":"缓存控制","slug":"缓存控制","link":"#缓存控制","children":[{"level":3,"title":"默认缓存","slug":"默认缓存","link":"#默认缓存","children":[]},{"level":3,"title":"图片缓存","slug":"图片缓存","link":"#图片缓存","children":[]},{"level":3,"title":"HTML 缓存","slug":"html-缓存","link":"#html-缓存","children":[]},{"level":3,"title":"大小控制","slug":"大小控制","link":"#大小控制","children":[]}]},{"level":2,"title":"更新控制","slug":"更新控制","link":"#更新控制","children":[{"level":3,"title":"更新提示弹窗","slug":"更新提示弹窗","link":"#更新提示弹窗","children":[]}]},{"level":2,"title":"其他选项","slug":"其他选项","link":"#其他选项","children":[]},{"level":2,"title":"相关阅读","slug":"相关阅读","link":"#相关阅读","children":[]}],"git":{"updatedTime":1708368225000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2}]},"filePathRelative":"zh/plugins/pwa/guide.md"}');export{ss as comp,es as data};
