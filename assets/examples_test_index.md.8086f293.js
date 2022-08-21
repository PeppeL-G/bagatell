import{_ as n,c as e,d as p,a as s,b as l,e as o,o as t,r as c}from"./app.7b4e1434.js";const x=JSON.parse('{"title":"Test","description":"","frontmatter":{},"headers":[],"relativePath":"examples/test/index.md"}'),r={name:"examples/test/index.md"},y=s("h1",{id:"test",tabindex:"-1"},[l("Test "),s("a",{class:"header-anchor",href:"#test","aria-hidden":"true"},"#")],-1),F=s("p",null,"Don't mind about this example, it's just something we developer use while developing Bagatell and haven't had time to remove before publishing this website ^^'",-1),i=o(`<div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyApp</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">createStartPage</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">StartPage</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">StartPage</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Page</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">createGui</span><span style="color:#89DDFF;">(){</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Text</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">Hello!</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,1);function D(A,d,C,_,h,m){const a=c("ShowApp");return t(),e("div",null,[y,F,p(a,{"class-example-name":"test"}),i])}const g=n(r,[["render",D]]);export{x as __pageData,g as default};